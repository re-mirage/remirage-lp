'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Post } from "@/types/blog"
import Image from "next/image"
import Link from "next/link"
import { paths } from "@/routes/paths"
import { Clock, User } from 'lucide-react'
import { Button } from '@/components/buttons/button'

interface BlogListProps {
    posts: Post[]
}

export default function BlogList({ posts }: BlogListProps) {
    const [visiblePosts, setVisiblePosts] = useState(6)

    const loadMore = () => {
        setVisiblePosts(prevVisible => Math.min(prevVisible + 6, posts.length))
    }

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Our Latest Insights
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {posts.slice(0, visiblePosts).map((post, index) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                            <div className="relative w-full pt-[56.25%]">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    priority={index < 3}
                                    placeholder="empty"
                                />
                                <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
                                    {getCategoryFromSlug(post.slug)}
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="flex items-center text-sm text-muted-foreground">
                                    <User className="w-4 h-4 mr-1" />
                                    {post.author.name}
                                    <span className="mx-2">•</span>
                                    <Clock className="w-4 h-4 mr-1" />
                                    {post.readingTime}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </CardContent>

                            <CardContent className="pt-0">
                                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Link href={paths.landing.blog.article(post.slug)}>
                                        Read More
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
            {visiblePosts < posts.length && (
                <div className="mt-12 text-center">
                    <Button onClick={loadMore} size="lg">
                        Load More
                    </Button>
                </div>
            )}
        </div>
    )
}


const getCategoryFromSlug = (slug: string) => {
    const category = slug.split('-')[0]
    return category.charAt(0).toUpperCase() + category.slice(1)
}