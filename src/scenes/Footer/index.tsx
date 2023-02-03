import React from 'react';
import { links } from '@/data/socialLinks';

/** Renders the site footer */
export const Footer = () => (
  <footer className="w-full px-6 pb-10 relative border-t border-transparent">
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-400 to-pink-400" />
    <p className="mt-16 text-center font-serif text-grey-600 dark:text-grey-300 transition-colors">
      Copyright {new Date().getFullYear()},{' '}
      <a
        href={links.github}
        target="_blank"
        rel="noreferrer"
        className="hover:text-grey-800 focus:text-grey-800 dark:hover:text-white dark:focus:text-white transition-colors"
      >
        Jon Rutter
      </a>
    </p>
  </footer>
);
