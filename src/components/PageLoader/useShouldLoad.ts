import { useState, useEffect } from 'react';

export const useShouldLoad = (
  isClient: boolean,
  minVisits: number = 3
): { shouldLoad: boolean | undefined; handleLoadingComplete: () => void } => {
  const [shouldLoad, setShouldLoad] = useState<boolean | undefined>();
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const handleLoadingComplete = () => {
    setShouldLoad(false);
    setHasLoaded(true);
  };

  useEffect(() => {
    if (!isClient || hasLoaded) {
      return;
    } else {
      try {
        const persistedVisits = document.documentElement.dataset.visits;
        const numberVisits =
          persistedVisits === undefined ||
          Number.isNaN(parseInt(persistedVisits))
            ? 0
            : parseInt(persistedVisits);
        if (numberVisits > minVisits) {
          setShouldLoad(false);
          setHasLoaded(true);
        } else {
          setShouldLoad(true);
          setHasLoaded(false);
        }
      } catch {
        console.warn(
          'Warning: there was an error attempting to read the number of page visits from localStorage. This may result in unnecessary loading animations.'
        );
        setShouldLoad(true);
        setHasLoaded(false);
      }
    }
  }, [hasLoaded, isClient, minVisits]);
  return {
    shouldLoad,
    handleLoadingComplete: shouldLoad ? handleLoadingComplete : () => null,
  };
};
