import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Container from '@/layout/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPost } from '@/actions/blog/getPost';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import siteMetadata from '@/config/siteMetadata';

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

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <article className="py-12 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">
                {post.date} · {post.readingTime}
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        <Card>
          <CardContent className="pt-6">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose prose-lg max-w-none"
            />
          </CardContent>
        </Card>
      </article>
    </Container>
  );
}
