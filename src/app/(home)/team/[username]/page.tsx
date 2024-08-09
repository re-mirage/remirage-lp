import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Container from '@/layouts/home/Container';
import { notFound } from 'next/navigation';
import AnimatedDiv from '@/components/motion/animated-div';
import ProjectCard from '@/components/common/ProjectCard';
import AnimatedTitle from '@/components/motion/animated-title';
import SkillBadge from '@/components/common/SkillBadge';
import { getMember } from '@/actions/team/getMember';
import { getProjects } from '@/actions/projects/getProjetcs';
import { paths } from '@/routes/paths';

export default async function TeamMemberPage({ params }: { params: { username: string } }) {
  const member = await getMember(params.username);
  if (!member) {
    notFound();
  }
  const projects = await getProjects();
  const memberProjects = projects;

  return (
    <Container className="px-10">
      <AnimatedDiv
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center mb-8">
          <AnimatedDiv initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <Avatar className="w-32 h-32">
              <AvatarImage src={member.avatar} alt={member.first_name} />
              <AvatarFallback>{member.first_name}</AvatarFallback>
            </Avatar>
          </AnimatedDiv>
          <AnimatedTitle
            className="text-4xl font-bold mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {member.first_name} {member.last_name}
          </AnimatedTitle>
          <p className="text-xl text-gray-600">{member.role}</p>
        </div>

        <AnimatedDiv
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Bio</h2>
          <p>{member.bio}</p>
        </AnimatedDiv>

        <AnimatedDiv
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <SkillBadge
                key={index}
                variant="secondary"
                skill={skill}
                href={paths.landing.projects.root({
                  skill,
                })}
              />
            ))}
          </div>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {memberProjects.map((project, index) => (
              <AnimatedDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <ProjectCard project={project} />
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>
      </AnimatedDiv>
    </Container>
  );
}
