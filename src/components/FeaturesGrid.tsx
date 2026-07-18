import { motion } from 'motion/react';
import 'iconify-icon';
import { Language, TranslationSchema } from '../translations';
import { getCountry } from '../lib/countries';

interface FeaturesGridProps {
  country: string;
  language: Language;
  t: TranslationSchema;
}

export default function FeaturesGrid({ country, language, t }: FeaturesGridProps) {
  const countryConfig = getCountry(country);
  
  const features = [
    {
      icon: 'solar:bolt-circle-bold-duotone',
      title: t.service1Title,
      desc: t.service1Desc,
      originalPrice: `${language === 'en' ? 'Original' : language === 'fr' ? 'Original' : language === 'tr' ? 'Orijinal' : language === 'ar' ? 'السعر الأصلي' : 'Asal'}: ${countryConfig.originalPrices.service1}`,
    },
    {
      icon: 'solar:widget-5-bold-duotone',
      title: t.service2Title,
      desc: t.service2Desc,
      originalPrice: `${language === 'en' ? 'Original' : language === 'fr' ? 'Original' : language === 'tr' ? 'Orijinal' : language === 'ar' ? 'السعر الأصلي' : 'Asal'}: ${countryConfig.originalPrices.service2}`,
    },
    {
      icon: 'solar:magic-stick-3-bold-duotone',
      title: t.service3Title,
      desc: t.service3Desc,
      originalPrice: `${language === 'en' ? 'Original' : language === 'fr' ? 'Original' : language === 'tr' ? 'Orijinal' : language === 'ar' ? 'السعر الأصلي' : 'Asal'}: ${countryConfig.originalPrices.service3}`,
    },
    {
      icon: 'solar:link-round-bold-duotone',
      title: t.service4Title,
      desc: t.service4Desc,
      originalPrice: `${language === 'en' ? 'Original' : language === 'fr' ? 'Original' : language === 'tr' ? 'Orijinal' : language === 'ar' ? 'السعر الأصلي' : 'Asal'}: ${countryConfig.originalPrices.service4}`,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  return (
    <section id="capabilities" className="relative w-full py-24 bg-black overflow-hidden border-b border-white/5">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-white/[0.01] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50"
          >
            {t.servicesBadge}
          </motion.span>
          
          <h2 className="mt-4 text-3xl md:text-4xl font-serif italic text-white tracking-tight leading-snug">
            {t.servicesHeading}
          </h2>
          
          <p className="mt-4 text-white/50 text-sm font-light leading-relaxed">
            {t.servicesText}
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="liquid-glass rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col items-start hover:scale-[1.03] transition-all duration-500 hover:bg-white/[0.02] group cursor-pointer shadow-xl shadow-black/40"
            >
              {/* Strong Circular Icon Enclosure */}
              <div className="w-12 h-12 rounded-full liquid-glass-strong flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <iconify-icon icon={feat.icon} style={{ fontSize: '24px' }}></iconify-icon>
              </div>
              
              {/* Title in Italic Serif */}
              <h3 className="text-xl font-serif italic text-white tracking-tight mb-3 group-hover:text-white/90 transition-colors">
                {feat.title}
              </h3>
              
              {/* Barlow Description */}
              <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed font-sans mb-4">
                {feat.desc}
              </p>

              {/* Original Price Badge in MYR */}
              <div className="mb-2">
                <span className="text-[10px] bg-white/[0.03] border border-white/5 text-white/40 px-2 py-0.5 rounded font-mono group-hover:text-white/60 group-hover:border-white/10 transition-colors line-through">
                  {feat.originalPrice}
                </span>
              </div>
              
              {/* Interactive Corner Accent indicator */}
              <div className="mt-auto flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-white/20 group-hover:text-white/50 transition-colors uppercase">
                <span>{t.activeStatus}</span>
                <div className="w-1 h-1 rounded-full bg-green-500/80 group-hover:bg-white animate-pulse" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
