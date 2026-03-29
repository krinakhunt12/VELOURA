import React from 'react';
import { motion } from 'motion/react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1.2, delay: 3, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[200] bg-dark flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden mb-8">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-[0.5em] text-gold"
        >
          VELOURA
        </motion.div>
      </div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-[1px] bg-gold/30"
      />
    </motion.div>
  );
};
