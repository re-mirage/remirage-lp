export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  readingTime: string;
  image: string;
}
