import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { notFound } from 'next/navigation';
import projects from '@/mock/projects';
import { StarIcon } from 'lucide-react';
import TextGenerateEffect from '@/components/text/text-generate-effect';
import { Button } from '@/components/buttons/button';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((project) => project.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen  text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          {project.title}
        </h1>

        <Carousel className="mb-12">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={1200}
                  height={675}
                  className="rounded-lg object-cover w-full h-[50vh]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="col-span-2 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <TextGenerateEffect words={project.description || ''} className="text-gray-300" />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="destructive" className="bg-purple-600 text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl">Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <AnimatedTooltip
                    items={project.team.map((member, index) => ({
                      id: index,
                      name: `${member.firstName} ${member.lastName}`,
                      designation: member.role,
                      image: member.avatar,
                    }))}
                  />
                </div>
              </CardContent>
            </Card>

            {project.url && (
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </Button>
            )}
          </div>
        </div>

        {project.reviews && project.reviews.length > 0 && (
          <Card className="mt-12 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl">Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.reviews.map((review, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <StarIcon className="text-yellow-400 mr-1" />
                      <p className="font-semibold">{review.author}</p>
                    </div>
                    <p className="text-gray-300">{review.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
