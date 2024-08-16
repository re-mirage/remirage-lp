import { User as SupabaseUser } from '@supabase/supabase-js';

export interface User extends SupabaseUser {
  first_name?: string;
  last_name?: string;
  avatar?: string;
  role?: string;
  position?: string;
}
