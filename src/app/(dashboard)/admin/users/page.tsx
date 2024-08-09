import Container from '@/layouts/dashboard/Container';
import MembersTable from '@/sections/dashboard/MembersTable';
import { Member, Role } from '@/types/team';
import CreateMember from '@/sections/dashboard/members/CreateMember';

const generateMockMembers = (count: number): Member[] => {
  const skills = ['React', 'Node.js', 'Python', 'UI/UX', 'AWS', 'Docker', 'Kubernetes'];

  return Array.from({ length: count }, (_, i) => ({
    username: `user${i + 1}`,
    email: `user${i + 1}@example.com`,
    first_name: `First${i + 1}`,
    last_name: `Last${i + 1}`,
    role: [Role.ADMIN],
    avatar: `/api/placeholder/32/32`,
    position: 'Senior Developer',
    skills: [
      skills[Math.floor(Math.random() * skills.length)],
      skills[Math.floor(Math.random() * skills.length)],
    ],
    bio: `Experienced professional with ${Math.floor(Math.random() * 10) + 1} years of experience`,
    rate: Math.floor(Math.random() * 100) + 50,
    created_at: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
    updated_at: new Date(Date.now() - Math.floor(Math.random() * 1000000000)),
  }));
};

const MembersPage: React.FC = () => {
  const members = generateMockMembers(20);

  return (
    <Container title="Members" breadcrumbs={[{ label: 'Members' }]} actions={<CreateMember />}>
      <MembersTable members={members} />
    </Container>
  );
};

export default MembersPage;
