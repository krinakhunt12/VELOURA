import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TiltWrapper } from '../ui/TiltWrapper';

export const Testimonials = () => {
  const reviews = [
    { name: "Eleanor Rigby", role: "Food Critic", text: "An unparalleled dining experience. The attention to detail in every course is simply breathtaking." },
    { name: "Julian Thorne", role: "Sommelier", text: "The wine pairing was masterfully curated. Veloura truly understands the science of flavor." },
    { name: "Sophia Loren", role: "Regular Guest", text: "My favorite spot in the city. The atmosphere is as exquisite as the cuisine." }
  ];

  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote size={400} className="absolute -top-20 -left-20 text-gold" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-12">Guest Experiences</h2>
        
        <div className="grid gap-12">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="flex flex-col items-center"
            >
              <TiltWrapper intensity={5} className="w-full">
                <div className="p-8 md:p-12 glass rounded-3xl border border-white/5 hover:border-gold/20 transition-colors duration-500">
                  <p className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
                    "{rev.text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-[1px] bg-gold mb-4" />
                    <h4 className="text-lg font-bold uppercase tracking-widest">{rev.name}</h4>
                    <span className="text-gold text-xs uppercase tracking-widest">{rev.role}</span>
                  </div>
                </div>
              </TiltWrapper>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
