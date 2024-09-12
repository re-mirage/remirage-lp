import { Member, Role } from '@/types/team';

const team: Member[] = [
  {
    username: 'simo',
    email: 'demo@demo.com',
    first_name: 'MOHAMED',
    last_name: 'EL BSSIR',
    role: [Role.DEVELOPER],
    position: 'Senior Developer',
    avatar: '/team/elbssir.jpg',
    skills: ['React', 'Node.js', 'TypeScript', 'NextJs', 'AWS'],
    bio: ' Mohamed is a seasoned developer with over 10 years of experience in web development...',
    rate: 10,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    username: 'brahim',
    email: 'demo@demo.com',
    first_name: 'Brahim',
    last_name: 'EL Mimouni',
    role: [Role.DEVELOPER],
    position: 'Senior Developer',
    avatar: '/team/brahim.jpg',
    skills: ['React', 'Node.js', 'TypeScript', 'NextJs', 'AWS'],
    bio: 'Brahim is a seasoned developer with over 10 years of experience in web development...',
    rate: 10,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export { team };
