import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';

export const AwardsSection = () => (
  <Section className="py-24 bg-dark border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center text-center">
        {[
          { label: "Michelin Stars", value: "3" },
          { label: "Wine Spectator", value: "Grand Award" },
          { label: "World's 50 Best", value: "Top 10" },
          { label: "James Beard", value: "Best Chef" }
        ].map((award, i) => (
          <motion.div
            key={award.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h4 className="text-4xl font-serif text-gold mb-2">{award.value}</h4>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{award.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
