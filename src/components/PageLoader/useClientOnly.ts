import { useRef, useState, useEffect } from 'react';

/** Returns true if rendered on the client, false if rendered on the server. */
export const useClientOnly = (): boolean => {
  const [initialLoad, setInitialLoad] = useState(false);
  // const initialLoadRef = useRef<boolean>(true);
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [initialLoad]);
  return !initialLoad;
};
