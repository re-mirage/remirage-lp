'use client';
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from '../logo/Logo';

export default function SplashScreen({ className, ...other }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`absolute inset-0 z-50 flex items-center justify-center bg-black${className}`}
      {...other}
    >
      <>
        <m.div
          animate={{
            scale: [1, 0.9, 0.9, 1, 1],
            opacity: [1, 0.48, 0.48, 1, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo className="w-16 h-16" />
        </m.div>

        <m.div
          animate={{
            scale: [1.6, 1, 1, 1.6, 1.6],
            rotate: [270, 0, 0, 270, 270],
            opacity: [0.25, 1, 1, 1, 0.25],
            borderRadius: ['25%', '25%', '50%', '50%', '25%'],
          }}
          transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
          className="absolute w-24 h-24 border-3 border-opacity-24"
          style={{ borderColor: 'rgba(0, 0, 0, 0.24)' }}
        />

        <m.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 270, 270, 0, 0],
            opacity: [1, 0.25, 0.25, 0.25, 1],
            borderRadius: ['25%', '25%', '50%', '50%', '25%'],
          }}
          transition={{
            ease: 'linear',
            duration: 3.2,
            repeat: Infinity,
          }}
          className="absolute w-30 h-30 border-8 border-opacity-24"
          style={{ borderColor: 'rgba(0, 0, 0, 0.24)' }}
        />
      </>
    </div>
  );
}
