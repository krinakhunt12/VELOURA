import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/sections/Navbar';
import { Footer } from '../components/sections/Footer';
import { CustomCursor } from '../components/ui/CustomCursor';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { SoundProvider } from '../context/SoundContext';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SoundProvider>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="grain" />
        <ScrollToTop />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        
        <main>
          {children}
        </main>
        
        <Footer />
      </motion.div>
    </SoundProvider>
  );
};
