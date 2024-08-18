import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-between w-full h-full px-4 max-w-screen-xl mx-auto',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
