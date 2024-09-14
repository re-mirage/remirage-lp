'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGlobe, FaMobileAlt, FaHome, FaChartBar, FaVial, FaServer, FaChevronDown } from 'react-icons/fa'
import SectionHeading from '@/components/SectionHeading'

interface ServiceCategory {
  id: string
  title: string
  icon: React.ReactNode
  features: string[]
  color: string
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce Automation',
    icon: <FaGlobe className="w-6 h-6" />,
    features: ['Inventory management', 'Order processing', 'Customer analytics', 'Multi-platform integration'],
    color: '#3B82F6'
  },
  {
    id: 'banking',
    title: 'Mobile Banking',
    icon: <FaMobileAlt className="w-6 h-6" />,
    features: ['Goal tracking', 'Budget planning', 'Investment insights', 'Secure transactions'],
    color: '#10B981'
  },
  {
    id: 'realestate',
    title: 'Real Estate Platform',
    icon: <FaHome className="w-6 h-6" />,
    features: ['Property listings', 'Virtual tours', 'Document management', 'Market analysis'],
    color: '#F59E0B'
  },
  {
    id: 'datavis',
    title: 'Data Visualization',
    icon: <FaChartBar className="w-6 h-6" />,
    features: ['Interactive dashboards', 'Custom chart creation', 'Real-time data updates', 'Export capabilities'],
    color: '#8B5CF6'
  },
  {
    id: 'testing',
    title: 'Data Analysis & Testing',
    icon: <FaVial className="w-6 h-6" />,
    features: ['Automated testing', 'Statistical analysis', 'Data quality assurance', 'Predictive modeling'],
    color: '#EF4444'
  },
  {
    id: 'devops',
    title: 'DevOps & Architecture',
    icon: <FaServer className="w-6 h-6" />,
    features: ['CI/CD implementation', 'Cloud infrastructure', 'Microservices architecture', 'Performance optimization'],
    color: '#6366F1'
  },
]

export default function ExpertiseSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="container mx-auto py-16 px-4">

      <SectionHeading >
        Our Expertise
      </SectionHeading>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {serviceCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className="h-full cursor-pointer transition-all duration-300 bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden relative group"
              style={{
                boxShadow: `0 0 20px ${category.color}33, 0 0 60px ${category.color}1a, inset 0 0 20px ${category.color}1a`
              }}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              <CardHeader className="relative p-6">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-20"
                  style={{ background: `linear-gradient(135deg, ${category.color}33, transparent)` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="relative z-10 flex items-center justify-between"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="p-3 rounded-full"
                      style={{ background: `${category.color}33` }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        initial={{ color: '#fff' }}
                        animate={{ color: category.color }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.icon}
                      </motion.div>
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-white">
                      <motion.span
                        initial={{ backgroundSize: '0 2px' }}
                        animate={{ backgroundSize: '100% 2px' }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        style={{
                          backgroundImage: `linear-gradient(to right, ${category.color}, ${category.color})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: '0 100%'
                        }}
                      >
                        {category.title}
                      </motion.span>
                    </CardTitle>
                  </div>
                </motion.div>
              </CardHeader>
              <CardContent className="relative">
                <AnimatePresence>
                  {activeCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="mt-4 space-y-2">
                        {category.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center text-white/80"
                          >
                            <motion.svg
                              className="w-4 h-4 mr-2 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                                style={{ stroke: category.color }}
                              />
                            </motion.svg>
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.1 + 0.3 }}
                            >
                              {feature}
                            </motion.span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
              <motion.div
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: activeCategory === category.id ? 0 : 1,
                  y: activeCategory === category.id ? 10 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown
                  className="text-white opacity-50 animate-bounce"
                  style={{ color: category.color }}
                />
              </motion.div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${category.color}11, transparent 50%, ${category.color}11 100%)`,
                  pointerEvents: 'none'
                }}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}