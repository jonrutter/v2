import React from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { socialLinks } from '@/data/socialLinks';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const MobileNavDialog: React.FC<Props> = ({ open, onClose }) => {
  const { containerVariants, slideInVariants, popUpVariants, bgVariants } =
    useVariants();

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          static
          open={open}
          onClose={onClose}
          className="fixed inset-0 z-50"
        >
          {/* blurred background */}
          <m.div
            variants={bgVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 bg-indigo-900/20 backdrop-blur-sm z-0"
            aria-hidden
          />
          <m.nav
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs text-indigo-900 dark:text-white"
            data-testid="nav-dialog"
            transition={{
              type: 'keyframes',
              ease: 'easeInOut',
            }}
          >
            <Dialog.Panel className="absolute inset-0 bg-white dark:bg-indigo-900 overflow-y-auto overflow-x-hidden">
              {/* close button */}
              <div className="flex justify-end px-6 pt-5 pb-12">
                <button
                  className="p-2"
                  onClick={onClose}
                  aria-label="close the menu"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden />
                </button>
              </div>
              {/* page links */}
              <ul className="flex flex-col space-y-6 px-8 text-lg font-semibold">
                <m.li variants={slideInVariants}>
                  <Link to="/">Home</Link>
                </m.li>
                <m.li variants={slideInVariants}>
                  <Link to="/#about">About</Link>
                </m.li>
                <m.li variants={slideInVariants}>
                  <Link to="/portfolio">Portfolio</Link>
                </m.li>
                <m.li variants={slideInVariants}>
                  <Link to="/blog">Blog</Link>
                </m.li>
                <m.li variants={slideInVariants}>
                  <Link to="/#contact">Contact</Link>
                </m.li>
              </ul>
              {/* social links */}
              <ul className="px-6 py-12 flex flex-wrap -mt-4 -ml-8">
                {socialLinks.map(({ label, icon, url }) => (
                  <m.li
                    key={label}
                    className="mt-4 ml-8"
                    variants={popUpVariants}
                  >
                    <a
                      href={url}
                      aria-label={`link to my ${label}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block p-2"
                    >
                      {icon}
                    </a>
                  </m.li>
                ))}
              </ul>
              {/* gradient border */}
              <div className="absolute top-0 left-0 bottom-0 overflow-auto h-full w-px bg-gradient-to-b from-neon-400 to-pink-400" />
            </Dialog.Panel>
          </m.nav>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

type VariantsGroup = {
  containerVariants: Variants;
  slideInVariants: Variants;
  popUpVariants: Variants;
  bgVariants: Variants;
};

const useVariants = (): VariantsGroup => {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    closed: {
      ...(reduceMotion ? {} : { x: '100%' }),
      opacity: reduceMotion ? 0 : 1,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.3,
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: 0.4,
      },
    },
    exit: {
      ...(reduceMotion ? { opacity: 0 } : { x: '100%' }),
      transition: {
        delay: 0,
        duration: 0.3,
      },
    },
  };

  const slideInVariants = {
    closed: {
      opacity: 0,
      x: reduceMotion ? 0 : '25%',
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const popUpVariants = {
    closed: {
      scale: reduceMotion ? 1 : 0,
      opacity: 0,
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const bgVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  return {
    containerVariants,
    slideInVariants,
    popUpVariants,
    bgVariants,
  };
};
