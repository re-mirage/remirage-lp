import Container from '@/layouts/dashboard/Container';
import React from 'react';

export default function SettingsPage() {
  return (
    <Container title="Settings" breadcrumbs={[{ label: 'Settings' }]}>
      <div>Setting</div>
    </Container>
  );
}
