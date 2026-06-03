import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  return (
    <section id="about" ref={containerRef} className="relative bg-background max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-4 md:grid-cols-12 gap-gutter overflow-hidden">
      
      {/* Abstract Atmosphere for this section */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,26,26,0.4)_0%,rgba(13,13,13,0)_70%)] opacity-60 mix-blend-screen" />

      {/* Left Column: Visual Anchor */}
      <div className="col-span-4 md:col-span-5 flex flex-col justify-start z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="w-full aspect-[3/4] bg-surface-dim border border-outline-variant/30 relative overflow-hidden group interactable"
        >
          <motion.img 
            style={{ y: imgY }}
            alt="Developer workspace" 
            className="w-full h-[120%] object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAUkNlca3nJvzm62xYpw4nwXnIED0mA0jRXH7FL-Cx8jSsnj71Iih0UO2Wc4FFY31m_PoWt22Kd5s58jtI80CjIHEK3SVqOIZA_4WpGXf-LlfY-974cLekUTPG6SBP06U4wJmhMF8FS0tPq8ijz48wqab3CR1B6mnaBprX1E_Z34Z4LADiRmyCo90u4mLfwkx4Svf0jjkNEkGQgmKWpcOyMqalxo9AsHmvs36kX2TJoj8KR1uTQfwZHHYbSeXNOWfCgdFrNVd2Lwc9" 
          />
          <div className="absolute inset-0 border border-primary/30 m-4 pointer-events-none transition-all duration-700 group-hover:m-2"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <div className="w-12 h-px bg-primary/50"></div>
          <span className="font-label-caps text-label-caps text-primary tracking-widest">THE PHILOSOPHY</span>
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-headline-lg text-headline-lg mt-4 text-on-surface"
        >
          Functional, Performant,<br/>Thoughtful.
        </motion.h3>
      </div>

      {/* Right Column: Story */}
      <div className="col-span-4 md:col-span-6 md:col-start-7 flex flex-col justify-center mt-12 md:mt-0 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="font-display-lg-mobile md:font-display-lg text-on-surface mb-8 leading-tight"
        >
          Forging Digital<br/>Experiences.
        </motion.h2>

        <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
          {[
            "I approach web development as a discipline of continuous refinement. Like a blade folded numerous times to achieve perfect strength and sharpness, my code is written with lethal precision. I believe that true elegance in design lies not in adding more, but in removing the unnecessary until only the essential remains.",
            "My journey began with a simple curiosity for how things work, which quickly evolved into a passion for architecting systems that are both robust and beautiful. I specialize in building performant user interfaces that feel tactile and responsive, avoiding superficial trends in favor of timeless usability.",
            "Looking ahead, my ambition is to lead technical projects that require a delicate balance of complex engineering and flawless user experience. I am driven by the quiet satisfaction of solving difficult problems and leaving behind digital artifacts that stand the test of time."
          ].map((text, idx) => (
            <motion.p 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Wind Guide Connecting Sections */}
        <div className="mt-20 flex justify-center md:justify-start w-full relative h-24">
          <motion.div 
            animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-[60px] bg-gradient-to-b from-transparent via-primary to-transparent absolute top-0"
          />
        </div>
      </div>
    </section>
  );
};
