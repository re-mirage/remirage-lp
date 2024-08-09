import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { paths, ROOTS } from './routes/paths';
import crypto from 'crypto';

interface CustomUser {
  username: string;
  email: string;
  name: string;
  first_name: string;
  last_name: string;
  avatar: string;
  skills: string[];
  bio: string;
  rate: number;
  created_at: Date;
  updated_at: Date;
}

declare module 'next-auth' {
  interface Session {
    user: CustomUser;
  }
}

const mockDatabase = [
  {
    username: 'demo@demo.com',
    email: 'demo@demo.com',
    first_name: 'Mohamed',
    last_name: 'EL BSSIR',
    name: 'Remirage',
    avatar: 'https://github.com/amcinox.png',
    skills: ['NextJS', 'React'],
    bio: 'Example',
    rate: 20,
    salt: 'fK8xP3mQ9r',
    password: 'f9db03902050165d8fad61c12a0cf209f8281ee09dddde33938d6f94450f8978',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

function hashPassword(password: string, salt: string): string {
  const hash = crypto.createHmac('sha256', salt);
  hash.update(password);
  return hash.digest('hex');
}

const authConfig: NextAuthConfig = {
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      authorize: async (credentials): Promise<Omit<CustomUser, 'salt' | 'password'> | null> => {
        console.log({ credentials });
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        const user = mockDatabase.find((u) => u.email === credentials.email);

        if (!user) {
          throw new Error('User does not exist');
        }

        const hashedInputPassword = hashPassword(credentials.password as string, user.salt);
        console.log({ hashedInputPassword });

        if (hashedInputPassword !== user.password) {
          throw new Error('Incorrect password');
        }

        const { salt, password, ...safeUser } = user;
        return safeUser;
      },
    }),
  ],
  pages: {
    signIn: paths.auth.login,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user as CustomUser;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user as any;
      return session;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);

export async function authMiddleware(request: NextRequest) {
  const session = await auth();
  const url = request.nextUrl;
  const isAuthPage = url.pathname.startsWith(ROOTS.AUTH);
  const isAdminPage = url.pathname.startsWith(ROOTS.DASHBOARD);

  if (isAdminPage) {
    if (!session) {
      return NextResponse.redirect(new URL(paths.auth.login, request.url));
    }
    return NextResponse.next();
  }

  if (isAuthPage) {
    if (session) {
      return NextResponse.redirect(new URL(ROOTS.DASHBOARD, request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}
