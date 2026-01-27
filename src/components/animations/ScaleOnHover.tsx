import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
}

export default function ScaleOnHover({
  children,
  className = '',
  scale = 1.02,
  lift = 8,
}: ScaleOnHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        y: -lift,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
}
