import React from 'react';
import { Landmark, History, Trophy, Award, CheckCircle2, ShieldCheck, Zap, Star, Check } from 'lucide-react';
import { COLLEGE_INFO } from '../data';
import ENTRANCE_GATE_IMAGE from '../assets/images/rcew_entrance_gate_1785856860096.jpg';
import CAMPUS_LAWN_IMAGE from '../assets/images/rcew_campus_lawn_1785861561422.png';

export default function AboutProfile() {
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

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* Page Title Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 via-white to-slate-50 text-slate-900 overflow-hidden mb-12 border-b border-slate-200 shadow-sm">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">
            Ravindra Engineering College for Women
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-slate-900">
            History of RCEW & College Profile
          </h1>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            NAAC A+ Grade Accredited • NBA Accredited • ISO 9001-2015 Certified • UGC 2(f) & 12(B) Recognized
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mb-20">
        
        {/* 1. HISTORY OF RCEW SECTION */}
        <section id="history" className="scroll-mt-28 bg-white p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Official History Matter */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase">
                <History className="h-4 w-4 text-yellow-500" /> Established 2008 • Kurnool, AP
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                History of RCEW
              </h2>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
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

              {/* Key Credentials Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-center">
                  <span className="font-bold text-xs text-blue-900 block">NAAC A+</span>
                  <span className="text-[10px] text-blue-600 font-mono">Status Since 2022</span>
                </div>
                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-center">
                  <span className="font-bold text-xs text-blue-900 block">NBA Accredited</span>
                  <span className="text-[10px] text-blue-600 font-mono">AICTE Approval</span>
                </div>
                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-center">
                  <span className="font-bold text-xs text-blue-900 block">JNTUA Affiliation</span>
                  <span className="text-[10px] text-blue-600 font-mono">Permanent Status</span>
                </div>
                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-center">
                  <span className="font-bold text-xs text-blue-900 block">UGC 2(f) & 12(B)</span>
                  <span className="text-[10px] text-blue-600 font-mono">ISO 9001-2015</span>
                </div>
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
                  <span className="text-[11px] bg-blue-600 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider font-mono shadow-sm">
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
        </section>

        {/* 2. OUR USPs SECTION */}
        <section id="why-rcew" className="scroll-mt-28 bg-[#F8FBFF] p-8 sm:p-12 rounded-3xl border border-blue-100/80 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">Distinct Advantages</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">Our Unique Selling Propositions (USPs)</h2>
            <div className="h-1 w-16 bg-yellow-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm">Why Ravindra College of Engineering for Women stands as a premier technical destination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourUSPs.map((usp, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 bg-yellow-50 text-yellow-800 rounded-xl flex items-center justify-center border border-yellow-200 font-bold">
                  <Star className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-lg leading-tight">{usp.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. HISTORICAL MILESTONES SECTION */}
        <section id="milestones" className="scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">Our Glorious Journey</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">RCEW Historical Milestones</h2>
            <div className="h-1 w-12 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold font-mono rounded-md border border-blue-200 mb-2">
                    {m.year}
                  </span>
                  <h4 className="font-serif font-bold text-slate-900 text-sm">{m.title}</h4>
                  <p className="text-slate-600 text-[11px] leading-relaxed mt-1">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

