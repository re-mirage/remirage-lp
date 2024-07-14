import { posts } from '@/mock/blog';

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts.map(({ slug, title, excerpt, date, author, image }) => ({
    slug,
    title,
    excerpt,
    date,
    author,
    image,
  }));
}
