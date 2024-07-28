'use server';

import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { paths } from '@/routes/paths';
import { z } from 'zod';
import { isRedirectError } from 'next/dist/client/components/redirect';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginProps = z.infer<typeof loginSchema>;

export default async function login(
  options: LoginProps
): Promise<{ success: boolean } | { error: string }> {
  const { data, success, error: ZError } = loginSchema.safeParse(options);
  if (!success || !data) {
    const errors = ZError.errors.map((e) => e.message);
    return { error: errors.join(', ') };
  }
  try {
    const result = await signIn('credentials', {
      ...data,
    });
    return { success: true };
  } catch (error) {
    if (isRedirectError(error)) {
      redirect(paths.dashboard.root);
    }
    if (error instanceof AuthError) {
      if (error.cause?.err instanceof Error) {
        console.error({ loginError: error.cause?.err.message });

        return { error: error.cause.err.message };
      }
    }
    return {
      error: 'Something went wrong!',
    };
  }
}
