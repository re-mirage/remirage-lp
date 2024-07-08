'use client';
import WavyBackground from '@/components/background/WavyBackground';
import React from 'react';

export default function Hero() {
  return (
    <WavyBackground className="py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-satoshi font-light text-3xl md:text-4xl lg:text-5xl mb-6 dark:text-white/90">
          Move fast. Don&apos;t break things.
        </h1>
        <p className="font-extralight text-lg md:text-xl lg:text-2xl dark:text-neutral-200 mb-4">
          Develop results-driven products for entrepreneurs, startups, and enterprises with a
          leading software development company.
        </p>
      </div>
    </WavyBackground>
  );
}
