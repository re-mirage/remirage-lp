'use server';
import { createClient } from '../supabase/server';

export async function downloadFile(filePath: string) {
  const supabase = createClient();
  const { data, error } = await supabase.storage.from('avatars').download(filePath);

  if (error) {
    throw error;
  }

  return data;
}
