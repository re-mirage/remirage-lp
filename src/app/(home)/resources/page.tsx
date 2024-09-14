import React from 'react';
import Container from '@/layouts/home/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/buttons/button';
import PageHeading from '@/components/PageHeading';

const resources = [
  {
    title: 'AI Fundamentals',
    description: 'Learn the basics of Artificial Intelligence and its applications.',
    link: '#',
  },
  {
    title: 'Machine Learning Guide',
    description: 'Comprehensive guide to get started with Machine Learning.',
    link: '#',
  },
  {
    title: 'Deep Learning Workshop',
    description: 'Hands-on workshop to master Deep Learning techniques.',
    link: '#',
  },
];

export default function ResourcesPage() {
  return (

    <Container className="py-16 px-6 md:px:10 lg:px-12">
      <PageHeading>
        Resources
      </PageHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href={resource.link}>Access Resource</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

    </Container>
  );
}
