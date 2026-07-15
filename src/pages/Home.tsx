import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Award, GraduationCap, CheckCircle2, ChevronRight, BookOpen, Star, TrendingUp, Sparkles, Building2, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import { DEPARTMENTS, NEWS_EVENTS, PLACEMENT_STATS } from '../data';

export default function Home() {
  // Filter only the three departments requested: CSE, ECE, AI&DS
  const featuredDepts = DEPARTMENTS.filter(d => ['cse', 'ece', 'aids'].includes(d.id));

  return (
    <div className="bg-slate-50 dark:bg-primary-950/20">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section with Animated Counters */}
      <Stats />

      {/* College Introduction & Vision */}
      <section className="py-20 bg-white dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image grid */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gold-200/40 dark:bg-gold-550/10 rounded-3xl blur-2xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-primary-900">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  alt="RCEW Campus Collaboration"
                  className="w-full h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif font-bold text-lg">Empowering Women Engineers</p>
                  <p className="text-xs text-gold-300 font-mono mt-1">Established in 2008 • Kurnool</p>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono block">
                Welcome to RCEW, Kurnool
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white leading-tight">
                Pioneering Technical Excellence for Women
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Ravindra Engineering College for Women (RCEW) is Kurnool's elite academic destination, solely committed to sharpening technological competency and leadership profiles of young women engineers. Approved by AICTE, affiliated to JNTUA, and NAAC Accredited, we offer state-of-the-art labs and global placement training.
              </p>

              {/* Accreditations Row */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-primary-950 dark:text-white">NAAC Accredited</h4>
                    <p className="text-[11px] text-slate-400">Institutional Excellence Mark</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-primary-950 dark:text-white">NBA Accredited</h4>
                    <p className="text-[11px] text-slate-400">CSE & ECE Core Streams</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-700 hover:bg-primary-800 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                >
                  Learn Vision & Profile <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RCEW - Bento Grid Features */}
      <section className="py-20 bg-slate-50 dark:bg-primary-950/40 border-y border-slate-100 dark:border-primary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
              The RCEW Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white mt-1">
              Why Choose RCEW Kurnool?
            </h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-gold-400 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-900 dark:text-white mb-2">100% Women Centric</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                A highly secure, supportive, and empowering environment tailored to build courage, critical engineering expertise, and outstanding campus leaders.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-gold-400 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-900 dark:text-white mb-2">Stellar Placements Record</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Consistent placement statistics of over 95% with blue-chip recruiters like TCS, Cognizant, Wipro, Accenture, and Hexaware offering premium packages.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-gold-400 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-900 dark:text-white mb-2">Modern Infrastructure</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Advanced AI Research stations, IoT studios, smart high-speed digital libraries, sports arenas, and robust campus Wi-Fi infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="py-20 bg-white dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
            <div>
              <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono block">
                Academic Disciplines
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">
                Featured Engineering Streams
              </h2>
            </div>
            <Link
              to="/academics"
              className="text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-gold-400 flex items-center gap-1 hover:gap-2 transition-all mt-4 sm:mt-0"
            >
              All Programs <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDepts.map((dept) => (
              <div
                key={dept.id}
                className="group bg-slate-50 dark:bg-primary-900/40 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold bg-gold-400 text-primary-950 px-2.5 py-1 rounded-full font-mono uppercase tracking-widest">
                    {dept.code}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-primary-900 dark:text-white leading-tight">
                      {dept.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {dept.shortDesc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Intake: {dept.intake} seats</span>
                    <Link
                      to={`/departments/${dept.id === 'aids' ? 'ai-ds' : dept.id}`}
                      className="text-xs font-bold uppercase text-primary-700 dark:text-gold-300 flex items-center gap-1 hover:translate-x-1 transition-transform"
                    >
                      View Page <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Placements Highlights */}
      <section className="py-20 bg-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Placements Text side */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono block">
                Placement Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
                Launch Your Global Career From RCEW
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With a robust placement cell and industry relationships, our young women engineers are highly preferred by global tech and software organizations. Specialized soft skill and programming camps ensure immediate deployment readiness.
              </p>

              {/* Package stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <span className="text-gold-400 font-serif font-bold text-2xl sm:text-3xl block">14.5 LPA</span>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Highest Package</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <span className="text-gold-400 font-serif font-bold text-2xl sm:text-3xl block">4.8 LPA</span>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Average Package</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/placements"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-primary-950 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Explore Placement Cell <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Top Recruiters interactive grid / preview */}
            <div className="lg:col-span-6 bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
              <h3 className="font-serif font-bold text-lg text-white">Our Premier Recruiters</h3>
              <div className="grid grid-cols-3 gap-4" id="recruiters-logo-grid">
                {PLACEMENT_STATS.topRecruiters.map((rec, i) => (
                  <div
                    key={i}
                    className="h-16 bg-white/10 rounded-xl flex flex-col items-center justify-center p-2 text-center border border-white/5 hover:bg-white/15 hover:border-gold-500/30 transition-all cursor-pointer"
                  >
                    <span className="text-slate-300 text-[11px] font-bold font-mono uppercase leading-tight">{rec.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-slate-300 text-center">
                📊 Over <strong className="text-gold-400 font-bold">120+ recruitments</strong> secured in the previous academic calendar.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Logo Marquee Slider */}
      <section className="py-8 bg-slate-100 dark:bg-primary-900/30 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-4">Empowering careers at major multinationals</p>
          <div className="flex items-center justify-around gap-8 flex-wrap opacity-60">
            <span className="text-sm font-bold tracking-wider text-slate-400">TATA CONSULTANCY SERVICES</span>
            <span className="text-sm font-bold tracking-wider text-slate-400">COGNIZANT GENC</span>
            <span className="text-sm font-bold tracking-wider text-slate-400">WIPRO TECH</span>
            <span className="text-sm font-bold tracking-wider text-slate-400">INFOSYS SOLUTIONS</span>
            <span className="text-sm font-bold tracking-wider text-slate-400">ACCENTURE</span>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20 bg-white dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
            <div>
              <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono block">
                Stay Updated
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">
                Latest News & Campus Events
              </h2>
            </div>
            <Link
              to="/bulletins"
              className="text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-gold-400 flex items-center gap-1 hover:gap-2 transition-all mt-4 sm:mt-0"
            >
              All Bulletins <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_EVENTS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 dark:bg-primary-900/35 border border-slate-100 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-primary-700 text-white font-mono">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-slate-400 text-[10px] font-mono block mb-2">{item.date}</span>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-primary-900 dark:text-white leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-3 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/50 mt-4 flex justify-end">
                  <Link
                    to="/bulletins"
                    className="text-xs font-bold uppercase text-primary-700 dark:text-gold-300 flex items-center gap-1 hover:translate-x-1 transition-transform"
                  >
                    Read Details <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Gallery Preview Slider / Grid */}
      <section className="py-20 bg-slate-50 dark:bg-primary-950/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
              Life on Campus
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">
              Visual Tour Preview
            </h2>
            <div className="h-1 w-16 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" id="home-gallery-grid-preview">
            <div className="relative h-64 rounded-2xl overflow-hidden group shadow-sm border border-slate-100 dark:border-slate-800/40">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
                alt="Convocation Celebration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/45 flex items-end p-5">
                <span className="text-white text-xs font-serif font-semibold">Convocation Assembly</span>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group shadow-sm border border-slate-100 dark:border-slate-800/40">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                alt="State Level Hackfest"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/45 flex items-end p-5">
                <span className="text-white text-xs font-serif font-semibold">Interactive Tech Summit</span>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group shadow-sm border border-slate-100 dark:border-slate-800/40">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                alt="Academic Lab Research"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/45 flex items-end p-5">
                <span className="text-white text-xs font-serif font-semibold">Advanced AI Computing Studio</span>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/campus-life"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-700 hover:bg-primary-800 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Tour Campus & Facilities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
