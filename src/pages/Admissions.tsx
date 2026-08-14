import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ClipboardCheck, Sparkles, Phone, Send, HelpCircle, Check, Loader2,
  GraduationCap, Award, BookOpen, Layers, CheckCircle2, ShieldCheck, Users, Info
} from 'lucide-react';
import { ADMISSION_PROCESS, SCHOLARSHIPS, FAQS } from '../data';

// User-provided Fee Structure & Seat Matrix Data
const ADMISSION_FEE_STRUCTURE = [
  {
    sno: 1,
    course: 'Computer Science Engineering (CSE)',
    code: 'CSE',
    convenerSeats: 252,
    convenerFee: '43,000',
    catBSeats: 108,
    catBFee: '129,000',
    totalIntake: 360
  },
  {
    sno: 2,
    course: 'Electronics & Communication Engineering (ECE)',
    code: 'ECE',
    convenerSeats: 42,
    convenerFee: '43,000',
    catBSeats: 18,
    catBFee: '60,000',
    totalIntake: 60
  },
  {
    sno: 3,
    course: 'Computer Science Engineering (Artificial Intelligence - CAI)',
    code: 'CAI',
    convenerSeats: 126,
    convenerFee: '43,000',
    catBSeats: 54,
    catBFee: '129,000',
    totalIntake: 180
  }
];

export default function Admissions() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Computer Science Engineering (CSE)',
    percentage: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', course: 'Computer Science Engineering (CSE)', percentage: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50">
      
      {/* Balanced Elegant Banner */}
      <section className="relative py-16 sm:py-20 bg-slate-900 text-white overflow-hidden mb-12 sm:mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-amber-400/30">
            Admissions 2026-27 • EAMCET Code: RAVW
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Eligibility, Procedure & Fee Structure
          </h1>
          <div className="h-1 w-24 bg-amber-400 mx-auto mt-2 rounded-full" />
          <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Discover B.Tech program admission guidelines, seat allocation quotas, EAMCET/ECET eligibility criteria, and fee structures at Ravindra College of Engineering for Women.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. ELIGIBILITY & ADMISSION PROCEDURE SECTION */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
              Admission Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              Eligibility & Admission Procedure
            </h2>
            <p className="text-sm font-semibold text-slate-500 font-serif">State-wide Common Entrance Test (EAMCET) & Quota Seat Matrix</p>
          </div>

          {/* Entrance Overview Banner */}
          <div className="p-6 bg-white border-l-4 border-blue-600 rounded-2xl shadow-xs border-y border-r border-slate-200 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300">
                  Govt. of Andhra Pradesh EAMCET Scheme
                </span>
                <h3 className="font-serif font-bold text-lg text-slate-900 mt-0.5">
                  State-Level Centralized Admissions
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Admissions to the Institute are made along with the other Engineering colleges in the state through a common entrance test (EAMCET) conducted by the Govt. of Andhra Pradesh.
            </p>
          </div>

          {/* Minimum Eligibility Criteria Card */}
          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
            <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" /> Minimum Academic Qualification for B.Tech First Year
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              The eligibility criteria for admission to following courses of B. Tech are:
              The admission pattern to B. Tech is as follows: The minimum qualification for admission to first year of the B. Tech course is a pass in the Intermediate (10 + 2) conducted by the board of Intermediate education, Govt. of Andhra Pradesh or any other examination recognized as equivalent thereto with Mathematics, Physics and Chemistry as optional subjects.
            </p>
          </div>

          {/* Seat Allocation Breakdown (3 Quota Cards with Balanced Colors) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 70% Convener Seats */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between hover:border-blue-600 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 font-mono font-bold text-xs rounded-full border border-blue-200">
                    Category-A Seats
                  </span>
                  <span className="text-2xl font-serif font-bold text-blue-700">70%</span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-base">EAMCET Convener Quota</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  70 % of the seats are allotted based on the merit rank obtained in the state-wide EAMCET conducted by AP State Council of Higher Education (APSCHE).
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-mono font-semibold text-slate-500">
                State Counseling Allotment
              </div>
            </div>

            {/* 30% Management / NRI Seats */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between hover:border-amber-400 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-amber-50 text-amber-900 font-mono font-bold text-xs rounded-full border border-amber-300">
                    Category-B Seats
                  </span>
                  <span className="text-2xl font-serif font-bold text-amber-700">30%</span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-base">Management / NRI Quota</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  30 % of the seats are earmarked for Management/NRI candidates filled directly by institute management adhering to state merit guidelines.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-mono font-semibold text-slate-500">
                Direct Merit Application
              </div>
            </div>

            {/* 10% Lateral Entry (ECET) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between hover:border-emerald-500 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-900 font-mono font-bold text-xs rounded-full border border-emerald-300">
                    ECET Scheme
                  </span>
                  <span className="text-2xl font-serif font-bold text-emerald-700">10%</span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-base">Lateral Entry (Diploma Holders)</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  In addition to the above, Diploma holders are admitted in second year of B. Tech to the extent of 10% of intake based on the merit in the ECET, under lateral entry scheme.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] font-mono font-semibold text-slate-500">
                Direct 2nd Year B.Tech Entry
              </div>
            </div>

          </div>
        </section>

        {/* 2. FEE STRUCTURE TABLE - Pop Up Reveal */}
        <motion.section
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="border-b border-slate-200 pb-4 relative">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600">Government Regulated Fees</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 inline-block" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
              Fee Structure & Seat Matrix
            </h2>
            <p className="text-sm font-semibold text-slate-500 font-serif">Comprehensive seat breakdown and AP State regulated tuition fee details for B.Tech programs</p>
            <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-amber-500" />
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                <tr>
                  <th className="py-3.5 px-4 w-14 text-center text-amber-300">S.No</th>
                  <th className="py-3.5 px-4 text-white">COURSE</th>
                  <th className="py-3.5 px-4 text-center text-slate-100">CONVENER SEATS</th>
                  <th className="py-3.5 px-4 text-center text-amber-300">CONVENER FEE (Rs)</th>
                  <th className="py-3.5 px-4 text-center text-slate-100">CAT-B SEATS</th>
                  <th className="py-3.5 px-4 text-center text-amber-300">CAT B FEE (Rs)</th>
                  <th className="py-3.5 px-4 text-center text-white">TOTAL INTAKE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
                {ADMISSION_FEE_STRUCTURE.map((item) => (
                  <tr key={item.sno} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-mono font-bold text-center text-blue-800">{item.sno}</td>
                    <td className="py-4 px-4 font-bold text-slate-950">
                      <div>
                        <span>{item.course}</span>
                        <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-900 font-mono font-bold text-[10px] rounded border border-blue-200">
                          {item.code}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center font-mono font-bold text-slate-900 bg-slate-50/70">{item.convenerSeats}</td>
                    <td className="py-4 px-4 text-center font-mono font-bold text-slate-950">₹{item.convenerFee}</td>
                    <td className="py-4 px-4 text-center font-mono font-bold text-slate-900 bg-slate-50/70">{item.catBSeats}</td>
                    <td className="py-4 px-4 text-center font-mono font-bold text-slate-950">₹{item.catBFee}</td>
                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <span className="px-3 py-1 bg-blue-800 text-white font-mono font-bold text-xs rounded-full shadow-2xs border border-blue-900">
                        {item.totalIntake} Seats
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* 3. STEP-BY-STEP ADMISSION PROCESS - STAGGERED POP-UP MOTION */}
        <motion.section
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-widest font-mono bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
              Guidance Steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              4-Step Admission Journey
            </h2>
            <div className="h-1 w-12 bg-blue-600 mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {ADMISSION_PROCESS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl relative shadow-xs hover:border-blue-600 hover:shadow-xl transition-all space-y-3 cursor-pointer"
              >
                <span className="absolute top-4 right-4 text-3xl font-serif font-bold text-slate-200">{step.step}</span>
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-bold">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. ADMISSIONS COUNSELING HELPLINE */}
        <section className="bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-widest font-mono bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Immediate Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Admissions Counseling & Helpline Desk
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              Get detailed counseling guidance regarding Category-A AP EAPCET code <strong>RAVW</strong> or Category-B Management quota seats.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl space-y-4 shadow-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <h4 className="font-serif font-bold text-base text-amber-300 flex items-center gap-2">
                <Phone className="h-5 w-5" /> Direct Admission Helpline Desk
              </h4>
              <p><strong>Admissions Coordinator:</strong> Mrs. G. Spandana</p>
              <p><strong>Contact Helpline Phone:</strong> +91 8639756876 / +91 8639756663</p>
              <p><strong>College Office Landline:</strong> 08518-285088</p>
            </div>
            <a
              href="tel:+918639756876"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold text-xs uppercase rounded-xl shadow-md transition-all cursor-pointer shrink-0 font-mono tracking-wider hover:scale-105"
            >
              <Phone className="h-4 w-4" /> Call +91 8639756876
            </a>
          </div>
        </section>

        {/* 5. FAQS */}
        <section className="pb-12 space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-widest font-mono bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
              Admissions FAQs
            </h2>
            <div className="h-1 w-12 bg-blue-600 mx-auto mt-2 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 flex gap-2 items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 shrink-0" /> {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7 font-medium">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
