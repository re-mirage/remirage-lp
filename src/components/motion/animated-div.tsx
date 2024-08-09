'use client';
import React from 'react';
import { motion, HTMLMotionProps, ForwardRefComponent } from 'framer-motion';

interface AnimatedTeamMemberProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

export default function AnimatedDiv({ children, ...props }: AnimatedTeamMemberProps) {
  return <motion.div {...props}>{children}</motion.div>;
}
