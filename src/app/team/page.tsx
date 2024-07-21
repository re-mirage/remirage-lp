import React from 'react';
import Container from '@/layout/Container';
import AnimatedTitle from '@/components/motion/animated-title';
import AnimatedDiv from '@/components/motion/animated-div';
import { getTeam } from '@/actions/team/getTeam';
import MemberCard from '@/components/common/MemberCard';

export default async function TeamPage() {
  const team = await getTeam();
  return (
    <Container>
      <div className="py-12">
        <AnimatedTitle
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Team
        </AnimatedTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <AnimatedDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MemberCard member={member} />
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </Container>
  );
}
