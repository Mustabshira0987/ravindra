import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, HeartHandshake, Sparkles, Star, Quote, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';

import PULLAIAH_IMG from '../assets/images/rcew_secretary_pullaiah_1785861024270.png';
import MOHAN_KUMAR_IMG from '../assets/images/rcew_chairman_mohankumar_1785861046702.png';

export default function Management() {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* PAGE HEADER BANNER */}
      <section className="relative py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden mb-12 border-b-2 border-amber-400/80 shadow-md">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">
            Ravindra Educational Institutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Our Management
          </h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full shadow-xs" />
          <p className="max-w-2xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed">
            Visionary leaders dedicated to educational excellence, moral values, and empowering women in technology.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mb-20">
        
        {/* 1. SRI G. PULLAIAH - SECRETARY - Pop Up Reveal */}
        <motion.section
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-2xs p-6 sm:p-10 lg:p-12 transition-all hover:shadow-md hover:border-amber-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Portrait & Key Badges */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-slate-100 bg-slate-100">
                <img
                  src={PULLAIAH_IMG}
                  alt="Sri G Pullaiah - Secretary, Ravindra Educational Institutions"
                  className="w-full h-auto sm:h-[460px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-center space-y-1">
                  <span className="inline-block text-[11px] bg-amber-400 text-amber-950 px-3 py-1 rounded-full font-bold uppercase tracking-wider font-mono shadow-xs border border-amber-300">
                    Best Teacher Awardee • Govt. of AP
                  </span>
                </div>
              </div>

              {/* Highlight Quote Box */}
              <div className="p-4 bg-amber-50/80 border border-amber-300/80 rounded-2xl space-y-1 text-center shadow-2xs">
                <Quote className="h-5 w-5 text-amber-600 mx-auto opacity-80" />
                <p className="font-serif font-bold text-amber-950 text-sm italic">
                  “Join to Learn and Leave to Serve”
                </p>
                <span className="text-[10px] text-amber-800 font-mono uppercase font-bold block">
                  Institutional Motto by Sri G. Pullaiah
                </span>
              </div>
            </div>

            {/* Right Column: Detailed Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-50 text-blue-900 border border-blue-200 uppercase tracking-wider mb-2">
                  <UserCheck className="h-3.5 w-3.5 text-amber-500" /> Secretary
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                  Sri G. Pullaiah
                </h2>
                <p className="text-blue-800 font-semibold text-sm sm:text-base mt-1">
                  Secretary, Ravindra Educational Institutions
                </p>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Sri G. Pullaiah started his career as a teacher in Zilla Parishad. In order to fulfill his dream of establishing an Institution with traditional values, he founded <strong>Ravindra Vidya Niketan</strong> on the same lines as that of Viswakavi Gurudev’s Shantiniketan. Ever since its inception the institution has been expanding and today it is indeed a huge organization.
                </p>
                <p>
                  He started <strong>Ravindra Junior College</strong> in the Year 1996 and the institute has created a history in producing many State rankers. Realizing the importance of women education, he also started <strong>Ravindra Degree College for Women</strong> in the Year 2001.
                </p>
                <p>
                  In order to impart Quality Education further, he started <strong>Ravindra Residential School and Junior College</strong> at Venkayapalli, within close proximity to Kurnool and far away from the chaotic turbulence of the city environment.
                </p>
                <p>
                  He envisioned the technical changes in the field of education and started <strong>G. Pullaiah College of Engineering & Technology</strong> in the Year 2007. In order to empower the women community in education, he also started <strong>Ravindra College of Engineering for Women</strong> in the year 2008.
                </p>
                <p>
                  He has also been conferred with the <strong>Best Teacher Award</strong> by the State Government of Andhra Pradesh for his various accomplishments. He is a strict disciplinarian who has imbibed the traits of dignity, decency, decorum, and punctuality.
                </p>
                <p>
                  He is simple, modest, and available to the student community round the clock. The motto of Institutions that he has established — <em>‘Join to Learn and Leave to Serve’</em> — is true, and he stands as an example to everyone in the field of education. His philanthropic attitude in the field of education has also lighted many poor lives.
                </p>
              </div>

              {/* Core Values Chips */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <span className="font-bold text-xs text-blue-950 block">Dignity</span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold">Core Value</span>
                </div>
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <span className="font-bold text-xs text-blue-950 block">Decency</span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold">Core Value</span>
                </div>
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <span className="font-bold text-xs text-blue-950 block">Decorum</span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold">Core Value</span>
                </div>
                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                  <span className="font-bold text-xs text-blue-950 block">Punctuality</span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold">Core Value</span>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 2. SRI G. V. M. MOHAN KUMAR - CHAIRMAN */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-2xs p-6 sm:p-10 lg:p-12 transition-all hover:shadow-md hover:border-amber-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Detailed Text Content */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-50 text-blue-900 border border-blue-200 uppercase tracking-wider mb-2">
                  <Award className="h-3.5 w-3.5 text-amber-500" /> Chairman
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                  Sri G. V. M. Mohan Kumar
                </h2>
                <p className="text-blue-800 font-semibold text-sm sm:text-base mt-1">
                  Chairman, Ravindra Educational Institutions
                </p>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  An Engineering graduate in Mechanical Engineering, <strong>Sri G. V. M. Mohan Kumar</strong> is a great visionary with the courage to take critical initiatives. With a passion for teaching, he has been teaching Mathematics for Intermediate students for over a decade.
                </p>
                <p>
                  Ever since the start of his career, he has been closely involved in guiding students to achieve State Ranks in Engineering and Medical Common Entrance Tests (EAMCET/CET).
                </p>
                <p>
                  In order to cherish the dreams of young students to become tomorrow’s technocrats and prepare a global workforce with moral and ethical values, he envisioned establishing a Technical Institution named <strong>G. Pullaiah College of Engineering and Technology</strong>. Since its inception, the institution has been the dream choice of engineering aspirants across this region.
                </p>
                <p>
                  Having a strong desire to empower women in the technological global society, he is the driving force behind starting <strong>Ravindra College of Engineering for Women</strong>.
                </p>
                <p>
                  His endeavor to maintain professional excellence and global standards in technical manpower by ensuring high-quality technical education to all is applaudable. His uncompromising attitude towards quality has played the key role in establishing state-of-the-art facilities across the campus.
                </p>
                <p>
                  He is innovative to the core and spends most of his time interacting directly with the student community.
                </p>
              </div>

              {/* Core Strengths Cards */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 text-center">
                  <span className="font-bold text-xs text-blue-950 block">B.Tech Mechanical Engg.</span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold">Academic Background</span>
                </div>
                <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 text-center">
                  <span className="font-bold text-xs text-blue-950 block">10+ Yrs Math Pedagogy</span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold">Teaching Excellence</span>
                </div>
                <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 text-center">
                  <span className="font-bold text-xs text-blue-950 block">State Rank Mentor</span>
                  <span className="text-[10px] text-amber-600 font-mono font-bold">CET Guidance</span>
                </div>
              </div>
            </div>

            {/* Right Column: Portrait & Key Badges */}
            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-slate-100 bg-slate-100">
                <img
                  src={MOHAN_KUMAR_IMG}
                  alt="Sri G V M Mohan Kumar - Chairman, Ravindra Educational Institutions"
                  className="w-full h-auto sm:h-[460px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-center space-y-1">
                  <span className="inline-block text-[11px] bg-blue-800 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider font-mono shadow-xs border border-blue-700">
                    Mechanical Engineer & Visionary Leader
                  </span>
                </div>
              </div>

              {/* Highlight Quote Box */}
              <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl space-y-1 text-center shadow-2xs">
                <Sparkles className="h-5 w-5 text-amber-500 mx-auto opacity-90" />
                <p className="font-serif font-bold text-blue-950 text-sm italic">
                  “Empowering women through global standards of technical education.”
                </p>
                <span className="text-[10px] text-blue-800 font-mono uppercase font-bold block">
                  Visionary Principle by Sri G. V. M. Mohan Kumar
                </span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
