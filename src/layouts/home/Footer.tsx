import React from 'react';
import { Separator } from '@/components/ui/separator';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
  FileQuestion,
} from 'lucide-react';
import siteMetadata from '@/config/siteMetadata';
import Link from 'next/link';
import { FooterPaths } from '@/routes/paths';

type FooterLinkItem = { name: string; link: string };
type FooterLinkColumn = { headline: string; items: FooterLinkItem[] };

export const menuItems: FooterLinkColumn[] = [
  {
    headline: 'Product/Services',
    items: [
      { name: 'Web Development', link: FooterPaths.productServices.WebDevelopment },
      { name: 'Mobile Development ', link: FooterPaths.productServices.MobileDevelopment },
      { name: 'UI/UX Design', link: FooterPaths.productServices.UIUXDesign },
      { name: 'Custom Solutions', link: FooterPaths.productServices.CustomSolutions },
    ],
  },
  {
    headline: 'Resources',
    items: [
      { name: 'Case Studies', link: FooterPaths.resources.CaseStudies },
      { name: 'E-books & Guides', link: FooterPaths.resources.EbooksGuides },
      { name: 'Webinars', link: FooterPaths.resources.Webinars },
      { name: 'Blog', link: FooterPaths.resources.Blog },
    ],
  },
  {
    headline: 'Company',
    items: [
      { name: 'About Us', link: FooterPaths.company.AboutUs },
      { name: 'Team', link: FooterPaths.company.Team },
      { name: 'Careers', link: FooterPaths.company.Careers },
      { name: 'Press & Media', link: FooterPaths.company.PressMedia },
    ],
  },
  {
    headline: 'Support',
    items: [
      { name: 'Documentation', link: FooterPaths.support.Documentation },
      { name: 'API Reference', link: FooterPaths.support.APIReference },
      { name: 'Community Forum', link: FooterPaths.support.CommunityForum },
      { name: 'Contact Support', link: FooterPaths.support.ContactSupport },
    ],
  },
  {
    headline: 'Legal',
    items: [
      { name: 'Privacy Policy', link: FooterPaths.legal.PrivacyPolicy },
      { name: 'Terms of Service', link: FooterPaths.legal.TermsofService },
      { name: 'Cookie Policy', link: FooterPaths.legal.CookiePolicy },
      { name: 'GDPR Compliance', link: FooterPaths.legal.GDPRCompliance },
    ],
  },
];

const socialLinks = Object.entries(siteMetadata.socials).map(([key, value]) => ({
  icon: getIcon(key),
  link: value,
  name: key,
}));

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {menuItems.map((column, index) => (
            <div key={index} className="col-span-1">
              <h3 className="font-bold text-white mb-4">{column.headline}</h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.link} className="hover:text-white transition-colors duration-200">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <address className="not-italic space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>{siteMetadata.contactInfo.address}</span>
              </p>
              <p className="flex items-center ">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <Link
                  href={`mailto:${siteMetadata.contactInfo.email}`}
                  className="hover:text-white transition-colors duration-200 "
                >
                  {siteMetadata.contactInfo.email}
                </Link>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                <Link
                  href={`tel:${siteMetadata.contactInfo.phone}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {siteMetadata.contactInfo.phone}
                </Link>
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {`2023 - ${new Date().getFullYear()} ${siteMetadata.title}`}. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.link}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={`Follow us on ${social.name}`}
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function getIcon(social: string) {
  switch (social) {
    case 'facebook':
      return Facebook;
    case 'x':
      return Twitter;
    case 'instagram':
      return Instagram;
    case 'youtube':
      return Youtube;
    case 'github':
      return Github;
    default:
      return FileQuestion;
  }
}
