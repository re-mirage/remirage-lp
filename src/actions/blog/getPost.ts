import { posts } from '@/mock/blog';
import { Post } from '@/types/blog';

export async function getPost(slug: string): Promise<Post | null> {
  const post = posts.find((p) => p.slug === slug);

  return post || null;
}
