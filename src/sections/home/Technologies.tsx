import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SectionContainer from '@/components/containers/SectionContainer';
import Image from 'next/image';
import Stack from '@/components/containers/Stack';
import { getTechnologies } from '@/actions/home/getTechnologies';
import {
  Mail,
  Phone,
  Webcam,
  RibbonIcon,
  Smartphone,
  Globe,
  Server,
  Bot,
  Workflow,
  Database,
} from 'lucide-react';

const Icons = {
  smartphone: <Smartphone className="h-6 w-6" />,
  globe: <Globe className="h-6 w-6" />,
  server: <Server className="h-6 w-6" />,
  bot: <Bot className="h-6 w-6" />,
  workflow: <Workflow className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
};
interface TechCardProps {
  icon: keyof typeof Icons;
  title: string;
  content: string;
}

const TechCard = ({ icon, title, content }: TechCardProps) => (
  <div className="py-4 border-r border-l border-b border-white/20 relative group">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
    <div className="relative z-10">
      <div className="px-4 flex items-start mb-2">{Icons[icon]}</div>
      <h3 className="text-lg font-semibold group-hover:underline decoration-white decoration-2  border-l-2 border-transparent">
        <span className="px-4  border-l-2 border-current pl-3">{title}</span>
      </h3>
      <p className="px-4  text-gray-400">{content}</p>
    </div>
  </div>
);

export default async function TechnologiesSection() {
  const technologies = await getTechnologies();
  return (
    <SectionContainer>
      <h2 className="text-3xl font-medium text-center py-8 text-white">
        Technologies we work with
      </h2>
      <Tabs defaultValue={technologies[0].value} className="w-full">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 mb-8">
          {technologies.map((technology) => (
            <TabsTrigger key={technology.value} value={technology.value}>
              {technology.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {technologies.map((technology) => (
          <TabsContent key={technology.value} value={technology.value}>
            <div className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 items-center py-2 md:py-12 gap-4">
                {technology.techLogos.map((logo) => (
                  <Stack
                    key={logo.name}
                    direction="column"
                    spacing={3}
                    className="transform hover:scale-125 duration-300"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      className="w-16 h-16 object-contain self-center"
                      color="white"
                      height={32}
                      width={32}
                    />
                    <p className="text-center text-white">{logo.name}</p>
                  </Stack>
                ))}
              </div>
              <div className="relative overflow-x-auto">
                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black to-transparent z-10"></div>
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black to-transparent z-10"></div>
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {technology.content.map((card) => (
                    <TechCard
                      key={card.title}
                      icon={card.icon as keyof typeof Icons}
                      title={card.title}
                      content={card.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionContainer>
  );
}
