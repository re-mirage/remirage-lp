import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <main className={cn('flex flex-col items-center justify-between', className)} {...props}>
      {children}
    </main>
  );
}
