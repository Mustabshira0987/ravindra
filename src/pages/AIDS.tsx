import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, FlaskConical, Trophy, FileSpreadsheet, Eye } from 'lucide-react';
import { DEPARTMENTS } from '../data';

const EXTRA_DEPT_DETAILS = {
  vision: "To serve as a premier academic stream producing outstanding machine learning engineers and data scientists equipped to process unstructured digital signals and build deep learning intelligence.",
  mission: [
    "To train students in robust mathematical computing, statistical architectures, and big data.",
    "To establish collaborations with global AI leaders for hands-on, real-world project work.",
    "To build ethical AI models that promote gender and general societal benefit."
  ],
  achievements: [
    "Successfully established NVIDIA GPU accelerated high-performance computing laboratory.",
    "Our students achieved top ranks on Kaggle and HackerRank coding leaderboards.",
    "100% of our first-batch seniors secured high-impact AI/Data engineering placements in premium companies.",
    "Successfully organized 'AIPulse 2025' National Seminar inviting research minds from Microsoft."
  ],
  curriculum: [
    "Introduction to Machine Learning & Python",
    "Probability, Statistics & Linear Algebra",
    "Deep Learning & Artificial Neural Networks",
    "Big Data Analytics (Hadoop & Spark Pipelines)",
    "Natural Language Processing & LLMs",
    "Computer Vision & Pattern Recognition"
  ],
  faculty: [
    { name: "Dr. T. Kavitha", designation: "Professor & HOD", qualification: "Ph.D. in Artificial Intelligence", experience: "16+ Years", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250" },
    { name: "Dr. S. Chandra Shekar", designation: "Professor", qualification: "M.Tech, Ph.D.", experience: "14+ Years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250" },
    { name: "Mrs. V. Sree Lakshmi", designation: "Associate Professor", qualification: "M.Tech", experience: "9+ Years", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=250" },
    { name: "Mr. B. Harish Kumar", designation: "Assistant Professor", qualification: "M.Tech", experience: "5+ Years", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250" }
  ],
  gallery: [
    { url: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400", title: "AI Neural Network Lab" },
    { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400", title: "Big Data Pipelines Lab" },
    { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400", title: "Seminar on Generative AI" }
  ]
};

export default function AIDS() {
  const baseDept = DEPARTMENTS.find(d => d.id === 'aids');

  if (!baseDept) return null;

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* Page Title Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden mb-12 border-b-2 border-amber-400/80 shadow-md">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">
            Department of Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            {baseDept.name} ({baseDept.code})
          </h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full shadow-xs" />
          <p className="max-w-2xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
            {baseDept.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content Containers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. Overview Section - Pop Up Reveal */}
        <motion.section
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Academic Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              Course Overview & History
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {baseDept.fullDesc}
            </p>
            <div className="grid grid-cols-2 gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div>
                <span className="text-[11px] text-slate-500 font-mono uppercase font-semibold">Annual Intake</span>
                <p className="font-bold text-blue-900 text-lg">{baseDept.intake} Students / Yr</p>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-mono uppercase font-semibold">Established</span>
                <p className="font-bold text-amber-700 text-lg">{baseDept.established}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <img
              src={baseDept.image}
              alt={baseDept.name}
              className="w-full h-80 object-cover rounded-3xl shadow-lg border-4 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.section>

        {/* 2. Departmental Vision & Mission */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="space-y-4">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 border border-amber-200 rounded-xl flex items-center justify-center">
              <Eye className="h-5.5 w-5.5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-950">Department Vision</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic bg-blue-50/40 p-4 rounded-xl border-l-4 border-blue-800">
              "{EXTRA_DEPT_DETAILS.vision}"
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <div className="w-10 h-10 bg-blue-50 text-blue-800 border border-blue-200 rounded-xl flex items-center justify-center">
              <Award className="h-5.5 w-5.5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-950">Department Mission</h3>
            <ul className="space-y-3">
              {EXTRA_DEPT_DETAILS.mission.map((item, index) => (
                <li key={index} className="flex gap-2.5 items-start text-slate-700 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Laboratories */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest font-mono">Practical Excellence</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">Experimental Laboratories</h2>
            <div className="h-1 w-12 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {baseDept.labs.map((lab, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all">
                <FlaskConical className="h-6 w-6 text-amber-500 mb-4" />
                <h4 className="font-serif font-bold text-sm sm:text-base text-slate-950 mb-2">{lab}</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">Fully equipped with gigabit Ethernet, dedicated technician support staff, air conditioning, and professional hardware platforms.</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Faculty Profiles */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest font-mono">Expert Mentorship</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">Our Prominent Faculty</h2>
            <div className="h-1 w-12 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {EXTRA_DEPT_DETAILS.faculty.map((member, index) => (
              <div key={index} className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col items-center p-6 text-center">
                <div className="h-32 w-32 rounded-full overflow-hidden mb-4 border-2 border-amber-400">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-slate-950 leading-tight">{member.name}</h4>
                <p className="text-amber-700 text-[11px] font-mono font-bold mt-1">{member.designation}</p>
                <p className="text-slate-500 text-[10px] mt-1">{member.qualification}</p>
                <span className="text-[10px] bg-blue-50 text-blue-900 border border-blue-200 font-bold px-2.5 py-0.5 rounded-full mt-4">Exp: {member.experience}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Curriculum & Coursework */}
        <section className="bg-gradient-to-br from-blue-50/60 to-slate-50 text-slate-900 p-8 sm:p-12 rounded-2xl border border-blue-200/80 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <FileSpreadsheet className="h-8 w-8 text-amber-500" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">Curriculum & Course Syllabus</h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                The syllabus is rigorously structured under the guidance of our academic advisory board in collaboration with JNTU Anantapur, merging foundational math theory with direct industry programming platforms.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] text-amber-600 font-mono font-bold uppercase tracking-wider block mb-4">Core Syllabus Focus Areas</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXTRA_DEPT_DETAILS.curriculum.map((subject, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-xs font-semibold text-slate-800">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Achievements */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest font-mono">Outstanding Standards</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">Recent Achievements</h2>
            <div className="h-1 w-12 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EXTRA_DEPT_DETAILS.achievements.map((ach, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-2xl flex gap-4 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all">
                <div className="w-10 h-10 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center shrink-0 border border-amber-200">
                  <Trophy className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-950 mb-1">Academic Landmark</h4>
                  <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">{ach}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Gallery */}
        <section className="pb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest font-mono">Visual Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">Department Gallery</h2>
            <div className="h-1 w-12 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {EXTRA_DEPT_DETAILS.gallery.map((img, idx) => (
              <div key={idx} className="relative h-60 rounded-2xl overflow-hidden group border border-slate-200/80 shadow-2xs">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/50 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-amber-300 text-xs font-serif font-bold">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
