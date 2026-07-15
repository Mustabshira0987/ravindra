import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ChevronLeft, ChevronRight, X, Sparkles, Filter } from 'lucide-react';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', category: 'Academics', caption: 'Convocation Ceremony Day celebration' },
  { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', category: 'Events', caption: 'State Level Interactive Brainstorming Hackathon' },
  { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', category: 'Campus', caption: 'Students Collaborating in modern AI Research Lab' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800', category: 'Events', caption: 'Distinguished Guest Keynote speech during Annual Fest' },
  { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800', category: 'Cultural', caption: 'Traditional Dance Performance at cultural day fete' },
  { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800', category: 'Academics', caption: 'Air-Conditioned digital reading decks in central library' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Academics', 'Events', 'Cultural'];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? filteredImages.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === filteredImages.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-primary-950/40 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            RCEW Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white mt-1">
            Visual Media Gallery
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Take a visual tour across our classrooms, labs, active tech hackathons, convocation forums, and student initiatives in Kurnool.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12" id="gallery-category-filter-tabs">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wide mr-2 dark:text-slate-500">
            <Filter className="h-3.5 w-3.5" /> Filter Category:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-primary-700 text-white dark:bg-gold-500 dark:text-primary-950 shadow-md'
                  : 'bg-white dark:bg-primary-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-primary-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-photo-masonry">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => {
              // We find the original index in standard GALLERY_IMAGES for consistency
              const originalIdx = GALLERY_IMAGES.findIndex(img => img.url === image.url);
              return (
                <motion.div
                  key={image.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer bg-slate-100 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800/60"
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category label */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-gold-400 text-primary-950">
                      {image.category}
                    </span>
                  </div>

                  {/* Icon & Caption overlays */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="h-7 w-7 text-gold-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="text-white text-sm font-serif font-semibold line-clamp-2">
                      {image.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/95 z-55 flex flex-col items-center justify-center p-4 select-none"
            id="gallery-lightbox-overlay"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-60"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Carousel navigation Left */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Display Image Box */}
            <div className="relative max-w-4xl max-h-[75vh] w-full flex flex-col items-center">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={filteredImages[lightboxIndex].url}
                alt="Expanded media view"
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Caption */}
              <div className="text-center mt-6 max-w-2xl px-4">
                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-gold-500 text-primary-950 font-mono">
                  {filteredImages[lightboxIndex].category}
                </span>
                <p className="text-white text-base font-serif mt-2">
                  {filteredImages[lightboxIndex].caption}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Image {lightboxIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>

            {/* Carousel navigation Right */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
