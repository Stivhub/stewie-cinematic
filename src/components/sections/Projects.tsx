import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '00',
    category: 'Videography',
    title: 'The Silent Blade - Cinematic Short',
    description: "A visual exploration of stillness and motion, capturing the quiet intensity of a warrior's preparation. This project showcases cinematic lighting, 4K videography, and rhythmic editing.",
    tags: ['4K VIDEO', 'DA VINCI RESOLVE', 'STORYBOARDING'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI8XQ2NgE6_phsNFZ9LZYEjE-mcLb_2meMVIdAFb9NlyxEWV22uIQrIaxirW36rShjQ6dbHFqVuQStPWbx9tWvejl3UwpMRwNn_ft3Ry_XlLpTkphVR8Ergc1fjBS_Qfwbjqt0WR0nVS-KZoTa1ypDArP1zkUrN-6wQ3-TT8rkHrsUr23pKkd_kHcMMtCiYyudrOPdh7YrRx--2F31LjeNPHE7xyqBrATokAwbJCXSy0Fm9Vz3D-Jb-rdrhkU0XWWrSjbsyDXgli7J',
    actionText: 'Watch Film',
    fullWidth: true
  },
  {
    id: '01',
    category: 'Masterpiece',
    title: 'Kensei Engine',
    description: 'A high-performance physics engine built for absolute precision. Designed with the minimalist philosophy of striking exactly where needed, stripping away all unnecessary computational overhead.',
    tags: ['C++', 'Vulkan', 'WASM'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcDgA5QuE-sgn3x7zNidMSEN4S8I6fOyGEqSkl4IRUy6Yap2D6t3TDwOuS-5_w_bLj2dtu2l3tdYymkic0DpotA9T-2oI9OWiUXd4nXRPtydwruQ69fgngDFL7pygW68cNBgMgOqjukXyMcZfC0kazGJTB9bwRGXnisHljN-2o5b6_qrDIwSmHqTJmq86ch76HLIJjjuKjLuBd03zA3-Do9cGWi2pIpZSyfB_WZPDhD_ATqdnu-ek_LZ0yXn0VOX4tEiqjB8zTtt36',
    actionText: 'View Source',
    fullWidth: true
  },
  {
    id: '02',
    category: 'Utility',
    title: 'Silent Strike Protocol',
    description: '',
    tags: ['Rust', 'Cryptography'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqa30AWs4JIrQYWPIQmdz_au60g_TwtYGEGQd3CsVW_q_GBhvf43c7k5G2YIYIhuaCNFn_CebWUw8-Jh01_N2Uo9rvT581BwXelS0rbCrMuEr9a21bWfLoicf2GOAA4wcMRFNUgHQqn2QADohBwtjq58YwyTeGM-MVIV7vsKjpkuwk6NfOswkF9m1eUQfxSr8lTLjowIxh5SB7J8h3TXvcPs96LftI8yLhkkUv36BS_YFRrp1BTGOki5ZIfySU7uptAdrhWV3yK-7a',
    actionText: 'Live Demo',
    fullWidth: false
  },
  {
    id: '03',
    category: 'Interface',
    title: 'Ronin OS',
    description: '',
    tags: ['React', 'WebGL'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlgJeC7flyHLxJG40QrHdXXnBY00GVxrdhHjXdusE1XBF_w9_qN4o85vfsjQI8T2Vv-Mxq-tP4SIeMZxPjgIm7T_PxfCpMZoSaHqppBAamPAp1kco9dJUiBlbNKaLZbR7NUxQSf36Fy4WoKQyeaEaULsGgDmn1Ul-E8PSGVlKHivQyWbaXpO5DOKuFge_P8rjyA0g-FE4ce2dA5tAaqesmVxDfDCilLvR1iUyeqC-eaVT2Wmu6YUZ28BKrvHu0mQyNEWfEoo60pd9C',
    actionText: 'Explore Narrative',
    fullWidth: false
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto w-full py-section-gap">
      <div className="flex flex-col gap-12 mb-24 relative">
        {/* Wind Guide decorative element */}
        <motion.div 
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-12 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-30 hidden md:block" 
        />
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display-lg-mobile md:font-display-lg text-on-surface max-w-3xl"
        >
          Legendary Tales.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
        >
          A collection of digital artifacts forged through lethal precision and quiet strength. Each project represents a duel between complexity and clarity, resulting in cinematic user experiences.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {projects.map((project, idx) => (
          <motion.article 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: idx * 0.1 }}
            className={`group cursor-pointer relative overflow-hidden bg-surface-container-lowest border border-outline-variant/30 flex flex-col interactable ${project.fullWidth ? 'col-span-1 md:col-span-12 md:flex-row h-auto md:h-[600px]' : 'col-span-1 md:col-span-6 h-[500px]'}`}
          >
            <div className={`w-full ${project.fullWidth ? 'md:w-2/3 h-64 md:h-full' : 'h-1/2'} overflow-hidden relative`}>
              <motion.img 
                alt={project.title} 
                className="w-full h-full object-cover cinematic-mask" 
                src={project.image} 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              {/* Soft fog overlay on hover */}
              <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
            </div>

            <div className={`w-full ${project.fullWidth ? 'md:w-1/3 p-12 flex flex-col justify-between border-t md:border-t-0 md:border-l' : 'h-1/2 p-8 flex flex-col justify-between border-t'} border-outline-variant/30 bg-surface-container-lowest/90 backdrop-blur-sm z-20`}>
              <div>
                <span className="font-label-caps text-label-caps text-primary mb-4 block opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {project.id} / {project.category}
                </span>
                <h3 className={`${project.fullWidth ? 'font-headline-xl text-[32px] md:text-[40px]' : 'font-headline-lg text-[24px] md:text-[32px]'} text-on-surface mb-6 group-hover:text-primary transition-colors duration-500`}>
                  {project.title}
                </h3>
                {project.description && (
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8 group-hover:text-on-surface transition-colors duration-500">
                    {project.description}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-on-surface/30 text-on-surface font-label-caps text-[10px] uppercase tracking-widest px-3 py-1 group-hover:border-primary/50 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <a className="text-on-surface group-hover:text-primary transition-colors duration-300 flex items-center gap-2 group/link" href="#">
                  <span className="font-label-caps text-label-caps tracking-widest">{project.actionText}</span>
                  <span className="material-symbols-outlined text-[16px] transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
