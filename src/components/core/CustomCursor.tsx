import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary/20 rounded-full pointer-events-none z-[9999] backdrop-blur-[1px]"
        animate={{
          x: x - 8,
          y: y - 8,
          scale: isHovering ? 3 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000]"
        animate={{
          x: x - 4,
          y: y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0,
        }}
      />
    </>
  );
};
