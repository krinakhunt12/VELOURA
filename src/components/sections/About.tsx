import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import { Section } from '../ui/Section';
import { TiltWrapper } from '../ui/TiltWrapper';

export const About = () => {
  const { playSound } = useSound();
  return (
    <Section id="about" className="py-24 px-6 md:px-12 bg-dark-lighter">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 z-0" />
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
            alt="Chef at work"
            className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </motion.div>
        
        <div className="flex flex-col">
          <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Our Heritage</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Crafting Culinary <br/>Masterpieces Since 1994</h3>
          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            At Veloura, we believe that dining is an art form. Every dish is a canvas, and every ingredient is a carefully chosen pigment. Our philosophy centers on the harmony of traditional techniques and modern innovation.
          </p>
          <p className="text-gray-400 leading-relaxed mb-12">
            Led by Executive Chef Julian Vance, our team sources the finest seasonal ingredients from local artisans to create an unforgettable gastronomic journey that speaks to the soul.
          </p>
          <TiltWrapper intensity={10} className="w-fit">
            <button 
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest group w-fit"
            >
              Discover Our Story 
              <ChevronRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </TiltWrapper>
        </div>
      </div>
    </Section>
  );
};
