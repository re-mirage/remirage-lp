'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaCode, FaMobileAlt, FaServer, FaBrain, FaLink, FaComments } from 'react-icons/fa'
import SectionContainer from '@/components/containers/SectionContainer'

interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'finance',
    title: 'Financial Technology',
    description: 'Revolutionize your financial services with our innovative fintech solutions',
    icon: <FaCode className="w-12 h-12 text-primary" />,
    features: ['Banking systems', 'Blockchain integration', 'Cryptocurrency development', 'Secure payment gateways'],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Create powerful, user-friendly mobile applications for various industries',
    icon: <FaMobileAlt className="w-12 h-12 text-primary" />,
    features: ['iOS and Android development', 'Cross-platform solutions', 'Pilot communication apps', 'Performance optimization'],
  },
  {
    id: 'devops',
    title: 'DevOps & Performance',
    description: 'Streamline your development process and enhance application performance',
    icon: <FaServer className="w-12 h-12 text-primary" />,
    features: ['CI/CD pipeline setup', 'Infrastructure automation', 'Performance monitoring', 'Scalability solutions'],
  },
  {
    id: 'ai',
    title: 'AI & Analytics',
    description: 'Harness the power of artificial intelligence and data analytics for your business',
    icon: <FaBrain className="w-12 h-12 text-primary" />,
    features: ['Machine learning models', 'Predictive analytics', 'Natural language processing', 'Big data solutions'],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Cryptocurrency',
    description: 'Develop secure and innovative blockchain solutions and cryptocurrencies',
    icon: <FaLink className="w-12 h-12 text-primary" />,
    features: ['Custom blockchain development', 'Smart contract implementation', 'Cryptocurrency creation', 'Wallet development'],
  },
  {
    id: 'communication',
    title: 'Specialized Communication Systems',
    description: 'Build robust communication platforms for critical industries',
    icon: <FaComments className="w-12 h-12 text-primary" />,
    features: ['Pilot chat systems', 'Secure messaging platforms', 'Real-time communication tools', 'Industry-specific solutions'],
  },
]



const ServiceShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceCategories.length)
  }

  const prevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + serviceCategories.length) % serviceCategories.length)
  }

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(nextService, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovering])

  const currentService = serviceCategories[currentIndex]

  return (
    <SectionContainer>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Expertise
      </motion.h2>
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                className="w-32 h-32 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center"
              >
                {currentService.icon}
              </motion.div>
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold mb-4 text-white"
                >
                  {currentService.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 mb-6"
                >
                  {currentService.description}
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {currentService.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevService}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
        >
          <FiChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextService}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
        >
          <FiChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="mt-8 flex justify-center">
        {serviceCategories.map((service, index) => (
          <button
            key={service.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default ServiceShowcase