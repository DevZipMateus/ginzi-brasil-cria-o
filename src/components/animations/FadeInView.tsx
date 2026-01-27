import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

export default function FadeInView({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  once = true,
}: FadeInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0,
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
