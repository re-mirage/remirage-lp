import { Project } from '@/types/project';
import { team } from './team';

const projects: Project[] = [
  {
    id: '1',
    title: 'Egaliti ',
    description:
      'The  mobile app is designed to provide users with a comprehensive banking solution, allowing them to open international accounts, receive money, make payments, and convert currency all within one easy-to-use platform. The app is regulated by the Financial Conduct Authority (FCA) in London, providing users with a secure and reliable banking experience.',
    category: ['Mobile Development', 'Web App'],
    images: ['/projects/egaliti/1.png', '/projects/egaliti/2.png', '/projects/egaliti/3.png'],
    thumbnail: '/projects/egaliti/thumbnail.jpg',
    technologies: ['Node.js', 'Neo4j', 'Amazon S3', 'MQTT', 'React Native', 'Serverless Stack'],
    team: [team[0], team[1]],
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Built a scalable e-commerce platform using React and Node.js',
    category: ['Natural Language Processing', 'Task Automation', '24/7 Availability'],
    images: ['/projects/default.png', '/projects/default.png'],
    thumbnail: '/projects/default.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    team: [team[0], team[1], team[2], team[3]],
  },
  {
    id: '3',
    title: 'AI Chatbot',
    description: 'Developed an AI-powered chatbot using natural language processing',
    category: ['Natural Language Processing', 'Task Automation', '24/7 Availability'],
    images: ['/projects/default.png', '/projects/default.png'],
    thumbnail: '/projects/default.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    team: [team[0], team[1], team[2], team[3]],
  },
];

export default projects;
