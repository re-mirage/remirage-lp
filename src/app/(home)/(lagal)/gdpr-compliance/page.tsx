import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Container from '@/layouts/home/Container';

async function getGDPRCompliance() {
  return {
    title: 'GDPR Compliance',
    content: `
      Remirage GDPR Compliance Statement

      1. Introduction
      Remirage is committed to protecting the privacy and rights of individuals in accordance with the General Data Protection Regulation (GDPR).

      2. Data Protection Principles
      We adhere to the principles set out in the GDPR by ensuring that personal data is:
      - Processed lawfully, fairly, and transparently
      - Collected for specified, explicit, and legitimate purposes
      - Adequate, relevant, and limited to what is necessary
      - Accurate and kept up to date
      - Kept for no longer than necessary
      - Processed securely

      3. Individual Rights
      Under GDPR, you have the following rights:
      - Right to be informed
      - Right of access
      - Right to rectification
      - Right to erasure
      - Right to restrict processing
      - Right to data portability
      - Right to object
      - Rights related to automated decision making and profiling

      4. Data Processing
      We process personal data only when we have a lawful basis to do so, such as consent, contract, legal obligation, vital interests, public task, or legitimate interests.

      5. Data Protection Officer
      Our Data Protection Officer can be contacted at dpo@remirage.com for any GDPR-related inquiries.

      6. Data Breaches
      We have procedures in place to detect, report, and investigate personal data breaches.

      7. International Data Transfers
      When transferring data outside the EEA, we ensure appropriate safeguards are in place.

      8. Changes to This Statement
      We may update this statement to reflect changes in our practices or legal requirements.

      Last updated: August 2024
    `,
  };
}

export default async function GDPRCompliancePage() {
  const data = await getGDPRCompliance();

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
