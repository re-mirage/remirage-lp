"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SectionContainer from '@/components/containers/SectionContainer';
import {
  FaMobile,
  FaGlobe,
  FaServer,
  FaRobot,
  FaCogs,
  FaDatabase,
  FaChartBar,
  FaShieldAlt,
  FaCode,
  FaCloud,
  FaAws
} from 'react-icons/fa';
import {
  SiReact,
  SiAndroid,
  SiApple,
  SiSwift,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiDjango,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiNeo4J,
  SiVercel,
  SiExpo,
  SiKotlin,
  SiHtml5,
  SiShadcnui,
  SiMui,
  SiTailwindcss,
  SiCss3,
  SiAngular,
  SiSass,
  SiWebassembly,
  SiGraphql,
  SiTerraform,
  SiRust,
  SiElasticsearch,
  SiWireshark,
  SiMetasploit,
  SiKalilinux,
  SiBurpsuite,
} from 'react-icons/si';
import { IconType } from 'react-icons/lib';
import { Technology } from '@/types/home';



const technologies = [
  {
    value: 'mobile',
    title: 'Mobile Solutions',
    description: 'Cutting-edge mobile app development',
    icon: FaMobile,
    techLogos: [
      { name: 'iOS', icon: SiApple },
      { name: 'Android', icon: SiAndroid },
      { name: 'React Native', icon: SiReact },
      { name: 'Expo', icon: SiExpo },
      { name: 'Swift', icon: SiSwift },
      { name: 'Kotlin', icon: SiKotlin },
    ],
    content: [
      {
        title: 'Cross-Platform Excellence',
        description: "Develop apps that work seamlessly on both iOS and Android, maximizing your market reach.",
        icon: FaMobile
      },
      {
        title: 'Native Performance',
        description: "Harness the full power of device capabilities with native app development for unparalleled performance.",
        icon: FaMobile
      },
      {
        title: 'Innovative UI/UX',
        description: "Create intuitive, engaging mobile interfaces that keep users coming back for more.",
        icon: FaMobile
      },
    ],
  },
  {
    value: 'web',
    title: 'Web Development',
    description: 'Powerful, responsive web applications',
    icon: FaGlobe,
    techLogos: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: "Angular", icon: SiAngular },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Shadcnui', icon: SiShadcnui },
      { name: "Material UI", icon: SiMui },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: 'Sass', icon: SiSass },
      { name: "HTML5", icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: "WebAssembly", icon: SiWebassembly },
    ],
    content: [
      {
        title: 'Dynamic Single Page Apps',
        description: "Build lightning-fast, interactive web applications that provide a seamless user experience.",
        icon: FaGlobe
      },
      {
        title: 'Progressive Web Apps',
        description: "Develop web apps that work offline and feel like native apps, combining the best of both worlds.",
        icon: FaGlobe
      },
      {
        title: 'Responsive Design',
        description: "Ensure your web presence looks and works great on all devices, from phones to desktops.",
        icon: FaGlobe
      },
    ],
  },
  {
    value: 'backend',
    title: 'Backend Development',
    description: 'Robust server-side solutions',
    icon: FaServer,
    techLogos: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Rust', icon: SiRust },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
      { name: 'Express', icon: SiExpress },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Django', icon: SiDjango },
      { name: 'GraphQL', icon: SiGraphql },

    ],
    content: [
      {
        title: 'Scalable Microservices',
        description: "Design and implement flexible, scalable backend architectures to support growing businesses.",
        icon: FaServer
      },
      {
        title: 'Real-time Processing',
        description: "Build systems capable of handling real-time data processing for immediate insights and actions.",
        icon: FaServer
      },
      {
        title: 'API Development',
        description: "Create robust, well-documented APIs that enable seamless integration with various platforms and services.",
        icon: FaServer
      },
    ],
  },
  {
    value: 'devops',
    title: 'DevOps & Cloud',
    description: 'Streamlined deployment and operations',
    icon: FaCogs,
    techLogos: [
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Github Actions', icon: SiGithubactions },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Terraform', icon: SiTerraform },
    ],
    content: [
      {
        title: 'Continuous Integration/Deployment',
        description: "Implement CI/CD pipelines for faster, more reliable software delivery and updates.",
        icon: FaCogs
      },
      {
        title: 'Cloud-Native Solutions',
        description: "Leverage the full potential of cloud platforms for scalability, reliability, and cost-efficiency.",
        icon: FaCloud
      },
      {
        title: 'Infrastructure as Code',
        description: "Automate infrastructure provisioning and management for consistent, reproducible environments.",
        icon: FaCode
      },
    ],
  },
  {
    value: 'data',
    title: 'Data & Analytics',
    description: 'Unlock the power of your data',
    icon: FaDatabase,
    techLogos: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Neo4j', icon: SiNeo4J },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Pandas', icon: SiPandas },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Elasticsearch', icon: SiElasticsearch },
    ],
    content: [
      {
        title: 'Big Data Processing',
        description: "Handle and analyze large-scale datasets to extract valuable business insights.",
        icon: FaDatabase
      },
      {
        title: 'Business Intelligence Dashboards',
        description: "Create interactive, real-time dashboards for data-driven decision making.",
        icon: FaChartBar
      },
      {
        title: 'Predictive Analytics',
        description: "Implement machine learning models to forecast trends and inform strategic planning.",
        icon: FaRobot
      },
    ],
  },
  {
    value: 'security',
    title: 'Cybersecurity',
    description: 'Protect your digital assets',
    icon: FaShieldAlt,
    techLogos: [
      { name: 'Wireshark', icon: SiWireshark },
      { name: 'Metasploit', icon: SiMetasploit },
      { name: 'Kali Linux', icon: SiKalilinux },
      { name: 'Burp Suite', icon: SiBurpsuite },
    ],
    content: [
      {
        title: 'Secure Development Practices',
        description: "Implement security-first development methodologies to build robust, hack-resistant systems.",
        icon: FaShieldAlt
      },
      {
        title: 'Encryption & Data Protection',
        description: "Ensure the confidentiality and integrity of your sensitive data with state-of-the-art encryption.",
        icon: FaShieldAlt
      },
      {
        title: 'Security Audits & Compliance',
        description: "Conduct thorough security assessments and ensure compliance with industry standards and regulations.",
        icon: FaShieldAlt
      },
    ],
  },
];


interface TechCardProps {
  Icon: IconType;
  title: string;
  content: string;
}

const TechCard = ({ Icon, title, content }: TechCardProps) => {
  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >

      <Icon className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  );
};

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState<Technology['value']>('mobile');


  return (
    <SectionContainer>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center py-12 text-white"
      >
        Technologies We Work With
      </motion.h2>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="justify-center gap-4 mb-12 grid grid-cols-3 md:grid-cols-6">
          {technologies.map((technology) => {
            const Icon = technology.icon;
            return (
              <TabsTrigger key={technology.title} value={technology.value} className="flex flex-col rounded-lg text-sm font-medium transition-all duration-200 ease-in-out  hover:bg-gray-700 text-white">
                <Icon className="w-8 h-8 text-primary" />
                <span className="mt-2 text-xs">{technology.title}</span>
              </TabsTrigger>


            )
          })}
        </TabsList>
        <AnimatePresence mode="wait">
          {technologies.map((technology) => (
            <TabsContent key={technology.value} value={technology.value}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12  "
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center ">
                  {technology.techLogos.map((logo) => {
                    const TechIcon = logo.icon || FaGlobe;
                    return (
                      <motion.div
                        key={logo.name}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col justify-center items-center"
                        title={logo.name}
                      >
                        <TechIcon className="w-16 h-16 text-primary mb-2" />
                        <p className="text-center text-white text-sm">{logo.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technology.content.map((card) => (
                    <TechCard
                      key={card.title}
                      Icon={card.icon}
                      title={card.title}
                      content={card.description}
                    />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>
    </SectionContainer>
  );
}