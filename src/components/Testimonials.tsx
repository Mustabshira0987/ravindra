import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-primary-950 text-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-10 right-10 text-gold-400/10 shrink-0">
        <Quote className="h-44 w-44" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Student Voice
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight mt-1">
            Alumnae Testimonials & Trust
          </h2>
          <div className="h-1 w-16 bg-gold-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel slide */}
        <div className="relative bg-primary-900/40 glass p-8 sm:p-12 rounded-3xl border border-white/5 shadow-2xl overflow-hidden min-h-[350px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              id="testimonial-active-slide"
            >
              {/* Image side */}
              <div className="md:col-span-4 relative flex justify-center">
                <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-2xl overflow-hidden ring-4 ring-gold-500/30 shadow-xl">
                  <img
                    src={TESTIMONIALS[activeIndex].image}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent" />
                </div>
                <div className="absolute -bottom-3 bg-gold-500 text-primary-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-mono">
                  {TESTIMONIALS[activeIndex].branch} • {TESTIMONIALS[activeIndex].batch}
                </div>
              </div>

              {/* Text side */}
              <div className="md:col-span-8 space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-gold-400 opacity-40 shrink-0" />
                
                <p className="text-slate-200 text-sm sm:text-base font-sans italic leading-relaxed">
                  "{TESTIMONIALS[activeIndex].quote}"
                </p>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-base sm:text-lg font-serif font-bold text-white">
                    {TESTIMONIALS[activeIndex].name}
                  </p>
                  <p className="text-slate-400 text-xs font-mono">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons Bottom Right */}
          <div className="flex justify-end gap-2.5 mt-8 border-t border-white/5 pt-4">
            <button
              onClick={handlePrev}
              className="p-2.5 bg-primary-800 hover:bg-primary-700 text-white rounded-xl transition-all shadow border border-white/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 bg-primary-800 hover:bg-primary-700 text-white rounded-xl transition-all shadow border border-white/5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bullet index markers */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 bg-gold-400' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
