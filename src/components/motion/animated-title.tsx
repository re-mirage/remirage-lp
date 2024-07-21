'use client';
import React from 'react';
import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion';

interface AnimatedTitleProps extends HTMLMotionProps<'h1'> {
  children: React.ReactNode;
}
export default function AnimatedTitle({ children, ...props }: AnimatedTitleProps) {
  return <motion.h1 {...props}>{children}</motion.h1>;
}
