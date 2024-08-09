import { team } from '@/mock/team';
import { Member } from '@/types/team';

export async function getTeam(): Promise<Member[]> {
  return team;
}
