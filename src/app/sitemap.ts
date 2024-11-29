import siteMetadata from '@/config/siteMetadata';
import { Post } from '@/types/blog';
import { MetadataRoute } from 'next';
import { posts } from '@/mock/blog';
import projects from '@/mock/projects';
import { team } from '@/mock/team';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const routes = ['blog', 'contact', 'pricing', 'resources', 'solution', "projects", "team"].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const postRoutes = posts.map((post: Post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));


  const projectRouters = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.id}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const teamRouters = team.map((member) => ({
    url: `${siteUrl}/team/${member.username}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));


  return [
    ...routes,
    ...postRoutes,
    ...teamRouters,
    ...projectRouters
  ];
}
