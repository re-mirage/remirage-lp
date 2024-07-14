import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex flex-col items-center justify-between  px-6 md:px-12 ">{children}</main>
  );
}
