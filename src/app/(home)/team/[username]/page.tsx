import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Container from '@/layouts/home/Container';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/common/ProjectCard';
import SkillBadge from '@/components/common/SkillBadge';
import { getMember } from '@/actions/team/getMember';
import { getProjects } from '@/actions/projects/getProjetcs';
import { paths } from '@/routes/paths';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import AnimatedDiv from '@/components/motion/animated-div';
import AnimatedTitle from '@/components/motion/animated-title';



interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ size: number }>;
}
const SocialLink = ({ href, icon: Icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-primary transition-colors duration-200"
  >
    <Icon size={24} />
  </a>
);

export default async function TeamMemberPage({ params }: { params: { username: string } }) {
  const member = await getMember(params.username);
  if (!member) {
    notFound();
  }
  const projects = await getProjects();
  const memberProjects = projects.filter(project => project.team.some(m => m.username === member.username));

  return (
    <Container className="px-4 sm:px-6 lg:px-8 py-16">
      <AnimatedDiv
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center mb-12">
          <AnimatedDiv
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-6 md:mb-0 md:mr-8"
          >
            <Avatar className="w-48 h-48 border-4 border-primary shadow-lg">
              <AvatarImage src={member.avatar} alt={member.first_name} />
              <AvatarFallback>{member.first_name[0]}{member.last_name[0]}</AvatarFallback>
            </Avatar>
          </AnimatedDiv>
          <div className="text-center md:text-left">
            <AnimatedTitle
              className="text-4xl sm:text-5xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {member.first_name} {member.last_name}
            </AnimatedTitle>
            <AnimatedTitle
              className="text-xl text-gray-600 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {member.position}
            </AnimatedTitle>
            <AnimatedDiv
              className="flex justify-center md:justify-start space-x-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SocialLink href={`mailto:${member.email}`} icon={FaEnvelope} />
              <SocialLink href="#" icon={FaLinkedin} />
              <SocialLink href="#" icon={FaGithub} />
              <SocialLink href="#" icon={FaTwitter} />
            </AnimatedDiv>
          </div>
        </div>

        <AnimatedDiv
          className="mb-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{member.bio}</p>
        </AnimatedDiv>

        <AnimatedDiv
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <AnimatedDiv
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              >
                <SkillBadge
                  variant="secondary"
                  skill={skill}
                  href={paths.landing.projects.root({
                    skill,
                  })}
                />
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {memberProjects.map((project, index) => (
              <AnimatedDiv
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
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