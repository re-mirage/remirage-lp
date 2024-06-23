import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col px-32 mx-auto w-full  items-start justify-start my-40">
      {children}
    </div>
  );
}
