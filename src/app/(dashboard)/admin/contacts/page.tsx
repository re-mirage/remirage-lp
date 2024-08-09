import Container from '@/layouts/dashboard/Container';
import React from 'react';

export default function ContactsPage() {
  return (
    <Container title="Contacts" breadcrumbs={[{ label: 'Contcts' }]}>
      <div>Contacts</div>
    </Container>
  );
}
