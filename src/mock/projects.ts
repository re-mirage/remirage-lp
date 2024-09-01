import { Project } from '@/types/project';
import { team } from './team';

export enum Technology {
  React = 'React.js',
  ReactNative = 'React Native',
  Express = 'Express.js',
  NextJS = 'Next.js',
  AWS = 'AWS',
  Neo4j = 'Neo4j',
  MongoDB = 'MongoDB',
  NodeJS = 'Node.js',
  TypeScript = 'TypeScript',
  Vercel = 'Vercel',
  WebSocket = 'WebSocket',
  ServerlessStack = 'Serverless Stack',
  AmazonS3 = 'Amazon S3',
  MQTT = 'MQTT',
  Deno = 'Deno',
  expo = 'expo',
  Ethereum = 'Ethereum',
  Solidity = 'Solidity'

}

export enum Category {
  Mobile = 'Mobile',
  Web = 'Web',
  backend = 'Backend',
  serverless = 'Serverless',
  AI = 'AI',
  Crypto = 'Crypto'


}


const projects: Project[] = [
  {
    id: '1',
    title: 'Advancia',
    description:
      'Advancia is a cutting-edge salary advance service that empowers employees with financial control and provides powerful management tools for employers. The platform offers on-demand advances, multi-platform support, intelligent payroll management, and financial guidance, all while prioritizing security and compliance.',
    category: [Category.Mobile, Category.Web, Category.backend, Category.serverless],
    images: [
      '/projects/advancia/1.png',
      '/projects/advancia/2.png',
      '/projects/advancia/3.png',
      '/projects/advancia/4.png',
      '/projects/advancia/5.png',
      '/projects/advancia/6.png',
      '/projects/mobile-1.png',
      '/projects/mobile-2.png'],
    thumbnail: '/projects/advancia/thumbnail.png',
    technologies: [Technology.AWS, Technology.Express, Technology.TypeScript, Technology.ServerlessStack, Technology.ReactNative, Technology.React],
    team: [team[0], team[1]],
  },
  {
    id: '2',
    title: 'Egaliti',
    description:
      'Egaliti is an innovative e-banking platform designed for businesses, offering a secure and efficient way to manage cross-border financial operations. Features include a mobile app, web application, MLRO portal, bulk payment system, and B2B API integration, built on a cutting-edge technology stack.',
    category: [Category.Mobile, Category.Web, Category.backend, Category.serverless],
    images: [
      '/projects/egaliti/1-web.png',
      '/projects/egaliti/2-web.png',
      '/projects/egaliti/3-web.png',
      '/projects/egaliti/4-web.png',
      '/projects/egaliti/5-web.png',

      '/projects/egaliti/1-mlro.png',
      '/projects/egaliti/2-mlro.png',
      '/projects/egaliti/3-mlro.png',
      '/projects/egaliti/4-mlro.png',
      '/projects/egaliti/5-mlro.png',
      '/projects/egaliti/6-mlro.png',


      '/projects/egaliti/1-bulk.png',
      '/projects/egaliti/2-bulk.png',
      '/projects/egaliti/3-bulk.png',
      '/projects/egaliti/4-bulk.png',
      '/projects/egaliti/5-bulk.png',
    ],
    thumbnail: '/projects/egaliti/thumbnail.jpg',
    technologies: [Technology.AWS, Technology.Express, Technology.MQTT, Technology.TypeScript, Technology.React, Technology.NextJS, Technology.NodeJS, Technology.Neo4j],
    team: [team[0], team[1]],
  },
  {
    id: '3',
    title: 'Fair Finance',
    description:
      'Fair Finance provides a customized dashboard solution that empowers departments to analyze, visualize, and act on business data with ease. The platform features a dynamic widget-based interface, multi-database integration, and department-specific insights, all delivered through a responsive and user-centric design.',
    category: [Category.Web, Category.AI, Category.backend],
    images: [
      '/projects/fairfinance/1.png',
      '/projects/fairfinance/2.png',
      '/projects/fairfinance/3.png',
      '/projects/fairfinance/4.png'
    ],
    thumbnail: '/projects/fairfinance/thumbnail.png',
    technologies: [Technology.NextJS, Technology.Neo4j, Technology.NodeJS, Technology.Express, Technology.TypeScript],
    team: [team[0], team[1]],
  },
  {
    id: '4',
    title: 'Master Drain',
    description:
      'Master Drain is a task management platform designed for service-oriented businesses. It automates operations with smart task assignment, automated invoicing, and comprehensive analytics, all delivered through a responsive, user-friendly interface.',
    category: [Category.Web, Category.backend],
    images: ['/projects/masterdrain/1.png', '/projects/masterdrain/2.png'],
    thumbnail: '/projects/masterdrain/thumbnail.png',
    technologies: [Technology.NextJS, Technology.MongoDB, Technology.NodeJS, Technology.WebSocket],
    team: [team[0], team[1], team[3]],
  },
  {
    id: '5',
    title: 'Neeb App',
    description:
      'Neeb App is a social network platform designed exclusively for flight crews. It offers secure, professional communication tools, including QR code privacy, flight-specific groups, real-time interaction, and an intuitive user experience.',
    category: [Category.Mobile, Category.Web],
    images: [
      '/projects/neeb/1.png',
      '/projects/neeb/2.png',
      '/projects/neeb/3.png',
      '/projects/neeb/4.png',
      '/projects/neeb/5.png',
      '/projects/neeb/6.png',
      '/projects/neeb/7.png',
      '/projects/neeb/8.png',
      '/projects/neeb/9.png',
    ],
    thumbnail: '/projects/neeb/thumbnail.png',
    technologies: [Technology.Deno, Technology.React, Technology.TypeScript, Technology.Vercel, Technology.expo],
    team: [team[0]],
  },
  {
    id: '6',
    title: '4Otakus',
    description:
      '4Otakus is a streaming app tailored specifically for anime enthusiasts. It offers a vast library of anime series and movies with high-quality streaming, multi-platform support, and user-friendly navigation, ensuring an immersive experience for all anime fans.',
    category: [Category.Mobile, Category.Web],
    images: [
      '/projects/4otakus/1.jpg',
      '/projects/4otakus/2.jpg',
    ],
    thumbnail: '/projects/4otakus/thumbnail.jpg',
    technologies: [Technology.ReactNative, Technology.React, Technology.TypeScript, Technology.AWS],
    team: [team[0]],
  },
  {
    id: '7',
    title: 'Datawars',
    description:
      'Datawars is a unique meme cryptocurrency project built on top of Ethereum using Solidity. It includes a mobile app that allows users to mine tokens based on their data usage. The more data you use, the more tokens you earn, blending cryptocurrency and data usage into a gamified experience.',
    category: [Category.Crypto, Category.Mobile, Category.Web],
    images: [
      '/projects/datawars/1-mobile.png',
      '/projects/datawars/2-mobile.png',
      '/projects/datawars/3-mobile.png',
      '/projects/datawars/4-mobile.png',
      '/projects/datawars/5-mobile.png',
      '/projects/datawars/6-mobile.png',
      '/projects/datawars/7-mobile.png',
      '/projects/datawars/8-mobile.png',
      '/projects/datawars/9-mobile.png',
      '/projects/datawars/10-mobile.png',

      '/projects/datawars/1-web.png',
      '/projects/datawars/2-web.png',
      '/projects/datawars/3-web.png',
    ],
    thumbnail: '/projects/datawars/thumbnail.png',
    technologies: [Technology.Solidity, Technology.Ethereum, Technology.ReactNative, Technology.TypeScript],
    team: [team[0]],
  },
  {
    id: '8',
    title: 'Jedicoin',
    description:
      'Jedicoin is a meme cryptocurrency inspired by the Star Wars universe, built on top of Ethereum using Solidity. The project offers a playful and community-driven approach to cryptocurrency, aiming to bring together fans of the Star Wars franchise and crypto enthusiasts.',
    category: [Category.Crypto],
    images: [
      '/projects/jedicoin/1.png',
      '/projects/jedicoin/2.png',
      '/projects/jedicoin/3.png',
      '/projects/jedicoin/4.png',
      '/projects/jedicoin/5.png'
    ],
    thumbnail: '/projects/jedicoin/thumbnail.png',
    technologies: [Technology.Solidity, Technology.Ethereum],
    team: [team[0]],
  }
];

export default projects;
