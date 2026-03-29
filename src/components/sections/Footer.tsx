import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import { TiltWrapper } from '../ui/TiltWrapper';

export const Footer = () => {
  const { playSound } = useSound();
  return (
    <footer className="py-20 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <TiltWrapper intensity={10}>
              <h4 className="text-2xl font-serif font-bold text-gold mb-8">VELOURA</h4>
            </TiltWrapper>
            <p className="text-gray-500 leading-relaxed">
              Elevating the art of fine dining through passion, precision, and the pursuit of perfection.
            </p>
          </div>
          
          <div>
            <h5 className="text-sm uppercase tracking-widest font-bold mb-8">Location</h5>
            <p className="text-gray-500">
              123 Gastronomy Lane<br/>
              Culinary District<br/>
              Paris, France 75001
            </p>
          </div>
          
          <div>
            <h5 className="text-sm uppercase tracking-widest font-bold mb-8">Hours</h5>
            <p className="text-gray-500">
              Tue - Thu: 18:00 - 23:00<br/>
              Fri - Sat: 18:00 - 01:00<br/>
              Sun: 12:00 - 22:00
            </p>
          </div>
          
          <div>
            <h5 className="text-sm uppercase tracking-widest font-bold mb-8">Follow Us</h5>
            <div className="flex gap-6">
              <TiltWrapper intensity={15}>
                <a 
                  href="#" 
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  className="text-gray-500 hover:text-gold transition-colors block"
                >
                  <Instagram size={20} />
                </a>
              </TiltWrapper>
              <TiltWrapper intensity={15}>
                <a 
                  href="#" 
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  className="text-gray-500 hover:text-gold transition-colors block"
                >
                  <Facebook size={20} />
                </a>
              </TiltWrapper>
              <TiltWrapper intensity={15}>
                <a 
                  href="#" 
                  onMouseEnter={() => playSound('hover')}
                  onClick={() => playSound('click')}
                  className="text-gray-500 hover:text-gold transition-colors block"
                >
                  <Twitter size={20} />
                </a>
              </TiltWrapper>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            © 2026 Veloura Gastronomique. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-gray-600">
            <a 
              href="#" 
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              className="hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
              className="hover:text-gold transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
