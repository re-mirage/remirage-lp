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

type FooterProps = {
  footerLinks: FooterLinkColumn[];
};

export default function Footer({ footerLinks }: FooterProps) {
  return (
    <footer className="text-white p-6 md:p-8">
      <Separator className="my-8" />
      <div className="max-w-6xl mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
        {footerLinks.map((column, index) => (
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
