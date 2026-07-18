import { motion } from 'motion/react';
import HlsVideo from './HlsVideo';
import { Language, TranslationSchema } from '../translations';
import { getCountry } from '../lib/countries';

interface StatsProps {
  country: string;
  language: Language;
  t: TranslationSchema;
}

export default function Stats({ country, language, t }: StatsProps) {
  const countryConfig = getCountry(country);

  const metrics = [
    { 
      value: countryConfig.basePrice, 
      label: language === 'en' 
        ? 'ONE-TIME FLAT RATE' 
        : language === 'fr' 
        ? 'TARIF FIXE UNIQUE' 
        : language === 'tr' 
        ? 'TEK SEFERLİK SABİT FİYAT' 
        : language === 'ar' 
        ? 'سعر ثابت لمرة واحدة' 
        : 'KADAR RATA SEKALI BAYAR' 
    },
    { 
      value: '3-5', 
      label: language === 'en' 
        ? 'DAYS DEVELOPMENT TIMELINE' 
        : language === 'fr' 
        ? 'JOURS DE DÉVELOPPEMENT' 
        : language === 'tr' 
        ? 'GÜNLÜK GELİŞTİRME SÜRESİ' 
        : language === 'ar' 
        ? 'أيام للتطوير والإنجاز' 
        : 'HARI JANGKA MASA PEMBINAAN' 
    },
    { 
      value: '100%', 
      label: language === 'en' 
        ? 'SOURCE CODE OWNERSHIP' 
        : language === 'fr' 
        ? 'PROPRIÉTÉ COMPLÈTE DU CODE' 
        : language === 'tr' 
        ? 'KOD MÜLKİYETİ SAHİPLİĞİ' 
        : language === 'ar' 
        ? 'ملكية كاملة للكود المصدري' 
        : 'HAK MILIK KOD SUMBER' 
    },
    { 
      value: 'GLOBAL', 
      label: language === 'en' 
        ? 'WORLDWIDE AVAILABILITY' 
        : language === 'fr' 
        ? 'DISPONIBILITÉ MONDIALE' 
        : language === 'tr' 
        ? 'DÜNYA ÇAPINDA ERİŞİM' 
        : language === 'ar' 
        ? 'متاح في جميع أنحاء العالم' 
        : 'KETERSEDIAAN SELURUH DUNIA' 
    },
  ];

  return (
    <section id="performance" className="relative w-full py-28 bg-black overflow-hidden border-b border-white/5">
      {/* Stats Section Video (Desaturated/Saturated 0) in Background */}
      <div className="absolute inset-0 z-0">
        <HlsVideo
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          className="w-full h-full object-cover opacity-30 filter saturate-0 blur-[2px]"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Large Stats Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="liquid-glass rounded-[2rem] border border-white/5 p-8 sm:p-12 md:p-16 backdrop-blur-xl relative overflow-hidden shadow-2xl flex flex-col lg:flex-row justify-between items-stretch gap-12"
        >
          {/* Background subtle mesh glow */}
          <div className="absolute -top-1/4 -right-1/4 w-[350px] h-[350px] bg-white/[0.03] rounded-full blur-[80px] pointer-events-none" />

          {/* Left Block - High Impact Message */}
          <div className="flex flex-col justify-between max-w-md lg:border-r lg:border-white/10 lg:pr-12">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50">
                {t.statsBadge}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-tight">
                {t.statsHeading}
              </h2>
            </div>
            
            <div className="mt-8 lg:mt-0 pt-8 lg:pt-0 border-t border-white/5 lg:border-t-0">
              <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                {t.statsText}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                  {t.statsSync}
                </span>
              </div>
            </div>
          </div>

          {/* Right Block - Stats Grid (4xl-6xl values) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 lg:pl-4">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col justify-between border-b border-white/5 pb-4 group"
              >
                <span className="text-white/50 text-[10px] font-mono tracking-widest uppercase">
                  {metric.label}
                </span>
                
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white tracking-tight mt-3 mb-1 group-hover:text-white/90 transition-colors">
                  {metric.value}
                </span>

                <div className="w-0 group-hover:w-full h-[1px] bg-white/40 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
