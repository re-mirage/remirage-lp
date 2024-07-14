import { Post } from '@/types/blog';

export const posts: Post[] = [
  {
    slug: 'nextjs-15-whats-new',
    title: "Next.js 15: What's New and Exciting",
    excerpt:
      'Explore the latest features and improvements in Next.js 15, enhancing your web development experience.',
    content: `
      <p>Next.js 15 brings a host of new features and improvements to the popular React framework. Here are some highlights:</p>
      <ul>
        <li><strong>Improved Server Components:</strong> Enhanced performance and easier integration of server-side rendering.</li>
        <li><strong>Advanced Caching Strategies:</strong> New caching mechanisms to boost your app's speed and efficiency.</li>
        <li><strong>Built-in TypeScript Support:</strong> Better TypeScript integration out of the box.</li>
        <li><strong>Enhanced Image Optimization:</strong> More powerful and flexible image handling capabilities.</li>
      </ul>
      <p>These updates make Next.js 15 a compelling choice for developers looking to build fast, scalable web applications.</p>
    `,
    date: '2024-08-01',
    author: {
      name: 'Simo EL BSSIR',
      avatar: 'https://avatars.githubusercontent.com/u/19363749?v=4',
    },
    readingTime: '5 min read',
    image: '/blog/nextjs-15.png',
  },
  {
    slug: 'react-19-game-changer',
    title: 'React 19: A Game Changer for Front-end Development',
    excerpt:
      'Discover how React 19 is revolutionizing the way we build user interfaces with its groundbreaking features.',
    content: `
      <p>React 19 introduces several game-changing features that are set to revolutionize front-end development:</p>
      <ul>
        <li><strong>Concurrent Rendering:</strong> Improved performance for complex UIs with concurrent mode.</li>
        <li><strong>Server Components:</strong> Seamless integration of server-side rendering for better performance.</li>
        <li><strong>Automatic Batching:</strong> Enhanced state updates for smoother UI transitions.</li>
        <li><strong>Suspense for Data Fetching:</strong> Simplified data loading patterns in your components.</li>
      </ul>
      <p>These features in React 19 provide developers with powerful tools to create more responsive and efficient web applications.</p>
    `,
    date: '2024-08-05',
    author: {
      name: 'Simo EL BSSIR',
      avatar: 'https://avatars.githubusercontent.com/u/19363749?v=4',
    },
    readingTime: '6 min read',
    image: '/blog/react-19.png',
  },
  {
    slug: 'react-native-new-architecture',
    title: 'Embracing the New Architecture in React Native',
    excerpt:
      "Learn about the benefits and implementation of React Native's new architecture for mobile app development.",
    content: `
      <p>React Native's new architecture brings significant improvements to mobile app development:</p>
      <ul>
        <li><strong>Fabric Renderer:</strong> A new rendering system for better performance and flexibility.</li>
        <li><strong>TurboModules:</strong> Improved native module system for faster bridge communication.</li>
        <li><strong>Codegen:</strong> Automated code generation for smoother integration between JavaScript and native code.</li>
        <li><strong>Hermes Engine:</strong> Enhanced JavaScript engine optimized for React Native.</li>
      </ul>
      <p>These architectural changes promise to make React Native apps faster, more stable, and easier to develop.</p>
    `,
    date: '2024-08-10',
    author: {
      name: 'Simo EL BSSIR',
      avatar: 'https://avatars.githubusercontent.com/u/19363749?v=4',
    },
    readingTime: '7 min read',
    image: '/blog/react-native-new-architecture.png',
  },
  {
    slug: 'expo-router-simplified-navigation',
    title: 'Expo Router: Simplified Navigation for React Native',
    excerpt:
      'Explore how Expo Router is making navigation in React Native apps more intuitive and powerful.',
    content: `
      <p>Expo Router is changing the game for navigation in React Native applications:</p>
      <ul>
        <li><strong>File-based Routing:</strong> Intuitive routing system based on your file structure.</li>
        <li><strong>Nested Layouts:</strong> Easy implementation of complex navigation patterns.</li>
        <li><strong>TypeScript Support:</strong> Built-in type safety for your routes and navigation props.</li>
        <li><strong>Web Support:</strong> Seamless navigation across mobile and web platforms.</li>
      </ul>
      <p>With Expo Router, developers can create more maintainable and scalable navigation systems in their React Native apps.</p>
    `,
    date: '2024-08-15',
    author: {
      name: 'Simo EL BSSIR',
      avatar: 'https://avatars.githubusercontent.com/u/19363749?v=4',
    },
    readingTime: '5 min read',
    image: '/blog/expo-router.png',
  },
  {
    slug: 'neo4j-graph-database-revolution',
    title: 'Neo4j: Leading the Graph Database Revolution',
    excerpt:
      'Discover how Neo4j is transforming data management with its powerful graph database capabilities.',
    content: `
      <p>Neo4j is at the forefront of the graph database revolution, offering unique advantages:</p>
      <ul>
        <li><strong>Native Graph Storage:</strong> Optimized for storing and querying connected data.</li>
        <li><strong>Cypher Query Language:</strong> Intuitive language for querying graph data.</li>
        <li><strong>ACID Compliance:</strong> Ensuring data integrity and consistency.</li>
        <li><strong>Scalability:</strong> Capable of handling billions of nodes and relationships.</li>
      </ul>
      <p>Neo4j's graph database approach is ideal for applications dealing with complex, interconnected data structures.</p>
    `,
    date: '2024-08-20',
    author: {
      name: 'Simo EL BSSIR',
      avatar: 'https://avatars.githubusercontent.com/u/19363749?v=4',
    },
    readingTime: '6 min read',
    image: '/blog/neo4j.png',
  },
  {
    slug: 'ai-transforming-software-development',
    title: 'AI: Transforming the Landscape of Software Development',
    excerpt: 'Explore how AI is revolutionizing software development practices and tools.',
    content: `
      <p>Artificial Intelligence is reshaping software development in numerous ways:</p>
      <ul>
        <li><strong>Automated Code Generation:</strong> AI-powered tools assisting in writing boilerplate code.</li>
        <li><strong>Intelligent Code Completion:</strong> Advanced suggestions based on context and patterns.</li>
        <li><strong>Bug Prediction and Prevention:</strong> AI models identifying potential issues before they occur.</li>
        <li><strong>Optimized Testing:</strong> AI-driven test case generation and execution.</li>
      </ul>
      <p>As AI continues to evolve, it promises to make software development more efficient and less error-prone.</p>
    `,
    date: '2024-08-25',
    author: {
      name: 'Simo EL BSSIR',
      avatar: 'https://avatars.githubusercontent.com/u/19363749?v=4',
    },
    readingTime: '7 min read',
    image: '/blog/ai-software-development.png',
  },
  {
    slug: 'authjs-beta-next-gen-authentication',
    title: 'AuthJS Beta: Next-Generation Authentication for Web Applications',
    excerpt: 'Get a first look at the new features and improvements in the AuthJS beta release.',
    content: `
      <p>The AuthJS beta introduces several exciting features for web application authentication:</p>
      <ul>
        <li><strong>Enhanced Security:</strong> Improved encryption and token handling mechanisms.</li>
        <li><strong>Multi-tenant Support:</strong> Built-in capabilities for handling multiple organizations.</li>
        <li><strong>Extensible Providers:</strong> Easier integration with various authentication providers.</li>
        <li><strong>Improved TypeScript Support:</strong> Better type definitions for a smoother development experience.</li>
      </ul>
      <p>AuthJS beta is set to make authentication in web applications more secure and developer-friendly than ever before.</p>
    `,
    date: '2024-08-30',
    author: {
      name: 'Simo EL BSSIR',
      avatar: 'https://avatars.githubusercontent.com/u/19363749?v=4',
    },
    readingTime: '5 min read',
    image: '/blog/authjs-beta.png',
  },
];
