import { Technology } from '@/types/home';
import { Mail } from 'lucide-react';

const description =
  'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
export const technologies: Technology[] = [
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
    content: new Array(3).fill(null).map((_, index) => ({
      title: `Mobile content ${index + 1}`,
      description: description,
      icon: 'mobile',
    })),
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

    content: new Array(3).fill(null).map((_, index) => ({
      title: `Web content ${index + 1}`,
      description: description,
      icon: 'globe',
    })),
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
    content: new Array(3).fill(null).map((_, index) => ({
      title: `Backend content ${index + 1}`,
      description: description,
      icon: 'server',
    })),
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

    content: new Array(3).fill(null).map((_, index) => ({
      title: `Devops content ${index + 1}`,
      description: description,
      icon: 'workflow',
    })),
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
    content: new Array(3).fill(null).map((_, index) => ({
      title: `Machine Learning content ${index + 1}`,
      description: description,
      icon: 'bot',
    })),
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
    content: new Array(3).fill(null).map((_, index) => ({
      title: `Database content ${index + 1}`,
      description: description,
      icon: 'database',
    })),
  },
];
