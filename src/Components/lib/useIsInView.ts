import { useEffect, useRef, useState } from 'react';

const useIsInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when the intersection status changes
      setIsInView(entry.isIntersecting);
    }, options); // Options can define root margin, threshold, etc.

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
};

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 1) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY;
    };

    const throttledUpdate = () => {
      requestAnimationFrame(updateScrollDirection);
    };

    window.addEventListener('scroll', throttledUpdate);
    return () => window.removeEventListener('scroll', throttledUpdate);
  }, [scrollDirection]);

  return scrollDirection;
};

export default useIsInView;
