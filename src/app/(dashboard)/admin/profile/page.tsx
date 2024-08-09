import Container from '@/layouts/dashboard/Container';
import React from 'react';

export default function ProfilePage() {
  return (
    <Container title="Profile" breadcrumbs={[{ label: 'Profile' }]}>
      <div>Profile</div>
    </Container>
  );
}
