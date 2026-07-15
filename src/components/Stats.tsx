import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, BookOpen, GraduationCap, Building2, Briefcase, Trophy } from 'lucide-react';
import { STATS } from '../data';

interface CounterProps {
  value: number;
  suffix: string;
}

function Counter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // milliseconds
    const increment = Math.ceil(value / (duration / 16)); // ~60fps

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
    <span ref={elementRef} className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'students':
        return <Users className="h-6 w-6 text-gold-300" />;
      case 'faculty':
        return <BookOpen className="h-6 w-6 text-gold-300" />;
      case 'departments':
        return <Building2 className="h-6 w-6 text-gold-300" />;
      case 'placements':
        return <Trophy className="h-6 w-6 text-gold-300" />;
      case 'recruiters':
        return <Briefcase className="h-6 w-6 text-gold-300" />;
      case 'alumni':
        return <GraduationCap className="h-6 w-6 text-gold-300" />;
      default:
        return <GraduationCap className="h-6 w-6 text-gold-300" />;
    }
  };

  return (
    <section className="relative bg-primary-900 py-16 overflow-hidden">
      {/* Absolute elements for styling */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-primary-950/40 glass border border-white/5"
            >
              <div className="p-3 bg-primary-800 rounded-2xl mb-4 shadow-inner border border-white/10">
                {getIcon(stat.id)}
              </div>
              
              <Counter value={stat.value} suffix={stat.suffix} />
              
              <p className="text-xs sm:text-sm text-slate-300 font-sans font-medium mt-2 max-w-[130px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
