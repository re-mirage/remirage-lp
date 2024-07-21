import { Query, toQuery } from '@/utils/formatString';

interface Path {
  home: {
    root: () => string;
  };
  team: {
    root: (query?: Query) => string;
    member: (member: string) => string;
  };
  projects: {
    root: (query?: Query) => string;
    project: (project: string) => string;
  };
}

export const paths: Path = {
  home: {
    root: () => '/',
  },
  team: {
    root: (query) => `/team${toQuery(query)}`,
    member: (member) => `/team/${member}`,
  },
  projects: {
    root: (query) => `/projects${toQuery(query)}`,
    project: (project) => `/projects/${project}`,
  },
};

export const footerLinks = [
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
