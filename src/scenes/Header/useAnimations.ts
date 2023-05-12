import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  container: Variants;
  slideDown: Variants;
  popUp: Variants;
  wrapper: Variants;
} => {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const slideDown: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { y: '-100%' }),
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  const popUp: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { scale: 0 }),
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  const wrapper: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return { slideDown, container, popUp, wrapper };
};
