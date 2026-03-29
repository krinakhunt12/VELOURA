import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useSound } from '../../context/SoundContext';
import { TiltWrapper } from '../ui/TiltWrapper';

export const Hero = () => {
  const { playSound } = useSound();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video with Cinematic Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover scale-110"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27cf341d76764a86423d5462ae517de0a32183d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: textY }}
        className="relative z-20 text-center px-4"
      >
        <motion.p
          variants={itemVariants}
          className="text-gold uppercase tracking-[0.5em] text-sm mb-4"
        >
          Welcome to Excellence
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-8xl font-serif mb-8 leading-tight px-2"
        >
          A Taste of <span className="italic text-gradient">Luxury</span>
        </motion.h1>
        <motion.div
  variants={itemVariants}
  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
>
  <TiltWrapper intensity={10} className="w-full sm:w-auto">
    <Link to="/reservations" className="block w-full sm:w-auto">
      <button 
        onMouseEnter={() => playSound('hover')}
        onClick={() => playSound('click')}
        className="w-full sm:w-auto group relative px-8 py-4 bg-gold text-dark font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 rounded-sm"
      >
        <span className="relative z-10 group-hover:text-gold transition-colors duration-500">Book a Table</span>
        <div className="absolute inset-0 bg-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <div className="absolute inset-0 border border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>
    </Link>
  </TiltWrapper>
  <TiltWrapper intensity={10} className="w-full sm:w-auto">
    <Link to="/menu" className="block w-full sm:w-auto">
      <button 
        onMouseEnter={() => playSound('hover')}
        onClick={() => playSound('click')}
        className="w-full sm:w-auto group relative px-8 py-4 border border-white/30 hover:border-gold transition-all duration-500 font-bold uppercase tracking-widest rounded-sm overflow-hidden"
      >
        <span className="relative z-10 group-hover:text-dark transition-colors duration-500">View Menu</span>
        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </button>
    </Link>
  </TiltWrapper>
</motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-20 bg-gradient-to-b from-gold to-transparent" 
        />
      </motion.div>
    </section>
  );
};
