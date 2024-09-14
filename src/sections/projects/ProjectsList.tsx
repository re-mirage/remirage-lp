'use client'

import React, { useCallback, useEffect, useMemo, useState, useTransition } from 'react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useQueryState } from 'nuqs'
import { Project } from '@/types/project'
import { ProjectCardSkeleton } from '@/components/skeletons/ProjectCardSkeleton'
import { Button } from '@/components/buttons/button'
import { Member } from '@/types/team'
import { Technology, Category } from '@/mock/projects'
import { useDebounce } from '@/hooks/useDebounce'


interface ProjectsListProps {
  projects: Project[]
  team: Member[]
}
export enum ProjectListQueryParams {
  search = 'search',
  tech = 'tech',
  team = 'team',
  category = 'category',
}
export default function ProjectsList({ projects, team }: ProjectsListProps) {
  const [isPending, startTransition] = useTransition()
  const [search, setSearch] = useQueryState(ProjectListQueryParams.search, { startTransition })
  const [techFilter, setTechFilter] = useQueryState(ProjectListQueryParams.tech, { startTransition })
  const [teamFilter, setTeamFilter] = useQueryState(ProjectListQueryParams.team, { startTransition })
  const [categoryFilter, setCategoryFilter] = useQueryState(ProjectListQueryParams.category, { startTransition })


  const [searchInput, setSearchInput] = useState('')
  const debouncedSearch = useDebounce(searchInput, 300)

  useEffect(() => {
    setSearch(debouncedSearch || null, { scroll: false, shallow: true })
  }, [debouncedSearch, setSearch])

  const updateSearch = (value: string) => {
    setSearchInput(value)
  }


  const updateTechFilter = useCallback((value: string) => {
    setTechFilter(value === 'all' ? null : value, { scroll: false, shallow: true })
  }, [setTechFilter])

  const updateTeamFilter = useCallback((value: string) => {
    setTeamFilter(value === 'all' ? null : value, { scroll: false, shallow: true })
  }, [setTeamFilter])

  const updateCategoryFilter = useCallback((value: string) => {
    setCategoryFilter(value === 'all' ? null : value, { scroll: false, shallow: true })
  }, [setCategoryFilter])


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-wrap gap-4">
        <Input
          placeholder="Search projects..."
          value={searchInput}
          onChange={(e) => updateSearch(e.target.value)}
          className="max-w-xs"
        />
        <Select value={techFilter ?? 'all'} onValueChange={updateTechFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Technologies</SelectItem>
            {
              Object.values(Technology).map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Select value={teamFilter ?? 'all'} onValueChange={updateTeamFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by team member" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Team Members</SelectItem>
            {team.map((member) => (
              <SelectItem key={member.username} value={member.username}>
                {member.first_name} {member.last_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={categoryFilter ?? 'all'} onValueChange={updateCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {Object.values(Category).map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={isPending ? 'loading' : 'loaded'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {isPending
            ? Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCardSkeleton />
              </motion.div>
            ))
            : projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="p-0 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <CardTitle className="text-xl mb-2 line-clamp-1">{project.title}</CardTitle>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 flex justify-between items-center">
                    <div className="flex flex-row items-center justify-center mb-10 w-full">

                      <AnimatedTooltip

                        items={project.team.map((member, index) => ({
                          id: index,
                          name: `${member.first_name} ${member.last_name}`,
                          designation: member.position,
                          image: member.avatar,
                        }))}
                      />

                    </div>
                    <Link href={`/projects/${project.id}`} className="ml-4">
                      <Button className="transition-all duration-300 hover:scale-105">View Project</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}