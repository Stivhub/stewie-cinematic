import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dim w-full py-20 px-margin-mobile md:px-margin-desktop border-t border-outline-variant/20 relative z-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-gutter max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-headline-lg text-headline-lg text-primary"
        >
          STEWIE
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6 items-center mt-8 md:mt-0"
        >
          {[
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abhimanyu-acharya-5047802b5/' },
            { name: 'GitHub', url: 'https://github.com/Stivhub' },
            { name: 'Twitter', url: '#' },
            { name: 'Mail', url: 'mailto:abhimanyuacharya36@gmail.com' }
          ].map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 outline-none interactable"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-label-caps text-label-caps text-on-surface-variant mt-8 md:mt-0 text-center md:text-left tracking-widest"
        >
          © {new Date().getFullYear()} STEWIE. CRAFTED WITH PRECISION.
        </motion.div>
      </div>
    </footer>
  );
};
