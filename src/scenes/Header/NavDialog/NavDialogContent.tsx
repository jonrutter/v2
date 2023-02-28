import React from 'react';
import Link from 'next/link';
import { AnimatePresence, m } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { socialLinks } from '@/data/socialLinks';
import { navLinks } from '@/data/navLinks';
import { useAnimations } from './useAnimations';

type Props = {
  open: boolean;
  onClose: () => void;
  route: string;
};

/** Renders the slide-in navigation dialog. */
export const NavDialogContent: React.FC<Props> = ({ open, onClose, route }) => {
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
            className="fixed inset-0 bg-grey-800/70 z-0"
            aria-hidden
          />
          <m.nav
            variants={container}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs text-grey-800 dark:text-white"
            data-testid="nav-dialog"
            transition={{
              type: 'keyframes',
              ease: 'easeInOut',
            }}
          >
            <Dialog.Panel className="absolute inset-0 bg-white dark:bg-grey-800 overflow-y-auto overflow-x-hidden">
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
              <ul className="flex flex-col items-start space-y-5 px-8">
                {navLinks.map(({ label, url }) => (
                  <m.li
                    variants={slideIn}
                    key={label}
                    className="relative inline-block"
                  >
                    <Link
                      href={url}
                      onClick={onClose}
                      className="p-1 text-lg font-semibold"
                    >
                      {label}
                    </Link>
                    {route === url && (
                      <div className="h-[2px] absolute -bottom-px left-1 right-1 bg-current" />
                    )}
                  </m.li>
                ))}
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
