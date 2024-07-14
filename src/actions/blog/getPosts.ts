import { posts } from '@/mock/blog';

export async function getPosts() {
  return posts.map(({ slug, title, excerpt, date, author, image }) => ({
    slug,
    title,
    excerpt,
    date,
    author,
    image,
  }));
}
