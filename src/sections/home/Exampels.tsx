'use client';

import { Tabs } from '@/components/Tabs';
import SectionContainer from '@/components/containers/SectionContainer';
import Image from 'next/image';

export default function Examples() {
  const tabs = [
    {
      title: 'Your Reliable Partner',
      description:
        'Our experienced team guides you from ideas to implementation, leveraging our expertise to provide the best solutions for your needs.',
      value: 'product',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Your Reliable Partner</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Your Technology Specialists',
      description:
        'Our skilled professionals deliver customized, scalable, and quality IT solutions, ensuring your receive services as per your requirements.',
      value: 'services',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Your Technology Specialists</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Your Global Delivery Workforce',
      description:
        'We offer maintenance, customization and application development services both onsite and offsite.',
      value: 'playground',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Your Global Delivery Workforce</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <SectionContainer>
      <Tabs tabs={tabs} />
    </SectionContainer>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/projects/egaliti-mlro.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
