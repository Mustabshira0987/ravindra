import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, Star, Compass, Rocket, Target, Zap, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import NIGHT_CAMPUS_IMAGE from '../assets/images/rcew_why_rcew_night_1785862796253.png';

export default function WhyRCEW() {
  const pillars = [
    {
      icon: Award,
      title: 'Tailored Excellence for Women',
      text: 'To experience excellence tailored for women engineers',
      color: 'from-blue-600 to-indigo-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      icon: Compass,
      title: 'Dynamic Learning & Mentorship',
      text: 'To discover a dynamic learning environment, mentorship opportunities, and pathways to success!',
      color: 'from-indigo-600 to-sky-600',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      icon: Rocket,
      title: 'Ignite & Unleash Creativity',
      text: 'To ignite your engineering journey, unleash your creativity, challenge the status quo, and embark on a path of discovery and achievement.',
      color: 'from-yellow-500 to-amber-600',
      badgeBg: 'bg-yellow-50 text-yellow-800 border-yellow-300 font-bold'
    },
    {
      icon: Target,
      title: 'Aspirations to Achievements',
      text: 'To transform your aspirations into achievements, on the campus where knowledge meets opportunity, and dreams become reality.',
      color: 'from-emerald-600 to-teal-600',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold'
    },
    {
      icon: Zap,
      title: 'Classroom to Real-World Practice',
      text: 'To elevate your engineering education, from classroom theory to real-world application.',
      color: 'from-purple-600 to-indigo-600',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      icon: Star,
      title: 'Lead & Innovate in Technology',
      text: 'To lead and innovate in the ever-evolving field of technology.',
      color: 'from-cyan-600 to-blue-600',
      badgeBg: 'bg-cyan-50 text-cyan-800 border-cyan-300 font-bold'
    },
    {
      icon: ShieldCheck,
      title: 'Break Barriers & Realize Ambitions',
      text: 'To break your barriers and step into a world of endless possibilities, where your potential is nurtured, and your ambitions are realized.',
      color: 'from-pink-600 to-rose-600',
      badgeBg: 'bg-pink-50 text-pink-700 border-pink-200 font-bold'
    }
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* HEADER BANNER */}
      <section className="relative py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden mb-12 border-b-2 border-amber-400/80 shadow-md">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-amber-400/30">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" /> Discover Your Potential
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white">
            Why RCEW?
          </h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full shadow-xs" />
          <p className="max-w-3xl mx-auto text-blue-100 text-base sm:text-lg font-serif font-semibold">
            Ravindra College of Engineering for Women can be your best choice:
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-20">
        
        {/* CAMPUS NIGHT ILLUMINATION SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-900"
        >
          <img
            src={NIGHT_CAMPUS_IMAGE}
            alt="Ravindra College Campus Saraswati Statue Night Illumination"
            className="w-full h-80 sm:h-[460px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white text-center space-y-2">
            <span className="inline-block text-xs bg-amber-400 text-amber-950 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider font-mono shadow-md border border-amber-300">
              Knowledge Meets Opportunity • RCEW Campus
            </span>
            <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto italic font-serif">
              “Where your potential is nurtured, barriers are broken, and dreams become reality.”
            </p>
          </div>
        </motion.div>

        {/* PILLARS / WHY CHOOSE US CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-amber-400 transition-all space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center border border-blue-200 group-hover:bg-blue-800 group-hover:text-white transition-all shadow-2xs">
                      <IconComponent className="h-6 w-6 text-amber-500 group-hover:text-amber-300" />
                    </div>
                    <span className="text-[10px] px-2.5 py-1 rounded-md font-mono uppercase font-bold border bg-amber-100 text-amber-950 border-amber-300">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-slate-950 group-hover:text-blue-900 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    {p.text}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-900 font-mono uppercase tracking-wider">
                  <span>RCEW Promise</span>
                  <CheckCircle2 className="h-4 w-4 text-amber-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CALL TO ACTION CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center space-y-4 border-t-2 border-amber-400"
        >
          <span className="text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block px-3 py-1 rounded-full bg-white/10 border border-amber-400/30">
            Join Ravindra Engineering College for Women
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white max-w-3xl mx-auto">
            Ready to Begin Your Engineering Journey?
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-medium">
            Step into a world of endless possibilities, top MNC placements, and NAAC A+ accredited technical education.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
