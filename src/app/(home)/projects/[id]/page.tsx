'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { notFound } from 'next/navigation'
import { ChevronRightIcon, ChevronLeftIcon, ExternalLinkIcon, UserIcon, CodeIcon, LayersIcon } from 'lucide-react'
import projects from '@/mock/projects'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/buttons/button'

const ProjectSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-100">{title}</h2>
      {children}
    </motion.section>
  )
}

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const constraintsRef = useRef(null)

  const nextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <motion.div
      ref={constraintsRef}
      className="relative h-[50vh] rounded-lg overflow-hidden group cursor-grab active:cursor-grabbing"
      whileTap={{ cursor: 'grabbing' }}
    >
      <AnimatePresence initial={false} custom={activeImageIndex}>
        <motion.div
          key={activeImageIndex}
          custom={activeImageIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.05}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              nextImage()
            } else if (swipe > swipeConfidenceThreshold) {
              prevImage()
            }
          }}
        >
          <Image
            src={images[activeImageIndex]}
            alt={`${title} - Image ${activeImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </motion.div>
  )
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen text-white">
      <motion.div
        style={{ scale }}
        className="container mx-auto px-4 py-16"
      >
        <div
          className="text-5xl font-bold mb-8 center  flex justify-center items-center"
        >
          <Image src={project.logo} alt={project.title} width={200} height={200}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ProjectSection title="Project Showcase">
              <ImageCarousel images={project.images} title={project.title} />
            </ProjectSection>

            <ProjectSection title="Project Details">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="technologies">Technologies</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <p className="text-gray-300">{project.description}</p>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="technologies">
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-600 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="team">
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      {project.team.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-4"
                        >
                          <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={member.avatar}
                              alt={`${member.first_name} ${member.last_name}`}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{`${member.first_name} ${member.last_name}`}</p>
                            <p className="text-sm text-gray-400">{member.role[0]}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </ProjectSection>
          </div>

          <div>
            <ProjectSection title="Project Highlights">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <UserIcon className="w-12 h-12 mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2">Team Size</h3>
                  <p className="text-gray-300">{project.team.length} Members</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <CodeIcon className="w-12 h-12 mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
                  <p className="text-gray-300">{project.technologies.length} Technologies</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg col-span-full"
                >
                  <LayersIcon className="w-12 h-12 mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((cat) => (
                      <Badge key={cat} variant="outline">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ProjectSection>

            <ProjectSection title="Project Gallery">
              <div className="grid grid-cols-3 gap-4">
                {project.images.slice(0, 6).map((image, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger>
                        <motion.div
                          whileHover={{ scale: 1.05, zIndex: 1 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                        >
                          <Image
                            src={image}
                            alt={`${project.title} - Thumbnail ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to view full image</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </ProjectSection>

            {project.url && (
              <ProjectSection title="Visit Project">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Explore Live Project
                      <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </ProjectSection>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}