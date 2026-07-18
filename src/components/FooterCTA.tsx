import React, { FormEvent, useState, useEffect, useRef, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Send, 
  ShieldAlert, 
  CheckCircle2, 
  Lock, 
  Download,
  X,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Instagram,
  MessageCircle,
  Youtube
} from 'lucide-react';
import { Language, TranslationSchema } from '../translations';
import { submitWaitlistEntry, WaitlistEntry } from '../lib/firebase';
import { COUNTRIES } from '../lib/countries';
import CountryFlag from './CountryFlag';
import CodWorkingLogo from './CodWorkingLogo';

const SOCIAL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  telegram: Send,
  discord: MessageCircle,
  youtube: Youtube
};

interface FooterCTAProps {
  country: string;
  setCountry: (code: string) => void;
  language: Language;
  t: TranslationSchema;
  setCurrentView?: (view: 'home' | 'portfolio' | 'workspace') => void;
}

export default function FooterCTA({ country, setCountry, language, t, setCurrentView }: FooterCTAProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dbEntries, setDbEntries] = useState<WaitlistEntry[]>([]);
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(650);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [socialLinks, setSocialLinks] = useState(() => {
    const stored = localStorage.getItem('digitize_social_links');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      linkedin: 'https://linkedin.com/company/codworking',
      github: 'https://github.com/codworking',
      twitter: 'https://twitter.com/codworking',
      facebook: 'https://facebook.com/codworking',
      instagram: 'https://instagram.com/codworking',
      telegram: 'https://t.me/codworking',
      discord: 'https://discord.gg/codworking',
      youtube: 'https://youtube.com/@codworking'
    };
  });

  // Dynamically synchronize updated social links
  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem('digitize_social_links');
      if (stored) {
        try {
          setSocialLinks(JSON.parse(stored));
        } catch (e) {}
      }
    };
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 1000);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'rebrand',
    bottleneck: '',
  });

  const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=400&auto=format&fit=crop"
  ];

  const angles = [-80, -60, -40, -20, 0, 20, 40, 60, 80];

  // Infinite Rotation & Responsive Orbit Radius setup
  useEffect(() => {
    const handleResize = () => {
      const r = window.innerWidth < 640 ? 320 : (window.innerWidth < 1024 ? 450 : 650);
      setRadius(r);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    let animationFrameId: number;
    let currentRotation = 0;
    const animate = () => {
      currentRotation += 0.05; // Clockwise rotation (flipped from counter-clockwise)
      setRotation(currentRotation);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Body scroll lock when waitlist modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Pre-seed some mock data if empty (maintaining CRM parity)
  useEffect(() => {
    const stored = localStorage.getItem('digitize_waitlist');
    if (stored) {
      try {
        setDbEntries(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    } else {
      const initialMock: WaitlistEntry[] = [
        {
          id: 'mock-1',
          name: 'Sarah Jenkins',
          email: 'sarah@flowlogistics.co',
          phone: '+1 (415) 882-9901',
          company: 'Flow Logistics Corp',
          service: 'Complete Startup Rebranding + System Rebuild',
          notes: 'Our current customer facing hub is incredibly slow. We need an aesthetic, fluid 3-5 days rebuild to recover conversion rates.',
          timestamp: new Date(Date.now() - 3600000 * 4).toLocaleString(),
        },
        {
          id: 'mock-2',
          name: 'Amirul Hakim',
          email: 'amirul@borneotech.my',
          phone: '+60 19-228 3394',
          company: 'Borneo Tech Solutions',
          service: 'Bespoke Custom CRM System',
          notes: 'Mahu menukar sistem penjejakan pelanggan manual kami kepada CRM tersuai cecair yang beroperasi dalam Bahasa Melayu & Inggeris.',
          timestamp: new Date(Date.now() - 3600000 * 24).toLocaleString(),
        }
      ];
      localStorage.setItem('digitize_waitlist', JSON.stringify(initialMock));
      setDbEntries(initialMock);
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.bottleneck) {
      return;
    }
    
    let serviceLabel = formData.service;
    if (formData.service === 'web') serviceLabel = t.optWeb;
    else if (formData.service === 'crm') serviceLabel = t.optCrm;
    else if (formData.service === 'ecom') serviceLabel = t.optEcom;
    else if (formData.service === 'rebrand') serviceLabel = t.optRebrand;

    const newEntryPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: serviceLabel,
      notes: formData.bottleneck,
    };

    try {
      // Real-time Firebase submission
      const newDocId = await submitWaitlistEntry(newEntryPayload);

      const newEntry: WaitlistEntry = {
        id: newDocId || ('entry-' + Date.now()),
        ...newEntryPayload,
        timestamp: new Date().toLocaleString(),
      };

      const updated = [newEntry, ...dbEntries];
      localStorage.setItem('digitize_waitlist', JSON.stringify(updated));
      setDbEntries(updated);
      setFormSubmitted(true);
    } catch (e) {
      console.error("Error submitting waitlist to Firestore, falling back to localStorage: ", e);
      // Local fallback
      const newEntry: WaitlistEntry = {
        id: 'entry-' + Date.now(),
        ...newEntryPayload,
        timestamp: new Date().toLocaleString(),
      };

      const updated = [newEntry, ...dbEntries];
      localStorage.setItem('digitize_waitlist', JSON.stringify(updated));
      setDbEntries(updated);
      setFormSubmitted(true);
    }
  };

  const openWaitlistModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section 
      id="apply" 
      className="relative bg-[#030305] text-white antialiased selection:bg-blue-500/30 overflow-hidden flex flex-col items-center min-h-screen pt-16 pb-0 border-t border-white/5"
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 50% 100%, rgba(37, 99, 235, 0.15) 0%, transparent 60%)' }}
      />

      {/* Orbit Animation Container - Upside down */}
      <div 
        id="orbit-center"
        className="absolute bottom-[200px] md:bottom-[280px] left-1/2 -translate-x-1/2 w-0 h-0 z-0 flex items-center justify-center pointer-events-none scale-x-[-1]"
      >
        <div 
          id="orbit-ring" 
          className="relative w-0 h-0 transition-transform duration-75"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {angles.map((angle, i) => (
            <div 
              key={i}
              className="orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-[#111113] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center opacity-80 transition-transform duration-300"
              style={{ transform: `rotate(${angle}deg) translateY(-${radius}px)` }}
            >
              <img 
                src={images[i % images.length]} 
                className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-300" 
                alt=""
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Upper content container with horizontal padding */}
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col items-center z-10 relative pb-12">
        {/* Hero Content Block with beautiful framer motion fades */}
        <motion.div 
          id="hero-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center text-center max-w-3xl mt-8 sm:mt-12"
        >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8">
          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
            <Flame className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-medium text-blue-200 tracking-wide uppercase font-mono">
            {t.formBadge}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-white tracking-tight leading-tight">
          {t.formHeading}
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-400 font-light max-w-2xl leading-relaxed font-sans">
          {t.formText}
        </p>

        <button 
          onClick={openWaitlistModal}
          className="mt-10 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-300 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] border border-blue-500/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          {language === 'en' ? 'Claim Offer & Join Waitlist' : 'Tuntut Tawaran & Sertai Senarai Menunggu'}
        </button>
      </motion.div>

      
      </div>

      {/* Modal Popup for Intake Form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              id="waitlist-form"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-[#0a0a0c]/95 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <h3 className="text-2xl font-serif italic text-white tracking-tight">
                        {t.formTitle}
                      </h3>
                      <p className="text-white/40 text-xs font-light mt-1 font-sans">
                        {t.formSub}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                          {t.labelName}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t.placeholderName}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors font-sans"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                          {t.labelEmail}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.placeholderEmail}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                          {t.labelPhone}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t.placeholderPhone}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors font-sans"
                        />
                      </div>

                      {/* Company */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                          {t.labelCompany}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={t.placeholderCompany}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                        {t.labelService}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors font-sans appearance-none cursor-pointer"
                      >
                        <option value="rebrand">{t.optRebrand}</option>
                        <option value="web">{t.optWeb}</option>
                        <option value="crm">{t.optCrm}</option>
                        <option value="ecom">{t.optEcom}</option>
                      </select>
                    </div>

                    {/* Requirements/Bottlenecks */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                        {t.labelBottleneck}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.bottleneck}
                        onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                        placeholder={t.placeholderBottleneck}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors font-sans resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-white/90 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg font-sans"
                    >
                      {t.btnSubmit}
                      <Send className="w-3 h-3" />
                    </button>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 justify-center">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{t.formDisclaimer}</span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 animate-bounce mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif italic text-white tracking-tight">
                      {t.successTitle}
                    </h3>
                    <p className="text-white/60 text-sm max-w-md font-sans font-light leading-relaxed">
                      {t.successText}
                    </p>
                    <button
                      onClick={() => {
                        setFormData({ name: '', email: '', phone: '', company: '', service: 'rebrand', bottleneck: '' });
                        setFormSubmitted(false);
                        setIsModalOpen(false);
                      }}
                      className="mt-4 px-6 py-2 rounded-full liquid-glass border border-white/15 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      {t.successBtn}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Footer & Copyright (Parity with previous setup) */}
      <footer className="w-full bg-black border-t border-white/10 relative z-20 py-16 px-6 md:px-12 flex flex-col items-center mt-12 rounded-t-[2.5rem] md:rounded-t-[4rem] overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2.5 items-center md:items-start text-center md:text-left">
            <CodWorkingLogo variant="footer" showText={false} />
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mt-1.5">
              Founder: <span className="text-white font-medium">Wan Zaim</span>
            </div>
            <span className="text-xs text-white/30 font-sans font-light mt-1">
              {language === 'en' ? 'Bespoke Software Builders & Premium Rebranding Hub. Worldwide Offices.' : 'Pembangun Perisian Khas & Hab Penjenamaan Semula Premium. Pejabat Seluruh Dunia.'}
            </span>

            {/* Dynamic Social Media Channels */}
            <div className="flex flex-wrap items-center gap-2.5 mt-3 justify-center md:justify-start">
              {Object.entries(socialLinks).map(([platform, url]) => {
                if (!url) return null;
                const IconComponent = SOCIAL_ICONS[platform];
                return (
                  <a
                    key={platform}
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
                    title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  >
                    {IconComponent ? <IconComponent className="w-3.5 h-3.5" /> : <span className="text-[8px] font-mono uppercase">{platform.slice(0, 2)}</span>}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-white/40 font-mono">
            <a href="#thesis" className="hover:text-white transition-colors">{language === 'en' ? 'APPROACH' : 'PENDEKATAN'}</a>
            <a href="#capabilities" className="hover:text-white transition-colors">{language === 'en' ? 'SERVICES' : 'PERKHIDMATAN'}</a>
            <button 
              onClick={() => setCurrentView?.('portfolio')}
              className="hover:text-white transition-colors cursor-pointer uppercase font-mono bg-transparent border-0"
            >
              PORTFOLIO
            </button>
            <a href="#performance" className="hover:text-white transition-colors">{language === 'en' ? 'PRICING' : 'HARGA'}</a>
            <button 
              onClick={() => setCurrentView?.('workspace')}
              className="hover:text-white transition-colors cursor-pointer uppercase font-mono bg-transparent border-0"
            >
              {language === 'en' ? 'WORKSPACE' : 'RUANG KERJA'}
            </button>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2.5">
            <span className="text-xs text-white/30 font-mono">
              {t.copyright}
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3.5 bg-white/[0.01] border border-white/5 rounded-full px-4.5 py-3">
              <div className="flex items-center gap-3">
                {COUNTRIES.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setCountry(c.code)}
                    className={`hover:scale-125 transition-all duration-300 cursor-pointer ${
                      country === c.code 
                        ? 'ring-2 ring-white scale-110 opacity-100 shadow-lg' 
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <CountryFlag code={c.code} size={24} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Developer Workspace Status Bar */}
        <div className="w-full max-w-7xl mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[9px] text-white/20 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" />
            <span>SYS: COMPILED // SECURE SSL ACTIVE</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView?.('workspace')}
              className="hover:text-white/60 transition-colors flex items-center gap-1.5 cursor-pointer uppercase font-mono bg-transparent border-0"
            >
              <Lock className="w-3.5 h-3.5 text-white/40" />
              <span>DEVELOPER WORKSPACE (GOOGLE SIGN-IN)</span>
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}
