import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SectionContainer from '@/components/containers/SectionContainer';
import Image from 'next/image';
import Stack from '@/components/containers/Stack';
const technologies = [
  {
    value: 'mobile',
    title: 'Mobile',
    description: 'Mobile app development',
    techLogos: [
      {
        name: 'IOS',
        src: '/technologies/apple.svg',
      },
      {
        name: 'Android',
        src: '/technologies/android.svg',
      },
      {
        name: 'React Native',
        src: '/technologies/react.svg',
      },
      {
        name: 'Swift',
        src: '/technologies/swift.svg',
      },
    ],
    content: 'Mobile content',
  },
  {
    value: 'web',
    title: 'Web',
    description: 'Web development',
    techLogos: [
      {
        name: 'React',
        src: '/technologies/react.svg',
      },
      {
        name: 'Vue',
        src: '/technologies/vuejs.svg',
      },
      {
        name: 'Next JS',
        src: '/technologies/nextjs.svg',
      },
      {
        name: 'TypeScript',
        src: '/technologies/typescript.svg',
      },
    ],

    content: 'Web content',
  },
  {
    value: 'backend',
    title: 'Backend',
    description: 'Backend development',
    techLogos: [
      {
        name: 'Node JS',
        src: '/technologies/nodejs.svg',
      },
      {
        name: 'NestJs',
        src: '/technologies/nestjs.svg',
      },
      {
        name: 'Express',
        src: '/technologies/express.svg',
      },
      {
        name: 'Django',
        src: '/technologies/django.svg',
      },
      {
        name: 'Python',
        src: '/technologies/python.svg',
      },
    ],
    content: 'Backend content',
  },
  {
    value: 'devops',
    title: 'DevOps',
    description: 'DevOps practices',

    techLogos: [
      {
        name: 'Docker',
        src: '/technologies/docker.svg',
      },
      {
        name: 'Kubernetes',
        src: '/technologies/kubernets.svg',
      },
      {
        name: 'Jenkins',
        src: '/technologies/jenkins.svg',
      },
      {
        name: 'Github Actions',
        src: '/technologies/github-actions.svg',
      },
    ],

    content: 'DevOps content',
  },
  {
    value: 'ml',
    title: 'Machine Learning',
    description: 'Machine Learning solutions',
    techLogos: [
      {
        name: 'TensorFlow',
        src: '/technologies/tensorflow.svg',
      },
      {
        name: 'PyTorch',
        src: '/technologies/pytorch.svg',
      },
      {
        name: 'Pandas',
        src: '/technologies/pandas.svg',
      },
    ],
    content: 'ML content',
  },
  {
    value: 'db',
    title: 'Database',
    description: 'Database solutions',
    techLogos: [
      {
        name: 'PostgreSQL',
        src: '/technologies/postgresql.svg',
      },
      {
        name: 'MongoDB',
        src: '/technologies/mongodb.svg',
      },
      {
        name: 'MySQL',
        src: '/technologies/mysql.svg',
      },
      {
        name: 'SQLite',
        src: '/technologies/sqlite.svg',
      },
      {
        name: 'Neo4j',
        src: '/technologies/neo4j.svg',
      },
    ],
    content: 'Database content',
  },
];

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  isFirst: boolean;
  isLast: boolean;
  isLeftmost: boolean;
  isRightmost: boolean;
}
const TechCard = ({
  icon,
  title,
  content,
  isFirst,
  isLast,
  isLeftmost,
  isRightmost,
}: TechCardProps) => (
  <div
    className={`
    relative p-4
    ${isFirst ? 'border-t' : ''}
    ${isLast ? 'border-b' : ''}
    ${isLeftmost ? 'border-l' : ''}
    ${isRightmost ? 'border-r' : ''}
    border-gray-200
  `}
  >
    <div className="absolute inset-0 pointer-events-none">
      {!isLeftmost && (
        <div className="h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent absolute left-0" />
      )}
      {!isRightmost && (
        <div className="h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent absolute right-0" />
      )}
    </div>
    <div className="flex items-start mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p>{content}</p>
  </div>
);

export default function Technologies() {
  return (
    <SectionContainer>
      <h2 className="text-3xl font-medium text-center py-8 text-white">
        Technologies we work with
      </h2>
      <Tabs defaultValue={technologies[0].value} className="w-full">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 mb-8">
          {technologies.map((technology) => (
            <TabsTrigger key={technology.value} value={technology.value}>
              {technology.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {technologies.map((technology) => (
          <TabsContent key={technology.value} value={technology.value}>
            <div className="space-y-8">
              <div className="grid grid-cols-4 align-items-center  md:flex md:justify-around  py-2 md:py-12">
                {technology.techLogos.map((logo) => (
                  <Stack key={logo.name} direction="column" spacing={3}>
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      className="w-16 h-16 object-contain  self-center"
                      color="white"
                      height={32}
                      width={32}
                    />
                    <p className="text-center text-white">{logo.name}</p>
                  </Stack>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px ">
                {[1, 2, 3, 4].map((index) => (
                  <TechCard
                    key={index}
                    icon={<span className="text-2xl">🚀</span>}
                    title={`Tech ${index}`}
                    content={`Description for Tech ${index}`}
                    isFirst={index <= 4}
                    isLast={index > 4}
                    isLeftmost={index % 4 === 1}
                    isRightmost={index % 4 === 0}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionContainer>
  );
}
