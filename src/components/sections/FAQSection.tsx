import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';

export const FAQSection = () => (
  <Section className="py-24 px-6 md:px-12 bg-dark-lighter">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-12 text-center">Frequently Asked</h2>
      <div className="space-y-8">
        {[
          { q: "What is the dress code?", a: "We maintain a formal dress code. Jackets are required for gentlemen, and we kindly request no athletic wear or open-toed shoes." },
          { q: "Do you accommodate dietary restrictions?", a: "Yes, our culinary team is expert at adapting our menus for allergies or lifestyle choices. Please notify us at least 48 hours in advance." },
          { q: "Is there a cancellation policy?", a: "Reservations can be cancelled up to 24 hours in advance without penalty. Late cancellations may incur a fee of $100 per person." }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border-b border-white/10 pb-8"
          >
            <h4 className="text-lg font-serif mb-4 text-gold">{item.q}</h4>
            <p className="text-gray-400 leading-relaxed">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
