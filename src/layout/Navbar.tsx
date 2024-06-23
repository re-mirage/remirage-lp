'use client';
import { ModeToggle } from '@/components/buttons/ModeToggle';
import { Button } from '@/components/buttons/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navigation = [
  {
    title: 'Product',
    href: '/product',
  },
  {
    title: 'Solution',
    href: '/solution',
  },
  {
    title: 'Ressource',
    href: '/ressource',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact US',
    href: '/contact',
  },
];
export default function Navbar() {
  const router = useRouter();

  return (
    <div className=" flex items-center justify-between px-10 py-4">
      <div className="flex items-center ">
        <Link href={'/'}>
          <Image src="/logo/logo.png" alt="logo" width={60} height={60} />
        </Link>
        <NavigationMenu className="ml-4">
          <NavigationMenuList className="flex space-x-4">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink href={item.href}>{item.title}</NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center space-x-4">
        <Button color="primary" className="p-6" onClick={() => router.push('/contact')}>
          Schedule a consultation.
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
