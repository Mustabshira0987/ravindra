import React from 'react';
import { Award, CheckCircle, FlaskConical, Trophy, FileSpreadsheet, Eye } from 'lucide-react';
import { DEPARTMENTS } from '../data';

const EXTRA_DEPT_DETAILS = {
  vision: "To be a recognized center of excellence in Computer Science & Engineering, training young women to lead global digital transformations and write software solutions that benefit humanity.",
  mission: [
    "To impart professional software development capability and analytical thinking.",
    "To nurture research interest, industrial exposure, and active coding club environments.",
    "To build strong corporate alignment to guarantee immediate career starts upon graduation."
  ],
  achievements: [
    "Secured 96.4% placement rate in the recent academic recruitment cycle.",
    "National winners at the Smart India Hackathon for women safety application development.",
    "NBA accreditation renewed for a further period of 3 years with top scoring credits.",
    "Over 45 research publications in IEEE, Springer, and Scopus index journals by our students and faculty."
  ],
  curriculum: [
    "Data Structures & Algorithm Design",
    "Object-Oriented Programming (Java / Python)",
    "Database Management Systems & SQL",
    "Cloud Computing & IoT Systems",
    "Full-Stack Web Development Technologies",
    "Computer Networks & Cyber Security"
  ],
  faculty: [
    { name: "Dr. G. Ramesh", designation: "Professor & HOD", qualification: "M.Tech, Ph.D. (CSE)", experience: "18+ Years", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250" },
    { name: "Mrs. K. Radhika Sree", designation: "Associate Professor", qualification: "M.Tech, (Ph.D.)", experience: "12+ Years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250" },
    { name: "Mr. P. Kalyan Rao", designation: "Assistant Professor", qualification: "M.Tech", experience: "8+ Years", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250" },
    { name: "Mrs. J. Lakshmi Priya", designation: "Assistant Professor", qualification: "M.Tech", experience: "6+ Years", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=250" }
  ],
  gallery: [
    { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400", title: "Computing Lab Session" },
    { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400", title: "National Level Code Jam" },
    { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400", title: "Collaborative Innovation Center" }
  ]
};

export default function CSE() {
  const baseDept = DEPARTMENTS.find(d => d.id === 'cse');

  if (!baseDept) return null;

  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Page Title Header Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Department of {baseDept.name}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            {baseDept.code} Stream
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            {baseDept.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content Containers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono block">
              Academic Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white">
              Course Overview & History
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {baseDept.fullDesc}
            </p>
            <div className="grid grid-cols-2 gap-4 bg-white dark:bg-primary-900/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] text-slate-400 font-mono uppercase">Annual Intake</span>
                <p className="font-bold text-primary-950 dark:text-white text-lg">{baseDept.intake} Students / Yr</p>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-mono uppercase">Established</span>
                <p className="font-bold text-primary-950 dark:text-white text-lg">{baseDept.established}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <img
              src={baseDept.image}
              alt={baseDept.name}
              className="w-full h-80 object-cover rounded-3xl shadow-xl border-4 border-white dark:border-primary-900"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 2. Departmental Vision & Mission */}
        <section className="bg-white dark:bg-primary-900/40 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-855 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="space-y-4">
            <div className="w-10 h-10 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-xl flex items-center justify-center">
              <Eye className="h-5.5 w-5.5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-900 dark:text-white">Department Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed italic">
              "{EXTRA_DEPT_DETAILS.vision}"
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-gold-400 rounded-xl flex items-center justify-center">
              <Award className="h-5.5 w-5.5" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-900 dark:text-white">Department Mission</h3>
            <ul className="space-y-3">
              {EXTRA_DEPT_DETAILS.mission.map((item, index) => (
                <li key={index} className="flex gap-2.5 items-start text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                  <CheckCircle className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Laboratories */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Practical Excellence</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">Experimental Laboratories</h2>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {baseDept.labs.map((lab, index) => (
              <div key={index} className="bg-white dark:bg-primary-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <FlaskConical className="h-6 w-6 text-gold-500 mb-4" />
                <h4 className="font-serif font-bold text-sm sm:text-base text-primary-950 dark:text-white mb-2">{lab}</h4>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">Fully equipped with gigabit Ethernet, dedicated technician support staff, air conditioning, and professional hardware platforms.</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Faculty Profiles */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Expert Mentorship</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">Our Prominent Faculty</h2>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {EXTRA_DEPT_DETAILS.faculty.map((member, index) => (
              <div key={index} className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col items-center p-6 text-center">
                <div className="h-32 w-32 rounded-full overflow-hidden mb-4 border-2 border-gold-500/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-primary-950 dark:text-white leading-tight">{member.name}</h4>
                <p className="text-gold-600 dark:text-gold-400 text-[11px] font-mono mt-1">{member.designation}</p>
                <p className="text-slate-400 text-[10px] mt-1">{member.qualification}</p>
                <span className="text-[10px] bg-slate-100 dark:bg-primary-950 text-slate-500 dark:text-slate-300 font-bold px-2.5 py-0.5 rounded-full mt-4">Exp: {member.experience}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Curriculum & Coursework */}
        <section className="bg-primary-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <FileSpreadsheet className="h-8 w-8 text-gold-400" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">Curriculum & Course Syllabus</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The syllabus is rigorously structured under the guidance of our academic advisory board in collaboration with JNTU Anantapur, merging foundational math theory with direct industry programming platforms.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="text-[10px] text-gold-400 font-mono uppercase tracking-wider block mb-4">Core Syllabus Focus Areas</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXTRA_DEPT_DETAILS.curriculum.map((subject, idx) => (
                  <div key={idx} className="flex gap-2 items-center text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Achievements */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Outstanding Standards</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">Recent Achievements</h2>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EXTRA_DEPT_DETAILS.achievements.map((ach, idx) => (
              <div key={idx} className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl flex gap-4 shadow-sm">
                <div className="w-10 h-10 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-xl flex items-center justify-center shrink-0">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-primary-950 dark:text-white mb-1">Academic Landmark</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-300 leading-relaxed">{ach}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Gallery */}
        <section className="pb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Visual Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">Department Gallery</h2>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {EXTRA_DEPT_DETAILS.gallery.map((img, idx) => (
              <div key={idx} className="relative h-60 rounded-2xl overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-serif font-bold">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
