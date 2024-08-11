'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../supabase/server';
import { paths } from '@/routes/paths';

export async function Logout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  if (error) {
    return {
      error: error?.message,
    };
  }

  revalidatePath('/', 'layout');
  redirect(paths.auth.login);
}
