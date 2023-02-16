import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { PortfolioItemType } from '@content/portfolio/types';
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid';
import { GitHubIcon } from '../icons/GitHub';
import { AnimatePresence, m } from 'framer-motion';
import { useAnimations } from './useAnimations';
import { SkillButton } from '../SkillButton';

export const PortfolioCard: React.FC<PortfolioItemType> = ({
  title,
  description,
  skills,
  codeUrl,
  demoUrl,
  img,
  type,
}) => {
  // state to control the dialog
  const [open, setOpen] = useState<boolean>(false);
  // animations
  const { popUp, bgFade } = useAnimations();
  // helper funcs
  const openDetails = () => setOpen(true);
  const closeDetails = () => setOpen(false);

  return (
    <>
      <div>
        <button
          onClick={openDetails}
          aria-label={`show details for project ${title}`}
          className="shadow-md hover:opacity-80 transition-opacity"
        >
          {img === null ? (
            title
          ) : (
            <GatsbyImage
              image={img.childImageSharp.gatsbyImageData}
              alt={title}
            />
          )}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <Dialog
            as="div"
            open={open}
            onClose={closeDetails}
            className="fixed inset-0 z-50"
          >
            {/* blurred background */}
            <m.div
              variants={bgFade}
              initial="closed"
              animate="open"
              exit="exit"
              className="-z-10 fixed inset-0 bg-grey-800/20 backdrop-blur-sm"
            />
            {/* content wrappers */}
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-6">
                {/* colorful border */}
                {/* main dialog content */}
                <Dialog.Panel
                  className="bg-white dark:bg-grey-800 text-grey-800 dark:text-white w-full relative max-w-md p-4 lg:p-6 border-2"
                  style={{
                    borderImage: 'linear-gradient(90deg, #19C6FA, #DB4391) 1',
                  }}
                  as={m.div}
                  variants={popUp}
                  initial="closed"
                  animate="open"
                  exit="exit"
                >
                  {/* {img === null ? null : (
                    <div className="absolute inset-0">
                      <GatsbyImage
                        image={img.childImageSharp.gatsbyImageData}
                        alt={title}
                        className="absolute inset-0 -z-10 select-none pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-white/90 dark:bg-grey-800/90 backdrop-blur-sm z-0" />
                    </div>
                  )} */}

                  <div className="relative z-0">
                    <button aria-label="close details" onClick={closeDetails}>
                      <XMarkIcon aria-hidden className="w-6 h-6" />
                    </button>
                    <Dialog.Title
                      as="h3"
                      className="text-2xl lg:text-4xl font-serif font-semibold mb-4 lg:mb-6 text-center"
                    >
                      {title}
                    </Dialog.Title>
                    <p className="lg:text-lg mb-8 text-grey-600 dark:text-grey-300">
                      {description}
                    </p>
                    {skills.length > 0 && (
                      <ul className="flex flex-wrap mb-12 -ml-2 -mt-6">
                        {skills.map((skill) => (
                          <li key={skill.url} className="ml-4 mt-6">
                            <SkillButton {...skill} />
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex justify-end items-center space-x-4">
                      {codeUrl && (
                        <a
                          href={codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="view project code"
                          className="p-2"
                        >
                          <GitHubIcon aria-hidden className="w-6 h-6" />
                        </a>
                      )}
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="view project demo"
                        className="p-2"
                      >
                        <ArrowTopRightOnSquareIcon
                          aria-hidden
                          className="w-6 h-6"
                        />
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
