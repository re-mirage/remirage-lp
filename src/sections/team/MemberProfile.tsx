'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { Member } from '@/types/team'
import { Project } from '@/types/project'
import TechnologiesBadgeList from '@/components/TechnologyBadgeList'

interface SocialLinkProps {
    href: string
    icon: React.ComponentType<{ size: number }>
    label: string
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <Icon size={20} />
        <span className="sr-only">{label}</span>
    </motion.a>
)

interface MemberProfileProps {
    member: Member
    projects: Project[]
}

export default function MemberProfile({ member, projects }: MemberProfileProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <LayoutGroup>
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 py-16"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div layout className="lg:col-span-1">
                        <Card>
                            <CardHeader className="text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                >
                                    <Avatar className="w-40 h-40 mx-auto mb-4 border-4 border-primary">
                                        <AvatarImage src={member.avatar} alt={member.first_name} />
                                        <AvatarFallback>{member.first_name[0]}{member.last_name[0]}</AvatarFallback>
                                    </Avatar>
                                </motion.div>
                                <CardTitle className="text-3xl font-bold">{member.first_name} {member.last_name}</CardTitle>
                                <CardDescription className="text-xl text-primary">{member.position}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <motion.div
                                    className="flex justify-center space-x-6 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <SocialLink href={`mailto:${member.email}`} icon={FaEnvelope} label="Email" />
                                    <SocialLink href="#" icon={FaLinkedin} label="LinkedIn" />
                                    <SocialLink href="#" icon={FaGithub} label="GitHub" />
                                    <SocialLink href="#" icon={FaTwitter} label="Twitter" />
                                </motion.div>
                                <motion.p
                                    className="text-sm text-gray-600 dark:text-gray-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {member.bio}
                                </motion.p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div layout className="lg:col-span-2">
                        <Card>
                            <CardContent className="p-6">
                                <Tabs defaultValue="skills" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="skills">Skills</TabsTrigger>
                                        <TabsTrigger value="projects">Projects</TabsTrigger>
                                    </TabsList>
                                    <AnimatePresence mode="wait">
                                        <TabsContent value="skills" className="mt-6">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex flex-wrap gap-2"
                                            >
                                                {member.skills.map((skill, index) => (
                                                    <motion.div
                                                        key={skill}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.05 * index }}
                                                    >
                                                        <TechnologiesBadgeList technologies={[skill]} />
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </TabsContent>
                                        <TabsContent value="projects" className="mt-6">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                            >
                                                {projects.map((project, index) => (
                                                    <motion.div
                                                        key={project.id}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 * index }}
                                                    >
                                                        <Card
                                                            className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
                                                            onClick={() => setSelectedProject(project)}
                                                        >
                                                            <CardHeader className="p-4">
                                                                <div className="relative w-full h-40">
                                                                    <Image
                                                                        src={project.logo}
                                                                        alt={project.title}
                                                                        layout="fill"
                                                                        objectFit="contain"
                                                                        placeholder="blur"
                                                                        blurDataURL="/placeholder.svg?height=160&width=320"
                                                                    />
                                                                </div>
                                                                <CardTitle className="mt-2 text-lg">{project.title}</CardTitle>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                                                            </CardContent>
                                                        </Card>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </TabsContent>
                                    </AnimatePresence>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                                <div className="relative w-full h-60 mb-4">
                                    <Image
                                        src={selectedProject.logo}
                                        alt={selectedProject.title}
                                        layout="fill"
                                        objectFit="contain"
                                        placeholder="blur"
                                        blurDataURL="/placeholder.svg?height=240&width=480"
                                    />
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProject.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <TechnologiesBadgeList technologies={selectedProject.technologies} />
                                </div>
                                <a
                                    href={selectedProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-200"
                                >
                                    View Project
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </LayoutGroup>
    )
}