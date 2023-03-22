import { useEffect, useState } from 'react';

export const useScrollY = (): number => {
  const [scrollY, setScrollY] = useState(0);
  const isBrowser = typeof window !== 'undefined';

  const handleScroll = (): void => {
    const value = isBrowser ? window.scrollY : 0;
    setScrollY(value);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};
