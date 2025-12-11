// UNRAVEL Motion Tokens & Utilities

// Easing curves
export const easings = {
  power3: [0.65, 0, 0.35, 1] as const,
  spring: { type: 'spring' as const, stiffness: 100, damping: 15 },
  smooth: [0.43, 0.13, 0.23, 0.96] as const,
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

// Hero entry animations
export const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

// Stagger children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// Card hover animation
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -8,
    transition: { duration: 0.3 },
  },
};

// Button animations
export const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.18 } },
  tap: { scale: 0.95 },
};

// Fade up animation
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Scale fade animation
export const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

// Slide animations
export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };
  
  return {
    hidden: { opacity: 0, ...directions[direction] },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  };
};
