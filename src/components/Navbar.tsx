import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, Search, Moon, Sun, GraduationCap, ChevronDown, Phone, Mail,
  Calendar, Key, Users, ShieldAlert, UserCheck, ShieldCheck, Lock, ExternalLink, Loader2
} from 'lucide-react';
import { COLLEGE_INFO } from '../data';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dropdown states for desktop/mobile
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Student Portal Modal states
  const [portalOpen, setPortalOpen] = useState(false);
  const [loginRole, setLoginRole] = useState<'student' | 'faculty' | 'admin' | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  const menuConfig = [
    {
      label: 'About',
      href: '/about/profile',
      subitems: [
        { label: 'College Profile', href: '/about/profile' },
        { label: 'Vision & Mission', href: '/about/vision-mission' },
        { label: 'Management', href: '/about/management' },
        { label: 'Principal\'s Message', href: '/about/principal-message' },
      ]
    },
    {
      label: 'Academics',
      href: '/academics',
      subitems: [
        { label: 'Academic Program', href: '/academics' },
      ]
    },
    {
      label: 'Departments',
      href: '/departments/cse',
      subitems: [
        { label: 'Computer Science & Engineering', href: '/departments/cse' },
        { label: 'Electronics & Communication', href: '/departments/ece' },
        { label: 'Artificial Intelligence & Data Science', href: '/departments/ai-ds' },
      ]
    },
    {
      label: 'Admissions',
      href: '/admissions',
      subitems: [
        { label: 'Admission Info', href: '/admissions' },
      ]
    },
    {
      label: 'Placements',
      href: '/placements',
      subitems: [
        { label: 'Placement Info', href: '/placements' },
      ]
    },
    {
      label: 'IQAC',
      href: '/iqac',
      subitems: [
        { label: 'Quality Assurance', href: '/iqac' },
      ]
    },
    {
      label: 'Campus Life',
      href: '/campus-life',
      subitems: [
        { label: 'Facilities & Clubs', href: '/campus-life' },
      ]
    },
    {
      label: 'Bulletins',
      href: '/bulletins',
      subitems: [
        { label: 'Latest Circulars', href: '/bulletins' },
      ]
    }
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        setPortalOpen(false);
        setLoginRole(null);
        setUsername('');
        setPassword('');
      }, 2000);
    }, 1500);
  };

  const handleScrollToAnchor = (href: string) => {
    setIsOpen(false);
    // Extract path and anchor
    const [path, anchor] = href.split('#');
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          const offset = 140; // accounted for multi-layer sticky navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const offsetPosition = (elementRect - bodyRect) - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR (Scrolling Marquee) */}
      <div className="bg-primary-950 text-gold-300 py-1.5 overflow-hidden border-b border-gold-500/20 text-[11px] font-mono select-none relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center relative">
          <span className="bg-gold-500 text-primary-950 text-[9px] font-bold uppercase px-2 py-0.5 rounded mr-3 shrink-0 relative z-10 shadow-sm animate-pulse">
            Announcements
          </span>
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="animate-marquee flex gap-16 uppercase">
              <span>🎉 Admissions Open for Academic Year 2026-27</span>
              <span>🏆 NAAC Accredited with A+ Grade</span>
              <span>🎓 Autonomous Institution (UGC Proposal)</span>
              <span>📢 Latest JNTUA Circulars Released</span>
              <span>📅 Academic Calendars Active</span>
              <span>💼 Corporate Placements: 96.4% Secured</span>
            </div>
            {/* Duplicate for infinite loop */}
            <div className="animate-marquee flex gap-16 uppercase ml-16" aria-hidden="true">
              <span>🎉 Admissions Open for Academic Year 2026-27</span>
              <span>🏆 NAAC Accredited with A+ Grade</span>
              <span>🎓 Autonomous Institution (UGC Proposal)</span>
              <span>📢 Latest JNTUA Circulars Released</span>
              <span>📅 Academic Calendars Active</span>
              <span>💼 Corporate Placements: 96.4% Secured</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. UTILITY SLIM HEADER */}
      <div className="bg-primary-900 text-white/90 text-[11px] font-semibold tracking-wide py-2.5 border-b border-white/5 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+919246922069" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone className="h-3.5 w-3.5 text-gold-400" /> +91 92469 22069
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="mailto:admissions@recw.ac.in" className="hidden sm:flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Mail className="h-3.5 w-3.5 text-gold-400" /> admissions@recw.ac.in
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/academics" className="hover:text-gold-400 transition-colors">Academic Calendar</Link>
            <span className="text-white/20">|</span>
            <a href="https://recw.ac.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gold-400 transition-colors">
              Digital Campus <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setPortalOpen(true)}
              className="flex items-center gap-1.5 bg-gold-500 hover:bg-gold-400 text-primary-950 px-2.5 py-1 rounded font-bold transition-all text-[10px] uppercase shadow-sm cursor-pointer"
            >
              <Key className="h-3 w-3" /> Student Portal
            </button>
          </div>
        </div>
      </div>

      {/* 3. STICKY MAIN NAVIGATION BAR */}
      <nav
        id="main-navbar"
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-900/95 dark:bg-primary-950/95 shadow-xl border-b-4 border-gold-500 py-3 text-white'
            : 'bg-primary-900 dark:bg-primary-950/90 py-4 border-b border-white/5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Branding */}
            <Link
              to="/"
              className="flex items-center space-x-3 group cursor-pointer shrink-0"
              id="navbar-brand-link"
            >
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center p-1 border border-gold-500 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <GraduationCap className="h-6.5 w-6.5 text-primary-900" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white font-serif font-bold text-sm sm:text-base leading-none uppercase tracking-tight">
                  Ravindra Engineering College
                </h1>
                <p className="text-gold-400 text-[8.5px] sm:text-[9.5px] font-semibold tracking-widest uppercase mt-0.5">
                  for Women (RCEW), Kurnool
                </p>
              </div>
            </Link>

            {/* Desktop Nav Items with dropdowns */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Home */}
              <Link
                to="/"
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:text-gold-400 ${
                  location.pathname === '/' ? 'text-gold-400' : 'text-white/90'
                }`}
              >
                Home
              </Link>

              {/* Loop other categories */}
              {menuConfig.map((item) => {
                const isCurrentCategory = location.pathname.startsWith(item.href.split('#')[0]);
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`px-3 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:text-gold-400 transition-colors cursor-pointer ${
                        isCurrentCategory ? 'text-gold-400' : 'text-white/90'
                      }`}
                    >
                      {item.label} <ChevronDown className="h-3 w-3 shrink-0" />
                    </button>

                    {/* Dropdown Container */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-56 bg-primary-950 border-t-2 border-gold-500 shadow-2xl rounded-b-xl overflow-hidden py-2"
                        >
                          {item.subitems.map((sub, sidx) => (
                            <Link
                              key={sidx}
                              to={sub.href}
                              className="block px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white/80 hover:bg-white/5 hover:text-gold-400 transition-all border-b border-white/5 last:border-0"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:text-gold-400 ${
                  location.pathname === '/contact' ? 'text-gold-400' : 'text-white/90'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Utility Toggles */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-xl text-white/80 hover:text-gold-400 hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="h-4.5 w-4.5" />
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl text-white/80 hover:text-gold-400 hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="h-4.5 w-4.5 text-gold-400" /> : <Moon className="h-4.5 w-4.5 text-white" />}
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl text-white/80 hover:text-gold-400 hover:bg-white/10 transition-colors cursor-pointer"
              >
                {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-primary-950 shadow-2xl border-t border-slate-100 dark:border-slate-800 p-4 z-40"
            >
              <div className="max-w-3xl mx-auto flex items-center gap-3">
                <Search className="h-5 w-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Type to search departments, schedules, faqs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm outline-none bg-transparent py-1.5 text-slate-800 dark:text-white"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
              {searchQuery.trim() && (
                <div className="max-w-3xl mx-auto mt-3 p-3 bg-slate-50 dark:bg-primary-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-400 font-mono">Real-time matching pages:</span>
                  <div className="mt-2 space-y-1">
                    <Link to="/about" onClick={() => setSearchOpen(false)} className="block text-xs p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded text-primary-750 dark:text-gold-400">About RCEW Profile</Link>
                    <Link to="/departments/cse" onClick={() => setSearchOpen(false)} className="block text-xs p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded text-primary-750 dark:text-gold-400">Computer Science & Engineering</Link>
                    <Link to="/admissions" onClick={() => setSearchOpen(false)} className="block text-xs p-1.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded text-primary-750 dark:text-gold-400">Admissions Fees & Eligibility</Link>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer Accordion Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-primary-950 text-white shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden overflow-y-auto border-l border-white/10"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-gold-400" />
                    <span className="font-serif font-bold text-base uppercase">RCEW Kurnool</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 text-white/75 hover:text-white cursor-pointer">
                    <X className="h-5.5 w-5.5" />
                  </button>
                </div>

                <div className="mt-6 space-y-2">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white/5 rounded-xl border-b border-white/5 text-slate-300"
                  >
                    Home
                  </Link>

                  {menuConfig.map((item) => (
                    <div key={item.label} className="border-b border-white/5 pb-1">
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                        className="w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/5 rounded-xl cursor-pointer"
                      >
                        {item.label} <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-6 space-y-1 bg-white/5 rounded-xl py-2 mt-1"
                          >
                            {item.subitems.map((sub, sidx) => (
                              <Link
                                key={sidx}
                                to={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-[11px] font-semibold text-white/80 hover:text-gold-400"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white/5 rounded-xl text-slate-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <button
                  onClick={() => { setIsOpen(false); setPortalOpen(true); }}
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-primary-950 rounded-xl cursor-pointer"
                >
                  Student Portal Login
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 4. STUDENT PORTAL MODAL */}
      <AnimatePresence>
        {portalOpen && (
          <div className="fixed inset-0 z-55 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => { setPortalOpen(false); setLoginRole(null); }}
              className="fixed inset-0 bg-black"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-primary-900 border border-slate-250 dark:border-slate-800 rounded-3xl w-full max-w-md overflow-hidden relative z-10 shadow-2xl p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => { setPortalOpen(false); setLoginRole(null); }}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="h-5.5 w-5.5" />
              </button>

              <div className="text-center space-y-1 mb-6">
                <div className="w-12 h-12 bg-gold-100 dark:bg-primary-950 rounded-full flex items-center justify-center mx-auto mb-2 border border-gold-500/25">
                  <GraduationCap className="h-6.5 w-6.5 text-primary-900 dark:text-gold-400" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-primary-950 dark:text-white">RCEW Digital Portal</h3>
                <p className="text-xs text-slate-400">Select credentials path to login safely.</p>
              </div>

              {!loginRole ? (
                /* Select Login Pathway */
                <div className="space-y-3">
                  <button
                    onClick={() => setLoginRole('student')}
                    className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-primary-950 dark:hover:bg-primary-900 border border-slate-100 dark:border-slate-800 flex items-center gap-4 transition-all group text-left cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-100 dark:bg-primary-900 text-gold-600 dark:text-gold-400 flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-sm text-primary-950 dark:text-white block group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">Student Login</span>
                      <span className="text-[11px] text-slate-400 block">Check semester grades, attendance, and fee receipts.</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setLoginRole('faculty')}
                    className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-primary-950 dark:hover:bg-primary-900 border border-slate-100 dark:border-slate-800 flex items-center gap-4 transition-all group text-left cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-gold-400 flex items-center justify-center shrink-0">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-sm text-primary-950 dark:text-white block group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">Faculty Academic Login</span>
                      <span className="text-[11px] text-slate-400 block">Manage internal assessments, syllabi, and marks entries.</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setLoginRole('admin')}
                    className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-primary-950 dark:hover:bg-primary-900 border border-slate-100 dark:border-slate-800 flex items-center gap-4 transition-all group text-left cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-primary-900 text-amber-700 dark:text-gold-400 flex items-center justify-center shrink-0">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-sm text-primary-950 dark:text-white block group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">Admin Controller</span>
                      <span className="text-[11px] text-slate-400 block">Global administrative dashboard settings & backups.</span>
                    </div>
                  </button>
                </div>
              ) : (
                /* Login Form */
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setLoginRole(null)}
                      className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold uppercase tracking-wider cursor-pointer"
                    >
                      ← Back
                    </button>
                    <span className="text-slate-300">|</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 font-mono">
                      {loginRole} Credentials
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block mb-1">User ID / Admission No</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 23REC054"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-primary-950/40 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block mb-1">Pass Code</label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-primary-950/40 border border-slate-200 dark:border-slate-800 rounded-xl pl-4 pr-10 py-2.5 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                      />
                      <Lock className="h-4 w-4 text-slate-400 absolute right-3 top-3" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoggingIn}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-700 hover:bg-primary-800 dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 font-bold uppercase text-xs transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isLoggingIn ? (
                      <>
                        <Loader2 className="h-4.5 w-4.5 animate-spin" /> Verifying Credentials...
                      </>
                    ) : (
                      'Secure Log In'
                    )}
                  </button>

                  <AnimatePresence>
                    {loginSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 dark:text-emerald-400 text-xs rounded-xl text-center flex items-center justify-center gap-2"
                      >
                        <ShieldCheck className="h-4.5 w-4.5" /> Successful! Handshaking Digital Campus...
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
