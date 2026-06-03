import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  label: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, label, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      const incrementTime = (duration * 1000) / end;
      let current = start;
      const timer = setInterval(() => {
        const step = Math.ceil(end / (duration * 60)); // Ensure it finishes roughly on time
        current += step;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, incrementTime > 16 ? incrementTime : 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="flex flex-col items-start border-l border-primary/30 pl-6 interactable group">
      <span className="font-display-lg text-[48px] md:text-display-lg text-on-surface tracking-tighter group-hover:text-primary transition-colors duration-500">
        {count.toLocaleString()}
      </span>
      <span className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-widest">
        {label}
      </span>
    </div>
  );
};

export const Achievements: React.FC = () => {
  const stats = [
    { target: 42, label: 'Projects Forged' },
    { target: 15, label: 'Technologies Mastered' },
    { target: 8500, label: 'Hours Invested' },
    { target: 99, label: 'Duels Won (Problems Solved)' },
  ];

  return (
    <section className="bg-surface-container-lowest border-y border-outline-variant/20 py-24 my-section-gap relative z-20">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            <AnimatedCounter target={stat.target} label={stat.label} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
