import { technologies } from '@/mock/home';
import { Technology } from '@/types/home';

export async function getTechnologies(): Promise<Technology[]> {
  return technologies;
}
