import type { Variants } from 'framer-motion';

/*
Credit to Bassem Allani (https://medium.com/next-generation-web/create-a-dark-mode-toggle-micro-interaction-like-a-pro-279305e9c2) for the idea for this animation
*/

// constants.ts
const transition = {
  type: 'spring',
  stiffness: 200,
  damping: 10,
};

export const useAnimations = (): {
  sunIcon: Variants;
  moonIcon: Variants;
  sunRays: Variants;
  sunCore: Variants;
} => {
  const moonIcon: Variants = {
    initial: { scale: 0.6, rotate: 90 },
    animate: { scale: 1, rotate: 0 },
    whileTap: { scale: 0.95, rotate: 15 },
    transition,
  };

  const sunIcon: Variants = {
    whileTap: { scale: 0.95, rotate: 15 },
    transition,
  };

  const sunRays = {
    initial: { rotate: 45 },
    animate: { rotate: 0, transition },
    transition,
  };
  const sunCore = {
    initial: { scale: 1.5 },
    animate: { scale: 1, transition },
    transition,
  };
  return {
    moonIcon,
    sunIcon,
    sunRays,
    sunCore,
  };
};
