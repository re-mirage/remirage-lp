import projects from '@/mock/projects';
import { Project } from '@/types/project';

interface GetProjectsParams {
  search?: string;
  tech?: string;
  team?: string;
  category?: string;
}
export async function getProjects(query: GetProjectsParams): Promise<Project[]> {
  const { search, tech, team, category } = query;
  const result = projects.filter((project) => {
    if (search && !project.title.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (tech && !project.technologies.includes(tech as any)) {
      return false;
    }
    if (team && !project.team.some((member) => member.username === team)) {
      return false;
    }
    if (category && !project.category.includes(category)) {
      return false;
    }
    return true;
  });
  return result;
}
