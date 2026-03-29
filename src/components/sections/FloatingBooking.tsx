import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import { TiltWrapper } from '../ui/TiltWrapper';

export const FloatingBooking = () => {
  const { playSound } = useSound();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-[100] md:hidden"
        >
          <TiltWrapper intensity={15}>
            <Link to="/reservations">
              <button
                onClick={() => playSound('click')}
                onMouseEnter={() => playSound('hover')}
                className="w-16 h-16 bg-gold text-dark rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.5)] flex items-center justify-center"
              >
                <Calendar size={24} />
              </button>
            </Link>
          </TiltWrapper>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
