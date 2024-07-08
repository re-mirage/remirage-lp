'use client';

import SectionContainer from '@/components/containers/SectionContainer';
import { ContentTabs } from '@/components/tabs/ContentTabs';
import Image from 'next/image';

export default function Examples() {
  const tabs = [
    {
      title: 'Your Reliable Partner',
      description:
        'Our experienced team guides you from ideas to implementation, leveraging our expertise to provide the best solutions for your needs.',
      value: 'product',
      content: <TabContent title="Your Reliable Partner" imageSrc="/projects/egaliti-mlro.png" />,
    },
    {
      title: 'Your Technology Specialists',
      description:
        'Our skilled professionals deliver customized, scalable, and quality IT solutions, ensuring you receive services as per your requirements.',
      value: 'services',
      content: (
        <TabContent title="Your Technology Specialists" imageSrc="/projects/egaliti-mlro.png" />
      ),
    },
    {
      title: 'Your Global Delivery Workforce',
      description:
        'We offer maintenance, customization and application development services both onsite and offsite.',
      value: 'playground',
      content: (
        <TabContent title="Your Global Delivery Workforce" imageSrc="/projects/egaliti-mlro.png" />
      ),
    },
  ];

  return (
    <SectionContainer>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="relative">
        <ContentTabs tabs={tabs} contentClassName="mt-8" />
      </div>
    </SectionContainer>
  );
}

interface TabContentProps {
  title: string;
  imageSrc: string;
}

const TabContent = ({ title, imageSrc }: TabContentProps) => {
  return (
    <div className="w-full rounded-2xl p-6 md:p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900 overflow-hidden">
      <h3 className="text-xl md:text-3xl font-bold mb-6">{title}</h3>
      <div className="relative w-full aspect-video">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-3xl" />
      </div>
    </div>
  );
};
