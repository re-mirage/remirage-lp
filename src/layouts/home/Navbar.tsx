'use client';

import { useState } from 'react';
import { ModeToggle } from '@/components/buttons/ModeToggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/buttons/button';
import Logo from '@/components/logo/Logo';
import Stack from '@/components/containers/Stack';
import { paths } from '@/routes/paths';

const navigation = [
  { title: 'Projects', href: paths.landing.projects.root() },
  { title: 'Team', href: paths.landing.team.root() },
  { title: 'Solution', href: paths.landing.solution.root() },
  { title: 'Resources', href: paths.landing.resources.root() },
  { title: 'Pricing', href: paths.landing.pricing.root() },
  { title: 'Blog', href: paths.landing.blog.root() },
  { title: 'Contact Us', href: paths.landing.contact.root() },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:py-4">
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
                          <Link
                            href={item.href}
                            className="text-sm font-medium dark:text-white transition-colors hover:text-primary"
                          >
                            {item.title}
                          </Link>
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
            <Button variant="default" size="sm" onClick={() => router.push('/contact')}>
              Schedule a consultation
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="flex items-center px-5">
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  router.push('/contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full"
              >
                Schedule a consultation
              </Button>
            </div>
            <div className="mt-3 flex justify-center">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
