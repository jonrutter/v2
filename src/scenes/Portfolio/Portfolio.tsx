import React from 'react';
import { PortfolioCard } from '@/components/PortfolioCard';
import { useAnimations } from './useAnimations';
import { m } from 'framer-motion';
import { Button } from '@/components/Button';
import { links } from '@/data/socialLinks';
import type { PortfolioItemType } from '@content/portfolio/types';

const StyledLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="hover:text-grey-800 focus:text-grey-800 dark:hover:text-white dark:focus:text-white transition-colors underline inline-flex items-baseline"
  >
    {children}
  </a>
);

export const Portfolio: React.FC<{ list: PortfolioItemType[] }> = ({
  list,
}) => {
  const { container, popUp } = useAnimations();

  return (
    <div className="w-full h-full min-h-[calc(100vh-5rem)] py-16 md:py-28">
      <div className="w-full max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <section className="max-w-xl lg:max-w-full mx-auto">
          <div className="flex lg:justify-center">
            <div className="mb-6 w-auto max-w-fit lg:text-center">
              <h1 className="text-4xl font-semibold font-serif md:text-5xl mb-4 inline-block text-grey-800 dark:text-white transition-colors">
                My portfolio
              </h1>
              {/* rainbow gradient underline */}
              <div
                className="h-[2px] bg-gradient-to-r from-neon-400 to-pink-400 w-2/3 lg:mx-auto"
                aria-hidden
              />
            </div>
          </div>
          <div>
            <p className="text-lg max-w-prose mx-auto mb-8">
              Here are a few of my projects. Feel free to check out my{' '}
              <StyledLink href={`${links.github}/?tab=repositories`}>
                GitHub
              </StyledLink>{' '}
              page for more examples of my work.
            </p>
          </div>
          <m.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'some' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[400px] mx-auto md:max-w-full mb-12"
          >
            {list.length <= 0
              ? null
              : list.map((item) => (
                  <m.div variants={popUp} key={item.id}>
                    <PortfolioCard {...item} />
                  </m.div>
                ))}
          </m.div>
          <div className="flex justify-center">
            <Button
              as="a"
              href={`${links.github}/?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              More projects
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
