import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, BookOpen, GraduationCap, Building2, Briefcase, Trophy, Sparkles } from 'lucide-react';
import { STATS } from '../data';

interface CounterProps {
  value: number;
  suffix: string;
  gradientText: string;
}

function Counter({ value, suffix, gradientText }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span
      ref={elementRef}
      className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold bg-gradient-to-r ${gradientText} bg-clip-text text-transparent tracking-tight drop-shadow-2xs`}
    >
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const COLOR_SCHEMES: Record<string, {
  iconBg: string;
  iconColor: string;
  gradientText: string;
  borderColor: string;
  hoverBorder: string;
  shadowHover: string;
  topAccent: string;
  bgLight: string;
  badgeBg: string;
}> = {
  students: {
    iconBg: 'bg-blue-600/10 border-blue-300/60',
    iconColor: 'text-blue-600',
    gradientText: 'from-blue-600 via-indigo-600 to-blue-800',
    borderColor: 'border-blue-200/80',
    hoverBorder: 'hover:border-blue-400',
    shadowHover: 'hover:shadow-blue-500/20',
    topAccent: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    bgLight: 'bg-gradient-to-b from-blue-50/80 via-white to-blue-50/30',
    badgeBg: 'bg-blue-100/80 text-blue-900 border-blue-200'
  },
  faculty: {
    iconBg: 'bg-purple-600/10 border-purple-300/60',
    iconColor: 'text-purple-600',
    gradientText: 'from-purple-600 via-violet-600 to-purple-800',
    borderColor: 'border-purple-200/80',
    hoverBorder: 'hover:border-purple-400',
    shadowHover: 'hover:shadow-purple-500/20',
    topAccent: 'bg-gradient-to-r from-purple-500 to-violet-600',
    bgLight: 'bg-gradient-to-b from-purple-50/80 via-white to-purple-50/30',
    badgeBg: 'bg-purple-100/80 text-purple-900 border-purple-200'
  },
  departments: {
    iconBg: 'bg-emerald-600/10 border-emerald-300/60',
    iconColor: 'text-emerald-600',
    gradientText: 'from-emerald-600 via-teal-600 to-emerald-800',
    borderColor: 'border-emerald-200/80',
    hoverBorder: 'hover:border-emerald-400',
    shadowHover: 'hover:shadow-emerald-500/20',
    topAccent: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    bgLight: 'bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/30',
    badgeBg: 'bg-emerald-100/80 text-emerald-900 border-emerald-200'
  },
  placements: {
    iconBg: 'bg-amber-500/10 border-amber-300/60',
    iconColor: 'text-amber-600',
    gradientText: 'from-amber-500 via-orange-600 to-amber-700',
    borderColor: 'border-amber-200/80',
    hoverBorder: 'hover:border-amber-400',
    shadowHover: 'hover:shadow-amber-500/20',
    topAccent: 'bg-gradient-to-r from-amber-400 to-orange-500',
    bgLight: 'bg-gradient-to-b from-amber-50/80 via-white to-amber-50/30',
    badgeBg: 'bg-amber-100/80 text-amber-900 border-amber-200'
  },
  recruiters: {
    iconBg: 'bg-rose-600/10 border-rose-300/60',
    iconColor: 'text-rose-600',
    gradientText: 'from-rose-600 via-pink-600 to-rose-800',
    borderColor: 'border-rose-200/80',
    hoverBorder: 'hover:border-rose-400',
    shadowHover: 'hover:shadow-rose-500/20',
    topAccent: 'bg-gradient-to-r from-rose-500 to-pink-600',
    bgLight: 'bg-gradient-to-b from-rose-50/80 via-white to-rose-50/30',
    badgeBg: 'bg-rose-100/80 text-rose-900 border-rose-200'
  },
  alumni: {
    iconBg: 'bg-sky-600/10 border-sky-300/60',
    iconColor: 'text-sky-600',
    gradientText: 'from-sky-600 via-cyan-600 to-blue-700',
    borderColor: 'border-sky-200/80',
    hoverBorder: 'hover:border-sky-400',
    shadowHover: 'hover:shadow-sky-500/20',
    topAccent: 'bg-gradient-to-r from-sky-500 to-cyan-600',
    bgLight: 'bg-gradient-to-b from-sky-50/80 via-white to-sky-50/30',
    badgeBg: 'bg-sky-100/80 text-sky-900 border-sky-200'
  }
};

export default function Stats() {
  const getIcon = (id: string, colorClass: string) => {
    switch (id) {
      case 'students':
        return <Users className={`h-6 w-6 ${colorClass}`} />;
      case 'faculty':
        return <BookOpen className={`h-6 w-6 ${colorClass}`} />;
      case 'departments':
        return <Building2 className={`h-6 w-6 ${colorClass}`} />;
      case 'placements':
        return <Trophy className={`h-6 w-6 ${colorClass}`} />;
      case 'recruiters':
        return <Briefcase className={`h-6 w-6 ${colorClass}`} />;
      case 'alumni':
        return <GraduationCap className={`h-6 w-6 ${colorClass}`} />;
      default:
        return <GraduationCap className={`h-6 w-6 ${colorClass}`} />;
    }
  };

  return (
    <section aria-label="Key Institution Statistics" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-16 overflow-hidden border-y border-slate-200/80">
      
      {/* Decorative colorful background radial glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            Institutional Excellence at a Glance
          </span>
        </div>

        {/* Stats 6 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const scheme = COLOR_SCHEMES[stat.id] || COLOR_SCHEMES.students;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 240, damping: 18, delay: idx * 0.06 }}
                className={`relative flex flex-col items-center text-center p-5 sm:p-6 rounded-3xl ${scheme.bgLight} border ${scheme.borderColor} ${scheme.hoverBorder} shadow-md hover:shadow-xl ${scheme.shadowHover} hover:-translate-y-2 transition-all duration-300 group overflow-hidden`}
              >
                {/* Top Accent Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${scheme.topAccent}`} />

                {/* Colorful Glowing Icon Badge */}
                <div className={`p-3.5 rounded-2xl mb-3 border ${scheme.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-2xs`}>
                  {getIcon(stat.id, scheme.iconColor)}
                </div>
                
                {/* Vibrant Gradient Counter */}
                <Counter value={stat.value} suffix={stat.suffix} gradientText={scheme.gradientText} />
                
                {/* Clean Label */}
                <p className="text-xs sm:text-sm text-slate-800 font-sans font-bold mt-2 max-w-[130px] leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
