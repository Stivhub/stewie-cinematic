import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-center py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden bg-background">
      {/* Fog specifically for contact section to add atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)] opacity-50 mix-blend-screen" />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display-lg-mobile md:font-display-lg text-on-surface mb-6"
        >
          Send a Message
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant mb-12"
        >
          Whether for a collaboration, a question, or simply to say hello, I am always open to new connections. Let's create something extraordinary together.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col gap-8 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const message = (document.getElementById('message') as HTMLTextAreaElement).value;
            window.location.href = `mailto:abhimanyuacharya36@gmail.com?subject=Message from ${encodeURIComponent(name || 'a visitor')}&body=${encodeURIComponent(message)}`;
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 group">
              <label htmlFor="name" className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-primary transition-colors duration-300">Your Name</label>
              <input 
                type="text" 
                id="name"
                className="bg-transparent border-0 border-b border-outline-variant/50 focus:ring-0 focus:border-primary text-on-surface py-3 px-0 font-body-md transition-colors duration-300 interactable"
                placeholder="Miyamoto Musashi"
              />
            </div>
            <div className="flex flex-col gap-2 group">
              <label htmlFor="email" className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-primary transition-colors duration-300">Your Email</label>
              <input 
                type="email" 
                id="email"
                className="bg-transparent border-0 border-b border-outline-variant/50 focus:ring-0 focus:border-primary text-on-surface py-3 px-0 font-body-md transition-colors duration-300 interactable"
                placeholder="musashi@example.com"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 group">
            <label htmlFor="message" className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-primary transition-colors duration-300">Your Message</label>
            <textarea 
              id="message"
              rows={4}
              className="bg-transparent border-0 border-b border-outline-variant/50 focus:ring-0 focus:border-primary text-on-surface py-3 px-0 font-body-md transition-colors duration-300 interactable resize-none"
              placeholder="How can we build the future?"
            />
          </div>

          <div className="mt-8 flex justify-center md:justify-end">
            <button 
              type="submit"
              className="px-12 py-4 border border-primary text-on-surface font-label-caps text-label-caps uppercase tracking-widest relative overflow-hidden group interactable w-full md:w-auto"
            >
              <span className="relative z-10 group-hover:text-surface-dim transition-colors duration-500">Send Message</span>
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
