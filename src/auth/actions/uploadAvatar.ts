'use server';
import { createClient } from '../supabase/server';

export async function uploadAvatar(file: File) {
  const supabase = createClient();
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `avatars/${fileName}`;

  const { error } = await supabase.storage.from('avatars').upload(filePath, file);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);

  return data.publicUrl;
}
