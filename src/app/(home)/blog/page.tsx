import React from 'react';
import Image from 'next/image';
import Container from '@/layouts/home/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPosts } from '@/actions/blog/getPosts';
import { Button } from '@/components/buttons/button';
import Link from 'next/link';
import { Metadata } from 'next';
import siteMetadata from '@/config/siteMetadata';

export const metadata: Metadata = {
  title: `Our Blog | ${siteMetadata.title}`,
  description: 'Explore our latest insights on AI, machine learning, and technology trends.',
  openGraph: {
    title: `Our Blog | ${siteMetadata.title}`,
    description: 'Explore our latest insights on AI, machine learning, and technology trends.',
    images: [siteMetadata.socialBanner],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Our Blog | ${siteMetadata.title}`,
    description: 'Explore our latest insights on AI, machine learning, and technology trends.',
    images: [siteMetadata.socialBanner],
  },
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <Container className="px-6 md:px:10 lg:px-12">
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="flex flex-col group-hover/bento:translate-x-2 transition duration-200"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-left">{post.title}</CardTitle>
                <CardDescription>
                  {post.date} | By {post.author.name}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                  {post.excerpt}
                </div>
              </CardContent>
              <CardContent className="pt-0">
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
