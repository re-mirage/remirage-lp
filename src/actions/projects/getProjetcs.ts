import projects from '@/mock/projects';
import { Project } from '@/types/project';

export async function getProjects(): Promise<Project[]> {
  return projects;
}
