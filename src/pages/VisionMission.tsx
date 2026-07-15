import React from 'react';
import { Sparkles, Trophy } from 'lucide-react';
import { COLLEGE_INFO } from '../data';

export default function VisionMission() {
  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Page Title Header Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            College Identity & Values
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Vision & Mission
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Nurturing competent engineering intellect under ethical frameworks and modern digital parameters.
          </p>
        </div>
      </section>

      {/* Main Core Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Box */}
          <div className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 p-8 sm:p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="w-12 h-12 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-2xl flex items-center justify-center">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
              "{COLLEGE_INFO.vision}"
            </p>
            <p className="text-xs text-slate-400">
              Fostering elite pathways where every student builds logical autonomy and contributes to global engineering innovations.
            </p>
          </div>

          {/* Mission Box */}
          <div className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 p-8 sm:p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-gold-400 rounded-2xl flex items-center justify-center">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white">Our Mission</h3>
            <ul className="space-y-4">
              {COLLEGE_INFO.mission.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quality Policy Banner */}
        <div className="bg-primary-950 text-white p-8 sm:p-12 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-gold-500/5 rounded-full" />
          <div className="max-w-3xl space-y-4">
            <span className="text-gold-400 font-mono text-xs font-bold uppercase tracking-widest block">Quality Policy</span>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">Commitment to Academic Governance</h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We pledge to provide world-class technical training through qualified faculty, modern computing laboratories, and high-quality teaching-learning paradigms. We implement rigorous internal audits under NAAC frameworks to constantly review student outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
