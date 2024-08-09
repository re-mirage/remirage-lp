import Container from '@/layouts/dashboard/Container';
import React from 'react';

export default function ProjectsPage() {
  return (
    <Container title="Projects" breadcrumbs={[{ label: 'Projects' }]}>
      <div>Projects</div>
    </Container>
  );
}
