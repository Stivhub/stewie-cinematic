import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CinematicIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1.5s wait + 2s fade in text = 3.5s total before hiding overlay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
        >
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-display-lg text-display-lg text-on-surface tracking-widest text-center px-4"
          >
            迷えば、敗れる。
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
