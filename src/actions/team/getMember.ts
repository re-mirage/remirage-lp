import { team } from '@/mock/team';
import { Member } from '@/types/team';

export async function getMember(username: string): Promise<Member | null> {
  const member = team.find((p) => p.username === username);
  if (!member) return null;

  return member;
}
