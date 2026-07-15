import React from 'react';
import { Calendar, FileText, Library, BookOpen, Download, AlertCircle, Cpu } from 'lucide-react';
import { COLLEGE_INFO } from '../data';

export default function Academics() {
  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Academics & Regulations
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Academic Excellence & Systems
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Nurturing competent engineering intellect under modern university models, active research cells, and digital libraries.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. Academic Calendar Section */}
        <section className="bg-white dark:bg-primary-900/35 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-mono text-xs font-bold uppercase">
                <Calendar className="h-4.5 w-4.5" /> Curricula Timelines
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white">
                Academic Calendar 2026-27
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Stay aligned with core semester dates, internal assessment timetables, industrial tour schedules, winter/summer vacations, and university final examination dates for both B.Tech and MBA streams.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 dark:bg-primary-950/40 p-4 rounded-xl border border-slate-100 dark:border-slate-850">
                  <span className="font-bold text-xs text-primary-950 dark:text-white block">Odd Semesters (I, III, V, VII)</span>
                  <span className="text-[11px] text-slate-400">Classwork Commences: July 20, 2026</span>
                </div>
                <div className="bg-slate-50 dark:bg-primary-950/40 p-4 rounded-xl border border-slate-100 dark:border-slate-855">
                  <span className="font-bold text-xs text-primary-950 dark:text-white block">Even Semesters (II, IV, VI, VIII)</span>
                  <span className="text-[11px] text-slate-400">Classwork Commences: Dec 14, 2026</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center items-center p-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
              <BookOpen className="h-10 w-10 text-gold-500 mb-3" />
              <p className="text-center text-xs font-bold text-primary-950 dark:text-white mb-4">Official Academic Calendars</p>
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-700 hover:bg-primary-800 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 text-xs font-bold uppercase transition-all shadow-sm">
                <Download className="h-4 w-4" /> Download PDF (B.Tech)
              </button>
            </div>
          </div>
        </section>

        {/* 2. Academic Regulations */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
              University Affiliation Rules
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white">
              Academic Regulations & Guidelines
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              As an affiliated institution under JNTUA (JNTU Anantapur), RCEW strictly administers the specified University regulations (R20, R23 curricula) concerning course credits, attendance requirements, internal grading, and continuous evaluation rules.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gold-100 dark:bg-primary-900 text-gold-600 dark:text-gold-400 flex items-center justify-center font-bold text-xs shrink-0">75</div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed"><strong className="text-primary-950 dark:text-white">Attendance Mandate:</strong> Minimum 75% attendance in both theories and laboratories is compulsory to write the final university exams.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gold-100 dark:bg-primary-900 text-gold-600 dark:text-gold-400 flex items-center justify-center font-bold text-xs shrink-0">160</div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed"><strong className="text-primary-950 dark:text-white">Credit Structure:</strong> Accumulation of 160 credits across 4 academic years is required to qualify for the B.Tech degree.</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-950 text-white p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gold-550/5 rounded-full" />
            <h3 className="font-serif font-bold text-lg mb-4 text-gold-400">JNTUA Syllabus</h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-6">
              The curriculum is designed in alignment with recent technology advancements. From machine learning pipelines and VLSI compilers to sustainable green township concrete, the curriculum ensures that industry relevance is strictly maintained.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-bold uppercase text-white transition-all">
              <FileText className="h-4 w-4 text-gold-400" /> Syllabus Catalogs (JNTUA)
            </button>
          </div>
        </section>

        {/* 3. Examination Cell */}
        <section className="bg-white dark:bg-primary-900/35 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-gold-500 font-mono text-xs font-bold uppercase tracking-widest block">Examination Controller</span>
            <h2 className="text-2xl font-serif font-bold text-primary-900 dark:text-white">Examination Cell</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              The Examination Cell at RCEW is a dedicated workspace headed by the Chief Controller of Examinations. It handles the scheduling of internal assessments, final laboratory evaluations, JNTUA semester exams, results publishing, and revaluation registration procedures.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-amber-800 dark:text-amber-400 flex gap-3 items-start">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="text-xs"><strong>Urgent Alert:</strong> Mid-term II assessment examinations for III & IV B.Tech students will begin from August 10, 2026. Register prior to deadlines.</p>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-slate-50 dark:bg-primary-950/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
              <span className="text-gold-500 font-serif font-bold text-3xl block">98.2%</span>
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block mt-1">Average Pass Percentage</span>
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-700 hover:bg-primary-800 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 text-xs font-bold uppercase transition-all shadow-sm">
              Online Results Portal
            </button>
          </div>
        </section>

        {/* 4. Library & Innovation Cell */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Central Library */}
          <div className="bg-white dark:bg-primary-900/35 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-2xl flex items-center justify-center">
              <Library className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-900 dark:text-white">Central Library (A/C)</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Our Central Library is a fully air-conditioned knowledge hub housing over 35,000 physical volumes, 120 national and international physical journals, and digital subscription portals (IEEE, Springer, Delnet) with 24/7 high-speed reading desks.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300 text-[11px] font-mono uppercase">
              <li>• 35k+ Books</li>
              <li>• IEEE Digital</li>
              <li>• Delnet Network</li>
              <li>• Plagiarism Check</li>
            </ul>
          </div>

          {/* Innovation Cell */}
          <div className="bg-white dark:bg-primary-900/35 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-gold-400 rounded-2xl flex items-center justify-center">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-900 dark:text-white">R&D & Innovation Cell</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              The Innovation Cell inspires students to conduct real hardware modeling, patent writing, and startup building. Backed by expert faculty guidance and funding support, students consistently win state and national level software hackathons.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300 text-[11px] font-mono uppercase">
              <li>• 12+ Active Patents</li>
              <li>• Mock Hackathons</li>
              <li>• Research Funding</li>
              <li>• Industry Mentors</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
