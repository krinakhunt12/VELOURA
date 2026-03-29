import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1.5, 
        ease: [0.22, 1, 0.36, 1] // Cinematic cubic-bezier
      }}
      className={cn("relative", className)}
    >
      {children}
    </motion.section>
  );
};
