import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Paintbrush, FileCode, Braces, PenTool, Smartphone, Bot, Globe, Scissors, Video } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'React', desc: 'Component-driven architecture and state management.' },
  { icon: Paintbrush, title: 'Tailwind CSS', desc: 'Utility-first styling for rapid, consistent UI development.' },
  { icon: FileCode, title: 'JavaScript', desc: 'The core language of the web. DOM manipulation and logic.' },
  { icon: Braces, title: 'TypeScript', desc: 'Static typing for robust, scalable applications.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Crafting intuitive and aesthetically deliberate interfaces.' },
  { icon: Smartphone, title: 'Mobile Dev', desc: 'Responsive web and hybrid application development.' },
  { icon: Bot, title: 'AI Tools', desc: 'Leveraging artificial intelligence to accelerate workflows.' },
  { icon: Globe, title: 'Web Dev', desc: 'End-to-end realization of digital platforms.' },
  { icon: Scissors, title: 'Video Editing', desc: 'Crafting cinematic narratives through precise pacing and visual rhythm.' },
  { icon: Video, title: 'Videography', desc: 'Capturing the essence of moments with a focused lens and intentional composition.' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin-desktop py-section-gap relative z-10">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display-lg-mobile md:font-display-lg text-on-surface">The Disciplines</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-lg">
            Tools mastered through relentless practice and focused application.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block w-32 h-px bg-outline-variant origin-right"
        />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-surface-container-lowest border border-outline-variant/30 p-8 relative group cursor-pointer interactable overflow-hidden"
            >
              {/* Soft Gold Border Reveal */}
              <div className="absolute top-0 left-0 w-full h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Soft Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Icon className="text-primary w-8 h-8 mb-6 font-light group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
              <h4 className="font-headline-lg text-[24px] text-on-surface mb-2">{skill.title}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors duration-300">
                {skill.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
