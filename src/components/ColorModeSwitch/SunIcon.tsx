import { m } from 'framer-motion';
import { useAnimations } from './useAnimations';

export const SunIcon = () => {
  const { sunIcon, sunRays, sunCore } = useAnimations();
  return (
    <m.svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key="sun"
      variants={sunIcon}
      whileTap="whileTap"
      style={{ originX: '50%', originY: '50%' }}
      className="h-5 w-5"
    >
      <m.circle
        cx="11.9998"
        cy="11.9998"
        r="5.75375"
        fill="currentColor"
        initial="initial"
        animate="animate"
        variants={sunCore}
      />
      <m.g variants={sunRays} initial="initial" animate="animate">
        <circle
          cx="3.08982"
          cy="6.85502"
          r="1.71143"
          transform="rotate(-60 3.08982 6.85502)"
          fill="currentColor"
        />
        <circle
          cx="3.0903"
          cy="17.1436"
          r="1.71143"
          transform="rotate(-120 3.0903 17.1436)"
          fill="currentColor"
        />
        <circle cx="12" cy="22.2881" r="1.71143" fill="currentColor" />
        <circle
          cx="20.9101"
          cy="17.1436"
          r="1.71143"
          transform="rotate(-60 20.9101 17.1436)"
          fill="currentColor"
        />
        <circle
          cx="20.9101"
          cy="6.8555"
          r="1.71143"
          transform="rotate(-120 20.9101 6.8555)"
          fill="currentColor"
        />
        <circle cx="12" cy="1.71143" r="1.71143" fill="currentColor" />
      </m.g>
    </m.svg>
  );
};
