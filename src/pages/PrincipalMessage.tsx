import React from 'react';
import { Award, GraduationCap, Quote } from 'lucide-react';
import { COLLEGE_INFO } from '../data';

export default function PrincipalMessage() {
  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Page Title Header Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Leadership Address
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Principal's Message
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Leading Ravindra Engineering College for Women towards global recognition and academic autonomy.
          </p>
        </div>
      </section>

      {/* Message and Bio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <div className="relative w-64 h-64 mx-auto lg:mx-0 rounded-3xl overflow-hidden border-4 border-white dark:border-primary-900 shadow-xl">
              <img
                src={COLLEGE_INFO.principalImage}
                alt={COLLEGE_INFO.principalName}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-primary-900 dark:text-white leading-tight">
                {COLLEGE_INFO.principalName}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1">{COLLEGE_INFO.principalTitle}</p>
            </div>
            <div className="bg-white dark:bg-primary-900/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-left space-y-2">
              <div className="flex gap-2 items-center text-xs text-slate-600 dark:text-slate-300">
                <GraduationCap className="h-4 w-4 text-gold-500 shrink-0" />
                <span>Ph.D in Engineering from JNTUA</span>
              </div>
              <div className="flex gap-2 items-center text-xs text-slate-600 dark:text-slate-300">
                <Award className="h-4 w-4 text-gold-500 shrink-0" />
                <span>25+ Years Academic & Research Exposure</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 p-8 sm:p-12 rounded-3xl shadow-sm relative space-y-6">
            <Quote className="h-12 w-12 text-gold-500/10 absolute top-6 right-6" />
            <h2 className="text-2xl font-serif font-bold text-primary-900 dark:text-white">
              Welcoming the Leaders of Tomorrow
            </h2>
            <div className="h-0.5 w-12 bg-gold-500 rounded-full" />
            <div className="space-y-4 text-slate-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="italic font-serif text-slate-700 dark:text-slate-200">
                "{COLLEGE_INFO.principalMessage}"
              </p>
              <p>
                At Ravindra Engineering College for Women, our primary objective is to cultivate logical autonomy, research aptitude, and gender equality within technical spaces. Our modern programming labs, certified design centers, and experienced faculty members operate in synergy to ensure students transition smoothly into leading positions at multinational technology corporations.
              </p>
              <p>
                We maintain active communication channels with international training associations to groom students in cognitive skills, quantitative aptitude, and dynamic communication codes. I invite all aspiring women engineers to join RCEW and discover their power to lead, innovate, and conquer global industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
