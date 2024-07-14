import { posts } from '@/mock/blog';
import { Post } from '@/types/blog';

export async function getPost(slug: string): Promise<Post | null> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const post = posts.find((p) => p.slug === slug);

  return post || null;
}
