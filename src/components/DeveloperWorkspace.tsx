import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Trash2, 
  Download, 
  Lock, 
  ShieldCheck, 
  ShieldAlert, 
  X, 
  Search, 
  CheckCircle, 
  Server, 
  Cpu, 
  Clock, 
  TrendingUp,
  RefreshCw,
  Menu,
  Briefcase,
  Plus,
  Pencil,
  Image,
  Save,
  ArrowLeft,
  ExternalLink,
  FileSpreadsheet,
  Share2
} from 'lucide-react';
import { Language, TranslationSchema } from '../translations';
import { Project } from './RelatedWork';
import { 
  fetchWaitlistEntries, 
  deleteWaitlistEntry, 
  loginWithGoogle, 
  auth, 
  WaitlistEntry 
} from '../lib/firebase';
import { signOut } from 'firebase/auth';

export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
  facebook: string;
  instagram: string;
  telegram: string;
  discord: string;
  youtube: string;
}

export const DEFAULT_SOCIALS: SocialLinks = {
  linkedin: 'https://linkedin.com/company/codworking',
  github: 'https://github.com/codworking',
  twitter: 'https://twitter.com/codworking',
  facebook: 'https://facebook.com/codworking',
  instagram: 'https://instagram.com/codworking',
  telegram: 'https://t.me/codworking',
  discord: 'https://discord.gg/codworking',
  youtube: 'https://youtube.com/@codworking'
};

interface DeveloperWorkspaceProps {
  language: Language;
  t: TranslationSchema;
  onBackToHome: () => void;
}

export default function DeveloperWorkspace({ language, t, onBackToHome }: DeveloperWorkspaceProps) {
  const [isDevLoggedIn, setIsDevLoggedIn] = useState(() => {
    return localStorage.getItem('digitize_dev_logged_in') === 'true';
  });
  const [devUserEmail, setDevUserEmail] = useState(() => {
    return localStorage.getItem('digitize_dev_email') || '';
  });
  
  const [activeTab, setActiveTab] = useState<'crm' | 'portfolio' | 'socials'>('crm');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Social Links State
  const [socialLinks, setSocialLinks] = useState<SocialLinks>(() => {
    const stored = localStorage.getItem('digitize_social_links');
    if (stored) {
      try {
        return { ...DEFAULT_SOCIALS, ...JSON.parse(stored) };
      } catch (e) {
        console.error('Error parsing social links:', e);
      }
    }
    return DEFAULT_SOCIALS;
  });

  // CRM state
  const [dbEntries, setDbEntries] = useState<WaitlistEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterService, setFilterService] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Portfolio CRUD state
  const [portfolioItems, setPortfolioItems] = useState<Project[]>([]);
  const [editingItem, setEditingItem] = useState<Project | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Portfolio Form State
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formTech, setFormTech] = useState('');
  const [formSpeed, setFormSpeed] = useState('');
  const [formLink, setFormLink] = useState('');
  const [formImage, setFormImage] = useState(''); // base64 or URL

  // Sign-In Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Toast Advisory HUD State
  const [showAuthToast, setShowAuthToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Load waitlist database entries
  const loadEntries = async () => {
    try {
      const firebaseEntries = await fetchWaitlistEntries();
      if (firebaseEntries && firebaseEntries.length > 0) {
        setDbEntries(firebaseEntries);
        // Sync local storage
        localStorage.setItem('digitize_waitlist', JSON.stringify(firebaseEntries));
      } else {
        const stored = localStorage.getItem('digitize_waitlist');
        if (stored) {
          try {
            setDbEntries(JSON.parse(stored));
          } catch (e) {
            console.error('Error parsing local waitlist storage:', e);
          }
        } else {
          const initialMock: WaitlistEntry[] = [
            {
              id: 'mock-1',
              name: 'Sarah Jenkins',
              email: 'sarah@flowlogistics.co',
              phone: '+1 (415) 882-9901',
              company: 'Flow Logistics Corp',
              service: language === 'en' ? 'Complete Startup Rebranding + System Rebuild' : 'Penjenamaan Semula Permulaan Lengkap + Bina Semula Sistem',
              notes: 'Our current customer facing hub is incredibly slow. We need an aesthetic, fluid 3-5 days rebuild to recover conversion rates.',
              timestamp: new Date(Date.now() - 3600000 * 4).toLocaleString(),
            },
            {
              id: 'mock-2',
              name: 'Amirul Hakim',
              email: 'amirul@borneotech.my',
              phone: '+60 19-228 3394',
              company: 'Borneo Tech Solutions',
              service: language === 'en' ? 'Bespoke Custom CRM System' : 'Sistem CRM Tersuai Khas',
              notes: 'Mahu menukar sistem penjejakan pelanggan manual kami kepada CRM tersuai cecair yang beroperasi dalam Bahasa Melayu & Inggeris.',
              timestamp: new Date(Date.now() - 3600000 * 24).toLocaleString(),
            }
          ];
          localStorage.setItem('digitize_waitlist', JSON.stringify(initialMock));
          setDbEntries(initialMock);
        }
      }
    } catch (e) {
      console.error('Error fetching waitlist from Firestore:', e);
      const stored = localStorage.getItem('digitize_waitlist');
      if (stored) {
        try {
          setDbEntries(JSON.parse(stored));
        } catch (ex) {
          console.error('Error parsing fallback waitlist:', ex);
        }
      }
    }
  };

  // Load portfolio items
  const loadPortfolio = () => {
    const stored = localStorage.getItem('digitize_portfolio');
    if (stored) {
      try {
        setPortfolioItems(JSON.parse(stored));
      } catch (e) {
        console.error('Error loading portfolio:', e);
      }
    } else {
      // Re-seed default portfolio
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
        }
      ];
      localStorage.setItem('digitize_portfolio', JSON.stringify(defaultProjects));
      setPortfolioItems(defaultProjects);
    }
  };

  // Listen to real Firebase Auth states
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (user.email === 'wanahmadzaimwr99@gmail.com') {
          setIsDevLoggedIn(true);
          setDevUserEmail(user.email);
          localStorage.setItem('digitize_dev_logged_in', 'true');
          localStorage.setItem('digitize_dev_email', user.email);
        } else {
          // Force sign out unauthorized emails
          await signOut(auth);
          setIsDevLoggedIn(false);
          setDevUserEmail('');
          localStorage.removeItem('digitize_dev_logged_in');
          localStorage.removeItem('digitize_dev_email');
          setLoginError(language === 'en' 
            ? 'Access Denied: Only wanahmadzaimwr99@gmail.com is authorized to access the Developer Portal.' 
            : 'Akses Ditolak: Hanya wanahmadzaimwr99@gmail.com sahaja yang dibenarkan mengakses Portal Pembangun.');
        }
      } else {
        const logged = localStorage.getItem('digitize_dev_logged_in') === 'true';
        const email = localStorage.getItem('digitize_dev_email') || '';
        if (logged && email === 'wanahmadzaimwr99@gmail.com') {
          setIsDevLoggedIn(true);
          setDevUserEmail(email);
        } else {
          setIsDevLoggedIn(false);
          setDevUserEmail('');
        }
      }
    });

    loadEntries();
    loadPortfolio();

    return () => unsubscribe();
  }, [language]);

  const handleRealGoogleLogin = async () => {
    setLoginError('');
    setIsLoggingIn(true);
    try {
      const user = await loginWithGoogle();
      setIsDevLoggedIn(true);
      setDevUserEmail(user.email || '');
      localStorage.setItem('digitize_dev_logged_in', 'true');
      localStorage.setItem('digitize_dev_email', user.email || '');
      
      setToastMessage(language === 'en' ? `Secure token verified. Welcome, ${user.displayName || 'developer'}.` : `Token selamat disahkan. Selamat datang, ${user.displayName || 'pembangun'}.`);
      setShowAuthToast(true);
      setTimeout(() => setShowAuthToast(false), 4000);
    } catch (err: any) {
      if (err.message === 'unauthorized_email') {
        setLoginError(language === 'en' 
          ? 'Access Denied: Only wanahmadzaimwr99@gmail.com is authorized to access the Developer Portal.' 
          : 'Akses Ditolak: Hanya wanahmadzaimwr99@gmail.com sahaja yang dibenarkan mengakses Portal Pembangun.');
      } else {
        setLoginError(language === 'en'
          ? 'Google sign-in failed. If popups are blocked, please open this app in a new tab.'
          : 'Log masuk Google gagal. Jika tetingkap timbul disekat, sila buka aplikasi ini di tab baru.');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error('Error signing out:', e);
    }
    setIsDevLoggedIn(false);
    setDevUserEmail('');
    localStorage.removeItem('digitize_dev_logged_in');
    localStorage.removeItem('digitize_dev_email');
    setToastMessage(language === 'en' ? 'Signed out of Developer Workspace.' : 'Log keluar dari Ruang Kerja Pembangun.');
    setShowAuthToast(true);
    setTimeout(() => setShowAuthToast(false), 4000);
  };

  // Waitlist CRM Handlers
  const clearEntry = async (id: string) => {
    try {
      await deleteWaitlistEntry(id);
      const filtered = dbEntries.filter(item => item.id !== id);
      localStorage.setItem('digitize_waitlist', JSON.stringify(filtered));
      setDbEntries(filtered);
      
      setToastMessage(language === 'en' ? 'Project entry removed from database.' : 'Kemasukan projek dikeluarkan dari pangkalan data.');
    } catch (e) {
      console.error('Error deleting from Firestore:', e);
      // Fallback
      const filtered = dbEntries.filter(item => item.id !== id);
      localStorage.setItem('digitize_waitlist', JSON.stringify(filtered));
      setDbEntries(filtered);
      setToastMessage(language === 'en' ? 'Entry removed locally (Firestore offline).' : 'Kemasukan dibuang secara tempatan (Firestore luar talian).');
    }
    setShowAuthToast(true);
    setTimeout(() => setShowAuthToast(false), 3000);
  };

  const exportToJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dbEntries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "digitize_ventures_waitlist.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Export to Excel-compatible CSV with UTF-8 BOM
  const exportToExcel = () => {
    const headers = [
      'ID',
      'Name',
      'Email',
      'Phone',
      'Company',
      'Target Service',
      'Operational Bottlenecks & Notes',
      'Timestamp'
    ];

    const rows = dbEntries.map(entry => [
      entry.id,
      entry.name,
      entry.email,
      entry.phone,
      entry.company,
      entry.service,
      entry.notes,
      entry.timestamp
    ].map(val => {
      if (val === undefined || val === null) return '""';
      const cleanVal = String(val).replace(/"/g, '""');
      return `"${cleanVal}"`;
    }).join(','));

    const csvContent = [headers.join(','), ...rows].join('\n');
    
    // Prepend UTF-8 Byte Order Mark (BOM) to force Excel to render UTF-8 correctly
    const BOM = "\uFEFF";
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", url);
    downloadAnchor.setAttribute("download", "digitize_ventures_waitlist.csv");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    URL.revokeObjectURL(url);

    setToastMessage(language === 'en' ? 'Database exported to Excel (CSV) successfully!' : 'Pangkalan data berjaya dieksport ke Excel (CSV)!');
    setShowAuthToast(true);
    setTimeout(() => setShowAuthToast(false), 3000);
  };

  const refreshDatabase = async () => {
    setIsRefreshing(true);
    try {
      await loadEntries();
      loadPortfolio();
      setToastMessage(language === 'en' ? 'Database synchronized.' : 'Pangkalan data diselaraskan.');
    } catch (e) {
      setToastMessage(language === 'en' ? 'Synchronization failed.' : 'Penyelarasan gagal.');
    } finally {
      setIsRefreshing(false);
      setShowAuthToast(true);
      setTimeout(() => setShowAuthToast(false), 2000);
    }
  };

  // Portfolio CRUD Handlers
  const startAddNewPortfolioItem = () => {
    setEditingItem(null);
    setIsAddingNew(true);
    setFormName('');
    setFormCategory('');
    setFormDesc('');
    setFormTech('React • Tailwind CSS');
    setFormSpeed('0.1s LCP');
    setFormLink('');
    setFormImage('');
  };

  const startEditPortfolioItem = (item: Project) => {
    setEditingItem(item);
    setIsAddingNew(false);
    setFormName(item.name || '');
    setFormCategory(item.category || '');
    setFormDesc(item.desc || '');
    setFormTech(item.tech || '');
    setFormSpeed(item.speedIndex || '');
    setFormLink(item.link || '');
    setFormImage(item.image || '');
  };

  const deletePortfolioItem = (id: string) => {
    const filtered = portfolioItems.filter(item => item.id !== id);
    localStorage.setItem('digitize_portfolio', JSON.stringify(filtered));
    setPortfolioItems(filtered);
    setToastMessage(language === 'en' ? 'Project removed from portfolio.' : 'Projek dikeluarkan dari portfolio.');
    setShowAuthToast(true);
    setTimeout(() => setShowAuthToast(false), 3000);
  };

  const handleFormPasteImage = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target?.result) {
              setFormImage(event.target.result as string);
              setToastMessage(language === 'en' ? 'Screenshot pasted successfully!' : 'Tangkapan skrin berjaya ditampal!');
              setShowAuthToast(true);
              setTimeout(() => setShowAuthToast(false), 3000);
            }
          };
          reader.readAsDataURL(blob);
        }
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormImage(event.target.result as string);
          setToastMessage(language === 'en' ? 'Image uploaded successfully!' : 'Gambar berjaya dimuat naik!');
          setShowAuthToast(true);
          setTimeout(() => setShowAuthToast(false), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const savePortfolioItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setToastMessage(language === 'en' ? 'Project name is required' : 'Nama projek diperlukan');
      setShowAuthToast(true);
      setTimeout(() => setShowAuthToast(false), 3000);
      return;
    }

    let updated: Project[] = [];
    if (editingItem) {
      updated = portfolioItems.map(item => {
        if (item.id === editingItem.id) {
          return {
            ...item,
            name: formName.trim(),
            category: formCategory.trim() || 'Custom Module',
            desc: formDesc.trim(),
            tech: formTech.trim(),
            speedIndex: formSpeed.trim(),
            link: formLink.trim(),
            image: formImage
          };
        }
        return item;
      });
      setToastMessage(language === 'en' ? 'Portfolio item updated!' : 'Item portfolio dikemas kini!');
    } else {
      const newItem: Project = {
        id: 'p-' + Date.now(),
        name: formName.trim(),
        category: formCategory.trim() || 'Custom Module',
        desc: formDesc.trim(),
        tech: formTech.trim(),
        speedIndex: formSpeed.trim(),
        link: formLink.trim(),
        image: formImage
      };
      updated = [newItem, ...portfolioItems];
      setToastMessage(language === 'en' ? 'New portfolio item added!' : 'Item portfolio baru ditambah!');
    }

    localStorage.setItem('digitize_portfolio', JSON.stringify(updated));
    setPortfolioItems(updated);
    setShowAuthToast(true);
    setTimeout(() => setShowAuthToast(false), 3000);

    // Close forms
    setEditingItem(null);
    setIsAddingNew(false);
  };

  // Filters & Search
  const filteredEntries = dbEntries.filter(entry => {
    const matchesSearch = 
      entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.notes.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterService === 'all') return matchesSearch;
    return matchesSearch && entry.service.toLowerCase().includes(filterService.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-36 pb-24 font-sans">
      {/* Visual Ambient Nodes */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      {/* SLIDING CONSOLE MENUBAR (HIDDEN BY DEFAULT) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
            />
            
            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 22, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 w-80 bg-[#070707] border-r border-white/10 z-50 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    <span className="font-mono text-xs font-bold tracking-widest uppercase text-white/90">AURA MODULE CONSOLE</span>
                  </div>
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-[10px] font-mono text-white/30 mb-4 uppercase tracking-wider">Control Nodes & Assets</p>
                
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setActiveTab('crm');
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-xs font-mono tracking-wide transition-all cursor-pointer ${
                      activeTab === 'crm' 
                        ? 'bg-white text-black font-bold border-white shadow-xl' 
                        : 'bg-white/[0.01] border-white/5 hover:bg-white/5 hover:border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    <Database className="w-4.5 h-4.5" />
                    <span>CLIENT WAITLIST CRM</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      setActiveTab('portfolio');
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-xs font-mono tracking-wide transition-all cursor-pointer ${
                      activeTab === 'portfolio' 
                        ? 'bg-white text-black font-bold border-white shadow-xl' 
                        : 'bg-white/[0.01] border-white/5 hover:bg-white/5 hover:border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    <Briefcase className="w-4.5 h-4.5" />
                    <span>MANAGE RELATED WORK</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('socials');
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left text-xs font-mono tracking-wide transition-all cursor-pointer ${
                      activeTab === 'socials' 
                        ? 'bg-white text-black font-bold border-white shadow-xl' 
                        : 'bg-white/[0.01] border-white/5 hover:bg-white/5 hover:border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    <Share2 className="w-4.5 h-4.5" />
                    <span>SOCIAL MEDIA LINKS</span>
                  </button>
                </div>
              </div>
              
              <div className="border-t border-white/5 pt-4 text-[9px] text-white/30 font-mono flex flex-col gap-1">
                <span className="uppercase tracking-widest text-[8px] text-white/40">AUTHORIZED OPERATOR</span>
                <span className="truncate text-white/60">{devUserEmail || 'session_node_active'}</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Workspace Top Header Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-8 mb-12 gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <button 
                onClick={onBackToHome}
                className="text-xs text-white/40 hover:text-white transition-colors uppercase font-mono tracking-wider flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Back to Landing' : 'Kembali ke Laman'}</span>
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <h1 className="text-3xl font-serif italic text-white tracking-tight flex items-center gap-2">
                <span>{language === 'en' ? 'Developer Workspace' : 'Ruang Kerja Pembangun'}</span>
              </h1>
              {isDevLoggedIn && (
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/5 hover:border-white/10 text-[10px] font-mono tracking-widest text-white uppercase flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
                >
                  <Menu className="w-3.5 h-3.5 text-white/70" />
                  <span>{language === 'en' ? 'Console Menu' : 'Menu Konsol'}</span>
                </button>
              )}
            </div>
            <p className="text-white/40 text-xs font-light uppercase tracking-wider font-mono">
              {language === 'en' ? 'Live System Node & Asset Catalog' : 'Sistem Node Langsung & Katalog Aset'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {isDevLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 rounded-full liquid-glass border border-white/10 hover:border-red-500/20 hover:bg-red-500/5 text-xs text-red-400 font-mono tracking-wide uppercase transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{language === 'en' ? 'Disconnect' : 'Putuskan Hubungan'}</span>
              </button>
            ) : (
              <span className="text-[10px] font-mono bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                🔒 {language === 'en' ? 'Locked' : 'Terkunci'}
              </span>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isDevLoggedIn ? (
            /* Google Accounts authentication viewport */
            <motion.div
              key="auth-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto my-12"
            >
              <div className="liquid-glass border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {isLoggingIn ? (
                    <motion.div
                      key="logging-in"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin mb-6" />
                      <span className="text-xs font-mono tracking-widest text-white/80 uppercase">VERIFYING GOOGLE TOKEN...</span>
                      <span className="text-[10px] text-white/40 mt-1">Connecting securely to Google Accounts Services</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="auth-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-white/10 mb-4">
                          <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path
                              fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-serif italic text-white tracking-tight">Sign in with Google</h3>
                        <p className="text-white/40 text-xs mt-1 leading-normal">
                          {language === 'en' 
                            ? 'Authentication is restricted to verified developers.' 
                            : 'Log masuk dihadkan kepada pembangun yang disahkan sahaja.'}
                        </p>
                      </div>

                      <div className="flex flex-col gap-5">
                        {/* Real Google Login CTA */}
                        <button
                          onClick={handleRealGoogleLogin}
                          className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-[#4285F4] hover:bg-[#357ae8] text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-lg cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                        >
                          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.986 0-.743-.08-1.3-.176-1.854H12.24z" />
                          </svg>
                          <span>{language === 'en' ? 'Authorize with Google SSO' : 'Sahkan dengan Google SSO'}</span>
                        </button>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] leading-relaxed text-white/50 text-center flex flex-col gap-2">
                          <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider block">Access Control List (ACL)</span>
                          <span>
                            {language === 'en'
                              ? 'This secure node is protected by Firebase Authentication. Only verified account wanahmadzaimwr99@gmail.com is granted administrative access.'
                              : 'Node selamat ini dilindungi oleh Firebase Authentication. Hanya akaun wanahmadzaimwr99@gmail.com sahaja yang dibenarkan akses pentadbiran.'}
                          </span>
                        </div>

                        {loginError && (
                          <span className="text-[10px] font-mono text-red-400 text-center mt-1 bg-red-400/5 py-2 px-3 rounded border border-red-500/10 flex items-center gap-1.5 justify-center">
                            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                            {loginError}
                          </span>
                        )}
                      </div>

                      <span className="text-[9px] font-mono text-white/25 text-center leading-normal mt-2 uppercase tracking-widest">
                        SECURED VIA GOOGLE OAUTH 2.0 PROTOCOL // SINGLE SIGN-ON
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            /* Developer workspace content view */
            <motion.div
              key="workspace-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-8"
            >
              {/* System Diagnostics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="liquid-glass border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">SYS STATUS</span>
                    <span className="text-sm font-semibold text-white/90 uppercase block flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      SECURE NODE
                    </span>
                  </div>
                </div>

                <div className="liquid-glass border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">COMPUTE LOAD</span>
                    <span className="text-sm font-semibold text-white/95 block font-mono">1.8% (OK)</span>
                  </div>
                </div>

                <div className="liquid-glass border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">PING LATENCY</span>
                    <span className="text-sm font-semibold text-white/95 block font-mono">12ms (EDGE)</span>
                  </div>
                </div>

                <div className="liquid-glass border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">ACTIVE TAB</span>
                    <span className="text-sm font-semibold text-white/95 block font-mono uppercase">
                      {activeTab === 'crm' ? 'Waitlist CRM' : 'Portfolio Catalog'}
                    </span>
                  </div>
                </div>
              </div>

              {/* CRM WAITLIST MODULE VIEW */}
              {activeTab === 'crm' && (
                <div className="liquid-glass border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-3xl overflow-hidden relative">
                  {/* Section header & control actions */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-green-500 uppercase bg-green-500/10 px-2.5 py-0.5 rounded border border-green-500/10 animate-pulse">
                        SECURE FIREBASE FIRESTORE CRM
                      </span>
                      <h3 className="text-xl font-serif italic text-white tracking-tight mt-3">
                        {language === 'en' ? 'Client Waitlist Database' : 'Pangkalan Data Senarai Menunggu'}
                      </h3>
                      <p className="text-white/40 text-xs font-light mt-1">
                        {language === 'en' 
                          ? 'Operational proposals and client system needs submitted to the system nodes.' 
                          : 'Cadangan operasi dan keperluan sistem pelanggan yang diserahkan kepada node sistem.'}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3.5">
                      {/* Synchronize/Refresh */}
                      <button
                        onClick={refreshDatabase}
                        disabled={isRefreshing}
                        className="px-4 py-2 rounded-lg liquid-glass border border-white/10 hover:bg-white/10 hover:text-white text-xs font-mono font-medium tracking-wide uppercase transition-all flex items-center gap-1.5 cursor-pointer text-white/70 disabled:opacity-55"
                        title="Refresh Database Nodes"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                        <span>{language === 'en' ? 'Sync' : 'Sinkron'}</span>
                      </button>

                      {/* Download JSON Export */}
                      <button
                        onClick={exportToJson}
                        className="px-4 py-2 rounded-lg liquid-glass border border-white/10 hover:bg-white/10 hover:text-white text-xs font-mono font-medium tracking-wide uppercase transition-all flex items-center gap-1.5 cursor-pointer text-white/70"
                        title={language === 'en' ? 'Export raw JSON database backup' : 'Eksport sandaran pangkalan data JSON mentah'}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? 'JSON' : 'JSON'}</span>
                      </button>

                      {/* Export to Excel (CSV) */}
                      <button
                        onClick={exportToExcel}
                        className="px-4 py-2 rounded-lg bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-300 text-xs font-mono font-medium tracking-wide uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                        title={language === 'en' ? 'Export to Microsoft Excel (CSV)' : 'Eksport ke Microsoft Excel (CSV)'}
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5 text-green-400" />
                        <span>{language === 'en' ? 'Export to Excel' : 'Eksport ke Excel'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Filters Row */}
                  <div className="flex flex-col md:flex-row gap-4 mb-6 border-b border-white/5 pb-6">
                    {/* Search query box */}
                    <div className="flex-1 relative">
                      <Search className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder={language === 'en' ? 'Search by client name, email, company, bottleneck...' : 'Cari melalui nama pelanggan, e-mel, syarikat, kekangan...'}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    {/* Filter by target service */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Service:</span>
                      <select
                        value={filterService}
                        onChange={(e) => setFilterService(e.target.value)}
                        className="bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 transition-colors cursor-pointer font-sans"
                      >
                        <option value="all">{language === 'en' ? 'All Services' : 'Semua Perkhidmatan'}</option>
                        <option value="rebrand">{language === 'en' ? 'Premium Rebrand' : 'Penjenamaan Premium'}</option>
                        <option value="web">{language === 'en' ? 'Web App' : 'Aplikasi Web'}</option>
                        <option value="crm">{language === 'en' ? 'Custom CRM' : 'CRM Khas'}</option>
                        <option value="ecom">{language === 'en' ? 'Commerce Engine' : 'Enjin Komersial'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Database Table or Empty State */}
                  {filteredEntries.length === 0 ? (
                    <div className="py-16 text-center text-xs font-mono text-white/30 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3">
                      <Database className="w-8 h-8 text-white/10" />
                      <span>
                        {searchQuery || filterService !== 'all' 
                          ? (language === 'en' ? 'No records matching search query.' : 'Tiada rekod sepadan dengan carian.') 
                          : (language === 'en' ? 'Waitlist is currently empty.' : 'Senarai menunggu sedang kosong.')}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full overflow-x-auto border border-white/5 rounded-2xl bg-black/40">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-white/15 bg-white/[0.02] text-white/40 uppercase tracking-wider font-mono text-[10px]">
                            <th className="p-4 font-semibold">{language === 'en' ? 'Client Details' : 'Maklumat Pelanggan'}</th>
                            <th className="p-4 font-semibold">{language === 'en' ? 'Company' : 'Syarikat'}</th>
                            <th className="p-4 font-semibold">{language === 'en' ? 'Target Service' : 'Perkhidmatan Sasaran'}</th>
                            <th className="p-4 font-semibold max-w-xs">{language === 'en' ? 'Operational Bottlenecks & Notes' : 'Kekangan Operasi & Nota'}</th>
                            <th className="p-4 font-semibold font-mono text-[9px]">{language === 'en' ? 'TIMESTAMP' : 'MASA'}</th>
                            <th className="p-4 text-right font-semibold">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 font-sans">
                          {filteredEntries.map((entry) => (
                            <tr key={entry.id} className="hover:bg-white/[0.01] transition-colors group">
                              <td className="p-4">
                                <div className="flex flex-col gap-0.5">
                                  <span className="font-semibold text-white text-sm">{entry.name}</span>
                                  <span className="text-white/40 text-[10px] font-mono leading-none">{entry.email}</span>
                                  <span className="text-white/40 text-[10px] font-mono mt-1 leading-none">{entry.phone}</span>
                                </div>
                              </td>
                              <td className="p-4 text-white/80 font-medium">{entry.company}</td>
                              <td className="p-4">
                                <span className="inline-block px-2.5 py-0.5 rounded bg-white/5 text-white/80 text-[10px] font-mono uppercase border border-white/5">
                                  {entry.service}
                                </span>
                              </td>
                              <td className="p-4 text-white/50 max-w-xs truncate font-light" title={entry.notes}>
                                {entry.notes}
                              </td>
                              <td className="p-4 text-white/30 font-mono text-[10px]">{entry.timestamp}</td>
                              <td className="p-4 text-right">
                                <button
                                  onClick={() => clearEntry(entry.id)}
                                  className="text-white/20 hover:text-red-400 p-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                                  title="Delete from local DB"
                                >
                                  <Trash2 className="w-4.5 h-4.5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* PORTFOLIO CATALOG MANAGEMENT MODULE */}
              {activeTab === 'portfolio' && (
                <div className="flex flex-col gap-6">
                  
                  {/* Inline Form Panel */}
                  <AnimatePresence mode="wait">
                    {(isAddingNew || editingItem) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="liquid-glass border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-3xl"
                      >
                        <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-6">
                          <div>
                            <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">
                              {editingItem ? 'EDIT ASSET NODE' : 'ADD NEW ASSET NODE'}
                            </span>
                            <h3 className="text-lg font-serif italic text-white mt-1">
                              {editingItem ? `${language === 'en' ? 'Edit Project' : 'Edit Projek'}: ${editingItem.name}` : (language === 'en' ? 'Configure New Portfolio Item' : 'Konfigurasi Item Portfolio Baru')}
                            </h3>
                          </div>
                          <button
                            onClick={() => {
                              setEditingItem(null);
                              setIsAddingNew(false);
                            }}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
                          >
                            <X className="w-4.5 h-4.5" />
                          </button>
                        </div>

                        {/* Interactive config form */}
                        <form onSubmit={savePortfolioItem} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
                          
                          <div className="flex flex-col gap-4">
                            {/* Project Title */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Project Title / Name</label>
                              <input 
                                type="text"
                                placeholder="e.g. Fintech Liquidity Grid"
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                                className="bg-white/[0.02] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white/30 transition-colors"
                              />
                            </div>

                            {/* Type of Work / Category */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Type of Work / Category</label>
                              <input 
                                type="text"
                                placeholder="e.g. CRM Interfaces, Hero Sections, E-Commerce"
                                value={formCategory}
                                onChange={(e) => setFormCategory(e.target.value)}
                                className="bg-white/[0.02] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white/30 transition-colors"
                              />
                            </div>

                            {/* Live Preview URL / Link */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Preview Website Link (HTTPS iframe URL)</label>
                              <input 
                                type="url"
                                placeholder="e.g. https://example.com"
                                value={formLink}
                                onChange={(e) => setFormLink(e.target.value)}
                                className="bg-white/[0.02] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white/30 transition-colors font-mono text-[11px]"
                              />
                              <span className="text-[9px] text-white/30 leading-normal">
                                {language === 'en' 
                                  ? 'Note: Must support iframe embedding. Leave empty if using pasted picture instead.' 
                                  : 'Nota: Mestilah menyokong embedding iframe. Biarkan kosong jika menggunakan gambar yang ditampal.'}
                              </span>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Technology Stack</label>
                              <input 
                                type="text"
                                placeholder="e.g. React • Tailwind CSS • Vite"
                                value={formTech}
                                onChange={(e) => setFormTech(e.target.value)}
                                className="bg-white/[0.02] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white/30 transition-colors"
                              />
                            </div>

                            {/* Performance Speed Index */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Computed Speed Index</label>
                              <input 
                                type="text"
                                placeholder="e.g. 0.1s LCP, 99/100 Mobile"
                                value={formSpeed}
                                onChange={(e) => setFormSpeed(e.target.value)}
                                className="bg-white/[0.02] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white/30 transition-colors"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-4">
                            {/* Project Description */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Project Description</label>
                              <textarea 
                                placeholder="Immersive layout details..."
                                value={formDesc}
                                onChange={(e) => setFormDesc(e.target.value)}
                                rows={3}
                                className="bg-white/[0.02] border border-white/10 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-white/30 transition-colors resize-none leading-normal"
                              />
                            </div>

                            {/* PASTE SCREENSHOT OR UPLOAD PICTURE AREA */}
                            <div className="flex flex-col gap-1.5">
                              <label className="text-[9px] font-mono text-white/40 uppercase tracking-wider">Website Screenshot (Paste Ctrl+V or Upload File)</label>
                              <div 
                                onPaste={handleFormPasteImage}
                                className="border-2 border-dashed border-white/10 hover:border-white/20 rounded-xl p-8 text-center transition-all bg-white/[0.01] flex flex-col items-center justify-center cursor-pointer gap-2.5 relative group min-h-[170px]"
                              >
                                {formImage ? (
                                  <div className="relative max-h-36 overflow-hidden rounded-lg w-full">
                                    <img src={formImage} alt="Preview" className="h-32 w-auto mx-auto object-contain rounded border border-white/5 bg-black" />
                                    <button 
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setFormImage('');
                                      }}
                                      className="absolute top-1.5 right-1.5 p-1 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
                                    >
                                      <X className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                ) : (
                                  <>
                                    <Image className="w-8 h-8 text-white/20 group-hover:text-white/40 group-hover:scale-105 transition-all" />
                                    <span className="text-xs text-white/60 font-semibold tracking-wide">
                                      {language === 'en' ? 'Click here & paste (Ctrl+V) screenshot' : 'Klik di sini & tampal (Ctrl+V) tangkapan skrin'}
                                    </span>
                                    <span className="text-[10px] text-white/30">
                                      {language === 'en' ? 'or click to browse local files' : 'atau klik untuk layari fail tempatan'}
                                    </span>
                                  </>
                                )}
                                <input 
                                  type="file" 
                                  accept="image/*"
                                  onChange={handleFileChange}
                                  className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                              </div>
                              <span className="text-[9px] text-white/30 leading-normal">
                                {language === 'en'
                                  ? 'Take a screenshot of any web page, select this zone, and press Ctrl+V to paste instantly as Base64 data.'
                                  : 'Ambil tangkapan skrin bagi mana-mana laman web, pilih zon ini, dan tekan Ctrl+V untuk menampal serta-merta sebagai data Base64.'}
                              </span>
                            </div>

                            {/* Form submit & cancel */}
                            <div className="flex gap-3 justify-end mt-4">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingItem(null);
                                  setIsAddingNew(false);
                                }}
                                className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-white/80 transition-all cursor-pointer"
                              >
                                {language === 'en' ? 'Cancel' : 'Batal'}
                              </button>
                              <button
                                type="submit"
                                className="px-6 py-2.5 rounded-lg bg-white text-black font-semibold tracking-wider uppercase hover:bg-white/90 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shadow-lg"
                              >
                                <Save className="w-4 h-4" />
                                <span>{language === 'en' ? 'Save Asset' : 'Simpan Aset'}</span>
                              </button>
                            </div>
                          </div>

                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Portfolio Listing Grid Card */}
                  <div className="liquid-glass border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-3xl overflow-hidden relative">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-green-500 uppercase bg-green-500/10 px-2.5 py-0.5 rounded border border-green-500/10">
                          PORTFOLIO SOURCE DESK
                        </span>
                        <h3 className="text-xl font-serif italic text-white tracking-tight mt-3">
                          {language === 'en' ? 'Manage Related Work (Aura Previews)' : 'Urus Kerja Berkaitan (Pratonton Aura)'}
                        </h3>
                        <p className="text-white/40 text-xs font-light mt-1">
                          {language === 'en' 
                            ? 'Configure active custom websites, categories, live preview iframes or pasted pictures.' 
                            : 'Konfigurasikan laman web tersuai aktif, kategori, iframe pratonton langsung atau gambar yang ditampal.'}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={startAddNewPortfolioItem}
                          className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-white/90 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
                        >
                          <Plus className="w-4 h-4" />
                          <span>{language === 'en' ? 'Add Project' : 'Tambah Projek'}</span>
                        </button>
                      </div>
                    </div>

                    {portfolioItems.length === 0 ? (
                      <div className="py-16 text-center text-xs font-mono text-white/30 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3">
                        <Briefcase className="w-8 h-8 text-white/10" />
                        <span>{language === 'en' ? 'No projects currently configured.' : 'Tiada projek yang dikonfigurasikan pada masa ini.'}</span>
                        <button 
                          onClick={startAddNewPortfolioItem}
                          className="text-white/70 hover:text-white underline"
                        >
                          {language === 'en' ? 'Create first item' : 'Cipta item pertama'}
                        </button>
                      </div>
                    ) : (
                      <div className="w-full overflow-x-auto border border-white/5 rounded-2xl bg-black/40">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="border-b border-white/15 bg-white/[0.02] text-white/40 uppercase tracking-wider font-mono text-[10px]">
                              <th className="p-4 font-semibold">{language === 'en' ? 'Asset Preview' : 'Pratonton Aset'}</th>
                              <th className="p-4 font-semibold">{language === 'en' ? 'Title & Tech Spec' : 'Tajuk & Spesifikasi'}</th>
                              <th className="p-4 font-semibold">{language === 'en' ? 'Category' : 'Kategori'}</th>
                              <th className="p-4 font-semibold">{language === 'en' ? 'Embedded Link' : 'Pautan Embed'}</th>
                              <th className="p-4 font-semibold max-w-xs">{language === 'en' ? 'Description' : 'Keterangan'}</th>
                              <th className="p-4 text-right font-semibold">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 font-sans">
                            {portfolioItems.map((item) => (
                              <tr key={item.id} className="hover:bg-white/[0.01] transition-colors group">
                                {/* Miniature view column */}
                                <td className="p-4 w-32">
                                  {item.image ? (
                                    <div className="w-24 h-14 rounded overflow-hidden border border-white/5 bg-black flex items-center justify-center">
                                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                  ) : (
                                    <div className="w-24 h-14 rounded bg-gradient-to-br from-zinc-900 to-black border border-white/5 flex flex-col justify-between p-1.5 text-[6px]">
                                      <span className="text-[5px] text-white/30 truncate uppercase">{item.category}</span>
                                      <span className="font-serif italic text-white/80 text-[7px] truncate">{item.name}</span>
                                      <span className="text-white/20 font-mono text-[5px]">VECTOR_PREVIEW</span>
                                    </div>
                                  )}
                                </td>

                                {/* Name & Specs */}
                                <td className="p-4">
                                  <div className="flex flex-col gap-0.5">
                                    <span className="font-semibold text-white text-sm">{item.name}</span>
                                    <span className="text-white/40 text-[10px] font-mono leading-none">{item.tech}</span>
                                    <span className="text-green-400 text-[10px] font-mono mt-1 leading-none">{item.speedIndex}</span>
                                  </div>
                                </td>

                                {/* Category */}
                                <td className="p-4">
                                  <span className="inline-block px-2 py-0.5 rounded bg-white/5 text-white/80 text-[10px] font-mono uppercase border border-white/5">
                                    {item.category}
                                  </span>
                                </td>

                                {/* Link */}
                                <td className="p-4 text-white/60 font-mono text-[10px] max-w-[150px] truncate">
                                  {item.link ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 hover:text-white">
                                      <ExternalLink className="w-3 h-3 text-white/40" />
                                      {item.link.replace(/^https?:\/\//, '')}
                                    </a>
                                  ) : (
                                    <span className="text-white/25 italic">N/A (Image Screenshot)</span>
                                  )}
                                </td>

                                {/* Description */}
                                <td className="p-4 text-white/50 max-w-xs truncate font-light" title={item.desc}>
                                  {item.desc}
                                </td>

                                {/* Action Actions */}
                                <td className="p-4 text-right">
                                  <div className="flex justify-end gap-1.5">
                                    <button
                                      onClick={() => startEditPortfolioItem(item)}
                                      className="text-white/30 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                                      title="Edit details"
                                    >
                                      <Pencil className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => deletePortfolioItem(item.id)}
                                      className="text-white/20 hover:text-red-400 p-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                                      title="Delete item"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                </div>
              )}

              {/* SOCIAL MEDIA LINKS MANAGEMENT VIEW */}
              {activeTab === 'socials' && (
                <div className="liquid-glass border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-3xl overflow-hidden relative">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-blue-500 uppercase bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/10">
                      SOCIAL MEDIA CONTROL CONSOLE
                    </span>
                    <h3 className="text-xl font-serif italic text-white tracking-tight mt-3">
                      {language === 'en' ? 'Manage Social Media Channels' : 'Urus Saluran Media Sosial'}
                    </h3>
                    <p className="text-white/40 text-xs font-light mt-1">
                      {language === 'en' 
                        ? 'Set URLs for the brand\'s social networks to reflect in the active landing footer.' 
                        : 'Tetapkan URL rangkaian sosial jenama untuk dipaparkan pada kaki laman pendaratan aktif.'}
                    </p>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      localStorage.setItem('digitize_social_links', JSON.stringify(socialLinks));
                      setToastMessage(language === 'en' ? 'Social links updated!' : 'Pautan media sosial dikemas kini!');
                      setShowAuthToast(true);
                      setTimeout(() => setShowAuthToast(false), 3000);
                    }}
                    className="mt-8 flex flex-col gap-6 max-w-2xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {(Object.keys(socialLinks) as Array<keyof SocialLinks>).map((key) => (
                        <div key={key} className="flex flex-col gap-2">
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                            {key} URL
                          </label>
                          <input
                            type="url"
                            value={socialLinks[key]}
                            onChange={(e) => setSocialLinks({ ...socialLinks, [key]: e.target.value })}
                            placeholder={`https://${key}.com/...`}
                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-white/90 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
                      >
                        <Save className="w-4 h-4" />
                        <span>{language === 'en' ? 'Save Changes' : 'Simpan Perubahan'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(language === 'en' ? 'Reset all social links to default values?' : 'Tetapkan semula pautan media sosial ke nilai asal?')) {
                            setSocialLinks(DEFAULT_SOCIALS);
                            localStorage.setItem('digitize_social_links', JSON.stringify(DEFAULT_SOCIALS));
                            setToastMessage(language === 'en' ? 'Social links reset to default!' : 'Pautan media sosial ditetapkan semula!');
                            setShowAuthToast(true);
                            setTimeout(() => setShowAuthToast(false), 3000);
                          }
                        }}
                        className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
                      >
                        <span>{language === 'en' ? 'Reset Defaults' : 'Asal (Reset)'}</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Floating HUD Toast Alert */}
      <AnimatePresence>
        {showAuthToast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 bg-black/95 border border-white/10 rounded-xl p-4 text-xs font-mono text-white flex items-center gap-3.5 shadow-2xl backdrop-blur-md max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-white uppercase tracking-wider text-[10px]">SYSTEM ADVISORY</span>
              <span className="text-white/60 leading-normal text-[10px]">{toastMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
