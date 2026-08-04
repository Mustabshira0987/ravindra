import React from 'react';
import { Quote, Phone } from 'lucide-react';
import { PLACEMENT_STATS } from '../data';

export default function Placements() {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 via-white to-slate-50 text-slate-900 overflow-hidden mb-12 border-b border-slate-200 shadow-sm">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">
            Empowering Careers
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-slate-900">
            Corporate Placements Desk
          </h1>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Unveiling a stellar record of consistent placements with top-tier technology corporations and global giants.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Statistics Dashboard cards */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-all">
              <span className="text-amber-500 font-serif font-bold text-3xl sm:text-4xl block">{PLACEMENT_STATS.highestPackage}</span>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest block mt-2 font-bold">Highest Annual Package</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-all">
              <span className="text-amber-500 font-serif font-bold text-3xl sm:text-4xl block">{PLACEMENT_STATS.averagePackage}</span>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest block mt-2 font-bold">Average Annual Package</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-all">
              <span className="text-amber-500 font-serif font-bold text-3xl sm:text-4xl block">{PLACEMENT_STATS.placementPercentage}</span>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest block mt-2 font-bold">Verified Placement Rate</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:-translate-y-1 transition-all">
              <span className="text-amber-500 font-serif font-bold text-3xl sm:text-4xl block">{PLACEMENT_STATS.studentsPlacedThisYear}</span>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest block mt-2 font-bold">Students Placed (Recent Cohort)</span>
            </div>
          </div>
        </section>

        {/* 2. Overview & Cell Structure */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono block">
              Placement Cell
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Training & Placement (T&P) Office
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Ravindra Engineering College for Women, we run an active, full-fledged Training & Placement cell directed by experienced corporate recruiters. T&P acts as a critical interface coordinating with multinational corporations to arrange virtual/on-campus hiring drives, core electronics evaluation forums, and strategic resume audits.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our unique training regimen starts as early as the sophomore year, ensuring that by the time students reach final semester drives, they can solve standard logical coding challenges, navigate behavioral interviews, and address quantitative aptitude questions.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100/60 rounded-3xl blur-2xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              alt="Placements training session"
              className="w-full h-80 object-cover rounded-2xl shadow-md border-4 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 3. Placement Training Curriculum */}
        <section className="bg-[#F8FBFF] p-8 sm:p-12 rounded-2xl border border-blue-100/80 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">Rigorous Framework</span>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">Our Placement Training Program</h3>
            <div className="h-1 w-12 bg-yellow-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:-translate-y-1 transition-all">
              <span className="text-blue-600 font-mono text-xs font-bold block mb-2">YEAR II • SEMESTER I & II</span>
              <h4 className="font-serif font-bold text-slate-900 text-base mb-3">Communication & Verbal Labs</h4>
              <p className="text-xs text-slate-600 leading-relaxed">A focus on public presentation skills, corporate vocabulary, professional business email composition, and accent elimination training within modern communication laboratories.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:-translate-y-1 transition-all">
              <span className="text-blue-600 font-mono text-xs font-bold block mb-2">YEAR III • SEMESTER I & II</span>
              <h4 className="font-serif font-bold text-slate-900 text-base mb-3">Logical Reasoning & Coding</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Intensive coaching in quantitative aptitude, logical algorithms, database querying, full-stack web engineering, and active participation on platforms like HackerRank.</p>
            </div>
            <div className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:-translate-y-1 transition-all">
              <span className="text-blue-600 font-mono text-xs font-bold block mb-2">YEAR IV • SEMESTER I</span>
              <h4 className="font-serif font-bold text-slate-900 text-base mb-3">Mock Interviews & Bootcamps</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Direct behavioral mock evaluation sessions, technical screening drills guided by senior industrial alumni, and 48-hour continuous coding sprint bootcamps.</p>
            </div>
          </div>
        </section>

        {/* 4. Top Recruiters Display */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">Our Global Network</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">Our Elite Recruiters</h2>
            <div className="h-1 w-12 bg-yellow-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-5">
            {PLACEMENT_STATS.topRecruiters.map((rec, index) => (
              <div key={index} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 flex flex-col items-center justify-center text-center h-24 hover:-translate-y-1 transition-all">
                <span className="text-slate-800 font-mono font-bold text-xs uppercase leading-tight">{rec.name}</span>
                <span className="text-[9px] text-slate-400 font-mono uppercase mt-1">Hiring Partner</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Success Stories */}
        <section className="pb-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">Testimonials of Pride</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">Placement Success Stories</h2>
            <div className="h-1 w-12 bg-yellow-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLACEMENT_STATS.successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-all relative flex flex-col justify-between">
                <div>
                  <Quote className="h-8 w-8 text-blue-600/20 absolute top-6 right-6" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-full overflow-hidden border border-blue-200 shrink-0">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-tight">{story.name}</h4>
                      <p className="text-[11px] font-mono text-slate-500 uppercase">Branch: {story.branch}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed mb-6">
                    "{story.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[10px] bg-yellow-50 text-yellow-800 border border-yellow-200 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">{story.company}</span>
                  <span className="font-bold text-xs text-blue-600 font-mono">{story.package}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
