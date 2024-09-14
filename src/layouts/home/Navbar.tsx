'use client'

import { useState, useEffect } from 'react'
import { ModeToggle } from '@/components/buttons/ModeToggle'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/buttons/button'
import Logo from '@/components/logo/Logo'
import Stack from '@/components/containers/Stack'
import { paths } from '@/routes/paths'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const navigation = [
  { title: 'Projects', href: paths.landing.projects.root() },
  { title: 'Team', href: paths.landing.team.root() },
  { title: 'Blog', href: paths.landing.blog.root() },
  { title: 'Solution', href: paths.landing.solution.root() },
  { title: 'Resources', href: paths.landing.resources.root() },
  { title: 'Pricing', href: paths.landing.pricing.root() },
  { title: 'Contact Us', href: paths.landing.contact.root() },
]

export default function Navbar() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 shadow-lg'
        : 'bg-transparent'
        } md:py-4`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Stack spacing={5}>
              <Link href="/" className="flex-shrink-0">
                <Logo />
              </Link>
              <div className="hidden lg:flex lg:items-center lg:space-x-4">
                <NavigationMenu>
                  <NavigationMenuList className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink asChild>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              href={item.href}
                              className="text-sm font-medium dark:text-white transition-colors hover:text-primary relative  hover:w-full"
                            >
                              {item.title}
                              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all hover:w-full"></span>
                            </Link>
                          </motion.div>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </Stack>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="default"
                size="sm"
                onClick={() => router.push('/contact')}
                className="bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
              >
                Schedule a consultation
              </Button>
            </motion.div>
            {/* <ModeToggle /> */}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-primary/20 transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-primary/20 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      router.push('/contact')
                      setMobileMenuOpen(false)
                    }}
                    className="w-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
                  >
                    Schedule a consultation
                  </Button>
                </motion.div>
              </div>
              {/* <div className="mt-3 flex justify-center">
                <ModeToggle />
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}