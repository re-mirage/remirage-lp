import { Query, toQuery } from '@/utils/formatString';

export const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/admin',
  LANDING: '/',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`,
    verify: `${ROOTS.AUTH}/verify`,
    register: `${ROOTS.AUTH}/register`,
    newPassword: `${ROOTS.AUTH}/new-password`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    projects: {
      root: () => `${ROOTS.DASHBOARD}/projects`,
      project: (project: string) => `${ROOTS.DASHBOARD}/projects/${project}`,
    },

    blog: {
      root: () => `${ROOTS.DASHBOARD}/articles`,
      article: (article: string) => `${ROOTS.DASHBOARD}/articles/${article}`,
    },
    contacts: {
      root: () => `${ROOTS.DASHBOARD}/contacts`,
      chat: (id: string) => `${ROOTS.DASHBOARD}/contacts/${id}`,
    },

    users: {
      root: () => `${ROOTS.DASHBOARD}/users`,
      user: (member: string) => `${ROOTS.DASHBOARD}/users/${member}`,
    },
    settings: {
      root: () => `${ROOTS.DASHBOARD}/settings`,
      profile: () => `${ROOTS.DASHBOARD}/profile`,
    },
  },
  landing: {
    home: {
      root: () => `${ROOTS.LANDING}`,
    },
    team: {
      root: (query?: Query) => `${ROOTS.LANDING}/team${toQuery(query)}`,
      member: (member: string) => `${ROOTS.LANDING}/team/${member}`,
    },
    projects: {
      root: (query?: Query) => `${ROOTS.LANDING}/projects${toQuery(query)}`,
      project: (project: string) => `${ROOTS.LANDING}/projects/${project}`,
    },
    solution: {
      root: (query?: Query) => `${ROOTS.LANDING}/solution${toQuery(query)}`,
    },
    resources: {
      root: (query?: Query) => `${ROOTS.LANDING}/resources${toQuery(query)}`,
    },
    pricing: {
      root: (query?: Query) => `${ROOTS.LANDING}/pricing${toQuery(query)}`,
    },
    blog: {
      root: (query?: Query) => `${ROOTS.LANDING}/blog${toQuery(query)}`,
      article: (article: string) => `${ROOTS.LANDING}/blog/${article}`,
    },
    contact: {
      root: (query?: Query) => `${ROOTS.LANDING}/contact${toQuery(query)}`,
    },
  },
};
