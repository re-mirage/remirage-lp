import React from 'react';

import projects from '@/mock/projects';
import { ProjectsList } from '@/sections/projects/ProjectsList';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default async function ProjectsPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string };
}) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        <ProjectsList initialProjects={projects} />
      </div>
    </div>
  );
}
