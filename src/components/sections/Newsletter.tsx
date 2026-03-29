import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import { Section } from '../ui/Section';
import { TiltWrapper } from '../ui/TiltWrapper';

export const Newsletter = () => {
  const { playSound } = useSound();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      playSound('click');
      setEmail('');
    }
  };

  return (
    <Section className="py-24 px-6 md:px-12 bg-dark-lighter border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="mx-auto text-gold mb-6" size={40} />
        <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Join The Circle</h2>
        <h3 className="text-4xl md:text-5xl font-serif mb-8">Stay Updated on <br/>Seasonal Delicacies</h3>
        <p className="text-gray-400 mb-12 text-lg">
          Subscribe to receive exclusive invitations to our tasting events and seasonal menu launches.
        </p>
        
        <AnimatePresence mode="wait">
          {!isSubscribed ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input 
                type="email" 
                placeholder="Your Email Address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/5 border border-white/10 rounded-full py-4 px-8 focus:outline-none focus:border-gold transition-colors"
              />
              <TiltWrapper intensity={10}>
                <button 
                  type="submit"
                  onMouseEnter={() => playSound('hover')}
                  className="bg-gold text-dark font-bold px-10 py-4 rounded-full uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 w-full sm:w-auto"
                >
                  Subscribe <Send size={16} />
                </button>
              </TiltWrapper>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 glass border border-gold/30 rounded-3xl inline-block"
            >
              <h4 className="text-gold font-serif text-2xl mb-2">Welcome to the Circle</h4>
              <p className="text-gray-400">You've successfully subscribed to our newsletter.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};
