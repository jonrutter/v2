import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  slideUp: Variants;
  container: Variants;
} => {
  const reduceMotion = useReducedMotion();
  const slideUp: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { y: '50%' }),
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'keyframes',
        ease: 'easeOut',
      },
    },
  };

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.45,
      },
    },
  };

  return { slideUp, container };
};
