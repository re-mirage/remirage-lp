'use client';
import WavyBackground from '@/components/background/WavyBackground';
import { motion } from 'framer-motion';
import React from 'react';

export default function Hero() {
  return (
    <WavyBackground>
      <div className="font-satoshi font-light text-4xl  text-center  dark:text-white/70">
        Move fast. Don&apos;t break things.
      </div>
      <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4 text-center">
        Develop results-driven products for entrepreneurs,
      </div>

      <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4 text-center">
        startups, and enterprises with a leading software development company.
      </div>
    </WavyBackground>
  );
}
