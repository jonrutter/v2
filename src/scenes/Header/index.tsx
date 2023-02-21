import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { socialLinks } from '@/data/socialLinks';
import { navLinks } from '@/data/navLinks';
import { ColorModeSwitch } from '@/components/ColorModeSwitch';
import { MobileNav } from './MobileNav';

// TODO: add blog dropdown once blog functionality is added
// TODO: consider using custom calculated delays instead of staggerChildren, because staggerChildren will wait for hidden elements (thus creating a huge delay on small screens)

/** Renders the site header */
export const Header = () => {
  return (
    <>
      <header className="w-full max-w-full flex justify-center items-center px-6 fixed top-0 left-0 right-0 bg-grey-50 dark:bg-grey-800 transition-colors z-40">
        <div className="w-full max-w-7xl py-4 flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="flex justify-center items-center text-grey-600 dark:text-grey-300">
            <>
              <nav className="hidden md:flex justify-between items-center text-xl">
                {/* social links */}
                <ul
                  className="hidden lg:flex justify-center items-center space-x-4 text-lg ml-20"
                  key="social-links"
                >
                  {socialLinks.map(({ label, icon, url }) => (
                    <li key={label} className="inline-block">
                      <a
                        href={url}
                        aria-label={`link to my ${label}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-grey-800 focus:text-grey-800 dark:hover:text-white dark:focus:text-white transition-colors block p-2"
                      >
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
                {/* site links */}
                <ul
                  className="flex justify-center items-center space-x-4 lg:space-x-6 text-base font-semibold ml-20"
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
            </>
            <div className="flex items-center ml-20">
              <ColorModeSwitch />
            </div>
            <div className="flex items-center ml-4 lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
        <div className="h-px absolute bottom-0 left-0 right-0 bg-gradient-to-r from-neon-400 to-pink-400" />
      </header>
      <div className="pt-20" />
    </>
  );
};
