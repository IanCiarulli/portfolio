import { useEffect, useState } from 'react';

export function useResponsiveTechCount() {
  const [count, setCount] = useState(getCount(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      setCount(getCount(window.innerWidth));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return count;
}

function getCount(width: number) {
  if (width < 1024) return 6;
  if (width < 1184) return 4;
  return 5;
}
