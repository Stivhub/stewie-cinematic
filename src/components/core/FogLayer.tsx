import React from 'react';
import { motion } from 'framer-motion';

interface FogLayerProps {
  opacity?: number;
  className?: string;
}

export const FogLayer: React.FC<FogLayerProps> = ({ opacity = 0.5, className = '' }) => {
  return (
    <motion.div
      className={`absolute inset-[-50%] w-[200%] h-[200%] pointer-events-none z-10 ${className}`}
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(200, 200, 200, 0.02) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 60%, rgba(255, 255, 255, 0.015) 0%, transparent 60%)
        `,
        opacity,
      }}
      animate={{
        x: ['-5%', '5%'],
        y: ['-2%', '2%'],
      }}
      transition={{
        duration: 60,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  );
};
