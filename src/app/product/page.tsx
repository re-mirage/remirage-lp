import React from 'react';
import Container from '@/layout/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    name: 'AI Assistant',
    description: 'Intelligent virtual assistant powered by advanced AI.',
    features: ['Natural Language Processing', 'Task Automation', '24/7 Availability'],
  },
  {
    name: 'ML Pipeline',
    description: 'End-to-end machine learning pipeline for data scientists.',
    features: ['Data Preprocessing', 'Model Training', 'Automated Deployment'],
  },
  {
    name: 'Deep Learning Framework',
    description: 'Powerful framework for building and deploying deep learning models.',
    features: ['GPU Acceleration', 'Pre-trained Models', 'Custom Architecture Support'],
  },
];

export default function Product() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
