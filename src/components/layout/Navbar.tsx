import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Disciplines', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-md border-outline-variant/30 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto">
        {/* Brand */}
        <a href="#home" className="font-headline-lg text-headline-lg tracking-tighter text-primary interactable">
          STEWIE
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-500 ease-in-out interactable relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block px-6 py-2 border border-outline-variant hover:border-primary text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps rounded-sm interactable relative overflow-hidden group">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-background">Hire Me</span>
          <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
        </button>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden text-primary interactable flex flex-col gap-1.5 w-6"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`h-px w-full bg-primary transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-px w-full bg-primary transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-px w-full bg-primary transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface-dim/95 backdrop-blur-lg border-b border-outline-variant/30 flex flex-col items-center py-8 gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors duration-300 tracking-widest interactable"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 px-8 py-3 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-background transition-colors duration-300 interactable">
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
