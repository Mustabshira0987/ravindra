import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Landmark, History, Trophy, Award, CheckCircle2, ShieldCheck, Zap, Star, ChevronRight, BookOpen, GraduationCap } from 'lucide-react';
import { COLLEGE_INFO } from '../data';
import ENTRANCE_GATE_IMAGE from '../assets/images/rcew_entrance_gate_1785856860096.jpg';
import CAMPUS_LAWN_IMAGE from '../assets/images/rcew_campus_lawn_1785861561422.png';

export default function AboutProfile() {
  const [activeSection, setActiveSection] = useState('history');

  const sidebarMenu = [
    { id: 'history', label: 'History of RCEW' },
    { id: 'credentials', label: 'Key Accreditations' },
    { id: 'why-rcew', label: 'Unique USPs' },
    { id: 'milestones', label: 'Historical Milestones' },
  ];

  const milestones = [
    { year: '2008', title: 'Founding Year', description: 'Established Ravindra Engineering College for Women in Kurnool under Sri Sai Krishna Educational Society.' },
    { year: '2012', title: 'Campus Expansion', description: 'Introduced core ECE and CSE stream labs with state-of-the-art computational infrastructure.' },
    { year: '2016', title: 'NBA & NAAC Accreditation', description: 'Achieved prestigious NBA & NAAC accreditation marks for engineering programs.' },
    { year: '2022', title: 'NAAC A+ Grade Status', description: 'Awarded NAAC A+ status, ISO 9001-2015 certification, and UGC 2(f) & 12(B) recognition.' },
    { year: '2025-26', title: 'AI & ML Expansion', description: 'Launched B.Tech CSE (Artificial Intelligence) and M.Tech AI & ML streams.' },
  ];

  const ourUSPs = [
    { title: '95% Faculty Retention', desc: 'Excellent faculty retention ratio of about 95% ensuring stable, experienced academic mentorship.' },
    { title: 'R&D & Campus E-Learning', desc: 'Excellent Research and Development activities for both faculty and students along with campus-wide e-learning.' },
    { title: 'Sought After MNC Placements', desc: 'One of the most sought after campuses in the region by Multi National Companies for campus placements.' },
    { title: 'State of Art Labs', desc: 'Well established laboratories with State of Art hardware, high-end workstations, and software.' },
    { title: 'Strong Alumni Network', desc: 'Strong Alumni-Institute relationship driving guest lectures, mentorship, and placement referrals.' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 bg-white min-h-screen">
      {/* Page Title Header Banner - Royal Blue Header Theme with Gold Accent Badge */}
      <section className="relative py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-950 text-white overflow-hidden mb-12 shadow-md rounded-b-3xl">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-950 bg-amber-400 text-xs font-bold uppercase tracking-widest font-mono px-3.5 py-1 rounded-full shadow-2xs border border-amber-300">
            Ravindra Engineering College for Women
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            History of RCEW & College Profile
          </h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full shadow-xs" />
          <p className="max-w-3xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed font-medium">
            NAAC A+ Grade Accredited • NBA Accredited • ISO 9001-2015 Certified • UGC 2(f) & 12(B) Recognized
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR (ROYAL BLUE HEADER + GOLD ACCENTS + ACTIVE NAV) ================= */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden sticky top-24">
            {/* Top Accent Bar - ROYAL BLUE */}
            <div className="h-3.5 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900" />

            {/* Sidebar Title Header - ROYAL BLUE */}
            <div className="p-5 text-center bg-gradient-to-b from-blue-900 via-blue-900 to-slate-900 text-white relative">
              <GraduationCap className="h-8 w-8 text-amber-400 mx-auto mb-1 drop-shadow-sm" />
              <h2 className="text-lg font-serif font-bold text-white leading-snug">
                College Profile
              </h2>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/20 text-white border border-white/20">
                RCEW Autonomous
              </span>
            </div>

            {/* Navigation Options List */}
            <nav className="divide-y divide-slate-100">
              {sidebarMenu.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer relative ${
                      isActive
                        ? 'text-blue-900 bg-blue-50/80 font-bold'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-blue-50/40'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {isActive && <span className="w-2.5 h-2.5 rounded-full bg-blue-800 animate-pulse" />}
                      <span>{item.label}</span>
                    </span>

                    <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'text-blue-900 font-bold translate-x-0.5' : 'text-slate-400'}`} />

                    {/* Active Right Vertical Bar - ROYAL BLUE */}
                    {isActive && (
                      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-blue-800 rounded-l shadow-xs" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* 1. HISTORY OF RCEW SECTION - Pop Up Reveal */}
            <motion.section
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              id="history"
              className="scroll-mt-28 bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8"
            >
              
              {/* Category Header */}
              <div>
                {/* Small Section Label - ROYAL BLUE */}
                <span className="text-blue-900 font-mono text-xs font-bold uppercase tracking-widest block">
                  INSTITUTIONAL PROFILE
                </span>
                {/* Heading - NAVY */}
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
                  History of RCEW
                </h2>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  Promoted by Sri Sai Krishna Educational Society • Established 2008
                </p>
              </div>

              {/* Callout Box - LIGHT BLUE Background with ROYAL BLUE Border */}
              <div className="p-5 bg-blue-50/70 border-l-4 border-blue-800 rounded-r-2xl text-slate-900 text-sm leading-relaxed shadow-2xs font-medium">
                The Board of Governance and founding visionaries of Ravindra College of Engineering for Women comprise eminent academic leaders, educators, and technical pioneers committed to empowering women through world-class technical education.
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Column: Official History Matter */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                    <p>
                      <strong>Ravindra College of Engineering for Women (RCEW)</strong> is promoted by <em>Sri Sai Krishna Educational Society</em>, a society registered on 15-02-2006 under A.P Societies Registration Act No 35 of 2001, and is the dream project of renowned educationalist <strong>Sri G. Pullaiah</strong> and his son <strong>Sri G.V.M Mohan Kumar</strong>. The college is located in a hamlet Venkayapalli, within close proximity from Kurnool on the state highway and is well connected to all major cities in and around the state.
                    </p>
                    <p>
                      The College established in the year 2008, works with the Motto <strong>“Join to learn and leave to serve”</strong> and strives to provide the student community modern technology supported by a comprehensive library, state-of-the-art laboratories along with necessary computational skills. RCEW has obtained <strong>NAAC A+ status from the year 2022</strong> besides being accredited by NAAC of UGC and NBA of AICTE, New Delhi.
                    </p>
                    <p>
                      RCEW is approved by AICTE, New Delhi and has also been granted permanent affiliation under <strong>Jawaharlal Nehru Technological University Anantapuramu (JNTUA)</strong>. Also it is an <strong>ISO 9001-2015 certified Institution</strong> besides recognized by UGC under <strong>2(f) and 12(B)</strong>. It offers 3 UG programs in Computer Science and Engineering (CSE), Computer Science and Engineering (Artificial Intelligence), Electronics and Communication Engineering (ECE) and 2 PG programs in Computer Science and Engineering (CSE), AI & ML.
                    </p>
                    <p>
                      The college consists of well-designed infrastructure and is ably supported by well-qualified, reasonable blend of experienced and young faculty who involve themselves in teaching and research. The overall ambience of the college provides the best place for teaching-learning experience. Further, all the stakeholders of RCEW work within the framework of its well-defined Vision, Mission and Quality Policy.
                    </p>
                  </div>
                </div>

                {/* Right Column: Campus Lawn Photo */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-slate-100 bg-slate-100">
                    <img
                      src={CAMPUS_LAWN_IMAGE}
                      alt="Ravindra College Campus Green Lawn & Architecture"
                      className="w-full h-80 sm:h-96 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                      {/* Special Highlight Badge - ROYAL BLUE */}
                      <span className="text-[11px] bg-blue-800 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider font-mono shadow-sm border border-amber-300/40">
                        RCEW Campus Lawn & Infrastructure
                      </span>
                    </div>
                  </div>

                  {/* Entrance Gate Thumbnail */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs h-36">
                    <img
                      src={ENTRANCE_GATE_IMAGE}
                      alt="RCEW Campus Entrance Arch"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-slate-950/40" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold font-mono tracking-wider uppercase">
                      Venkayapalli • Kurnool Campus
                    </div>
                  </div>
                </div>

              </div>

              {/* 2. KEY ACCREDITATIONS & CREDENTIALS ROW */}
              <div id="credentials" className="pt-6 border-t border-slate-100 space-y-4">
                {/* Small Section Label - ROYAL BLUE */}
                <span className="text-blue-900 text-xs font-mono font-bold uppercase tracking-widest block">
                  NATIONAL RECOGNITIONS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200 text-center space-y-0.5">
                    <span className="font-bold text-sm text-blue-900 block">NAAC A+</span>
                    <span className="text-[11px] text-blue-700 font-mono font-semibold">Status Since 2022</span>
                  </div>
                  <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-center space-y-0.5">
                    <span className="font-bold text-sm text-amber-900 block">NBA Accredited</span>
                    <span className="text-[11px] text-amber-700 font-mono font-semibold">AICTE Approval</span>
                  </div>
                  <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-200 text-center space-y-0.5">
                    <span className="font-bold text-sm text-blue-900 block">JNTUA Affiliation</span>
                    <span className="text-[11px] text-blue-700 font-mono font-semibold">Permanent Status</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-0.5">
                    <span className="font-bold text-sm text-slate-900 block">UGC 2(f) & 12(B)</span>
                    <span className="text-[11px] text-slate-600 font-mono font-semibold">ISO 9001-2015</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 3. OUR USPs SECTION - STAGGERED POP-UP MOTION */}
            <motion.section
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              id="why-rcew"
              className="scroll-mt-28 bg-blue-50/50 p-8 sm:p-12 rounded-3xl border border-blue-100 shadow-sm space-y-8"
            >
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-blue-900 text-xs font-bold uppercase tracking-widest font-mono">Distinct Advantages</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">Our Unique Selling Propositions (USPs)</h2>
                <div className="h-1 w-16 bg-amber-400 mx-auto rounded-full" />
                <p className="text-slate-700 text-xs sm:text-sm font-medium">Why Ravindra College of Engineering for Women stands as a premier technical destination.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ourUSPs.map((usp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl border border-blue-100 shadow-2xs space-y-3 hover:border-blue-700 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center border border-amber-200 font-bold">
                      <Star className="h-5 w-5 text-amber-500" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-950 text-lg leading-tight">{usp.title}</h3>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{usp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 4. HISTORICAL MILESTONES SECTION - STAGGERED POP-UP MOTION */}
            <motion.section
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              id="milestones"
              className="scroll-mt-28 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8"
            >
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-blue-900 text-xs font-bold uppercase tracking-widest font-mono">Our Glorious Journey</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">RCEW Historical Milestones</h2>
                <div className="h-1 w-12 bg-amber-400 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {milestones.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30, scale: 0.93 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="bg-blue-50/40 p-5 rounded-2xl border border-blue-100 shadow-2xs space-y-2 flex flex-col justify-between hover:shadow-md hover:border-blue-700 transition-all cursor-pointer"
                  >
                    <div>
                      <span className="inline-block px-2.5 py-1 bg-blue-800 text-white text-xs font-bold font-mono rounded-md shadow-2xs mb-2">
                        {m.year}
                      </span>
                      <h4 className="font-serif font-bold text-slate-950 text-sm">{m.title}</h4>
                      <p className="text-slate-700 text-[11px] leading-relaxed mt-1 font-medium">{m.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

          </div>

        </div>
      </div>
    </div>
  );
}




