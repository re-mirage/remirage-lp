import siteMetadata from '@/config/siteMetadata';
import { Post } from '@/types/blog';
import { MetadataRoute } from 'next';
import { posts } from '@/mock/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const routes = ['blog', 'contact', 'pricing', 'ressources', 'solution'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const postRoutes = posts.map((post: Post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...routes, ...postRoutes];
}
