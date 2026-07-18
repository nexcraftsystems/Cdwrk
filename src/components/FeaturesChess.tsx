import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import HlsVideo from './HlsVideo';
import { Language, TranslationSchema } from '../translations';

interface FeaturesChessProps {
  language: Language;
  t: TranslationSchema;
}

export default function FeaturesChess({ language, t }: FeaturesChessProps) {
  const chessItems = [
    {
      id: 'finlytic',
      eyebrow: 'PLATFORM 01',
      title: t.platform1Title,
      desc: t.platform1Desc,
      tags: language === 'en' ? ['Interactive UI', '3-5 Days Built', 'Zero Lag'] : ['UI Interaktif', 'Siap 3-5 Hari', 'Sangat Pantas'],
      cta: t.platform1Cta,
      gif: 'https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif',
      align: 'left',
    },
    {
      id: 'wealth',
      eyebrow: 'PLATFORM 02',
      title: t.platform2Title,
      desc: t.platform2Desc,
      tags: language === 'en' ? ['Automated CRM', 'Database Admin', 'Onetime Fee'] : ['CRM Automatik', 'Admin Data', 'Bayaran Sekali'],
      cta: t.platform2Cta,
      gif: 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
      align: 'right',
    },
  ];

  return (
    <section id="thesis" className="relative w-full py-24 bg-black overflow-hidden border-b border-white/5">
      {/* Absolute background video: Thesis Section Video */}
      <div className="absolute inset-0 z-0">
        <HlsVideo
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="w-full h-full object-cover opacity-20 filter saturate-50 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50"
          >
            {t.thesisBadge}
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif italic text-white tracking-tight leading-[1.1]"
          >
            {t.thesisHeading}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-white/60 text-base md:text-lg font-light leading-relaxed font-sans"
          >
            {t.thesisText}
          </motion.p>
        </div>

        {/* Alternating Chess Layout */}
        <div className="flex flex-col gap-24 md:gap-32">
          {chessItems.map((item, index) => {
            const isLeft = item.align === 'left';
            return (
              <div
                id={item.id}
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                
                {/* Content Panel (Side A) */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isLeft ? 'lg:order-1' : 'lg:order-2 lg:col-start-8'
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-3">
                    {item.eyebrow}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight leading-snug mb-5">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/70 font-light leading-relaxed mb-6 text-sm md:text-base">
                    {item.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="liquid-glass text-[10px] font-medium uppercase tracking-wider text-white/70 px-3 py-1 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <div>
                    <button className="group px-5 py-2.5 rounded-full liquid-glass border border-white/10 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 cursor-pointer">
                      {item.cta}
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>

                {/* Video/GIF Liquid Glass Container (Side B) */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`lg:col-span-7 ${
                    isLeft ? 'lg:order-2 lg:col-start-6' : 'lg:order-1'
                  }`}
                >
                  <div className="liquid-glass rounded-2xl border border-white/5 p-4 sm:p-6 md:p-8 flex items-center justify-center aspect-[16/10] overflow-hidden shadow-2xl relative group">
                    {/* Background glow overlay */}
                    <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors duration-500 z-0" />
                    
                    {/* Animated GIF with blend filter and opacity shift */}
                    <img
                      src={item.gif}
                      alt={item.title}
                      className="relative z-10 w-full h-full object-contain mix-blend-screen opacity-80 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Corner accents representing futuristic craft */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/20 pointer-events-none" />
                    <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/20 pointer-events-none" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/20 pointer-events-none" />
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/20 pointer-events-none" />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
