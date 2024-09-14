import { posts } from '@/mock/blog';
import { Post } from '@/types/blog';

export async function getPosts(): Promise<Post[]> {
  return posts
}
