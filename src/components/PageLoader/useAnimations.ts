import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  circleDrawVariants: Variants;
  fadeInVariants: Variants;
  containerOutVariants: Variants;
} => {
  const reduceMotion = useReducedMotion();
  const circleDrawVariants: Variants = {
    start: {
      ...(reduceMotion
        ? {
            opacity: 0,
            pathLength: 1,
          }
        : {
            opacity: 1,
            pathLength: 0,
          }),
    },
    finish: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.9,
        type: 'keyframes',
        ease: 'linear',
      },
    },
  };
  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.2, duration: 0.6 },
    },
  };
  const containerOutVariants: Variants = {
    start: { opacity: 1, scale: 1 },
    exit: {
      ...(reduceMotion ? {} : { scale: 0.1 }),
      opacity: 0,
      transition: {
        delay: 2.4,
        duration: 0.3,
      },
    },
  };
  return {
    circleDrawVariants,
    fadeInVariants,
    containerOutVariants,
  };
};
