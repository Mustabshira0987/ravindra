import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ClipboardCheck, Sparkles, Phone, Send, HelpCircle, Check, Loader2 } from 'lucide-react';
import { ADMISSION_PROCESS, SCHOLARSHIPS, FAQS, COURSE_OFFERINGS } from '../data';

export default function Admissions() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'B.Tech - Computer Science',
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
      setForm({ name: '', email: '', phone: '', course: 'B.Tech - Computer Science', percentage: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Admissions Open 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Secure Your Academic Pathway
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose Ravindra Engineering College for Women (Counseling Code: REC) to excel under premier technology mentors.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. Admission Process Steps */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Step-by-Step</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">Admission Process</h2>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {ADMISSION_PROCESS.map((step) => (
              <div key={step.step} className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
                <span className="absolute top-4 right-4 text-4xl font-serif font-bold text-gold-500/20">{step.step}</span>
                <ClipboardCheck className="h-6 w-6 text-gold-500 mb-4" />
                <h4 className="font-serif font-bold text-sm sm:text-base text-primary-950 dark:text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Eligibility & Offerings */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono block">
              Course Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white">
              Course Offerings & Eligibility
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Below are the details of the programs offered by RCEW for the academic year 2026-27 under JNTUA affiliation.
            </p>
            <div className="space-y-4">
              {COURSE_OFFERINGS.slice(0, 3).map((course, idx) => (
                <div key={idx} className="bg-white dark:bg-primary-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-serif font-bold text-sm sm:text-base text-primary-950 dark:text-white">{course.degree} in {course.branch}</span>
                    <span className="text-[10px] font-mono bg-gold-100 text-gold-800 px-2 py-0.5 rounded-full">{course.seats} Seats</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed"><strong>Eligibility:</strong> {course.eligibility}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 bg-primary-950 text-white p-8 rounded-3xl border border-white/5 shadow-xl space-y-6">
            <h3 className="font-serif font-bold text-lg text-gold-400">Apply Online Now</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Fill in your academic and contact details. Our admissions counseling department will get in touch with you immediately to finalize details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Student Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Official Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500"
                />
                <input
                  type="tel"
                  placeholder="Helpline Contact No"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500"
                />
              </div>
              <select
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full bg-primary-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-gold-500"
              >
                <option>B.Tech - Computer Science & Engineering</option>
                <option>B.Tech - Artificial Intelligence & Data Science</option>
                <option>B.Tech - Electronics & Communication Engineering</option>
                <option>Master of Business Administration (MBA)</option>
              </select>
              <input
                type="text"
                placeholder="Intermediate / degree Percentage"
                required
                value={form.percentage}
                onChange={(e) => setForm({ ...form, percentage: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500"
              />
              <textarea
                placeholder="Inquiry Question or Message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500 resize-none"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold uppercase text-xs transition-all cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4.5 w-4.5 animate-spin" /> Processing Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Submit Application
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs rounded-xl text-center flex items-center justify-center gap-2"
                >
                  <Check className="h-4 w-4" /> Thank you! Your inquiry was successfully registered.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 3. Fee Structure */}
        <section className="bg-white dark:bg-primary-900/35 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-gold-500 font-mono text-xs font-bold uppercase tracking-widest block">Finances & Budgets</span>
              <h2 className="text-2xl font-serif font-bold text-primary-900 dark:text-white">Fee Structure 2026-27</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                RCEW maintains complete transparency concerning college fees. We comply strictly with fee structures designated by the Andhra Pradesh Higher Education Regulatory Committee (APHERC).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-950/40 border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-xs text-primary-950 dark:text-white block">B.Tech Tuition Fee</span>
                  <span className="text-gold-600 dark:text-gold-400 text-sm font-bold block">₹43,500 / Year</span>
                  <span className="text-[10px] text-slate-400 font-mono block">(AP State government regulated)</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-primary-950/40 border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-xs text-primary-950 dark:text-white block">In-Campus Girls Hostel Fee</span>
                  <span className="text-gold-600 dark:text-gold-400 text-sm font-bold block">₹65,000 / Year</span>
                  <span className="text-[10px] text-slate-400 font-mono block">(Includes boarding & all amenities)</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl">
              <h4 className="font-bold text-xs text-primary-950 dark:text-white text-center">Inquire Admissions Hotline</h4>
              <p className="text-center text-[11px] text-slate-400">Connect to our counseling team immediately for seat booking, quota applications, and custom billing details.</p>
              <a href="tel:+919246922069" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-700 hover:bg-primary-800 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 text-xs font-bold uppercase transition-all shadow-sm">
                <Phone className="h-4 w-4" /> +91 92469 22069
              </a>
            </div>
          </div>
        </section>

        {/* 4. Scholarships */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Financial Assistance</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">Scholarships & Waivers</h2>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SCHOLARSHIPS.map((scholarship, idx) => (
              <div key={idx} className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-xl flex items-center justify-center shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-primary-950 dark:text-white mb-2">{scholarship.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed">{scholarship.eligibility}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FAQs */}
        <section className="pb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Frequently Asked Questions</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">Admissions Queries FAQs</h2>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-primary-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <h4 className="font-serif font-bold text-sm sm:text-base text-primary-950 dark:text-white flex gap-2 items-center mb-2">
                  <HelpCircle className="h-5 w-5 text-gold-500 shrink-0" /> {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
