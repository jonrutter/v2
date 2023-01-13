import React from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, m } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { socialLinks } from '@/data/socialLinks';
import { useAnimations } from './useAnimations';

// TODO: close dialog when link pressed

type Props = {
  open: boolean;
  onClose: () => void;
};

export const MobileNavDialog: React.FC<Props> = ({ open, onClose }) => {
  const { container, slideIn, popUp, bgFade } = useAnimations();

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
            variants={bgFade}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 bg-indigo-900/20 backdrop-blur-sm z-0"
            aria-hidden
          />
          <m.nav
            variants={container}
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
                <m.li variants={slideIn}>
                  <Link to="/">Home</Link>
                </m.li>
                <m.li variants={slideIn}>
                  <Link to="/#about">About</Link>
                </m.li>
                <m.li variants={slideIn}>
                  <Link to="/portfolio">Portfolio</Link>
                </m.li>
                <m.li variants={slideIn}>
                  <Link to="/blog">Blog</Link>
                </m.li>
                <m.li variants={slideIn}>
                  <Link to="/#contact">Contact</Link>
                </m.li>
              </ul>
              {/* social links */}
              <ul className="px-6 py-12 flex flex-wrap -mt-4 -ml-8">
                {socialLinks.map(({ label, icon, url }) => (
                  <m.li key={label} className="mt-4 ml-8" variants={popUp}>
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
