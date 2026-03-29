import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../../constants';
import { useSound } from '../../context/SoundContext';
import { Section } from '../ui/Section';
import { TiltWrapper } from '../ui/TiltWrapper';

const ParallaxImage = ({ src, index }: { src: string, index: number, key?: React.Key }) => {
  const { playSound } = useSound();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Subtle parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <TiltWrapper intensity={5}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => playSound('hover')}
        onClick={() => playSound('click')}
        className="relative group overflow-hidden cursor-pointer mb-4 break-inside-avoid rounded-xl"
      >
        <motion.img 
          src={src} 
          alt={`Gallery ${index}`} 
          style={{ y, scale: 1.3 }} // Oversized to allow for parallax movement
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-150"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark">
            <ChevronRight />
          </div>
        </div>
      </motion.div>
    </TiltWrapper>
  );
};

export const Gallery = () => {
  const { playSound } = useSound();
  return (
    <Section id="gallery" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Visual Journey</h2>
        <h3 className="text-4xl md:text-5xl font-serif">A Glimpse of Elegance</h3>
      </div>
      
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {GALLERY_IMAGES.map((img, i) => (
          <ParallaxImage key={i} src={img} index={i} />
        ))}
      </div>
    </Section>
  );
};
