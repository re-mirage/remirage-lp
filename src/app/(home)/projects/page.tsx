import React from 'react';

// import projects from '@/mock/projects';
import ProjectsList, { ProjectListQueryParams } from '@/sections/projects/ProjectsList';
import { getTeam } from '@/actions/team/getTeam';
import { getProjects } from '@/actions/projects/getProjetcs';
import PageHeading from '@/components/PageHeading';
import Container from '@/layouts/home/Container';


export default async function ProjectsPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: {
    [key: string]: string
  };
}) {
  const team = await getTeam();
  const projects = await getProjects({
    search: searchParams?.search,
    tech: searchParams?.tech,
    team: searchParams?.team,
    category: searchParams?.category,

  });
  return (

    <Container className="py-16 px-6 md:px:10 lg:px-12">
      <PageHeading>Team Projects Overview</PageHeading>

      <ProjectsList projects={projects}
        team={team}

      />
    </Container>
  );
}
