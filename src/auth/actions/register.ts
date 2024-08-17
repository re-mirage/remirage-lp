'use server';

import { createClient } from '../supabase/server';
import { MemberFormData } from '@/validations/createMember';

export async function Register(user: MemberFormData) {
  const supabase = createClient();

  // Sign up the user
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      data: {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        role: user.role,
        skills: user.skills,
        bio: user.bio,
        rate: user.rate,
        avatar_url: user.avatar_url,
        position: user.position,
      },
    },
  });

  if (authError) {
    console.error('Auth error:', authError);
    return { error: authError.message };
  }

  if (!authData.user) {
    console.error('User not created');
    return { error: 'User not created' };
  }

  console.log('User created successfully:', authData.user.id);
  return { success: true, userId: authData.user.id };
}
