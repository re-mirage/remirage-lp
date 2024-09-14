import React from 'react';
import Image from 'next/image';
import Container from '@/layouts/home/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPosts } from '@/actions/blog/getPosts';
import { Button } from '@/components/buttons/button';
import Link from 'next/link';
import { Metadata } from 'next';
import siteMetadata from '@/config/siteMetadata';
import BlogList from '@/sections/blog/BlogList';

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
      <BlogList posts={posts} />
    </Container>
  );
}
