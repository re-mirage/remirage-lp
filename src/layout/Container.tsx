import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">{children}</main>
  );
}
