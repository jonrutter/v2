import React from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, m } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { socialLinks } from '@/data/socialLinks';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const MobileNavDialog: React.FC<Props> = ({ open, onClose }) => (
  <AnimatePresence>
    {open && (
      <Dialog
        static
        open={open}
        onClose={onClose}
        className="fixed inset-0 z-50 will-change-contents"
      >
        {/* blurred background */}
        <m.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.1,
            },
          }}
          transition={{
            type: 'keyframes',
            ease: 'easeInOut',
          }}
          className="fixed inset-0 bg-indigo-900/20 backdrop-blur-sm z-0"
          aria-hidden
        />
        <m.nav
          initial={{
            x: '100%',
          }}
          animate={{
            x: '0%',
            transition: {
              delay: 0.1,
              duration: 0.4,
            },
          }}
          transition={{
            type: 'keyframes',
            ease: 'linear',
          }}
          exit={{
            x: '100%',
            transition: {
              delay: 0,
              duration: 0.3,
            },
          }}
          className="fixed inset-0 text-indigo-900 dark:text-white"
          data-testid="nav-dialog"
        >
          <Dialog.Panel className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white dark:bg-indigo-900 overflow-y-auto overflow-x-hidden">
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
            {/* social links */}
            <ul className="px-6 py-12 flex flex-wrap -mt-4 -ml-8">
              {socialLinks.map(({ label, icon, url }) => (
                <li key={label} className="mt-4 ml-8">
                  <a
                    href={url}
                    aria-label={`link to my ${label}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block p-2"
                  >
                    {icon}
                  </a>
                </li>
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
