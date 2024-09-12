import React from 'react';
import Container from '@/layouts/home/Container';
import { notFound } from 'next/navigation';
import { getMember } from '@/actions/team/getMember';
import { getProjects } from '@/actions/projects/getProjetcs';
import MemberProfile from '@/sections/team/MemberProfile';




export default async function TeamMemberPage({ params }: { params: { username: string } }) {
  const member = await getMember(params.username);
  if (!member) {
    notFound();
  }
  const projects = await getProjects();
  const memberProjects = projects.filter(project => project.team.some(m => m.username === member.username));

  return (
    <Container className="px-4 sm:px-6 lg:px-8 py-16">
      <MemberProfile member={member} projects={memberProjects} />
    </Container>
  );
}