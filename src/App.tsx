import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, ArrowUp } from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutProfile from './pages/AboutProfile';
import VisionMission from './pages/VisionMission';
import Management from './pages/Management';
import PrincipalMessage from './pages/PrincipalMessage';
import Academics from './pages/Academics';
import CSE from './pages/CSE';
import ECE from './pages/ECE';
import AIDS from './pages/AIDS';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import IQAC from './pages/IQAC';
import CampusLife from './pages/CampusLife';
import Bulletins from './pages/Bulletins';
import Contact from './pages/Contact';

// Scroll to Top Reset Component
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Floating Scroll-to-Top Button
function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-primary-800 hover:bg-gold-500 hover:text-primary-950 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 rounded-full shadow-2xl transition-all duration-300 border border-gold-500/20 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function MainAppLayout({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (val: boolean) => void }) {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-primary-950 transition-colors duration-300 flex flex-col">
      <ScrollToTop />
      
      {/* Dynamic multi-layer header and navigations */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Pages Outlet */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutProfile />} />
            <Route path="/about/profile" element={<AboutProfile />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/management" element={<Management />} />
            <Route path="/about/principal-message" element={<PrincipalMessage />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/departments/cse" element={<CSE />} />
            <Route path="/departments/ece" element={<ECE />} />
            <Route path="/departments/ai-ds" element={<AIDS />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/iqac" element={<IQAC />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/bulletins" element={<Bulletins />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize startup load delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <HashRouter>
      <div className="relative min-h-screen bg-slate-50 dark:bg-primary-950 transition-colors duration-300">
        <AnimatePresence mode="wait">
          {loading ? (
            /* High-quality Academic Preloading screen */
            <motion.div
              key="preloader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="fixed inset-0 bg-primary-950 z-999 flex flex-col items-center justify-center p-4 text-white"
              id="academic-portal-preloader"
            >
              <div className="relative flex flex-col items-center text-center">
                {/* Outer pulsing gold halo */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-gold-500/30 to-primary-600/30 blur-xl animate-pulse" />
                
                {/* College Cap icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative bg-primary-900 p-5 rounded-2xl border border-gold-400/30 shadow-2xl text-gold-400 mb-6"
                >
                  <GraduationCap className="h-10 w-10 text-gold-300" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-white max-w-lg"
                >
                  Ravindra Engineering College for Women
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="text-xs text-gold-300 font-mono uppercase tracking-widest mt-2"
                >
                  Kurnool, AP • Counseling Code: REC
                </motion.p>

                {/* Loader bar */}
                <div className="w-48 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-gold-400 rounded-full"
                  />
                </div>

                <span className="text-[10px] text-slate-500 font-mono mt-3">
                  Empowering Women Through Technical Education
                </span>
              </div>
            </motion.div>
          ) : (
            <MainAppLayout darkMode={darkMode} setDarkMode={setDarkMode} />
          )}
        </AnimatePresence>
      </div>
    </HashRouter>
  );
}
