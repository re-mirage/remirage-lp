'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

import { useRouter } from 'next/navigation';
import { Member } from '@/types/team';
import { paths } from '@/routes/paths';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import TechnologiesBadgeList from '../TechnologyBadgeList';

interface MemberCardProps {
  member: Member;
}
export default function MemberCard({ member }: MemberCardProps) {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        router.push(paths.landing.team.member(member.username))
      }}
    >
      <Card className="cursor-pointer">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="w-16 h-16 rounded-full">
            <AvatarImage src={member.avatar} alt={member.first_name} />
            <AvatarFallback>
              {member.first_name.charAt(0) + member.last_name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>
              {member.first_name} {member.last_name}
            </CardTitle>
            <CardDescription>{member.role}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <TechnologiesBadgeList technologies={member.skills} limit={3} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
