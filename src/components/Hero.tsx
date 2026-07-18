import { motion } from 'motion/react';
import { ArrowDown, Clock, Flame } from 'lucide-react';
import 'iconify-icon';
import BlurText from './BlurText';
import { Language, TranslationSchema } from '../translations';

interface HeroProps {
  onScrollToSection: (id: string) => void;
  language: Language;
  t: TranslationSchema;
}

export default function Hero({ onScrollToSection, language, t }: HeroProps) {
  const companySectors = [
    { 
      icon: 'solar:bolt-circle-bold-duotone', 
      title: t.sectorWebsites, 
      desc: t.sectorWebsitesDesc 
    },
    { 
      icon: 'solar:widget-5-bold-duotone', 
      title: t.sectorCrm, 
      desc: t.sectorCrmDesc 
    },
    { 
      icon: 'solar:t-shirt-bold-duotone', 
      title: t.sectorEcommerce, 
      desc: t.sectorEcommerceDesc 
    },
  ];

  const mainTitleText = language === 'en' ? 'Rebuild. Rebrand. Scale.' : 'Bina. Jenama. Skala.';

  return (
    <section className="relative w-full h-[1000px] overflow-hidden bg-black flex flex-col justify-between">
      {/* 2. Hero Background: Video at z-0, absolute inset-0, opacity-100 */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          className="w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay 1: bg-black/40 */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Overlay 2: bg-gradient-to-b from-transparent to-black (bottom 300px) */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Hero Content Wrapper - z-10 */}
      <div className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 pt-36 pb-12 flex flex-col justify-between h-full">
        
        {/* Top area - JA Badge & Secondary text */}
        <div className="flex flex-col items-center sm:items-start gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xl"
          >
            <span>{t.heroBadge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
            <span className="flex items-center gap-1 font-mono">
              RM 999 NET
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/60 text-xs md:text-sm tracking-[0.25em] uppercase font-sans text-center sm:text-left"
          >
            {t.heroSub}
          </motion.p>
        </div>

        {/* Center area - Giant Heading "Rebuild. Rebrand. Scale." */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left my-auto">
          <h1 key={language} className="text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] font-serif italic text-white tracking-tight leading-[0.9] select-none">
            <BlurText text={mainTitleText} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.0 }}
            className="mt-6 max-w-lg text-white/70 text-base md:text-lg font-light leading-relaxed font-sans"
          >
            {t.heroText}
          </motion.p>
          
          {/* Real-time counters & highlights */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-6 flex flex-wrap items-center gap-6 text-xs text-white/50 font-mono"
          >
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-white/80" />
              <span>3-5 DAYS TIMEFRAME</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5">
               <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
               <span>3 / 10 SLOTS LEFT</span>
             </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.0 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onScrollToSection('performance')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-white/80 hover:scale-[1.02] transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
            >
              {t.exploreBtn}
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
            <button
              onClick={() => onScrollToSection('apply')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full liquid-glass border border-white/10 text-white font-semibold text-xs tracking-wider uppercase hover:bg-white/5 transition-all cursor-pointer flex items-center justify-center"
            >
              {t.partnerBtn}
            </button>
          </motion.div>
        </div>

        {/* Bottom area - Companies Under Management */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col gap-1"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">{t.portfolioSectors}</span>
              <span className="text-sm font-semibold tracking-wider text-white">WORLDWIDE CAPABILITIES</span>
            </motion.div>

            {/* Grid of 3 Sectors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 max-w-3xl md:ml-12">
              {companySectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.15, duration: 0.8 }}
                  className="flex items-center gap-3.5 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full liquid-glass-strong flex items-center justify-center border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                    <iconify-icon icon={sector.icon} style={{ fontSize: '20px' }}></iconify-icon>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white tracking-wide group-hover:text-white/80 transition-colors">
                      {sector.title}
                    </span>
                    <span className="text-[10px] text-white/50 tracking-wider">
                      {sector.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
