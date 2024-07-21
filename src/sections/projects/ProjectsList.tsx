'use client';

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import { Button } from '@/components/buttons/button';

interface ProjectsListProps {
  initialProjects: Project[];
}

export function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [projects] = useState<Project[]>(initialProjects);
  const [search, setSearch] = useState('');
  const [techFilter, setTechFilter] = useState('all');
  const [teamFilter, setTeamFilter] = useState<any | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) &&
        (techFilter === 'all' || project.technologies.includes(techFilter)) &&
        (teamFilter === 'all' || project.team.includes(teamFilter)) &&
        (categoryFilter === 'all' || project.category.includes(categoryFilter))
    );
  }, [projects, search, techFilter, teamFilter, categoryFilter]);

  const uniqueTechnologies = useMemo(
    () => [...new Set(projects.flatMap((p) => p.technologies))],
    [projects]
  );
  const uniqueTeamMembers = useMemo(
    () => [...new Set(projects.flatMap((p) => p.team))],
    [projects]
  );
  const uniqueCategories = useMemo(
    () => [...new Set(projects.flatMap((p) => p.category))],
    [projects]
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-4">
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <Select value={techFilter} onValueChange={setTechFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Technologies</SelectItem>
            {uniqueTechnologies.map((tech) => (
              <SelectItem key={tech} value={tech}>
                {tech}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={teamFilter as any} onValueChange={setTeamFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by team member" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Team Members</SelectItem>
            {uniqueTeamMembers.map((member) => (
              <SelectItem key={member.username} value={member.username}>
                {member.firstName} {member.lastName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {uniqueCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="mt-2 line-clamp-2">{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary">+{project.technologies.length - 3}</Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-4 flex justify-between items-center">
              <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip
                  items={project.team.map((member, index) => ({
                    id: index,
                    name: member.firstName + ' ' + member.lastName,
                    designation: member.role,
                    image: member.avatar,
                  }))}
                />
              </div>
              <Link href={`/projects/${project.id}`}>
                <Button>View Project</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
