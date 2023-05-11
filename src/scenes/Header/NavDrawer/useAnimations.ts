import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  drawer: Variants;
  slideIn: Variants;
  popUp: Variants;
  bgFade: Variants;
} => {
  const reduceMotion = useReducedMotion();

  const drawer: Variants = {
    closed: {
      ...(reduceMotion ? {} : { x: '100%' }),
      opacity: reduceMotion ? 0 : 1,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: 0.4,
        type: 'spring',
        stiffness: 170,
        damping: 26,
      },
    },
    exit: {
      ...(reduceMotion ? { opacity: 0 } : { x: '100%' }),
      transition: {
        delay: 0,
        type: 'spring',
        stiffness: 250,
        damping: 26,
      },
    },
  };

  const slideIn = {
    closed: {
      opacity: 0,
      x: reduceMotion ? 0 : '150%',
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 170,
        damping: 26,
      },
    },
  };

  const popUp = {
    closed: {
      scale: reduceMotion ? 1 : 0,
      opacity: 0,
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const bgFade = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  return {
    drawer,
    slideIn,
    popUp,
    bgFade,
  };
};
