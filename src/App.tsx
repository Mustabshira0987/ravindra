import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, ArrowUp } from 'lucide-react';
import COLLEGE_LOGO_IMAGE from './assets/images/rcew_college_logo_1784036182954.png';

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
import Faculty from './pages/Faculty';
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
          className="fixed bottom-6 right-6 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-all duration-300 border border-blue-500 cursor-pointer"
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
    <div className="relative min-h-screen bg-slate-50 transition-colors duration-300 flex flex-col">
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
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/bulletins" element={<Faculty />} />
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
      <div className="relative min-h-screen bg-slate-50 transition-colors duration-300">
        <AnimatePresence mode="wait">
          {loading ? (
            /* High-quality Academic Preloading screen */
            <motion.div
              key="preloader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="fixed inset-0 bg-white z-999 flex flex-col items-center justify-center p-4 text-slate-900"
              id="academic-portal-preloader"
            >
              <div className="relative flex flex-col items-center text-center">
                {/* Outer pulsing blue halo */}
                <div className="absolute -inset-4 rounded-full bg-blue-100/60 blur-xl animate-pulse" />
                
                {/* College Logo */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative bg-white p-2 rounded-2xl border border-slate-200 shadow-xl mb-6 w-20 h-20 flex items-center justify-center"
                >
                  <img src={COLLEGE_LOGO_IMAGE} alt="RCEW Logo" className="w-full h-full object-contain" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-blue-900 max-w-lg"
                >
                  Ravindra Engineering College for Women
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="text-xs text-blue-600 font-mono uppercase tracking-widest mt-2 font-bold"
                >
                  Kurnool, AP • Counseling Code: REC
                </motion.p>

                {/* Loader bar */}
                <div className="w-48 h-1 bg-slate-200 rounded-full mt-8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-blue-600 rounded-full"
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
