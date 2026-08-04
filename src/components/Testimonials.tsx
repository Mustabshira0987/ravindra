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
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-y border-slate-200/80">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">
            Student Voice
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight mt-1 text-slate-900">
            Alumnae Testimonials & Trust
          </h2>
          <div className="h-1 w-16 bg-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel slide */}
        <div className="relative bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[350px] flex flex-col justify-between">
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
                <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-2xl overflow-hidden ring-4 ring-blue-100 shadow-md">
                  <img
                    src={TESTIMONIALS[activeIndex].image}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute -bottom-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md font-mono">
                  {TESTIMONIALS[activeIndex].branch} • {TESTIMONIALS[activeIndex].batch}
                </div>
              </div>

              {/* Text side */}
              <div className="md:col-span-8 space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-blue-600 opacity-20 shrink-0" />
                
                <p className="text-slate-700 text-sm sm:text-base font-sans italic leading-relaxed">
                  "{TESTIMONIALS[activeIndex].quote}"
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-base sm:text-lg font-serif font-bold text-slate-900">
                    {TESTIMONIALS[activeIndex].name}
                  </p>
                  <p className="text-slate-500 text-xs font-mono">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons Bottom Right */}
          <div className="flex justify-end gap-2.5 mt-8 border-t border-slate-100 pt-4">
            <button
              onClick={handlePrev}
              className="p-2.5 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-xl transition-all shadow-sm border border-slate-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-xl transition-all shadow-sm border border-slate-200 cursor-pointer"
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
                activeIndex === i ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
