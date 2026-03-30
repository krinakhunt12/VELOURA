import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useSound } from '../../context/SoundContext';
import { Section } from '../ui/Section';
import { TiltWrapper } from '../ui/TiltWrapper';

export const PrivateDining = () => {
  const { playSound } = useSound();
  return (
    <Section id="events" className="py-24 px-6 md:px-12 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Exclusive Events</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Private Dining & <br/>Curated Celebrations</h3>
          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            Whether it's an intimate rehearsal dinner, a corporate gala, or a milestone celebration, Veloura provides the perfect backdrop for your most cherished moments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <TiltWrapper intensity={10}>
              <div className="p-6 border border-white/10 rounded-2xl hover:border-gold/50 transition-colors duration-500 h-full">
                <h4 className="text-gold font-serif text-xl mb-2">The Crystal Room</h4>
                <p className="text-gray-500 text-sm">Up to 40 guests. Features a private bar and panoramic city views.</p>
              </div>
            </TiltWrapper>
            <TiltWrapper intensity={10}>
              <div className="p-6 border border-white/10 rounded-2xl hover:border-gold/50 transition-colors duration-500 h-full">
                <h4 className="text-gold font-serif text-xl mb-2">Chef's Table</h4>
                <p className="text-gray-500 text-sm">Up to 12 guests. An immersive culinary experience in the heart of the kitchen.</p>
              </div>
            </TiltWrapper>
          </div>
          <TiltWrapper intensity={10} className="inline-block">
            <Link to="/reservations">
              <button 
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
                className="group relative px-10 py-4 bg-transparent border border-gold text-gold font-bold uppercase tracking-widest overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10 group-hover:text-dark transition-colors duration-500">Inquire Now</span>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </Link>
          </TiltWrapper>
        </div>
        
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://i.pinimg.com/736x/7e/53/89/7e53895ea3fbc0683bddd0adf6d6e0e9.jpg" 
                alt="Private Event Space"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </Section>
  );
};
