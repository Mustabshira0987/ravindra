import React from 'react';
import { Landmark } from 'lucide-react';
import { COLLEGE_INFO } from '../data';

export default function AboutProfile() {
  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Page Title Header Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Ravindra Engineering College for Women
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            College Profile
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Fostering top-tier technology engineers and corporate-ready female leaders in Rayalaseema since {COLLEGE_INFO.established}.
          </p>
        </div>
      </section>

      {/* Main Core Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-mono text-xs font-bold uppercase">
              <Landmark className="h-4 w-4" /> Established 2008 • Kurnool
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white">
              About Ravindra Engineering College for Women
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {COLLEGE_INFO.aboutBrief}
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Ravindra Engineering College for Women was built to establish gender-equity in Rayalaseema’s technical domain, offering young women a safe, modern ecosystem containing robust programming labs, smart library decks, secure hostels, and highly proficient mentors. The continuous record of 95%+ campus recruitments is a golden standard we defend with pride.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white dark:bg-primary-900/40 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-primary-950 dark:text-white block">Affiliation</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{COLLEGE_INFO.affiliation}</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-primary-900/40 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-primary-950 dark:text-white block">Approvals</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{COLLEGE_INFO.approvals.join(', ')}</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
                alt="Institutional campus architecture"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/15 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                <span className="text-[10px] bg-gold-400 text-primary-950 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                  UGC Approved • AICTE Approved
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
