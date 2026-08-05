import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import PRELOADER_BANNER_IMAGE from '../assets/images/rcew_preloader_banner.jpg';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 w-screen h-screen z-[9999] bg-blue-950 overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8 select-none"
      id="academic-portal-preloader"
    >
      {/* 1. Ambient Background Layer - Fills whole screen with matching blurred colors (No blank white space) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={PRELOADER_BANNER_IMAGE}
          alt=""
          className="w-full h-full object-cover blur-3xl opacity-35 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-blue-900/40" />
      </div>

      {/* 2. Structured Center Card - Un-stretched, crisp, 100% accurate aspect ratio */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-amber-400/40 overflow-hidden flex flex-col items-center"
        >
          {/* Main Graphic Poster */}
          <div className="w-full relative flex items-center justify-center bg-white p-1 sm:p-2">
            <img
              src={PRELOADER_BANNER_IMAGE}
              alt="Ravindra College of Engineering for Women"
              className="w-full h-auto max-h-[72vh] sm:max-h-[76vh] object-contain rounded-xl"
            />
          </div>

          {/* Integrated Bottom Loading Status Bar inside card */}
          <div className="w-full bg-slate-900 px-4 sm:px-6 py-3.5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping shrink-0" />
              <span>Loading Official RCEW Academic Portal...</span>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-full sm:w-64 flex items-center gap-3">
              <div className="flex-grow h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-amber-400 rounded-full"
                />
              </div>
              <span className="font-mono font-bold text-amber-400 text-sm shrink-0">{progress}%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
