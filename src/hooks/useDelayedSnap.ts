import { useEffect, useState } from 'react';

export const useDelayedSnap = (delay: number = 200): boolean => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setEnabled(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return enabled;
};
