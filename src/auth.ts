import NextAuth, { User, NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { paths, ROOTS } from './routes/paths';

const username = 'demo@demo.com';
const password = 'demo';
const authConfig: NextAuthConfig = {
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' },
      },
      authorize: async (credentials): Promise<User | null> => {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Username and password are required');
        }

        try {
          if (credentials.username !== username || credentials.password !== password) {
            console.log('here');
            throw new Error('Incorrect password');
          }
          const user: User = {
            email: username,
            name: 'Remirage',
            image: 'https://github.com/amcinox.png',
          };

          return user;
        } catch (e) {
          console.log({ e });
          throw new Error('Invalid username or password');
        }
      },
    }),
  ],
  pages: {
    signIn: paths.auth.login,
  },
  callbacks: {},
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);

export async function authMiddleware(request: NextRequest) {
  const session = await auth();
  console.log({ session });
  const url = request.nextUrl;
  const isAuthPage = url.pathname.startsWith(ROOTS.AUTH);
  const isAdmingPage = url.pathname.startsWith(ROOTS.DASHBOARD);

  if (isAdmingPage) {
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
