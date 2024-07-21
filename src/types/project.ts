import { Member } from './team';

export interface Project {
  id: string;
  title: string;
  description?: string;
  images: string[];
  thumbnail: string;
  url?: string;
  technologies: string[];
  team: Member[];
  category: string[];
  reviews?: Review[];
}

interface Review {
  author: string;
  content: string;
}
