import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useSound } from '../../context/SoundContext';
import { TiltWrapper } from '../ui/TiltWrapper';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMuted, toggleMute, playSound } = useSound();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reservations', href: '/reservations' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12",
      isScrolled || location.pathname !== '/' ? "bg-dark/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <TiltWrapper intensity={5}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 cursor-pointer group"
                onMouseEnter={() => playSound('hover')}
                onClick={() => playSound('click')}
              >
                <div className="w-10 h-10 overflow-hidden rounded-full border border-gold/30 group-hover:border-gold transition-colors duration-500">
                  <img src="/logo.png" alt="Veloura Logo" className="w-full h-full object-cover scale-150" />
                </div>
                <span className="text-2xl font-serif font-bold tracking-[0.2em] text-gold">VELOURA</span>
              </motion.div>
          </TiltWrapper>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: i * 0.1,
                y: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <TiltWrapper intensity={3}>
                <Link
                  to={link.href}
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  className={cn(
                    "text-sm uppercase tracking-widest transition-all duration-300 block",
                    location.pathname === link.href ? "text-gold" : "text-white hover:text-gold"
                  )}
                >
                  {link.name}
                </Link>
              </TiltWrapper>
            </motion.div>
          ))}
          
          <div className="h-4 w-[1px] bg-white/20 mx-2" />

          <button
            onClick={() => {
              toggleMute();
              if (isMuted) playSound('click'); // Play click if we just unmuted
            }}
            onMouseEnter={() => playSound('hover')}
            className="text-white/50 hover:text-gold transition-colors p-2"
            title={isMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <Link to="/reservations">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              className="bg-gold text-dark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500"
            >
              Book Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg uppercase tracking-widest",
                    location.pathname === link.href ? "text-gold" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
