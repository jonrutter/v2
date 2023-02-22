type NavLink = {
  label: string;
  url: string;
};

export const links = {
  github: 'https://github.com/jonrutter',
  linkedin: 'https://www.linkedin.com/in/rutterjt/',
  codepen: 'https://codepen.io/jonrutter',
  mastodon: 'https://mstdn.social/@jonrutter',
};

export const navLinks: NavLink[] = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Portfolio', url: '/portfolio' },
  { label: 'Contact', url: '/contact' },
];
