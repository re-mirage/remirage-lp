export enum Role {
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
  SUPPORT = 'SUPPORT',
}
export interface Member {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  role: Role[];
  position: string;
  rate: number;
  avatar: string;
  skills: string[];
  bio: string;
  // projects: string[];
  created_at: Date;
  updated_at: Date;
}
