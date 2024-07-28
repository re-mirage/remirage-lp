import { Separator } from '@/components/ui/separator';
import React from 'react';

type FooterLinkItem = {
  name: string;
  link: string;
};

type FooterLinkColumn = {
  headline: string;
  items: FooterLinkItem[];
};

export const menuItems: FooterLinkColumn[] = [
  {
    headline: 'Product',
    items: [
      { name: 'People', link: '#' },
      { name: 'Time Off', link: '#' },
      { name: 'Company', link: '#' },
      { name: 'Enterprise', link: '#' },
    ],
  },
  {
    headline: 'Resources',
    items: [
      { name: 'Documentation', link: '#' },
      { name: 'API Reference', link: '#' },
      { name: 'Support', link: '#' },
      { name: 'Pricing', link: '#' },
    ],
  },
  {
    headline: 'Company',
    items: [
      { name: 'About Us', link: '#' },
      { name: 'Careers', link: '#' },
      { name: 'Blog', link: '#' },
      { name: 'Press', link: '#' },
    ],
  },
  {
    headline: 'Legal',
    items: [
      { name: 'Privacy Policy', link: '#' },
      { name: 'Terms of Service', link: '#' },
      { name: 'Cookie Policy', link: '#' },
      { name: 'Compliance', link: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-white p-6 md:p-8">
      <Separator className="my-8" />
      <div className="max-w-6xl mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menuItems.map((column, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="text-lg font-semibold mb-4">{column.headline}</h2>
            <ul className="space-y-2">
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href={item.link}
                    className="hover:underline transition-colors duration-200 ease-in-out"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
