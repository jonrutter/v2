import React from 'react';
import { Link } from 'gatsby';
import { Logo } from '@/components/Logo';
import { socialLinks } from '@/data/socialLinks';
import { ColorModeSwitch } from '@/components/ColorModeSwitch';
import { MobileNav } from './MobileNav';
import { m, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// TODO: add blog dropdown once blog functionality is added
// TODO: consider using custom calculated delays instead of staggerChildren, because staggerChildren will wait for hidden elements (thus creating a huge delay on small screens)

/** Renders the site header */
export const Header = () => {
  const { containerVariants, slideDownVariants, popUpVariants } = useVariants();

  return (
    <>
      <header className="w-full max-w-full flex justify-center items-center px-6 fixed top-0 left-0 right-0 bg-indigo-50 dark:bg-indigo-900 transition-colors z-40">
        <div className="w-full max-w-7xl py-4 flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex justify-center items-center"
          >
            <>
              <nav className="hidden md:flex justify-between items-center text-xl">
                {/* social links */}
                <ul
                  className="hidden lg:flex justify-center items-center space-x-4 text-lg ml-20"
                  key="social-links"
                >
                  {socialLinks.map(({ label, icon, url }) => (
                    <m.li key={label} variants={popUpVariants}>
                      <a
                        href={url}
                        aria-label={`link to my ${label}`}
                        target="_blank"
                        rel="noreferrer"
                        className="opacity-80 hover:opacity-100 transition-opacity inline-block p-2"
                      >
                        {icon}
                      </a>
                    </m.li>
                  ))}
                </ul>
                {/* site links */}
                <ul
                  className="flex justify-center items-center space-x-6 lg:space-x-8 text-base font-semibold ml-20"
                  key="site-links"
                >
                  <m.li variants={slideDownVariants}>
                    <Link
                      to="/"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      Home
                    </Link>
                  </m.li>
                  <m.li variants={slideDownVariants}>
                    <Link
                      to="/#about"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      About
                    </Link>
                  </m.li>
                  <m.li variants={slideDownVariants}>
                    <Link
                      to="/portfolio"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      Portfolio
                    </Link>
                  </m.li>
                  <m.li variants={slideDownVariants}>
                    <Link
                      to="/blog"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      Blog
                    </Link>
                  </m.li>
                  <m.li variants={slideDownVariants}>
                    <Link
                      to="/#contact"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      Contact
                    </Link>
                  </m.li>
                </ul>
              </nav>
            </>
            <m.div className="flex items-center ml-20" variants={popUpVariants}>
              <ColorModeSwitch />
            </m.div>
            <m.div
              className="flex items-center ml-4 lg:hidden"
              variants={popUpVariants}
            >
              <MobileNav />
            </m.div>
          </m.div>
        </div>
        <div className="h-px absolute bottom-0 left-0 right-0 bg-gradient-to-r from-neon-400 to-pink-400" />
      </header>
      <div className="pt-20" />
    </>
  );
};

type VariantsGroup = {
  slideDownVariants: Variants;
  containerVariants: Variants;
  popUpVariants: Variants;
};

const useVariants = (): VariantsGroup => {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const slideDownVariants: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { y: '-100%' }),
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  const popUpVariants: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { scale: 0 }),
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  return { slideDownVariants, containerVariants, popUpVariants };
};
