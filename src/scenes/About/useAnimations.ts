import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  container: Variants;
  popUp: Variants;
  skillContainer: Variants;
  slideRight: Variants;
  fadeIn: Variants;
} => {
  const reduceMotion = useReducedMotion();

  const skillContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };
  const popUp: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { scale: 0 }),
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const slideRight: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { x: '-25%' }),
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeIn: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const container: Variants = {
    hidden: {
      opacity: 0,
      ...(reduceMotion ? {} : { y: 64 }),
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

  return {
    skillContainer,
    popUp,
    slideRight,
    container,
    fadeIn,
  };
};
