'use client';
import React from 'react';
import { motion } from 'framer-motion';
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

import { Card, CardContent } from '@/components/ui/card';
import { SparklesCore } from '@/components/ui/sparkles';
import SectionContainer from '@/components/containers/SectionContainer';
import TextGenerateEffect from '@/components/text/text-generate-effect';
import { Button } from '@/components/buttons/button';
import aiAnimation from '@/data/ai.json';
import dynamic from 'next/dynamic';

const AISection = () => {
  return (
    <SectionContainer>
      <div className="relative w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            <TextGenerateEffect words="Revolutionize Your Business with AI" />
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Harness the power of cutting-edge Machine Learning and AI to transform your operations
            and drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'].map(
            (feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-white/10 border-0 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
                    <p className="text-gray-400">
                      Leverage advanced AI techniques to gain valuable insights and automate complex
                      tasks.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-lg overflow-hidden mb-12"
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Lottie
              loop
              animationData={aiAnimation}
              play
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <SparklesCore
                id="tsparticles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            Explore AI Solutions
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AISection;
