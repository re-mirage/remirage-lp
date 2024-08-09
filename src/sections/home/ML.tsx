'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cpu, Wand2 } from 'lucide-react';
import { Button } from '@/components/buttons/button';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full md:w-1/2 p-4"
  >
    <Card className="h-full bg-gradient-to-br from-purple-800 to-violet-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <Icon className="w-12 h-12 text-purple-300 mb-4" />
        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-purple-200 text-lg">{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

export default function ML() {
  return (
    <section className="py-20 bg-gradient-to-b dark:from-slate-900 dark:to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Button
            variant="outline"
            className="mb-4 bg-purple-700 text-white hover:bg-purple-600 transition-colors duration-300"
          >
            AI Features
          </Button>
          <h2 className="text-4xl font-bold mb-4">Revolutionize Your Apps with AI</h2>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Harness the power of machine learning to create intelligent, adaptive applications that
            evolve with your users&apos; needs.
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          <FeatureCard
            title="Custom AI Integration"
            description="Transform your vision into reality with our bespoke AI integration service. We seamlessly incorporate cutting-edge machine learning models tailored to your specific needs."
            icon={Cpu}
          />
          <FeatureCard
            title="AI-Powered Innovation"
            description="Turn your ideas into intelligent solutions. Our AI capabilities allow you to create apps that learn, adapt, and provide personalized experiences for your users."
            icon={Wand2}
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your AI Journey
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
