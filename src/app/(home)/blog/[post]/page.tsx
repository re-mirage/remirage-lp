import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Container from '@/layouts/home/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPost } from '@/actions/blog/getPost';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import siteMetadata from '@/config/siteMetadata';
import ArticleDetails from '@/sections/blog/ArticleDetails';
import { getPosts } from '@/actions/blog/getPosts';

export async function generateMetadata({
  params,
}: {
  params: { post: string };
}): Promise<Metadata> {
  const post = await getPost(params.post);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | ${siteMetadata.title}`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteMetadata.title}`,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${siteMetadata.title}`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }: { params: { post: string } }) {
  const post = await getPost(params.post);

  // TODO: fetch only related posts by in a different  server component  to use fallback
  const posts = await getPosts();

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <ArticleDetails post={post} relatedPosts={posts} />
    </Container>
  );
}
