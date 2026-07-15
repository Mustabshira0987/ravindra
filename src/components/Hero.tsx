import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2, GraduationCap } from 'lucide-react';
import { COLLEGE_INFO } from '../data';

// Imported or directly referenced images
const CAMPUS_HERO_IMAGE = "/src/assets/images/rcew_campus_hero_1784036167208.jpg";
const COLLEGE_LOGO_IMAGE = "/src/assets/images/rcew_college_logo_1784036182954.jpg";

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
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
      badge: "State-of-the-Art Labs"
    },
    {
      title: "Stellar Placement Records",
      subtitle: "Consistently securing 95%+ campus placements with top tier packages",
      tag: "Corporate Launchpad",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920",
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
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-primary-950">
      {/* Background Slideshow with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Modern Layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/60 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Floating Sparkles decorative */}
      <div className="absolute top-1/4 left-10 text-gold-400/40 animate-pulse hidden md:block">
        <Sparkles className="h-8 w-8" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Logo badge and Accreditations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {/* College Logo */}
            <div className="bg-white p-1 rounded-xl shadow-lg border border-gold-400 max-w-[65px] h-auto shrink-0">
              <img
                src={COLLEGE_LOGO_IMAGE}
                alt="RCEW Logo"
                className="w-full h-auto object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/15 text-gold-300 border border-gold-500/30">
                <Sparkles className="h-3.5 w-3.5" />
                {slides[currentSlide].tag}
              </div>
              <span className="text-[11px] text-slate-300 font-mono tracking-widest uppercase mt-1">
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 font-sans font-light leading-relaxed mb-8 max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            id="hero-cta-buttons"
          >
            <a
              href="#admissions"
              onClick={(e) => { e.preventDefault(); handleScrollTo('#admissions'); }}
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold tracking-wider uppercase text-xs rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              id="hero-apply-now"
            >
              Apply Online
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#departments"
              onClick={(e) => { e.preventDefault(); handleScrollTo('#departments'); }}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold tracking-wider uppercase text-xs rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              id="hero-explore-courses"
            >
              Explore Departments
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-gold-400' : 'w-2.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Bottom Trust Badges */}
      <div className="absolute bottom-0 left-0 right-0 z-15 bg-gradient-to-t from-primary-950 to-transparent pt-10 pb-6 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-4 py-4 border-t border-white/10 bg-primary-900/45 glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <Award className="h-10 w-10 text-gold-400 shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">NAAC Accredited</p>
                <p className="text-slate-400 text-[11px] font-mono uppercase">Premium Grade</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-10 w-10 text-gold-400 shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">NBA Accreditation</p>
                <p className="text-slate-400 text-[11px] font-mono uppercase">CSE & ECE Flagships</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-10 w-10 text-gold-400 shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">AICTE Approved</p>
                <p className="text-slate-400 text-[11px] font-mono">Approved Institution</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-10 w-10 text-gold-400 shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">JNTUA Affiliated</p>
                <p className="text-slate-400 text-[11px] font-mono">Autonomous Syllabus Sync</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
