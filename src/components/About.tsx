import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Award, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';
import { COLLEGE_INFO } from '../data';

export default function About() {
  const highlights = [
    "100% Safe and Secure Women's Campus with round-the-clock guards",
    "NBA-Accredited flagship B.Tech courses (CSE & ECE)",
    "Pioneering Artificial Intelligence & Data Science department",
    "Interactive Digital Smart Classrooms and Wi-Fi campus layout",
    "Specialized personality improvement bootcamps starting from 1st Year",
    "Rigorous, industry-oriented coding, and hackathon clubs",
    "Vibrant extracurricular life, sports complexes, and clubs",
    "Extensive transportation routing across Kurnool and neighboring districts"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-primary-950 relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 dark:bg-primary-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Discover Our Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white tracking-tight mt-2">
            Ravindra Engineering College for Women
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Establishing standards of academic excellence and holistic grooming, RCEW Kurnool is dedicated exclusively to training and inspiring the next generation of women technologists and business leaders.
          </p>
        </div>

        {/* Vision & Mission row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" id="vision-mission-cards">
          {/* Vision */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-50 dark:bg-primary-900/30 border border-slate-100 dark:border-slate-800/60 shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 text-primary-900 dark:text-white">
              <Compass className="h-24 w-24" />
            </div>
            <div className="inline-flex items-center justify-center p-3.5 bg-primary-700 rounded-xl text-white shadow-md mb-6">
              <Compass className="h-6 w-6 text-gold-300" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-900 dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              To emerge as a premier global institution in technical education, training women engineers to acquire technological competency, research-driven capabilities, and ethical integrity, thereby leading the world with innovation and sustainable change.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-50 dark:bg-primary-900/30 border border-slate-100 dark:border-slate-800/60 shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 text-primary-900 dark:text-white">
              <Target className="h-24 w-24" />
            </div>
            <div className="inline-flex items-center justify-center p-3.5 bg-gold-500 rounded-xl text-primary-950 shadow-md mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-900 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              To impart high-quality engineering training aligned with cutting-edge industry curricula, to foster a research environment through centers of excellence, and to inculcate professional values, soft skills, and entrepreneurial leadership in women engineers.
            </p>
          </motion.div>
        </div>

        {/* Principal Message Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20" id="principal-message-block">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-500 to-primary-700 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-white dark:bg-primary-900 p-4 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
              <img
                src={COLLEGE_INFO.principalImage}
                alt={COLLEGE_INFO.principalName}
                className="w-full h-[400px] object-cover rounded-2xl shadow-inner"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-primary-950/90 dark:bg-primary-950/95 text-white rounded-xl backdrop-blur-sm border border-white/10">
                <p className="font-serif font-bold text-base text-gold-400">{COLLEGE_INFO.principalName}</p>
                <p className="text-xs text-slate-300 font-mono">{COLLEGE_INFO.principalTitle}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-gold-300">
              <HeartHandshake className="h-3.5 w-3.5" />
              Leadership Message
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white">
              Principal’s Desk Welcoming You
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
              "{COLLEGE_INFO.principalMessage}"
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="font-serif font-bold text-primary-900 dark:text-white text-lg">
                Dr. K. E. Sreenivasa Murthy
              </p>
              <p className="text-slate-400 text-xs font-mono">
                Principal, Ravindra Engineering College for Women
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Checklist Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-primary-900/25 border border-slate-100 dark:border-slate-800/60 shadow-sm" id="college-highlights-checklist">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary-900 dark:text-white">
                RCEW Kurnool Highlights & Standing
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-mono mt-1">
                Approved by AICTE • Affiliated to JNTU Anantapur
              </p>
            </div>
            <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold text-sm bg-gold-500/10 px-4 py-2 rounded-xl">
              <Award className="h-5 w-5" />
              ISO 9001:2015 Certified
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-700 dark:text-gold-400 mt-0.5 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300 text-sm font-sans">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
