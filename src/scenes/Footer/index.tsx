import React from 'react';
import { links } from '@/data/socialLinks';

/** Renders the site footer */
export const Footer = () => (
  <footer className="w-full px-6 pb-10 relative border-t border-transparent">
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-400 to-pink-400" />
    <p className="mt-16 text-center font-serif">
      <span className="opacity-80">Copyright {new Date().getFullYear()}, </span>
      <a
        href={links.github}
        target="_blank"
        rel="noreferrer"
        className="opacity-80 hover:opacity-100 transition-opacity"
      >
        Jon Rutter
      </a>
    </p>
  </footer>
);
