import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, ArrowUpRight, CheckCircle2, ChevronRight, MessageSquareCode } from 'lucide-react';
import { PLACEMENT_STATS } from '../data';

export default function Placements() {
  const trainingPrograms = [
    {
      title: 'Quantitative & Aptitude Drills',
      desc: 'Rigorous analytical reasoning, arithmetic calculations, and cognitive problem-solving practice sessions held daily starting from the 3rd semester onwards.',
    },
    {
      title: 'Full Stack Tech Bootcamps',
      desc: 'Hands-on programming camps covering Java, Python, SQL, Web structures, and algorithmic programming, led by veteran coding experts.',
    },
    {
      title: 'Mock Coding Challenges',
      desc: 'Weekly simulated examinations matching the exact templates of TCS NQT, Cognizant GenC, and Hexaware online assessments.',
    },
    {
      title: 'Behavioral & HR Mock drills',
      desc: 'One-on-one video mock interviews, body language, speech improvements, corporate etiquette, and group discussion modules.',
    }
  ];

  return (
    <section id="placements" className="py-24 bg-slate-50 dark:bg-primary-950/45 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Launch Your Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white mt-1">
            Excellent Placements Arena
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Consistently leading the Rayalaseema region in women career pathways, RCEW sets record benchmarks for corporate placements.
          </p>
        </div>

        {/* Big Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" id="placement-stats-banner">
          {/* Highest Package */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-950 text-white border border-white/5 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 p-2 bg-white/10 rounded-xl text-gold-300">
              <Award className="h-5 w-5" />
            </div>
            <p className="text-xs text-slate-300 uppercase tracking-wider font-mono">Highest Package Offered</p>
            <p className="text-2xl sm:text-3xl font-serif font-bold mt-4 text-gold-400">{PLACEMENT_STATS.highestPackage}</p>
            <div className="h-1 bg-gold-500/20 w-full mt-4 rounded-full">
              <div className="h-full bg-gold-400 rounded-full" style={{ width: '85%' }} />
            </div>
          </div>

          {/* Average Package */}
          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Average Package</p>
                <p className="text-2xl sm:text-3xl font-serif font-bold mt-4 text-primary-900 dark:text-white">
                  {PLACEMENT_STATS.averagePackage}
                </p>
              </div>
              <div className="p-2 bg-primary-50 dark:bg-primary-800 rounded-xl text-primary-700 dark:text-gold-300">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-5 flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Steady growth annual benchmark
            </p>
          </div>

          {/* Placement Percentage */}
          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Placement Success</p>
                <p className="text-2xl sm:text-3xl font-serif font-bold mt-4 text-primary-900 dark:text-white">
                  {PLACEMENT_STATS.placementPercentage}
                </p>
              </div>
              <div className="p-2 bg-primary-50 dark:bg-primary-800 rounded-xl text-primary-700 dark:text-gold-300">
                <GraduationCap className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-5 flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Verified by Institutional counseling
            </p>
          </div>

          {/* Recruiters count */}
          <div className="p-6 rounded-2xl bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Alliance Recruiters</p>
                <p className="text-2xl sm:text-3xl font-serif font-bold mt-4 text-primary-900 dark:text-white">
                  {PLACEMENT_STATS.recruitersCount}+ Companies
                </p>
              </div>
              <div className="p-2 bg-primary-50 dark:bg-primary-800 rounded-xl text-primary-700 dark:text-gold-300">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-5 flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Multinationals & core electronics
            </p>
          </div>
        </div>

        {/* Recruiters Carousel/Marquee representation */}
        <div className="mb-20 bg-white dark:bg-primary-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <p className="text-center text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">
            Trusted corporate alliance & recruitment partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
            {PLACEMENT_STATS.topRecruiters.map((rec, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
                <img
                  src={rec.logoUrl}
                  alt={rec.name}
                  className="w-16 h-16 object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all border border-slate-100"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] font-bold text-slate-500 text-center">{rec.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two columns: Left Student Success Stories, Right Placement Training */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Placement Training Programs (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-gold-300">
              <MessageSquareCode className="h-3.5 w-3.5" />
              Career Readiness
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white">
              Placement Training Program (PTP)
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              We understand that modern corporate paths demand more than academic grades. Our structured Placement Training program starts right from the second year of study, grooming soft-skills, logical aptitude, and code structures.
            </p>

            <div className="space-y-4 pt-4">
              {trainingPrograms.map((tp, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 bg-gold-500 text-primary-950 rounded mt-1 shrink-0">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary-900 dark:text-white">{tp.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{tp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories Cards (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white mb-4">
              Our Stars: Placed Student Success Stories
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PLACEMENT_STATS.successStories.map((story, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="relative h-40 overflow-hidden rounded-xl">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2 left-2 bg-primary-950/90 text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/10">
                        {story.branch}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 italic leading-relaxed">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    <p className="font-bold text-slate-800 dark:text-white text-xs">{story.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">Placed in <strong className="text-primary-700 dark:text-gold-400 font-semibold">{story.company}</strong></p>
                    <p className="text-[10px] text-gold-600 dark:text-gold-400 font-mono font-bold mt-1 bg-gold-500/10 px-1.5 py-0.5 rounded w-fit">{story.package}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
