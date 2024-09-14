"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../logo/Logo';

const SectionLoadingAnimation = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-64 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-24 h-24 border-4 border-primary-300 rounded-full flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderRadius: ["50%", "40%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo className="w-8 h-8" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="w-36 h-36 border-4 border-purple-600 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -360],
            borderRadius: ["50%", "40%", "50%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};

export default SectionLoadingAnimation;