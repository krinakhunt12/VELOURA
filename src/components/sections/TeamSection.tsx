import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';

export const TeamSection = () => (
  <Section className="py-24 px-6 md:px-12 bg-dark-lighter">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">The Visionaries</h2>
        <h3 className="text-4xl md:text-5xl font-serif">Meet Our Masters</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { name: "Julian Vance", role: "Executive Chef", img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800" },
          { name: "Elena Rossi", role: "Head Sommelier", img: "https://images.unsplash.com/photo-1595273670150-db0c3c392416?auto=format&fit=crop&q=80&w=800" },
          { name: "Marcus Thorne", role: "Maître d'Hôtel", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" }
        ].map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden aspect-[3/4] mb-6">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h4 className="text-xl font-serif mb-1">{member.name}</h4>
            <p className="text-gold text-xs uppercase tracking-widest">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
