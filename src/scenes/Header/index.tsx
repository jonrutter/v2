import React from 'react';
import { Link } from 'gatsby';
import { Logo } from '@/components/Logo';
import { socialLinks } from '@/data/socialLinks';
import { ColorModeSwitch } from '@/components/ColorModeSwitch';
import { MobileNav } from './MobileNav';

// TODO: add blog dropdown once blog functionality is added

/** Renders the site header */
export const Header = () => (
  <>
    <header className="w-full max-w-full flex justify-center items-center px-6 fixed top-0 left-0 right-0 bg-indigo-50 dark:bg-indigo-900 transition-colors z-40">
      <div className="w-full max-w-7xl py-4 flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="flex justify-center items-center">
          <nav className="hidden md:flex justify-between items-center text-xl">
            {/* social links */}
            <ul className="hidden lg:flex justify-center items-center space-x-4 text-lg ml-20">
              {socialLinks.map(({ label, icon, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    aria-label={`link to my ${label}`}
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-80 hover:opacity-100 transition-opacity inline-block p-2"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
            {/* site links */}
            <ul className="flex justify-center items-center space-x-6 lg:space-x-8 text-base font-semibold ml-20">
              <li>
                <Link
                  to="/"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/#contact"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
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
