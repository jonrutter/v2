import React from 'react';
import { PortfolioCard } from '@/components/PortfolioCard';
import { usePortfolioQuery } from './usePortfolioQuery';
import { useAnimations } from './useAnimations';
import { m } from 'framer-motion';
import { Button } from '@/components/Button';
import { links } from '@/data/socialLinks';

export const Portfolio = () => {
  const portfolioItems = usePortfolioQuery();
  console.log(portfolioItems);
  const { container, popUp, fadeIn } = useAnimations();

  return (
    <div className="w-full h-full min-h-[calc(100vh-5rem)] py-20 md:py-36">
      <div className="w-full max-w-screen-xl mx-auto">
        <m.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'some' }}
          className="max-w-xl lg:max-w-full mx-auto"
        >
          <div className="flex justify-center">
            <m.div
              variants={fadeIn}
              className="mb-6 w-auto max-w-fit text-center"
            >
              <h2 className="text-4xl font-semibold font-serif md:text-5xl mb-4 inline-block text-grey-800 dark:text-white transition-colors">
                My portfolio
              </h2>
              {/* rainbow gradient underline */}
              <div
                className="h-[2px] bg-gradient-to-r from-neon-400 to-pink-400 w-2/3 mx-auto"
                aria-hidden
              />
            </m.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[400px] mx-auto md:max-w-full mb-12">
            {portfolioItems.map((item) => (
              <m.div variants={popUp} key={item.id}>
                <PortfolioCard {...item} />
              </m.div>
            ))}
          </div>
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
        </m.section>
      </div>
    </div>
  );
};
