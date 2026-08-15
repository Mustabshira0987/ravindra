import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2, GraduationCap, Play, Pause, X, Send, Phone, User, Mail, BookOpen, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Local campus hero images for the 4 slides matching reference UI
import HERO_SLIDE_1_AWARD from '../assets/images/rcew_award_2026_main.jpg';
import HERO_SLIDE_2_NIELIT from '../assets/images/rcew_nielit_bootcamp_lamp_lighting.png';
import HERO_SLIDE_3_BUILDING from '../assets/images/rcew_main_building_students.png';
import HERO_SLIDE_4_STUDENTS from '../assets/images/rcew_empowering_women_hero.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
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
      title: "Guiding Excellence. Empowering Futures.",
      highlightWord: "Futures.",
      subtitle: "Personalized faculty guidance, interactive Speakeasy coding sessions, and 95%+ campus placements up to 27.0 LPA.",
      tag: "INTERACTIVE CODING & CAREER MENTORSHIP",
      badgeTag: "RAVW",
      image: HERO_SLIDE_1_AWARD,
      showEmblem: true,
      objectPosition: "object-center"
    },
    {
      title: "NIELIT Offline Boot Camp & SoC Sign-off.",
      highlightWord: "SoC Sign-off.",
      subtitle: "Five-Day hands-on training on 'RTL, IP Integration & SoC Sign-off' funded by Ministry of Electronics & IT (MeitY), Govt. of India.",
      tag: "NIELIT & MEITY NATIONAL WORKSHOP",
      badgeTag: "RAVW",
      image: HERO_SLIDE_2_NIELIT,
      showEmblem: false,
      objectPosition: "object-[38%_center]"
    },
    {
      title: "Igniting Ideas. Inspiring Impact.",
      highlightWord: "Impact.",
      subtitle: "Supporting innovation, startups and research that create real-world solutions for a better tomorrow.",
      tag: "EMPOWERING INNOVATION & STARTUPS",
      badgeTag: "RAVW",
      image: HERO_SLIDE_3_BUILDING,
      showEmblem: false,
      objectPosition: "object-center"
    },
    {
      title: "Learn. Grow. Lead. Succeed.",
      highlightWord: "Succeed.",
      subtitle: "A vibrant campus life that nurtures leadership, creativity, and holistic development.",
      tag: "CAMPUS LIFE & BEYOND CLASSROOMS",
      badgeTag: "RAVW",
      image: HERO_SLIDE_4_STUDENTS,
      showEmblem: false,
      objectPosition: "object-center"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

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

  const renderTitle = (title: string, highlight: string) => {
    if (!title.includes(highlight)) {
      return <span>{title}</span>;
    }
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-serif italic">
          {highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      <section id="home" aria-label="Hero Showcase" className="relative min-h-[600px] lg:min-h-[680px] w-full bg-slate-950 text-white flex flex-col justify-between overflow-hidden py-8 lg:py-12">
      
      {/* Full-Width High Brightness Background Photo Layer */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className={`absolute inset-0 w-full h-full object-cover ${slides[currentSlide].objectPosition} z-0 filter brightness-110 contrast-105 opacity-100`}
          loading="eager"
        />
      </AnimatePresence>

      {/* Subtle Soft Gradient Overlay (Left-Side Only to protect text legibility without dimming the people/photo) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent pointer-events-none z-10 w-full lg:w-2/3" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none z-10" />

      {/* Main Content Container (Open Layout - No Overlapping Boxes) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center py-4 lg:py-6">
        <div className="max-w-3xl space-y-5 lg:space-y-6">
          
          {/* Sub-header Welcome Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-amber-300 font-medium text-xs sm:text-sm tracking-wide bg-slate-950/70 px-3.5 py-1.5 rounded-full border border-amber-400/40 backdrop-blur-md shadow-lg"
          >
            <GraduationCap className="h-4 w-4 text-amber-400 shrink-0" />
            <span>Welcome to Ravindra Engineering College for Women</span>
          </motion.div>

          {/* Top Tag Pill & Dynamic Animated Headlines */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Slide Tag Pill */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-400/40 text-white backdrop-blur-md text-[11px] font-mono tracking-wider uppercase font-bold shadow-md">
                <span className="text-amber-400 font-extrabold">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span>{slides[currentSlide].tag}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                {renderTitle(slides[currentSlide].title, slides[currentSlide].highlightWord)}
              </h1>

              <p className="text-sm sm:text-base text-slate-100 font-sans leading-relaxed max-w-2xl pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <Link
              to="/academics"
              onClick={(e) => {
                const elem = document.querySelector('#featured-departments');
                if (elem) {
                  e.preventDefault();
                  handleScrollTo('#featured-departments');
                }
              }}
              className="px-7 py-3.5 bg-blue-700 hover:bg-blue-600 text-white font-bold tracking-wider uppercase text-xs rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group cursor-pointer border border-blue-400/40"
              aria-label="Explore engineering departments"
            >
              EXPLORE DEPARTMENTS
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-amber-400" />
            </Link>

            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold tracking-wider uppercase text-xs rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-pointer flex items-center gap-2 border border-amber-300"
              aria-label="Apply online for admission"
            >
              <GraduationCap className="h-4 w-4 text-slate-950" />
              APPLY ONLINE 2026
            </button>
          </motion.div>

          {/* Slide Controls Row: Dots + Pause/Play */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? 'w-8 bg-amber-400 ring-2 ring-amber-300'
                      : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="w-7 h-7 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-md backdrop-blur-md"
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
            </button>
          </div>

          {/* Bottom Accreditation Badges (NBA, NAAC A+, ISO/Autonomous, AICTE, JNTUA) */}
          <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/75 border border-white/20 text-xs font-semibold text-white backdrop-blur-md shadow-md">
              <Award className="h-4 w-4 text-amber-400" />
              <span>NAAC <strong>A+</strong> Grade</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/75 border border-white/20 text-xs font-semibold text-white backdrop-blur-md shadow-md">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>NBA Accredited</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/75 border border-white/20 text-xs font-semibold text-white backdrop-blur-md shadow-md">
              <CheckCircle2 className="h-4 w-4 text-amber-400" />
              <span>UGC Autonomous</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/75 border border-white/20 text-xs font-semibold text-white backdrop-blur-md shadow-md">
              <GraduationCap className="h-4 w-4 text-amber-400" />
              <span>JNTUA Affiliated</span>
            </div>
          </div>
        </div>
      </div>

    </section>

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
              <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-6 relative border-b-2 border-amber-400">
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
                <span className="text-[10px] font-mono font-bold uppercase bg-amber-400 text-amber-950 px-2.5 py-0.5 rounded shadow-2xs border border-amber-300">
                  AP EAPCET CODE: RAVW
                </span>
                <h3 className="text-2xl font-serif font-bold text-amber-300 mt-2">
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
                        className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
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
    </>
  );
}
