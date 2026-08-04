import React from 'react';
import { Coffee, HeartHandshake, Users, CheckCircle2 } from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data';

export default function CampusLife() {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 via-white to-slate-50 text-slate-900 overflow-hidden mb-12 border-b border-slate-200 shadow-sm">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">
            Vibrant Ecosystem
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-slate-900">
            Campus Life & Facilities
          </h1>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover a supportive, secure, and completely engaging environment built to foster balanced, smart student journeys.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Facilities Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAMPUS_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden shrink-0 border-b border-slate-100">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-[11px] font-bold bg-blue-600 text-white px-3 py-1 rounded-full font-mono uppercase tracking-wider shadow-sm">
                  {facility.name}
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-tight">
                    {facility.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] text-blue-600 font-mono font-bold uppercase tracking-wider block mb-3">Key Highlights</span>
                  <div className="grid grid-cols-2 gap-2.5">
                    {facility.highlights.map((h, i) => (
                      <div key={i} className="flex gap-2 items-center text-xs font-semibold text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                        <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0" />
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
        <section className="bg-[#F8FBFF] p-8 sm:p-12 rounded-2xl border border-blue-100/80 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center border border-yellow-200">
              <Users className="h-5.5 w-5.5 text-yellow-600" />
            </div>
            <h4 className="font-serif font-bold text-slate-900 text-base">Student Clubs & Activities</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Coding Club, English Language Circle, Entrepreneurship Cell, and cultural dancing groups keep our student lives completely active, cultivating strong management and peer learning traits.
            </p>
          </div>

          <div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-200">
              <Coffee className="h-5.5 w-5.5 text-blue-600" />
            </div>
            <h4 className="font-serif font-bold text-slate-900 text-base">Hygienic Cafeteria</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Serves delicious, highly nutritious, and fully vegetarian lunches, refreshing soft drinks, hot teas, and daily baked snacks. Strict hygiene checks ensure top culinary safety.
            </p>
          </div>

          <div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center border border-yellow-200">
              <HeartHandshake className="h-5.5 w-5.5 text-yellow-600" />
            </div>
            <h4 className="font-serif font-bold text-slate-900 text-base">NSS Community & Events</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our active National Service Scheme (NSS) unit organizes regular healthcare awareness camps, International Yoga Day events, blood donation drives, and tree plantation sprints.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
