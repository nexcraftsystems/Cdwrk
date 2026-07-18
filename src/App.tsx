/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesChess from './components/FeaturesChess';
import FeaturesGrid from './components/FeaturesGrid';
import RelatedWork from './components/RelatedWork';
import Stats from './components/Stats';
import Leadership from './components/Leadership';
import FooterCTA from './components/FooterCTA';
import DeveloperWorkspace from './components/DeveloperWorkspace';
import { Language, translations } from './translations';
import { COUNTRIES } from './lib/countries';

export default function App() {
  const [country, setCountry] = useState<string>(() => {
    const saved = localStorage.getItem('digitize_country');
    if (saved && COUNTRIES.some(c => c.code === saved)) {
      return saved;
    }
    return 'US';
  });

  const [currentView, setCurrentView] = useState<'home' | 'portfolio' | 'workspace'>('home');

  const handleSetCountry = (code: string) => {
    setCountry(code);
    localStorage.setItem('digitize_country', code);
  };

  const activeCountryConfig = COUNTRIES.find(c => c.code === country) || COUNTRIES[0];
  const language = activeCountryConfig.lang as Language;
  const t = translations[language];

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white/30 selection:text-white">
      {/* 1. Fixed Navigation layer */}
      <Navbar 
        onScrollToSection={handleScrollToSection} 
        country={country}
        setCountry={handleSetCountry}
        language={language}
        t={t}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <main className="w-full">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <Hero 
              onScrollToSection={handleScrollToSection} 
              language={language}
              t={t}
            />

            {/* Investment Thesis & Alternating Chess Section */}
            <FeaturesChess 
              language={language}
              t={t}
            />

            {/* Platform Capabilities & 4-Column Grid Section */}
            <FeaturesGrid 
              country={country}
              language={language}
              t={t}
            />

            {/* Stats Section with Desaturated Video Background */}
            <Stats 
              country={country}
              language={language}
              t={t}
            />

            {/* Leadership Cards Section */}
            <Leadership 
              language={language}
              t={t}
            />

            {/* Call to Action and Form Section */}
            <FooterCTA 
              country={country}
              setCountry={handleSetCountry}
              language={language}
              t={t}
              setCurrentView={setCurrentView}
            />
          </>
        )}

        {currentView === 'portfolio' && (
          <RelatedWork 
            language={language}
            t={t}
            onBackToHome={() => setCurrentView('home')}
          />
        )}

        {currentView === 'workspace' && (
          <DeveloperWorkspace 
            language={language}
            t={t}
            onBackToHome={() => setCurrentView('home')}
          />
        )}
      </main>
    </div>
  );
}

