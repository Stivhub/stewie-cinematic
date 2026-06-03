import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FogLayer } from '../core/FogLayer';
import { FloatingLeaves } from '../core/FloatingLeaves';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], ['0%', '30%']);
  const textY = useTransform(scrollY, [0, 1000], ['0%', '50%']);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-24 overflow-hidden bg-background">
      {/* Parallax Layer 1: Background Mountains */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity scale-[1.05]"
        style={{ 
          y: bgY,
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDK5RnGjiSmYX1ZYDhrcR1Ft-EcVBp01Rgo2cU3SzislibJRxoSaVabn2rhGQsAEFoE0SZWdt89M_l5Ti-H_bNBLnldV_cP-ITE599_DCemdOYS-OR8uzFlc1RQnxgxjMeuoK3wilIZ6FeO1I4604PSDlA-YzcIOc6Vc2KtcECM7eg4xvvc0FQc7frhpMicpu5VXzaW8QL0I65-elTfJKHo7TtsL2GQAdCdq-kfKAMrnAaY1A7pBkhivYjx6NMKsO6txiGxt4iS_McU')"
        }}
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-transparent to-background/50 pointer-events-none"></div>

      {/* Parallax Layer 2: Fog */}
      <FogLayer opacity={0.6} />

      {/* Parallax Layer 3: Leaves */}
      <FloatingLeaves />

      {/* Parallax Layer 4: Content */}
      <motion.div 
        className="relative z-20 w-full max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-4 md:grid-cols-12 gap-gutter"
        style={{ y: textY, opacity }}
      >
        <div className="col-span-4 md:col-span-8 md:col-start-2 flex flex-col gap-8 justify-center min-h-[512px]">
          <div className="flex flex-col gap-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.5, ease: [0.19, 1, 0.22, 1] }}
              className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface drop-shadow-lg tracking-wide"
            >
              迷えば、敗れる。
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.7, ease: [0.19, 1, 0.22, 1] }}
              className="font-headline-lg text-headline-lg text-primary tracking-wide"
            >
              Stewie — Developer, Builder, Creator.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.9, ease: [0.19, 1, 0.22, 1] }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl"
          >
            I build digital experiences that combine functionality, performance, and thoughtful design. Rooted in minimal aesthetics and lethal precision, every line of code is intentional.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4.1, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col sm:flex-row gap-6 mt-8"
          >
            <button className="px-8 py-4 border border-primary bg-background text-on-surface font-label-caps text-label-caps uppercase tracking-widest relative overflow-hidden group interactable">
              <span className="relative z-10 group-hover:text-surface-dim transition-colors duration-500">Explore My Work</span>
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
            </button>
            <button className="px-8 py-4 text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors duration-300 uppercase tracking-widest relative group flex items-center justify-center gap-2 interactable">
              <span>Contact Me</span>
              <span className="material-symbols-outlined text-[16px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward</span>
              <span className="absolute bottom-2 left-8 right-8 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 4.5 }}
        className="absolute bottom-12 left-margin-mobile md:left-margin-desktop z-20 flex flex-col items-center gap-4"
      >
        <span className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant origin-left -rotate-90 translate-y-8">SCROLL</span>
        <motion.div 
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-primary/80 to-transparent mt-8"
        />
      </motion.div>
    </section>
  );
};
