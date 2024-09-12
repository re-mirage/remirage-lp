import { Member } from './team';

export interface Project {
  id: string;
  title: string;
  description?: string;
  logo: string;
  images: string[];
  thumbnail: string;
  url: string;
  technologies: string[];
  team: Member[];
  category: string[];
  reviews?: Review[];
  created_at?: Date;
  updated_at?: Date;
}

interface Review {
  author: string;
  content: string;
}
