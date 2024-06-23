import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="h-[20rem] md:h-[40rem]  relative b flex flex-col px-4 sm:px-32 mx-auto w-full  items-center justify-center py-40">
      {children}
    </div>
  );
}
