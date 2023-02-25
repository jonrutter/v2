import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { navLinks } from '@/data/navLinks';
import { ColorModeSwitch } from '@/components/ColorModeSwitch';
import { NavDialog } from './NavDialog';

// TODO: add blog dropdown once blog functionality is added
// TODO: add link underline animation that tracks with the current page

/** Renders the site header */
export const Header = () => {
  return (
    <>
      <header className="w-full max-w-full flex justify-center items-center px-6 fixed top-0 left-0 right-0 bg-grey-50 dark:bg-grey-800 transition-colors z-40">
        <div className="w-full max-w-7xl py-4 flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="flex justify-center items-center">
            <nav className="hidden md:flex justify-between items-center">
              {/* site links */}
              <ul
                className="flex justify-center items-center space-x-4 lg:space-x-6 font-serif font-light ml-20 text-lg text-grey-700 dark:text-grey-100"
                key="site-links"
              >
                {navLinks.map(({ label, url }) => (
                  <li key={label}>
                    <Link
                      href={url}
                      className="p-1 hover:text-grey-800 focus:text-grey-800 dark:hover:text-white dark:focus:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center ml-20">
              <ColorModeSwitch />
            </div>
            <div className="flex items-center ml-4">
              <NavDialog />
            </div>
          </div>
        </div>
        {/* decoration */}
        <div className="h-px absolute bottom-0 left-0 right-0 bg-gradient-to-r from-neon-400 to-pink-400" />
      </header>
      <div className="pt-20" />
    </>
  );
};
