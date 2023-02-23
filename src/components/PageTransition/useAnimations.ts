import type { Variants } from 'framer-motion';

export const useAnimations = (): {
  main: Variants;
} => {
  const main: Variants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.2,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      transition: {
        duration: 0.2,
        type: 'keyframes',
        ease: 'easeInOut',
      },
    },
  };

  return {
    main,
  };
};
