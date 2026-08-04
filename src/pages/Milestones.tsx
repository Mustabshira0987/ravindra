import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, Sparkles, CheckCircle2, ShieldCheck, Calendar, Star, Building2, Zap, ArrowRight } from 'lucide-react';
import ENTRANCE_GATE_IMAGE from '../assets/images/rcew_entrance_gate_1785856860096.jpg';

export default function Milestones() {
  const milestoneData = [
    {
      year: '2008',
      badge: 'Foundation Era',
      title: 'Establishment of RCEW',
      icon: Building2,
      color: 'from-blue-600 to-indigo-600',
      accentBg: 'bg-blue-50 text-blue-700 border-blue-200',
      points: [
        'Establishment of Ravindra College of Engineering for Women under Sri Sai Krishna Educational Society.',
        'Offering B.Tech in Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), and Electrical and Electronics Engineering (EEE) with an initial intake of 180 students.'
      ]
    },
    {
      year: '2020',
      badge: 'Affiliation & NBA Milestone',
      title: 'JNTUA Permanent Status & UGC Recognition',
      icon: ShieldCheck,
      color: 'from-indigo-600 to-sky-600',
      accentBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      points: [
        'JNTUA, Ananthapuramu granted Permanent Affiliation for a period of Three Years.',
        'Official recognition of College under Section 2(f) and 12(B) of the UGC Act, 1956.',
        'Department of CSE & Department of ECE successfully accredited by the National Board of Accreditation (NBA).'
      ]
    },
    {
      year: '2022',
      badge: 'NAAC Pinnacle',
      title: 'NAAC “A+” Grade Accreditation',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600',
      accentBg: 'bg-yellow-50 text-yellow-800 border-yellow-300 font-bold',
      points: [
        'The College has been Accredited by the National Assessment and Accreditation Council (NAAC) with prestigious “A+” Grade status.'
      ]
    },
    {
      year: '2023',
      badge: 'Autonomous Distinction',
      title: 'UGC Autonomous Status Granted',
      icon: Award,
      color: 'from-emerald-600 to-teal-600',
      accentBg: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold',
      points: [
        'Our college has been granted Autonomous Status by the UGC for the next 10 years, marking a significant milestone in our academic journey.'
      ]
    },
    {
      year: '2024',
      badge: 'Continued Excellence',
      title: 'NBA Re-Accreditation Extension',
      icon: Star,
      color: 'from-blue-700 to-cyan-600',
      accentBg: 'bg-cyan-50 text-cyan-800 border-cyan-300 font-bold',
      points: [
        'NBA Accreditation of CSE and ECE departments extended for another 3 academic years, affirming institutional commitment to technical excellence.'
      ]
    }
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* PAGE HERO HEADER BANNER */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 via-white to-slate-50 text-slate-900 overflow-hidden mb-12 border-b border-slate-200 shadow-sm">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200">
            <Sparkles className="h-3.5 w-3.5 text-yellow-500" /> Historical Achievements
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-slate-900">
            Our College Milestones
          </h1>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            A saga of growth, academic distinctions, NAAC A+ status, NBA accreditations, and UGC Autonomous recognition.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 space-y-16">
        
        {/* INNOVATIVE VERTICAL TIMELINE CONTAINER */}
        <div className="relative">
          {/* Vertical Connecting Glow Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-yellow-500 to-emerald-500 -translate-x-1/2 rounded-full shadow-sm" />

          <div className="space-y-12 lg:space-y-16">
            {milestoneData.map((item, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left or Right Card Content */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:text-right lg:order-1' : 'lg:text-left lg:order-3'
                    }`}
                  >
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 relative group">
                      
                      {/* Year Chip Header */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono border ${item.accentBg}`}>
                        <Calendar className="h-3.5 w-3.5" /> {item.badge}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>

                      <ul className={`space-y-2 text-slate-600 text-xs sm:text-sm leading-relaxed text-left ${isEven ? 'lg:text-right' : ''}`}>
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Node Badge (Desktop) */}
                  <div className="lg:col-span-2 flex justify-center items-center lg:order-2 my-4 lg:my-0 z-10">
                    <div className="relative group cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center font-bold shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                        <span className="text-xs font-mono font-bold text-yellow-400">{item.year}</span>
                        <IconComponent className="h-4 w-4 text-white mt-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className={`hidden lg:block lg:col-span-5 ${isEven ? 'lg:order-3' : 'lg:order-1'}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ACCREDITATIONS SUMMARY CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden text-center space-y-6"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-yellow-400 font-mono text-xs font-bold uppercase tracking-widest inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10">
              Autonomous Institute • NAAC A+ • NBA Accredited
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Empowering Women Engineers Since 2008
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              With 10-Year UGC Autonomous Status, NAAC A+ accreditation, permanent JNTUA affiliation, and state-of-the-art infrastructure, RCEW continues its historic legacy of academic excellence.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
