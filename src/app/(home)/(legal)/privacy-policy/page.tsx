import PageHeading from '@/components/PageHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/layouts/home/Container';
import React from 'react';

async function getPrivacyPolicy() {
  return {
    title: 'Privacy Policy',
    content: `
      Remirage Privacy Policy

      1. Introduction
      Welcome to Remirage's Privacy Policy. This policy explains how we collect, use, and protect your personal information.

      2. Information We Collect
      We may collect personal information such as your name, email address, and usage data when you use our services.

      3. How We Use Your Information
      We use your information to provide and improve our services, communicate with you, and comply with legal obligations.

      4. Data Protection
      We implement security measures to protect your personal information from unauthorized access or disclosure.

      5. Your Rights
      You have the right to access, correct, or delete your personal information. Please contact us for any privacy-related requests.

      6. Changes to This Policy
      We may update this policy from time to time. Please review it periodically.

      7. Contact Us
      If you have any questions about this Privacy Policy, please contact us at privacy@remirage.com.

      Last updated: August 2024
    `,
  };
}

export default async function PrivacyPolicyPage() {
  const data = await getPrivacyPolicy();

  return (
    <Container className="py-16 px-6 md:px:10 lg:px-12">
      <PageHeading>Privacy Policy</PageHeading>
      <Card>
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
