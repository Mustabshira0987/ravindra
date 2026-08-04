import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2, GraduationCap } from 'lucide-react';
import { COLLEGE_INFO } from '../data';

// Imported exact local campus hero image
import CAMPUS_HERO_IMAGE from '../assets/images/rcew_campus_hero_1784036167208.jpg';
import COLLEGE_LOGO_IMAGE from '../assets/images/rcew_college_logo_1784036182954.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Empowering Women Through Education",
      subtitle: "Join Kurnool's Premier Engineering College for Young Women Leaders",
      tag: "Admissions Open 2026-27",
      image: CAMPUS_HERO_IMAGE,
      badge: "NAAC & NBA Accredited"
    },
    {
      title: "Building Global Tech Creators",
      subtitle: "Hands-on intelligence training in AI, Machine Learning, and VLSI",
      tag: "Innovative Curriculum",
      image: CAMPUS_HERO_IMAGE,
      badge: "State-of-the-Art Labs"
    },
    {
      title: "Stellar Placement Records",
      subtitle: "Consistently securing 95%+ campus placements with top tier packages",
      tag: "Corporate Launchpad",
      image: CAMPUS_HERO_IMAGE,
      badge: "Highest Package: 14.5 LPA"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[650px] lg:h-[90vh] w-full overflow-hidden bg-white py-16 lg:py-0 flex items-center">
      {/* Background Slideshow with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </AnimatePresence>
        {/* Subtle White Overlay (15-20% opacity gradient for text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/20 pointer-events-none" />
      </div>

      {/* Decorative Light Rays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/50 rounded-full blur-3xl -z-0" />

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Logo badge and Accreditations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* College Logo */}
            <div className="bg-white p-1 rounded-xl shadow-md border border-slate-200 w-14 h-14 shrink-0 flex items-center justify-center">
              <img
                src={COLLEGE_LOGO_IMAGE}
                alt="RCEW Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
                <Sparkles className="h-3.5 w-3.5 text-yellow-500" />
                {slides[currentSlide].tag}
              </div>
              <span className="text-[11px] text-slate-500 font-mono tracking-widest uppercase mt-1">
                JNTUA Affiliated • Approved by AICTE
              </span>
            </div>
          </motion.div>

          {/* Dynamic Slide Heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-sans font-normal leading-relaxed mb-6 max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            id="hero-cta-buttons"
          >
            <a
              href="#admissions"
              onClick={(e) => { e.preventDefault(); handleScrollTo('#admissions'); }}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider uppercase text-xs rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              id="hero-apply-now"
            >
              Apply Online
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#departments"
              onClick={(e) => { e.preventDefault(); handleScrollTo('#departments'); }}
              className="px-8 py-3.5 bg-white hover:bg-blue-50 text-blue-600 border border-blue-600 font-bold tracking-wider uppercase text-xs rounded-xl shadow-sm transition-all duration-300 text-center"
              id="hero-explore-courses"
            >
              Explore Departments
            </a>
          </motion.div>
        </div>

        {/* Floating Bottom Trust Badges */}
        <div className="mt-14 hidden md:block">
          <div className="grid grid-cols-4 gap-4 bg-white border border-slate-200 shadow-sm rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Award className="h-10 w-10 text-yellow-500 shrink-0" />
              <div>
                <p className="text-slate-900 text-sm font-bold">NAAC Accredited</p>
                <p className="text-slate-500 text-[11px] font-mono uppercase">A+ Grade Mark</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-10 w-10 text-yellow-500 shrink-0" />
              <div>
                <p className="text-slate-900 text-sm font-bold">NBA Accreditation</p>
                <p className="text-slate-500 text-[11px] font-mono uppercase">CSE & ECE Core</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-10 w-10 text-yellow-500 shrink-0" />
              <div>
                <p className="text-slate-900 text-sm font-bold">AICTE Approved</p>
                <p className="text-slate-500 text-[11px] font-mono">Approved Institution</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-10 w-10 text-yellow-500 shrink-0" />
              <div>
                <p className="text-slate-900 text-sm font-bold">JNTUA Affiliated</p>
                <p className="text-slate-500 text-[11px] font-mono">Curriculum Aligned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
