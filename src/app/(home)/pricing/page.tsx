import React from 'react';
import Container from '@/layouts/home/Container';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/buttons/button';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small teams and startups',
    features: ['5 AI Models', '1000 API Calls/month', 'Basic Support'],
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Ideal for growing businesses',
    features: ['15 AI Models', '5000 API Calls/month', 'Priority Support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: ['Unlimited AI Models', 'Unlimited API Calls', '24/7 Premium Support'],
  },
];

export default function Pricing() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>✓ {feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
