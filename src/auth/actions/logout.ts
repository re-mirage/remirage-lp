'use server';
import { signOut } from '@/auth';
import { paths } from '@/routes/paths';

export default async function logout() {
  await signOut({
    redirect: true,
    redirectTo: paths.auth.login,
  });
  return null;
}
