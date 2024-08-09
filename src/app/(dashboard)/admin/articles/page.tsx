import Container from '@/layouts/dashboard/Container';
import React from 'react';

export default function ArticlesPage() {
  return (
    <Container title="Articles" breadcrumbs={[{ label: 'Articles' }]}>
      <div>Articles</div>
    </Container>
  );
}
