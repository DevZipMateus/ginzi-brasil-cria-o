import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxBackgroundProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
}

export default function ParallaxBackground({
  children,
  backgroundImage,
  backgroundColor,
  className = '',
  speed = 0.5,
  overlay = true,
}: ParallaxBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            y,
          }}
        />
      )}
      {backgroundColor && (
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{
            backgroundColor,
            y,
          }}
        />
      )}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
