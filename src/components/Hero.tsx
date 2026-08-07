import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2, GraduationCap, ChevronRight, X, Send, Phone, User, Mail, BookOpen, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Imported exact local campus hero image
import CAMPUS_HERO_IMAGE from '../assets/images/rcew_empowering_women_hero.png';
import COLLEGE_LOGO_IMAGE from '../assets/images/rcew_college_logo_1784036182954.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'CSE (AI)',
    eapcetRank: '',
    city: ''
  });

  const slides = [
    {
      title: "Empowering Women Through Education",
      subtitle: "Join Kurnool's Premier Autonomous Engineering College for Young Women Leaders",
      tag: "Admissions Open 2026-27",
      image: CAMPUS_HERO_IMAGE,
      badge: "NAAC A+ & NBA Accredited"
    },
    {
      title: "Building Global Tech Creators",
      subtitle: "Hands-on intelligence training in AI, Machine Learning, Data Science, and VLSI",
      tag: "Innovative Curriculum",
      image: CAMPUS_HERO_IMAGE,
      badge: "State-of-the-Art Labs"
    },
    {
      title: "Stellar Placement Records",
      subtitle: "Consistently securing 95%+ campus placements with top tier packages up to 27 LPA",
      tag: "Corporate Launchpad",
      image: CAMPUS_HERO_IMAGE,
      badge: "Highest Package: 27.0 LPA"
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsApplyModalOpen(false);
      setFormData({ name: '', phone: '', email: '', branch: 'CSE (AI)', eapcetRank: '', city: '' });
    }, 3000);
  };

  return (
    <section id="home" aria-label="Hero Showcase" className="relative min-h-[650px] lg:h-[90vh] w-full overflow-hidden bg-white py-16 lg:py-0 flex items-center">
      {/* Background Slideshow with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 0.88, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </AnimatePresence>
        
        {/* Sleek Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 lg:hidden" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-300 text-blue-900 shadow-2xs"
          >
            <Sparkles className="h-4 w-4 text-yellow-600" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              {slides[currentSlide].tag}
            </span>
            <span className="bg-yellow-400 text-blue-950 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md">
              RAVW
            </span>
          </motion.div>

          {/* Dynamic Animated Headlines */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
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

          {/* Action Buttons with Premium Gold & Blue Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            id="hero-cta-buttons"
          >
            <button
              onClick={() => {
                setIsApplyModalOpen(true);
                handleScrollTo('#admissions-section');
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold tracking-wider uppercase text-xs rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 group ring-2 ring-yellow-400/60 cursor-pointer"
              id="hero-apply-now"
              aria-label="Apply online for admissions"
            >
              Apply Online
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-yellow-300" />
            </button>

            <Link
              to="/academics"
              onClick={(e) => {
                const elem = document.querySelector('#featured-departments');
                if (elem) {
                  e.preventDefault();
                  handleScrollTo('#featured-departments');
                }
              }}
              className="px-8 py-3.5 bg-white hover:bg-blue-50/80 text-blue-700 border-2 border-blue-600 font-bold tracking-wider uppercase text-xs rounded-xl shadow-xs hover:shadow-md transition-all duration-300 text-center cursor-pointer font-bold"
              id="hero-explore-courses"
              aria-label="Explore engineering departments"
            >
              Explore Departments
            </Link>
          </motion.div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2 pt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? 'w-8 bg-blue-600 ring-2 ring-yellow-400' : 'w-2.5 bg-slate-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Floating Bottom Trust Badges */}
        <div className="mt-12 hidden md:block">
          <div className="grid grid-cols-4 gap-4 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-yellow-50 rounded-xl border border-yellow-200/60 shrink-0">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-slate-900 text-xs sm:text-sm font-bold">NAAC Accredited</p>
                <p className="text-blue-700 text-[10px] font-mono uppercase font-bold">A+ Grade Mark</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-yellow-50 rounded-xl border border-yellow-200/60 shrink-0">
                <ShieldCheck className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-slate-900 text-xs sm:text-sm font-bold">NBA Accreditation</p>
                <p className="text-blue-700 text-[10px] font-mono uppercase font-bold">CSE & ECE Core</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-yellow-50 rounded-xl border border-yellow-200/60 shrink-0">
                <CheckCircle2 className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-slate-900 text-xs sm:text-sm font-bold">AICTE Approved</p>
                <p className="text-blue-700 text-[10px] font-mono uppercase font-bold">Govt. Recognized</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-yellow-50 rounded-xl border border-yellow-200/60 shrink-0">
                <GraduationCap className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-slate-900 text-xs sm:text-sm font-bold">JNTUA Affiliated</p>
                <p className="text-blue-700 text-[10px] font-mono uppercase font-bold">Autonomous Syllabus</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= ONLINE ADMISSIONS APPLICATION MODAL ================= */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden relative"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-6 relative">
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
                <span className="text-[10px] font-mono font-bold uppercase bg-yellow-400 text-blue-950 px-2.5 py-0.5 rounded shadow-2xs">
                  AP EAPCET CODE: RAVW
                </span>
                <h3 className="text-2xl font-serif font-bold text-yellow-300 mt-2">
                  B.Tech Admissions 2025-2026
                </h3>
                <p className="text-xs text-blue-100 mt-1">
                  Submit your online application for CSE (AI), CSE, or ECE streams.
                </p>
              </div>

              {/* Form Body / Success View */}
              <div className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h4 className="font-serif font-bold text-xl text-slate-900">Application Submitted!</h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Thank you, <strong>{formData.name || 'Candidate'}</strong>. Our admissions counseling team will contact you shortly on <strong>{formData.phone || 'your phone number'}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-blue-600" /> Full Candidate Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-blue-600" /> Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile no."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-blue-600" /> Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="candidate@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                          <BookOpen className="h-3.5 w-3.5 text-blue-600" /> Preferred Branch
                        </label>
                        <select
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 bg-white"
                        >
                          <option value="CSE (AI)">CSE (Artificial Intelligence)</option>
                          <option value="CSE">Computer Science & Engineering (CSE)</option>
                          <option value="ECE">Electronics & Comm. Engg (ECE)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-1 flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-blue-600" /> City / District
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Kurnool, Nandyal"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-3">
                      <a
                        href="tel:8639756876"
                        className="text-[11px] font-bold text-blue-700 hover:underline flex items-center gap-1"
                      >
                        <Phone className="h-3.5 w-3.5" /> Call Helpline: 8639756876
                      </a>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        Submit Application <Send className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
