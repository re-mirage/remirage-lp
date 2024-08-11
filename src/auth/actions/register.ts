'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../supabase/server';
import { MemberFormData } from '@/validations/createMember';

export async function Register(user: MemberFormData) {
  const supabase = createClient();
  const data = {
    email: user.email,
    password: user.password,
  };
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: user.password,
  });

  if (error) {
    return {
      error: error?.message,
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
