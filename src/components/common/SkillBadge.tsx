import React from 'react';
import { Badge, BadgeProps } from '../ui/badge';
import Link from 'next/link';
interface SkillBadgeProps extends BadgeProps {
  skill: string;
  href: string;
}
export default function SkillBadge({ skill, href }: SkillBadgeProps) {
  return (
    <Link href={href}>
      <Badge variant="secondary">{skill}</Badge>
    </Link>
  );
}
