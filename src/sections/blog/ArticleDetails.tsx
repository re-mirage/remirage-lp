'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Post } from "@/types/blog"
import { Facebook, Twitter, Linkedin, Mail, Share2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/buttons/button'
import ScrollToTop from '@/components/ScrollToTop'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import parse from 'html-react-parser';


interface ArticleDetailsProps {
    post: Post
    relatedPosts: Post[]
}

export default function ArticleDetails({ post, relatedPosts }: ArticleDetailsProps) {
    const { ref: topRef, inView: topInView } = useInView()
    const [showShareTooltip, setShowShareTooltip] = useState(false)

    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

    const shareButtons = [
        { icon: Facebook, label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
        { icon: Twitter, label: 'Twitter', href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}` },
        { icon: Linkedin, label: 'LinkedIn', href: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(post.title)}` },
        { icon: Mail, label: 'Email', href: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}` },
    ]

    const handleShare = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        window.open(href, '_blank', 'width=600,height=400')
    }

    return (
        <motion.article
            className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div ref={topRef} className="mb-8">
                <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 text-primary">{post.title}</h1>
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">{post.author.name}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <span>{post.date}</span>
                                <Separator className="mx-2 h-4" orientation="vertical" />
                                <span>{post.readingTime}</span>
                            </div>
                        </div>
                    </div>
                    <TooltipProvider>
                        <Tooltip open={showShareTooltip} onOpenChange={setShowShareTooltip}>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" onClick={() => setShowShareTooltip(true)}>
                                    <Share2 className="h-4 w-4" />
                                    <span className="sr-only">Share</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" align="end" className="p-0">
                                <div className="flex space-x-2 p-2">
                                    {shareButtons.map((button, index) => (
                                        <a
                                            key={index}
                                            href={button.href}
                                            onClick={(e) => handleShare(e, button.href)}
                                            className="p-2 hover:bg-muted rounded-full transition-colors"
                                            aria-label={`Share on ${button.label}`}
                                        >
                                            <button.icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <motion.div
                className="relative w-full aspect-video mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="rounded-lg object-cover"
                />
            </motion.div>

            <div className="flex gap-8">
                <div className="flex-grow">
                    <div

                        dangerouslySetInnerHTML={{ __html: `<div>${post.content}</div>` }}
                        className="post-content prose prose-2xl prose-headings:text-primary prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl max-w-none dark:prose-invert"
                    />


                    <div className="mt-12">
                        <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                        <div className="flex space-x-2">
                            {shareButtons.map((button, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    size="icon"
                                    asChild
                                >
                                    <a
                                        href={button.href}
                                        onClick={(e) => handleShare(e, button.href)}
                                        aria-label={`Share on ${button.label}`}
                                    >
                                        <button.icon className="h-4 w-4" />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="my-12" />

            <section>
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.slice(0, 3).map((relatedPost, index) => (
                        <motion.div
                            key={relatedPost.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <Link href={`/blog/${relatedPost.slug}`}>
                                    <div className="relative w-full pt-[56.25%] overflow-hidden">
                                        <Image
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-105"
                                        />
                                    </div>
                                    <CardContent>
                                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3">{relatedPost.excerpt}</p>
                                    </CardContent>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <ScrollToTop />

        </motion.article>
    )
}