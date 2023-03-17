import React from 'react';
import { Logo } from '@/components/Logo';
import { navLinks } from '@/data/navLinks';
import { ColorModeSwitch } from '@/components/ColorModeSwitch';
import { NavDrawer } from './NavDrawer';
import { NavLink } from './NavLink';

// TODO: add blog dropdown once blog functionality is added

type Props = {
  route: string;
};

/** Renders the site header */
export const Header: React.FC<Props> = ({ route }) => {
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
              <ul className="flex justify-center items-center space-x-4 lg:space-x-6 ml-20">
                {navLinks.map(({ label, url }) => (
                  <NavLink key={url} href={url} selected={route === url}>
                    {label}
                  </NavLink>
                ))}
              </ul>
            </nav>
            <div className="flex items-center ml-20">
              <ColorModeSwitch />
            </div>
            <div className="flex items-center ml-4">
              <NavDrawer route={route} />
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
