import projects from '@/mock/projects';
import { Project } from '@/types/project';

export async function getProject(id: string): Promise<Project | null> {
  const project = projects.find((p) => p.id === id);
  return project || null;
}
