import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    period: 'Year Zero',
    title: 'The First Strike',
    description: "Discovered the syntax. Written the first lines of crude logic. The understanding that the machine is an extension of the mind's intent began here.",
    align: 'left'
  },
  {
    period: 'Awakening',
    title: 'Mastery of Form',
    description: 'Shifted focus from mere function to aesthetic discipline. Understood layout, typography, and the rhythm of white space. The code became art.',
    align: 'right'
  },
  {
    period: 'Present Day',
    title: 'Architect of Silence',
    description: 'Leading complex architectures. Employing minimalism not as a style, but as a weapon against chaos. Building systems that are felt, not seen.',
    align: 'left'
  }
];

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto w-full py-section-gap relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <h2 className="font-display-lg-mobile md:font-display-lg text-on-surface">
          The Path.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl mx-auto">
          A discipline forged over time. Tracing the steps from a novice with a wooden sword to an architect of digital realms.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* The Blade (Center Line) */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-outline-variant to-transparent transform md:-translate-x-1/2 origin-top" 
        />

        {/* Timeline Nodes */}
        <div className="flex flex-col gap-16 md:gap-32 pl-12 md:pl-0">
          {milestones.map((milestone) => (
            <motion.div 
              key={milestone.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col md:flex-row items-center justify-between w-full group interactable"
            >
              <div className={`order-1 ${milestone.align === 'left' ? 'md:w-5/12 hidden md:block' : 'w-full md:w-5/12 md:text-right text-left md:pr-12'}`}>
                {milestone.align === 'right' && (
                  <>
                    <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest">{milestone.period}</span>
                    <h4 className="font-headline-lg text-[24px] md:text-[32px] text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">{milestone.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {milestone.description}
                    </p>
                  </>
                )}
              </div>

              {/* Marker */}
              <motion.div 
                whileHover={{ scale: 1.5, rotate: 90 }}
                transition={{ duration: 0.5 }}
                className={`z-20 flex items-center order-1 bg-surface-container-lowest shadow-[0_0_0_8px_var(--color-background)] w-4 h-4 border border-primary rotate-45 transform transition-colors duration-500 group-hover:bg-primary absolute left-[-2.75rem] md:left-1/2 md:-ml-2`}
              />

              <div className={`order-1 w-full md:w-5/12 text-left ${milestone.align === 'left' ? 'md:pl-12' : 'hidden md:block'}`}>
                {milestone.align === 'left' && (
                  <>
                    <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest">{milestone.period}</span>
                    <h4 className="font-headline-lg text-[24px] md:text-[32px] text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">{milestone.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {milestone.description}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
