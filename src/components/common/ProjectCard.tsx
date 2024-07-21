import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
      </CardContent>
    </Card>
  );
}
