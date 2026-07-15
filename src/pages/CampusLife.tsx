import React from 'react';
import { Coffee, HeartHandshake, Users, CheckCircle2 } from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data';

export default function CampusLife() {
  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Vibrant Ecosystem
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Campus Life & Facilities
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover a supportive, secure, and completely engaging environment built to foster balanced, smart student journeys.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Facilities Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAMPUS_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden shrink-0">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold bg-gold-400 text-primary-950 px-2.5 py-1 rounded-full font-mono uppercase tracking-widest">
                  {facility.id}
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-primary-900 dark:text-white leading-tight">
                    {facility.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-2">Key Highlights</span>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.highlights.map((h, i) => (
                      <div key={i} className="flex gap-2 items-center text-[11px] sm:text-xs text-slate-650 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 2. Extra Campus details: Clubs, Cafeteria, NSS */}
        <section className="bg-white dark:bg-primary-900/35 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-xl flex items-center justify-center">
              <Users className="h-5.5 w-5.5" />
            </div>
            <h4 className="font-serif font-bold text-primary-950 dark:text-white text-base">Student Clubs</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Coding Club, English Language Circle, Entrepreneurship Cell, and cultural dancing groups keep our student lives completely active, cultivating strong management and peer learning traits.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-gold-400 rounded-xl flex items-center justify-center">
              <Coffee className="h-5.5 w-5.5" />
            </div>
            <h4 className="font-serif font-bold text-primary-950 dark:text-white text-base">Hygienic Cafeteria</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Serves delicious, highly nutritious, and fully vegetarian lunches, refreshing soft drinks, hot teas, and daily baked snacks. Strict hygiene checks ensure top culinary safety.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-xl flex items-center justify-center">
              <HeartHandshake className="h-5.5 w-5.5" />
            </div>
            <h4 className="font-serif font-bold text-primary-950 dark:text-white text-base">NSS community</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Our active National Service Scheme (NSS) unit organizes regular healthcare awareness camps, blood donation drives, tree plantation sprints, and neighborhood village adoptions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
