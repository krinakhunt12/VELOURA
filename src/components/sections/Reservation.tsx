import React from 'react';
import { Calendar, Users, User, Clock } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import { Section } from '../ui/Section';
import { TiltWrapper } from '../ui/TiltWrapper';

export const Reservation = () => {
  const { playSound } = useSound();
  return (
    <Section id="reservations" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto glass rounded-3xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-12 md:p-20">
          <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Reservations</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8">Book Your Table</h3>
          <p className="text-gray-400 mb-12">
            Secure your spot for an unforgettable evening. For parties larger than 8, please contact us directly.
          </p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <TiltWrapper intensity={5}>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50 group-focus-within:text-gold transition-colors" size={18} />
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors placeholder-[#6B7280]"
                  />
                </div>
              </TiltWrapper>
              <TiltWrapper intensity={5}>
                <div className="relative group">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50 group-focus-within:text-gold transition-colors" size={18} />
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors appearance-none text-[#6B7280]">
                    <option className="bg-dark" value="" disabled selected>Select Guests</option>
                    <option className="bg-dark">2 Guests</option>
                    <option className="bg-dark">4 Guests</option>
                    <option className="bg-dark">6 Guests</option>
                    <option className="bg-dark">8+ Guests</option>
                  </select>
                </div>
              </TiltWrapper>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <TiltWrapper intensity={5}>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50 group-focus-within:text-gold transition-colors" size={18} />
                  <input 
                    type="date" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors text-[#6B7280]"
                  />
                </div>
              </TiltWrapper>
              <TiltWrapper intensity={5}>
                <div className="relative group">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50 group-focus-within:text-gold transition-colors" size={18} />
                  <input 
                    type="time" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors text-[#6B7280]"
                  />
                </div>
              </TiltWrapper>
            </div>
            
            <TiltWrapper intensity={5}>
              <button 
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
                className="w-full bg-gold text-dark font-bold py-5 rounded-xl uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500"
              >
                Confirm Reservation
              </button>
            </TiltWrapper>
          </form>
        </div>
        
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
            alt="Restaurant Interior" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent md:from-transparent md:to-transparent" />
        </div>
      </div>
    </Section>
  );
};
