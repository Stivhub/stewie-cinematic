import { useEffect } from 'react';
import { CustomCursor } from './components/core/CustomCursor';
import { CinematicIntro } from './components/core/CinematicIntro';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.hash && link.hash.startsWith('#') && link.pathname === window.location.pathname) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <CinematicIntro />
      <CustomCursor />
      
      {/* Global Grain Overlay for Cinematic Feel */}
      <div className="grain-overlay" />
      
      <Navbar />
      
      <main className="w-full flex flex-col relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
