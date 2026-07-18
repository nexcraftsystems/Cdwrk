import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  Globe, 
  X, 
  ExternalLink, 
  RefreshCw, 
  ShieldAlert, 
  ArrowLeft,
  Lock,
  Maximize2
} from 'lucide-react';
import { Language, TranslationSchema } from '../translations';

interface RelatedWorkProps {
  language: Language;
  t: TranslationSchema;
  onBackToHome?: () => void;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  desc: string;
  tech: string;
  speedIndex: string;
  link: string;
  image: string; // base64 or URL
}

function ProjectMiniature({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="w-full h-44 bg-[#121212] rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Fallback beautiful vector cards for premium liquid-glass vibe
  const themeGradients = [
    'from-indigo-950/40 via-slate-900 to-black',
    'from-emerald-950/40 via-zinc-950 to-black',
    'from-blue-950/40 via-slate-900 to-black',
    'from-violet-950/40 via-neutral-950 to-black',
    'from-red-950/40 via-stone-950 to-black',
    'from-cyan-950/40 via-slate-950 to-black',
  ];
  
  const hash = project.name ? project.name.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) : 0;
  const gradient = themeGradients[hash % themeGradients.length];

  return (
    <div className={`w-full h-44 bg-gradient-to-br ${gradient} rounded-lg p-4 flex flex-col justify-between overflow-hidden relative border border-white/5`}>
      <div className="flex justify-between items-center text-[8px] text-white/40 font-mono">
        <span className="tracking-widest uppercase truncate max-w-[120px]">{project.category || 'PROJECT'}</span>
        <span className="bg-white/10 px-1.5 py-0.5 rounded font-sans text-[6px] tracking-wide">AURA_BUILD</span>
      </div>
      
      <div className="my-auto text-center py-2">
        <div className="text-sm font-serif italic text-white/90 leading-tight">
          {project.name}
        </div>
        <div className="text-[9px] text-white/40 mt-2 max-w-[180px] mx-auto leading-tight truncate">
          {project.tech || 'React • Tailwind CSS'}
        </div>
      </div>
      
      <div className="flex justify-between items-center text-[8px] font-mono text-white/30 border-t border-white/5 pt-2">
        <span className="truncate max-w-[100px]">{project.speedIndex || '0.1s LCP'}</span>
        <div className="flex gap-1 items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[7px]">PREVIEW</span>
        </div>
      </div>
    </div>
  );
}

export default function RelatedWork({ language, t, onBackToHome }: RelatedWorkProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('digitize_portfolio');
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing stored projects:', e);
      }
    } else {
      const defaultProjects: Project[] = [
        {
          id: 'p-1',
          name: 'Hero Display Alpha',
          category: 'Hero Sections',
          desc: 'Immersive main entry screen with text masking, dual CTA structures, and floating particles.',
          tech: 'React • Tailwind CSS • Framer Motion',
          speedIndex: '0.1s LCP',
          link: 'https://vite.dev',
          image: ''
        },
        {
          id: 'p-2',
          name: 'Technical Bento Grid',
          category: 'Feature Layouts',
          desc: '3x3 staggered card configuration showcasing performance statistics, video frames, and assets.',
          tech: 'ViteJS • CSS Grid • Responsive Rails',
          speedIndex: '99/100 Mobile',
          link: 'https://lucide.dev',
          image: ''
        },
        {
          id: 'p-3',
          name: 'Alternating Feature Chess',
          category: 'Branding Blocks',
          desc: 'Split columns detailing operational models backed by seamless scroll animations and vector frames.',
          tech: 'SVG Vectors • Horizontal Timelines',
          speedIndex: '0.0ms Layout Shift',
          link: 'https://tailwind.org',
          image: ''
        },
        {
          id: 'p-4',
          name: 'Metrics Counter Grid',
          category: 'Analytics & Rates',
          desc: '4-column numeric showcase displaying financial gains, timeframes, and active global waitlists.',
          tech: 'Tailwind Flex • Counting Animations',
          speedIndex: '0.08s Interaction',
          link: 'https://recharts.org',
          image: ''
        },
        {
          id: 'p-5',
          name: 'Secure Database Controller',
          category: 'CRM Interfaces',
          desc: 'Enterprise data hub with client deletion controls, JSON exporting, and Google OAuth locking.',
          tech: 'React Hooks • localStore Engine',
          speedIndex: 'Sub-millisecond Search',
          link: 'https://supabase.com',
          image: ''
        },
        {
          id: 'p-6',
          name: 'Immersive Video Hero',
          category: 'Media Displays',
          desc: 'Desaturated full-bleed video layouts running under custom real-time clocks and navigational grids.',
          tech: 'Mux Video • HLS Stream APIs',
          speedIndex: 'Zero Stream Latency',
          link: 'https://mux.com',
          image: ''
        },
        {
          id: 'p-7',
          name: 'Client Identity Cloud',
          category: 'Marketing Loops',
          desc: 'Seamless, hardware-accelerated infinite scrolling marquee featuring desaturated SVG emblems.',
          tech: 'CSS Transform • GPU Acceleration',
          speedIndex: '60 FPS Continuous',
          link: 'https://stripe.com',
          image: ''
        },
        {
          id: 'p-8',
          name: 'Testimonial Slider Card',
          category: 'Trust Modules',
          desc: 'Clean, editorial testimonial cards containing verified badges, custom quotes, and high-res avatars.',
          tech: 'Responsive Sliders • SVG Ratings',
          speedIndex: 'Aesthetic Alignment',
          link: 'https://dribbble.com',
          image: ''
        },
        {
          id: 'p-9',
          name: 'FAQ Accordion Rows',
          category: 'Legal & Info',
          desc: 'Self-collapsing answers styled with custom dynamic state vectors and spacing rhythm structures.',
          tech: 'AnimatePresence • CSS Height Auto',
          speedIndex: 'Instant Response',
          link: 'https://framer.com',
          image: ''
        },
        {
          id: 'p-10',
          name: 'Global Latitude Footer',
          category: 'Footer Frameworks',
          desc: 'Comprehensive final layout tracking company coordinates, global servers, and admin access nodes.',
          tech: 'Sovereign Node • Geographic APIs',
          speedIndex: 'Fully Optimized DOM',
          link: 'https://google.com',
          image: ''
        }
      ];
      localStorage.setItem('digitize_portfolio', JSON.stringify(defaultProjects));
      setProjects(defaultProjects);
    }
  }, []);

  const handleReloadIframe = () => {
    setIframeKey(prev => prev + 1);
  };

  // Divide projects into exactly 2 rows
  const row1 = projects.filter((_, idx) => idx % 2 === 0);
  const row2 = projects.filter((_, idx) => idx % 2 !== 0);

  // Duplicated arrays for seamless continuous sliding
  const marqueeItems1 = [...row1, ...row1, ...row1];
  const marqueeItems2 = [...row2, ...row2, ...row2];

  return (
    <section id="related-work" className={`relative w-full ${onBackToHome ? 'pt-36 pb-24 min-h-screen' : 'py-24'} bg-black overflow-hidden border-b border-white/5`}>
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-white/[0.01] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {onBackToHome && (
          <div className="mb-10 flex">
            <button
              onClick={onBackToHome}
              className="px-5 py-2.5 rounded-full liquid-glass border border-white/10 hover:bg-white/5 hover:border-white/20 text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-white flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-lg"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Back to Landing' : 'Kembali ke Laman Utama'}</span>
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50">
            03 // PORTFOLIO PREVIEWS (AURA.BUILD)
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif italic text-white tracking-tight leading-snug">
            {language === 'en' ? 'Explore Premium Related Projects' : 'Terokai Projek Premium Berkaitan'}
          </h2>
          <p className="mt-3 text-white/50 text-sm font-light leading-relaxed">
            {language === 'en' 
              ? 'A curated selection of high-end web designs and dashboard blocks engineered using our Liquid Glass style primitives. Hover to pause any row and click to launch our secure interactive web preview frame.' 
              : 'Pilihan reka bentuk web premium dan blok papan pemuka yang dibina menggunakan primitif gaya Liquid Glass kami. Layangkan tetikus untuk menjeda tatalan dan klik untuk melancarkan bingkai pratonton web interaktif kami.'}
          </p>
        </div>
      </div>

      {/* TWO ROW AUTOMATIC SLIDING TICKER */}
      <div className="w-full flex flex-col gap-8 py-4 overflow-hidden relative">
        
        {/* ROW 1: Auto-sliding right-to-left */}
        <div className="w-full overflow-hidden flex relative py-2">
          {marqueeItems1.length > 0 ? (
            <div className="animate-marquee-slow-1">
              {marqueeItems1.map((project, idx) => (
                <div
                  key={`row1-${project.id}-${idx}`}
                  onClick={() => setSelectedProject(project)}
                  className="w-[280px] sm:w-[320px] mx-4 shrink-0 group relative liquid-glass rounded-2xl border border-white/5 overflow-hidden p-4 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-xl shadow-black/80 animate-fade-in"
                >
                  {/* Browser Mock Header */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="flex items-center gap-1 text-[7px] font-mono text-white/30">
                      <Laptop className="w-3 h-3" />
                      <span>AURA_PREVIEW</span>
                    </div>
                  </div>

                  {/* Render Miniature - Directly displayed */}
                  <div className="w-full relative group-hover:scale-[1.01] transition-transform duration-300">
                    <ProjectMiniature project={project} />
                  </div>

                  {/* Elegant Hover Overlay containing Title, Category, Description, and Technical Specs */}
                  <div className="absolute inset-0 bg-black/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-5 text-left pointer-events-none border border-white/10 rounded-2xl">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[8px] font-mono text-green-400 uppercase tracking-[0.2em]">{project.category}</span>
                      <h3 className="text-sm font-serif italic text-white tracking-tight">{project.name}</h3>
                      <p className="text-[10px] text-white/60 leading-relaxed font-light mt-1">{project.desc}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* Tech specs bar inside hover */}
                      <div className="border-t border-white/10 pt-2.5 flex flex-col gap-1 font-mono text-[8px] text-white/40">
                        <div className="flex justify-between items-center">
                          <span>ENGINE:</span>
                          <span className="text-white/70 text-right truncate max-w-[150px]">{project.tech}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>SPEED INDEX:</span>
                          <span className="text-green-400 font-semibold">{project.speedIndex}</span>
                        </div>
                      </div>

                      {/* Interactive Trigger block */}
                      <div className="mt-1 flex items-center gap-2 text-[8px] tracking-widest font-mono uppercase text-white/90 border-t border-white/5 pt-2">
                        <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center border border-white/10 shrink-0">
                          <Maximize2 className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span>LAUNCH WEB PREVIEW</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center w-full py-8 text-white/30 font-mono text-xs">No projects loaded.</div>
          )}
        </div>

        {/* ROW 2: Auto-sliding right-to-left at different speed */}
        <div className="w-full overflow-hidden flex relative py-2">
          {marqueeItems2.length > 0 ? (
            <div className="animate-marquee-slow-2">
              {marqueeItems2.map((project, idx) => (
                <div
                  key={`row2-${project.id}-${idx}`}
                  onClick={() => setSelectedProject(project)}
                  className="w-[280px] sm:w-[320px] mx-4 shrink-0 group relative liquid-glass rounded-2xl border border-white/5 overflow-hidden p-4 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-xl shadow-black/80 animate-fade-in"
                >
                  {/* Browser Mock Header */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="flex items-center gap-1 text-[7px] font-mono text-white/30">
                      <Laptop className="w-3 h-3" />
                      <span>AURA_PREVIEW</span>
                    </div>
                  </div>

                  {/* Render Miniature - Directly displayed */}
                  <div className="w-full relative group-hover:scale-[1.01] transition-transform duration-300">
                    <ProjectMiniature project={project} />
                  </div>

                  {/* Elegant Hover Overlay containing Title, Category, Description, and Technical Specs */}
                  <div className="absolute inset-0 bg-black/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-5 text-left pointer-events-none border border-white/10 rounded-2xl">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[8px] font-mono text-green-400 uppercase tracking-[0.2em]">{project.category}</span>
                      <h3 className="text-sm font-serif italic text-white tracking-tight">{project.name}</h3>
                      <p className="text-[10px] text-white/60 leading-relaxed font-light mt-1">{project.desc}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* Tech specs bar inside hover */}
                      <div className="border-t border-white/10 pt-2.5 flex flex-col gap-1 font-mono text-[8px] text-white/40">
                        <div className="flex justify-between items-center">
                          <span>ENGINE:</span>
                          <span className="text-white/70 text-right truncate max-w-[150px]">{project.tech}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>SPEED INDEX:</span>
                          <span className="text-green-400 font-semibold">{project.speedIndex}</span>
                        </div>
                      </div>

                      {/* Interactive Trigger block */}
                      <div className="mt-1 flex items-center gap-2 text-[8px] tracking-widest font-mono uppercase text-white/90 border-t border-white/5 pt-2">
                        <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center border border-white/10 shrink-0">
                          <Maximize2 className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span>LAUNCH WEB PREVIEW</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center w-full py-8 text-white/30 font-mono text-xs">No projects loaded.</div>
          )}
        </div>
      </div>

      {/* PORTFOLIO BROWSER PREVIEW DIALOG MODAL (Aesthetic Mock Safari/Chrome Frame) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.93, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-6xl h-[85vh] bg-[#0c0c0c] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Browser Interface Top Window Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center bg-[#151515] border-b border-white/5 p-4 gap-3">
                {/* Simulated window action buttons (macOS style) */}
                <div className="flex items-center gap-6 justify-between sm:justify-start">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer flex items-center justify-center group"
                      title="Close"
                    >
                      <X className="w-2 h-2 text-red-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  
                  {/* Current Active Title */}
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white/90 leading-tight flex items-center gap-1.5">
                      {selectedProject.name}
                      <span className="text-[8px] font-mono bg-white/10 text-white/60 px-1.5 py-0.2 rounded font-normal uppercase">{selectedProject.category}</span>
                    </span>
                    <span className="text-[9px] text-white/40 font-mono tracking-wide leading-none">{selectedProject.tech}</span>
                  </div>
                </div>

                {/* Simulated secure URL address bar */}
                <div className="flex-1 max-w-lg mx-auto w-full relative">
                  <div className="w-full bg-black/50 border border-white/5 rounded-lg py-1.5 pl-3.5 pr-10 text-[10px] font-mono text-white/60 flex items-center gap-2 overflow-hidden truncate">
                    <span className="text-green-500">HTTPS://</span>
                    <span className="text-white/80 select-all truncate">{selectedProject.link ? selectedProject.link.replace(/^https?:\/\//, '') : 'aura.build/sandbox/' + selectedProject.id}</span>
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                    {selectedProject.link && (
                      <button 
                        onClick={handleReloadIframe}
                        className="p-1 hover:bg-white/5 text-white/40 hover:text-white rounded transition-colors cursor-pointer"
                        title="Reload Sandbox Frame"
                      >
                        <RefreshCw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Responsive Viewport Sizer Controls */}
                <div className="flex items-center justify-end gap-2.5">
                  <div className="flex bg-black/40 border border-white/5 rounded-lg p-1">
                    {[
                      { mode: 'desktop', icon: Laptop, label: 'Desktop (100%)' },
                      { mode: 'tablet', icon: Tablet, label: 'Tablet (768px)' },
                      { mode: 'mobile', icon: Smartphone, label: 'Mobile (375px)' }
                    ].map((item) => {
                      const Icon = item.icon;
                      const active = viewportMode === item.mode;
                      return (
                        <button
                          key={item.mode}
                          onClick={() => setViewportMode(item.mode as any)}
                          className={`p-1.5 rounded-md transition-all cursor-pointer ${active ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
                          title={item.label}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </button>
                      );
                    })}
                  </div>

                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                      title="Open in New Tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Dynamic Sandbox Viewport Container */}
              <div className="flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden relative bg-[#090909]">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 text-[8px] font-mono text-white/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>ACTIVE EMBED NODE</span>
                </div>

                <motion.div 
                  layout
                  transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                  className={`h-full bg-black shadow-2xl relative border border-white/10 overflow-hidden flex flex-col ${
                    viewportMode === 'desktop' ? 'w-full rounded-xl' :
                    viewportMode === 'tablet' ? 'w-[768px] rounded-xl' :
                    'w-[375px] rounded-2xl'
                  }`}
                >
                  <div className="flex-1 w-full h-full overflow-y-auto custom-scrollbar relative">
                    {selectedProject.link ? (
                      /* Live Web Embedding */
                      <iframe
                        key={`${selectedProject.id}-${iframeKey}`}
                        src={selectedProject.link}
                        className="w-full h-full bg-white border-0"
                        title={selectedProject.name}
                        referrerPolicy="no-referrer"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      />
                    ) : selectedProject.image ? (
                      /* High-Res Static Mockup Image */
                      <div className="w-full h-full flex items-start justify-center p-1 bg-[#101010]">
                        <img 
                          src={selectedProject.image} 
                          alt={selectedProject.name} 
                          className="w-full h-auto object-contain rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      /* Full Feature Visual Block Showcase */
                      <div className="w-full h-full flex flex-col justify-between p-10 bg-[#0c0c0c] text-white">
                        <div className="max-w-xl">
                          <span className="text-[10px] font-mono text-green-500 uppercase tracking-[0.2em]">{selectedProject.category}</span>
                          <h4 className="text-3xl font-serif italic text-white mt-4">{selectedProject.name}</h4>
                          <p className="text-white/50 text-xs font-light mt-4 leading-relaxed">{selectedProject.desc}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 my-8">
                          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-[8px] font-mono text-white/40 uppercase block">TECH STACK ENGINE</span>
                            <span className="text-xs font-semibold text-white/90 block mt-1">{selectedProject.tech}</span>
                          </div>
                          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="text-[8px] font-mono text-white/40 uppercase block">COMPUTED PERFORMANCE</span>
                            <span className="text-xs font-semibold text-green-400 block mt-1">{selectedProject.speedIndex}</span>
                          </div>
                        </div>

                        <div className="border-t border-white/5 pt-6 flex items-center justify-between text-xs text-white/40">
                          <span className="font-mono">NODE_SPEC: STATIC_AURA_VECTOR</span>
                          <span className="font-mono">REF: {selectedProject.id.toUpperCase()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Bottom Browser Advisory Bar */}
              <div className="bg-[#121212] border-t border-white/5 px-6 py-3 flex justify-between items-center text-[10px] text-white/40 font-mono">
                <span>AURA PREVIEW ENGINE v1.2</span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-green-500" />
                  <span>SECURE SANDBOX ENVIRONMENT // FRAME PROTECTION ACTIVE</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
