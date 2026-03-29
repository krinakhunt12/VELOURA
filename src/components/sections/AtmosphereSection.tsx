import React from 'react';
import { Section } from '../ui/Section';

export const AtmosphereSection = () => (
  <Section className="py-24 px-6 md:px-12 bg-dark border-t border-white/5">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">The Ambience</h2>
        <h3 className="text-4xl md:text-5xl font-serif mb-8">A Sanctuary of <br/>Sophistication</h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          From the soft amber glow of our hand-blown glass chandeliers to the velvet-touch upholstery, every element of Veloura is designed to transport you to a world of refined comfort.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Our space is more than a restaurant; it is a carefully choreographed environment where acoustics, lighting, and texture converge to create the perfect backdrop for your most cherished moments.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1550966842-28c2e202ec91?auto=format&fit=crop&q=80&w=600" alt="Interior 1" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600" alt="Interior 2" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 mt-8" referrerPolicy="no-referrer" />
      </div>
    </div>
  </Section>
);
