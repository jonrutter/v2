import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { AnimatedLogo } from './AnimatedLogo';
import { useClientOnly } from './useClientOnly';
import { useShouldLoad } from './useShouldLoad';

type Props = {
  children: React.ReactNode;
};

/**
 * Wraps the entire app. Conditionally renders a loading animation before page load, depending on number of page visits stored in localStorage, and whether the page is being rendered on the server.
 */
export const PageLoader: React.FC<Props> = ({ children }: Props) => {
  const isOnClient = useClientOnly();
  const { shouldLoad, handleLoadingComplete } = useShouldLoad(isOnClient, 0); // currently disable the loading animation

  return (
    <AnimatePresence>
      {isOnClient && shouldLoad === false ? (
        <>{children}</>
      ) : (
        <m.div
          key="loader-animation-wrapper"
          className="fixed inset-0 h-full w-full overflow-hidden bg-grey-900
  flex justify-center items-center z-[100]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.3,
            },
          }}
        >
          {shouldLoad === true && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0 }}
            >
              <AnimatedLogo onLoadingComplete={handleLoadingComplete} />
            </m.div>
          )}
        </m.div>
      )}
    </AnimatePresence>
  );
};
