import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSound } from '../../context/SoundContext';
import { Section } from '../ui/Section';
import { TiltWrapper } from '../ui/TiltWrapper';

export const FeaturedDish = () => {
  const { playSound } = useSound();
  return (
    <Section className="py-24 bg-dark-lighter overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <TiltWrapper intensity={15}>
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/20 animate-spin-slow" />
                <img 
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800" 
                  alt="Signature Dish"
                  className="absolute inset-8 w-[calc(100%-64px)] h-[calc(100%-64px)] object-cover rounded-full shadow-2xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </TiltWrapper>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Chef's Vegetarian Recommendation</h2>
            <h3 className="text-4xl md:text-6xl font-serif mb-6">The Golden <br/>Chocolate Sphere</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Experience a theatrical vegetarian dessert where warm salted caramel is poured over a delicate chocolate shell, revealing a heart of Madagascar vanilla bean gelato and hazelnut praline.
            </p>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm uppercase tracking-widest text-gray-500">Signature Masterpiece</span>
            </div>
            <TiltWrapper intensity={10} className="inline-block">
              <Link to="/menu">
                <button 
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  className="group relative px-10 py-4 bg-transparent border border-gold text-gold font-bold uppercase tracking-widest overflow-hidden transition-all duration-500"
                >
                  <span className="relative z-10 group-hover:text-dark transition-colors duration-500">Order Now</span>
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </Link>
            </TiltWrapper>
          </div>
        </div>
      </div>
    </Section>
  );
};
