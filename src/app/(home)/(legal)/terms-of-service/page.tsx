import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Container from '@/layouts/home/Container';

async function getTermsOfService() {
  return {
    title: 'Terms of Service',
    content: `
      Remirage Terms of Service

      1. Acceptance of Terms
      By using Remirage's services, you agree to these Terms of Service.

      2. Description of Service
      Remirage provides [brief description of your service].

      3. User Obligations
      Users must comply with all applicable laws and regulations when using our services.

      4. Intellectual Property
      All content and materials on our platform are the property of Remirage or its licensors.

      5. Limitation of Liability
      Remirage is not liable for any indirect, incidental, or consequential damages arising from the use of our services.

      6. Termination
      We reserve the right to terminate or suspend access to our services at our sole discretion.

      7. Governing Law
      These Terms are governed by the laws of [your jurisdiction].

      8. Changes to Terms
      We may modify these Terms at any time. Continued use of our services constitutes acceptance of the modified Terms.

      Last updated: August 2024
    `,
  };
}

export default async function TermsOfServicePage() {
  const data = await getTermsOfService();

  return (
    <Container className="py-4 px-4">
      <Card>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2  ">
            {data.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
