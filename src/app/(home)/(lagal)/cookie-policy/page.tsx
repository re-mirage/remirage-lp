import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Container from '@/layouts/home/Container';

async function getCookiePolicy() {
  return {
    title: 'Cookie Policy',
    content: `
      Remirage Cookie Policy

      1. What Are Cookies
      Cookies are small text files placed on your device to collect standard internet log information and visitor behavior information.

      2. How We Use Cookies
      We use cookies to improve your browsing experience, understand how you use our website, and provide personalized content.

      3. Types of Cookies We Use
      - Essential cookies: Necessary for the website to function properly.
      - Analytical cookies: Help us understand how visitors interact with our website.
      - Functional cookies: Remember your preferences to enhance your experience.
      - Targeting cookies: Deliver more relevant advertisements.

      4. Managing Cookies
      You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.

      5. Changes to Our Cookie Policy
      We may update this policy from time to time. Please review it periodically.

      6. Contact Us
      If you have any questions about our Cookie Policy, please contact us at cookies@remirage.com.

      Last updated: August 2024
    `,
  };
}

export default async function CookiePolicyPage() {
  const data = await getCookiePolicy();

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
