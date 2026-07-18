import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Language, TranslationSchema } from '../translations';

interface LeadershipProps {
  language: Language;
  t: TranslationSchema;
}

export default function Leadership({ language, t }: LeadershipProps) {
  const leaders = [
    {
      eyebrow: language === 'en' ? 'FOUNDING PARTNER' : 'RAKAN PENGASAS',
      name: 'Mikhail Vassell',
      role: language === 'en' ? 'Managing Director & Lead Architect' : 'Pengarah Urusan & Ketua Arkitek',
      quote: t.founder1Quote,
      initials: 'MV',
    },
    {
      eyebrow: language === 'en' ? 'CHIEF OF ENGINEERING' : 'KETUA KEJURUTERAAN',
      name: 'Dr. Aris Thorne',
      role: language === 'en' ? 'Head of High-Density Systems' : 'Ketua Sistem Ketumpatan Tinggi',
      quote: t.founder2Quote,
      initials: 'AT',
    },
    {
      eyebrow: language === 'en' ? 'CLIENT RELATIONSHIPS' : 'HUBUNGAN PELANGGAN',
      name: 'Gabriella Chen',
      role: language === 'en' ? 'Global Delivery & Operations Director' : 'Pengarah Operasi & Penghantaran Global',
      quote: t.founder3Quote,
      initials: 'GC',
    },
  ];

  return (
    <section id="leadership" className="relative w-full py-24 bg-black overflow-hidden border-b border-white/5">
      {/* Background glow accents */}
      <div className="absolute bottom-12 right-12 w-[350px] h-[350px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />

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
            {t.trustBadge}
          </motion.span>
          
          <h2 className="mt-4 text-3xl md:text-4xl font-serif italic text-white tracking-tight leading-snug">
            {t.trustHeading}
          </h2>
          
          <p className="mt-4 text-white/50 text-sm font-light leading-relaxed">
            {t.trustSub}
          </p>
        </div>

        {/* 3-Column Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              className="liquid-glass rounded-2xl border border-white/5 p-8 flex flex-col justify-between hover:scale-[1.02] transition-all duration-500 hover:bg-white/[0.02] group shadow-xl shadow-black/50"
            >
              
              {/* Top - Eyebrow & Name */}
              <div className="flex flex-col">
                {/* Eyebrow - Exactly 10px uppercase tracking-widest */}
                <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase mb-4">
                  {leader.eyebrow}
                </span>

                <div className="flex items-center gap-4 mb-6">
                  {/* Visual initial avatar block */}
                  <div className="w-12 h-12 rounded-full liquid-glass-strong border border-white/10 flex items-center justify-center font-mono font-medium text-xs text-white group-hover:scale-105 transition-transform duration-300">
                    {leader.initials}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-serif italic text-white tracking-tight group-hover:text-white/80 transition-colors">
                      {leader.name}
                    </h3>
                    <span className="text-xs text-white/40 tracking-wide font-sans">
                      {leader.role}
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-white/5 mb-6" />

                {/* Body - Quote with Lucide Quote icon */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-3 -left-3 w-6 h-6 text-white/5 opacity-40 group-hover:opacity-100 group-hover:text-white/10 transition-colors" />
                  <p className="text-white/70 text-sm font-light leading-relaxed italic relative z-10 pl-2">
                    "{leader.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom Info / Status */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase">
                  {t.trustNode}
                </span>
                <span className="text-[9px] font-mono text-green-500/80 bg-green-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                  Verified Active
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
