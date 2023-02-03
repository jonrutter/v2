import React, { useState, useEffect, useRef } from 'react';
import type { PageProps } from 'gatsby';
import { m, AnimatePresence } from 'framer-motion';
import { useAnimations } from './useAnimations';

// types
type AnimationProps = {
  onLoadingComplete: () => void;
};

export const AnimatedLogo: React.FC<AnimationProps> = ({
  onLoadingComplete,
}) => {
  const { fadeInVariants, circleDrawVariants, containerOutVariants } =
    useAnimations();
  return (
    <m.svg
      width="96"
      height="96"
      version="1.1"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      variants={containerOutVariants}
      initial="start"
      animate="exit"
      onAnimationComplete={onLoadingComplete}
    >
      <m.circle
        strokeWidth="4"
        cx="50%"
        cy="50%"
        r="46"
        className="origin-center -rotate-90 stroke-neon-400 fill-grey-900"
        variants={circleDrawVariants}
        initial="start"
        animate="finish"
        strokeLinecap="round"
      />
      {/* j dot */}
      <m.circle
        r="3.7"
        cx="38.796"
        cy="20.124"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="fill-neon-400"
      />
      {/* j line */}
      <m.line
        className="stroke-neon-400"
        x1="38.796"
        y1="32.376"
        x2="38.796"
        y2="78.36"
        strokeWidth="7.4"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      />
      {/* r dot */}
      <m.circle
        className="fill-neon-400"
        r="6.5"
        cx="66.1"
        cy="38.914"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      />
      {/* r line */}
      <m.line
        className="stroke-neon-400"
        x1="55.764"
        y1="32.376"
        x2="55.764"
        y2="62.552"
        strokeWidth="7.4"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      />
    </m.svg>
  );
};

type Props = {
  location: PageProps['location'];
  children: React.ReactNode;
};

/**
 * Wraps all page elements. Intercepts requests to '/', displaying a loading animation on the initial page load.
 */
export const PageLoader: React.FC<Props> = ({ location, children }) => {
  const initialRef = useRef(true);
  const [loading, setLoading] = useState<boolean>(
    location.pathname === '/' || initialRef.current
  );
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const setLoadingDone = () => {
    setLoading(false);
    setHasLoaded(true);
  };

  useEffect(() => {
    initialRef.current = false;
    if (location.pathname === '/' && !hasLoaded) {
      setLoading(true);
    }
  }, [location.pathname, hasLoaded]);

  return (
    <>
      <AnimatePresence>
        {loading ? (
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
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0 }}
            >
              <AnimatedLogo onLoadingComplete={setLoadingDone} />
            </m.div>
          </m.div>
        ) : (
          <m.div
            key="content-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
