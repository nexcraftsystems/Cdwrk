import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Language, TranslationSchema } from '../translations';
import { COUNTRIES } from '../lib/countries';
import CountryFlag from './CountryFlag';
import CodWorkingLogo from './CodWorkingLogo';

interface NavbarProps {
  onScrollToSection: (id: string) => void;
  country: string;
  setCountry: (code: string) => void;
  language: Language;
  t: TranslationSchema;
  currentView: 'home' | 'portfolio' | 'workspace';
  setCurrentView: (view: 'home' | 'portfolio' | 'workspace') => void;
}

export default function Navbar({ 
  onScrollToSection, 
  country,
  setCountry,
  language, 
  t, 
  currentView, 
  setCurrentView 
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const links = [
    { name: language === 'en' ? 'Approach' : (language === 'bm' || language === 'id') ? 'Pendekatan' : language === 'fr' ? 'Approche' : language === 'tr' ? 'Yaklaşım' : language === 'ar' ? 'منهجيتنا' : 'Approach', id: 'thesis' },
    { name: language === 'en' ? 'Services' : (language === 'bm' || language === 'id') ? 'Perkhidmatan' : language === 'fr' ? 'Services' : language === 'tr' ? 'Hizmetler' : language === 'ar' ? 'الخدمات' : 'Services', id: 'capabilities' },
    { name: language === 'en' ? 'Related Work' : (language === 'bm' || language === 'id') ? 'Karya Berkaitan' : language === 'fr' ? 'Projets' : language === 'tr' ? 'Projeler' : language === 'ar' ? 'أعمالنا' : 'Related Work', id: 'related-work' },
    { name: language === 'en' ? 'Pricing' : (language === 'bm' || language === 'id') ? 'Kadar Harga' : language === 'fr' ? 'Tarifs' : language === 'tr' ? 'Fiyatlandırma' : language === 'ar' ? 'الأسعار' : 'Pricing', id: 'performance' },
    { name: language === 'en' ? 'Trust' : (language === 'bm' || language === 'id') ? 'Amanah' : language === 'fr' ? 'Confiance' : language === 'tr' ? 'Güvenilirlik' : language === 'ar' ? 'الموثوقية' : 'Trust', id: 'leadership' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'related-work') {
      setCurrentView('portfolio');
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setIsOpen(false);
      setTimeout(() => {
        onScrollToSection(id);
      }, 150);
    } else {
      onScrollToSection(id);
    }
  };

  return (
    <>
      {/* Fixed top-4 navbar container with pointer-events-none */}
      <div className="fixed top-4 left-0 right-0 z-50 pointer-events-none px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Pill - Left */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto liquid-glass px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer border border-white/5 shadow-lg shadow-black/20"
            onClick={() => {
              if (currentView !== 'home') {
                setCurrentView('home');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <CodWorkingLogo variant="header" showText={false} />
          </motion.div>

          {/* Desktop Links - Center */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pointer-events-auto hidden md:flex liquid-glass px-1.5 py-1.5 rounded-full items-center gap-1 border border-white/5 shadow-lg shadow-black/20"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-5 py-2 text-xs font-medium tracking-wide uppercase text-white/60 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </motion.nav>

          {/* Apply Button, Lang Toggle & Mobile Menu - Right */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pointer-events-auto flex items-center gap-2.5"
          >
            {/* Country/Language Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="liquid-glass px-3.5 py-2.5 rounded-full border border-white/10 text-white hover:bg-white/5 hover:border-white/20 active:scale-95 transition-all duration-300 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase cursor-pointer"
              >
                <CountryFlag code={country} size={22} />
                <span className="font-mono text-white/90">{country}</span>
                <span className={`text-[9px] text-white/40 transition-transform duration-300 ${showLangMenu ? 'rotate-180' : ''}`}>▼</span>
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2.5 w-60 rounded-2xl bg-[#0a0a0c]/95 border border-white/10 backdrop-blur-xl p-2 z-50 flex flex-col gap-1 shadow-2xl shadow-black/50"
                  >
                    <div className="px-3 py-2 border-b border-white/5 mb-1">
                      <span className="text-[9px] font-mono tracking-[0.2em] text-white/30 uppercase">Select Region & Currency</span>
                    </div>
                    <div className="max-h-[320px] overflow-y-auto custom-scrollbar flex flex-col gap-0.5">
                      {COUNTRIES.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => {
                            setCountry(c.code);
                            setShowLangMenu(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 hover:bg-white/5 text-left cursor-pointer ${
                            country === c.code ? 'bg-white/10 text-white font-bold' : 'text-white/60 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <CountryFlag code={c.code} size={22} />
                            <span className="truncate">{c.name}</span>
                          </div>
                          <span className="font-mono text-[9px] bg-white/[0.05] border border-white/5 px-2 py-0.5 rounded text-white/50">
                            {c.currency}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Waitlist Call-to-action button */}
            <button
              onClick={() => handleNavClick('apply')}
              className="hidden sm:flex px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-white/90 hover:scale-[1.03] active:scale-95 transition-all duration-300 items-center gap-1.5 shadow-lg cursor-pointer"
            >
              {t.applyBtn}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden liquid-glass p-3 rounded-full border border-white/5 text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </motion.div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-40 flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            {/* Nav Links List */}
            <div className="flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">{t.menuTitle}</span>
              <div className="flex flex-col gap-6">
                {links.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(link.id)}
                    className="text-left text-3xl font-serif italic text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer Apply CTA */}
            <div className="flex flex-col gap-6">
              <div className="h-[1px] bg-white/10" />
              
              {/* Country / Language selector grid in Mobile Menu */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase pl-1">Select Active Region & Currency</span>
                <div className="grid grid-cols-3 gap-2">
                  {COUNTRIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCountry(c.code);
                        setIsOpen(false);
                      }}
                      className={`flex flex-col items-center justify-center gap-1.5 py-2 px-1 rounded-xl border transition-all duration-300 ${
                        country === c.code 
                          ? 'bg-white/10 border-white/20 text-white font-bold' 
                          : 'bg-white/[0.02] border-white/5 text-white/50'
                      }`}
                    >
                      <CountryFlag code={c.code} size={22} />
                      <span className="text-[9px] font-mono uppercase tracking-wider">{c.code}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavClick('apply')}
                className="w-full py-4 rounded-full bg-white text-black font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white/90 cursor-pointer"
              >
                {t.applyBtn}
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <div className="flex justify-between items-center text-[10px] text-white/40 font-mono">
                <span>{t.copyright}</span>
                <span>GLOBAL 🌍</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
