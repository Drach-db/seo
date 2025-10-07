export const NAVIGATION_LINKS = {
  HOME: 'https://marke.tel/',
  OFFSHORE_OUTSOURCING: 'https://marke.tel/',
  HOW_WE_RUN_TEAMS: 'https://marke.tel/how-we-run-teams',
  AI_FOR_BPOS: 'https://marke.tel/bpo',
  LEASE_YOUR_BPO: 'https://marke.tel/floors',
  ABOUT_US: 'https://marke.tel/about',
  CONTACT_US: 'https://marke.tel/contacts',
} as const;

export const NAVIGATION_ITEMS = [
  {
    label: 'Offshore Outsourcing',
    href: NAVIGATION_LINKS.OFFSHORE_OUTSOURCING,
  },
  {
    label: 'How We Run Teams',
    href: NAVIGATION_LINKS.HOW_WE_RUN_TEAMS,
  },
  {
    label: 'For partners',
    submenu: [
      {
        label: 'AI for BPOs',
        href: NAVIGATION_LINKS.AI_FOR_BPOS,
      },
      {
        label: 'Lease Your BPO',
        href: NAVIGATION_LINKS.LEASE_YOUR_BPO,
      },
    ],
  },
  {
    label: 'About Us',
    href: NAVIGATION_LINKS.ABOUT_US,
  },
  {
    label: 'Contact Us',
    href: NAVIGATION_LINKS.CONTACT_US,
  },
] as const;
