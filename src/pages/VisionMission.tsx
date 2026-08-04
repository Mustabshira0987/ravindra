import React from 'react';
import { Sparkles, Trophy } from 'lucide-react';
import { COLLEGE_INFO } from '../data';

export default function VisionMission() {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* Page Title Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 via-white to-slate-50 text-slate-900 overflow-hidden mb-12 border-b border-slate-200 shadow-sm">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">
            College Identity & Values
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-slate-900">
            Vision & Mission
          </h1>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Nurturing competent engineering intellect under ethical frameworks and modern digital parameters.
          </p>
        </div>
      </section>

      {/* Main Core Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Box */}
          <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-all space-y-5">
            <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center border border-yellow-200">
              <Sparkles className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-serif">
              "{COLLEGE_INFO.vision}"
            </p>
            <p className="text-xs text-slate-500">
              Fostering elite pathways where every student builds logical autonomy and contributes to global engineering innovations.
            </p>
          </div>

          {/* Mission Box */}
          <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-all space-y-5">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-200">
              <Trophy className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">Our Mission</h3>
            <ul className="space-y-4">
              {COLLEGE_INFO.mission.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-slate-600">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quality Policy Banner */}
        <div className="bg-[#F8FBFF] text-slate-900 p-8 sm:p-10 rounded-2xl border border-blue-100/80 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest block">Quality Policy</span>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">Commitment to Academic Governance</h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We pledge to provide world-class technical training through qualified faculty, modern computing laboratories, and high-quality teaching-learning paradigms. We implement rigorous internal audits under NAAC frameworks to constantly review student outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
