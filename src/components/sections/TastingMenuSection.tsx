import React from 'react';
import { Section } from '../ui/Section';

export const TastingMenuSection = () => (
  <Section className="py-24 px-6 md:px-12 bg-dark border-t border-white/5">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">The Ultimate Experience</h2>
      <h3 className="text-4xl md:text-6xl font-serif mb-12">Grand Tasting Menu</h3>
      <div className="glass p-12 rounded-3xl border border-gold/20">
        <p className="text-gray-400 mb-8 italic">A 12-course vegetarian journey through the seasons, curated by Chef Julian Vance.</p>
        <div className="space-y-4 mb-12">
          {["Amuse-Bouche", "Truffle Pearls", "Roasted Romanesco", "Charcoal Celeriac", "Artisanal Cheese", "Grand Dessert"].map((course) => (
            <div key={course} className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-8 bg-gold/30" />
              <span className="text-lg uppercase tracking-widest">{course}</span>
              <div className="h-[1px] w-8 bg-gold/30" />
            </div>
          ))}
        </div>
        <div className="text-3xl font-serif text-gold mb-2">$295 Per Person</div>
        <p className="text-xs uppercase tracking-widest text-gray-500">Optional Wine Pairing: $150</p>
      </div>
    </div>
  </Section>
);
