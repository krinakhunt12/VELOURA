import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { MENU_ITEMS } from '../../constants';
import { useSound } from '../../context/SoundContext';
import { Section } from '../ui/Section';
import { TiltWrapper } from '../ui/TiltWrapper';

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<'Starters' | 'Main Course' | 'Desserts' | 'Drinks'>('Starters');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const categories: ('Starters' | 'Main Course' | 'Desserts' | 'Drinks')[] = ['Starters', 'Main Course', 'Desserts', 'Drinks'];
  const { playSound } = useSound();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const suggestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    
    const query = searchQuery.toLowerCase();
    const results: { type: 'dish' | 'category', text: string, category?: string, id?: string }[] = [];

    // Check categories
    categories.forEach(cat => {
      if (cat.toLowerCase().includes(query)) {
        results.push({ type: 'category', text: cat });
      }
    });

    // Check dishes
    MENU_ITEMS.forEach(item => {
      if (item.name.toLowerCase().includes(query)) {
        results.push({ type: 'dish', text: item.name, category: item.category, id: item.id });
      }
    });

    return results.slice(0, 6);
  }, [searchQuery]);

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = item.category === activeCategory;
    
    // Robust multi-term search
    const searchTerms = searchQuery.toLowerCase().trim().split(/\s+/).filter(t => t.length > 0);
    if (searchTerms.length === 0) return matchesCategory;

    const matchesSearch = searchTerms.every(term => 
      item.name.toLowerCase().includes(term) || 
      item.description.toLowerCase().includes(term)
    );

    return matchesCategory && matchesSearch;
  });

  const handleSuggestionClick = (suggestion: typeof suggestions[0]) => {
    if (suggestion.type === 'category') {
      setActiveCategory(suggestion.text as any);
      setSearchQuery('');
      
      // Smooth scroll to menu section
      setTimeout(() => {
        const menuSection = document.getElementById('menu');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setSearchQuery(suggestion.text);
      if (suggestion.category) {
        setActiveCategory(suggestion.category as any);
      }
      
      // Smooth scroll to specific dish
      setTimeout(() => {
        const dishElement = document.getElementById(`menu-item-${suggestion.id}`);
        if (dishElement) {
          const yOffset = -100; // Offset for fixed header
          const y = dishElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          // Fallback to menu section if item not found
          const menuSection = document.getElementById('menu');
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 150);
    }
    setShowSuggestions(false);
    playSound('click');
  };

  return (
    <Section id="menu" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Exquisite Selection</h2>
        <h3 className="text-4xl md:text-5xl font-serif mb-4">The Gastronomic Menu</h3>
        <div className="flex justify-center mb-12">
          <span className="px-4 py-1 border border-gold/30 text-gold text-[10px] uppercase tracking-[0.2em] rounded-full bg-gold/5">
            100% Vegetarian & Plant-Based Delicacies
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <TiltWrapper key={cat} intensity={10}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveCategory(cat);
                    playSound('click');
                  }}
                  onMouseEnter={() => playSound('hover')}
                  className={cn(
                    "px-8 py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 border",
                    activeCategory === cat 
                      ? "bg-gold text-black border-gold shadow-[0_0_30px_rgba(212,175,55,0.6)] scale-105" 
                      : "bg-white/5 text-white/50 border-white/10 hover:border-gold/30 hover:text-[#FFFFFF]"
                  )}
                >
                  {cat}
                </motion.button>
              </TiltWrapper>
            ))}
          </div>

          <div className="relative w-full md:w-80" ref={searchRef}>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or ingredients..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-12 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
            />
            {searchQuery && (
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setShowSuggestions(false);
                  playSound('click');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gold transition-colors"
              >
                <X size={16} />
              </button>
            )}

            {/* Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && searchQuery.length >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-dark-lighter border border-white/10 rounded-2xl overflow-hidden z-[60] shadow-2xl backdrop-blur-xl"
                >
                  {suggestions.length > 0 ? (
                    suggestions.map((suggestion, i) => (
                      <button
                        key={`${suggestion.type}-${suggestion.text}-${i}`}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-6 py-3 hover:bg-white/5 flex items-center justify-between transition-colors group"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-300 group-hover:text-gold transition-colors">
                            {suggestion.text.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, i) => 
                              part.toLowerCase() === searchQuery.toLowerCase() 
                                ? <span key={i} className="text-gold font-bold">{part}</span> 
                                : part
                            )}
                          </span>
                          {suggestion.type === 'dish' && (
                            <span className="text-[10px] text-gray-500 italic">{suggestion.category}</span>
                          )}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-gold/50">
                          {suggestion.type}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="px-6 py-4 text-sm text-gray-500 italic text-center">
                      No suggestions found
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, i) => (
              <motion.div
                id={`menu-item-${item.id}`}
                key={`${activeCategory}-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                  delay: i * 0.05, 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1],
                  scale: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <TiltWrapper intensity={8}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      y: -8,
                      borderColor: "rgba(212, 175, 55, 0.5)",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
                    }}
                    onMouseEnter={() => playSound('hover')}
                    className="group flex gap-6 p-6 glass border border-white/10 transition-all duration-500 rounded-2xl cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-gold/20 relative z-10">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 ease-out"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-grow relative z-10">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-serif group-hover:text-gold transition-colors duration-300">{item.name}</h4>
                        <span className="text-gold font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
                    </div>
                  </motion.div>
                </TiltWrapper>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 flex flex-col items-center justify-center py-20 text-gray-500">
              <Search size={48} className="mb-4 opacity-20" />
              <p className="text-lg font-serif italic">No delicacies found matching your search.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};
