import { useEffect, useState } from 'react';
import { createClient } from '../supabase/client';
import { User } from '@/types/supabase';

const supabase = createClient();

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const updateProfile = async (updates: {
    first_name?: string;
    last_name?: string;
    avatar?: string;
    role?: string;
    position?: string;
  }) => {
    if (!user) throw new Error('No user logged in');

    const { data, error } = await supabase
      .from('auth.users')
      .update(updates)
      .eq('id', user.id)
      .single();

    if (error) throw error;

    // Update the local user state with the new data
    setUser((prevUser) => ({
      ...prevUser!,
      data,
    }));

    return data;
  };

  return { user, loading, updateProfile };
}
