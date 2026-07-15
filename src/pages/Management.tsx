import React from 'react';
import { Landmark, Users, Award, ShieldCheck } from 'lucide-react';

const MANAGEMENT_MEMBERS = [
  {
    name: "Sri G. Pullaiah",
    role: "Chairman",
    description: "A visionary academician and philanthropist who pioneered quality technical institutions in Kurnool to make higher education accessible and impactful.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Sri G. Vamsidhar",
    role: "Vice-Chairman",
    description: "An energetic leader driving digital initiatives, industrial collaborations, and modern infrastructure planning across the college campus.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Smt. G. Radhika",
    role: "Secretary",
    description: "Committed to women's empowerment, administrative streamlining, and providing student-centric welfare programs at RCEW.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Management() {
  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Page Title Header Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Visionary Foundations
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            College Management
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Led by pioneers in technical tutoring and dedicated trustees passionate about empowering women engineers.
          </p>
        </div>
      </section>

      {/* Management Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MANAGEMENT_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold bg-gold-400 text-primary-950 px-3 py-1 rounded-full font-mono uppercase tracking-widest">
                  {member.role}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-primary-900 dark:text-white leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Board of Governors */}
        <div className="bg-white dark:bg-primary-900/35 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Governing Body</span>
            <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white mt-1">Board of Governors</h3>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-slate-50 dark:bg-primary-950/40 rounded-xl border border-slate-100 dark:border-slate-850">
              <span className="font-bold text-xs text-primary-950 dark:text-white block">Sri G. Pullaiah</span>
              <span className="text-[10px] text-slate-400 font-mono uppercase">Chairman / President</span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-primary-950/40 rounded-xl border border-slate-100 dark:border-slate-850">
              <span className="font-bold text-xs text-primary-950 dark:text-white block">Dr. K. E. Sreenivasa Murthy</span>
              <span className="text-[10px] text-slate-400 font-mono uppercase">Member Secretary (Principal)</span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-primary-950/40 rounded-xl border border-slate-100 dark:border-slate-850">
              <span className="font-bold text-xs text-primary-950 dark:text-white block">Sri G. Vamsidhar</span>
              <span className="text-[10px] text-slate-400 font-mono uppercase">Management Nominee</span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-primary-950/40 rounded-xl border border-slate-100 dark:border-slate-850">
              <span className="font-bold text-xs text-primary-950 dark:text-white block">Dr. G. Ramesh</span>
              <span className="text-[10px] text-slate-400 font-mono uppercase">Teacher Representative</span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-primary-950/40 rounded-xl border border-slate-100 dark:border-slate-850">
              <span className="font-bold text-xs text-primary-950 dark:text-white block">Prof. JNTUA Nominee</span>
              <span className="text-[10px] text-slate-400 font-mono uppercase">University Representative</span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-primary-950/40 rounded-xl border border-slate-100 dark:border-slate-850">
              <span className="font-bold text-xs text-primary-950 dark:text-white block">State Govt Nominee</span>
              <span className="text-[10px] text-slate-400 font-mono uppercase">CTE Nominee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
