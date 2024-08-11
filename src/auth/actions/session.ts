'use server';
import { createClient } from '../supabase/server';

export async function Session() {
  const supabase = createClient();

  const { error, data } = await supabase.auth.getSession();
  if (error) {
    return {
      error: error?.message,
    };
  }

  return data;
}
