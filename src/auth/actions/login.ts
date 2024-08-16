'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../supabase/server';
import { paths } from '@/routes/paths';
import { isRedirectError } from 'next/dist/client/components/redirect';

const loginSchema = z.object({
  email: z.string().min(1, 'email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
});

interface LoginData {
  email: string;
  password: string;
}
export async function Login(data: LoginData) {
  const supabase = createClient();

  try {
    const validatedData = loginSchema.parse(data);

    const { error } = await supabase.auth.signInWithPassword(validatedData);
    if (error) {
      throw new Error(error.message);
    }

    revalidatePath('/', 'layout');
    redirect(paths.dashboard.root);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return {
        error: error.errors[0].message,
      };
    }
    if (isRedirectError(error)) {
      redirect(paths.dashboard.root);
    }
    return {
      error: error.message,
    };
  }
}
