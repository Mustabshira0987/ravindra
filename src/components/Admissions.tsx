import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ClipboardList, BookOpen, GraduationCap, DollarSign, Award, ArrowRight, User, Phone, Mail, Award as RankIcon, CheckCircle } from 'lucide-react';
import { COURSE_OFFERINGS, ADMISSION_PROCESS, SCHOLARSHIPS } from '../data';

export default function Admissions() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    phone: '',
    email: '',
    course: 'B.Tech - Computer Science & Engineering',
    rank: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Guardian name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success response trigger
    setFormSuccess(true);
    setTimeout(() => {
      // Clean states
      setFormData({
        name: '',
        parentName: '',
        phone: '',
        email: '',
        course: 'B.Tech - Computer Science & Engineering',
        rank: ''
      });
      setFormSuccess(false);
      setApplyModalOpen(false);
    }, 4500);
  };

  return (
    <section id="admissions" className="py-24 bg-white dark:bg-primary-950 relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Secure Your Seat
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white mt-1">
            Admissions & Eligibility
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Begin your engineering journey at Kurnool's prestigious institute. Discover our academic streams, intake statistics, and state scholarships support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Academic Intake Table & Scholarships */}
          <div className="lg:col-span-7 space-y-12">
            {/* Courses and Seats offered table */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-primary-900/20 border border-slate-100 dark:border-slate-800/60 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary-700 dark:text-gold-400" />
                Undergraduate & Postgraduate Seats Intake
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <th className="pb-3 font-mono">Course & Branch</th>
                      <th className="pb-3 font-mono text-center">Duration</th>
                      <th className="pb-3 font-mono text-center">Seats</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {COURSE_OFFERINGS.map((course, idx) => (
                      <tr key={idx} className="hover:bg-slate-100/30 dark:hover:bg-primary-800/10">
                        <td className="py-3.5 pr-4">
                          <span className="font-bold text-primary-900 dark:text-white block">{course.branch}</span>
                          <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Degree: {course.degree}</span>
                        </td>
                        <td className="py-3.5 text-center font-mono text-xs">{course.duration}</td>
                        <td className="py-3.5 text-center font-mono font-bold text-primary-700 dark:text-gold-300">{course.seats}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Scholarships Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-primary-900/20 border border-slate-100 dark:border-slate-800/60 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-700 dark:text-gold-400" />
                Financial Aid & Scholarship Schemes
              </h3>

              <div className="space-y-4">
                {SCHOLARSHIPS.map((scheme, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white dark:bg-primary-950/40 border border-slate-100/60 dark:border-slate-800/60">
                    <div className="p-2 bg-gold-100 dark:bg-primary-900 text-gold-700 dark:text-gold-400 rounded-xl h-fit shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-bold text-primary-900 dark:text-white text-sm">{scheme.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {scheme.eligibility}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Admission Process timeline & Fees */}
          <div className="lg:col-span-5 space-y-8">
            {/* Timeline */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-primary-900/20 border border-slate-100 dark:border-slate-800/60 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white mb-8 flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary-700 dark:text-gold-400" />
                Counseling Process & Timeline
              </h3>

              <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 ml-3 space-y-8">
                {ADMISSION_PROCESS.map((proc, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[38px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary-700 text-gold-300 font-mono text-xs font-bold ring-4 ring-white dark:ring-primary-950 shadow">
                      {proc.step}
                    </span>
                    <h4 className="font-bold text-primary-900 dark:text-white text-sm">
                      {proc.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fee structure brief & Apply CTA */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-900 to-primary-950 text-white border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-gold-400 text-primary-950 mb-4">
                  <DollarSign className="h-3 w-3" />
                  Government regulated Tuition fee
                </div>
                
                <h3 className="text-xl font-serif font-bold text-white leading-snug">
                  Affordable Structure & Installments Options
                </h3>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Tuition fees are strictly as fixed by the Andhra Pradesh Higher Education Regulatory and Monitoring Commission (AFRMC). Full fee concessions apply automatically to eligible counseling allotments.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <button
                    onClick={() => setApplyModalOpen(true)}
                    className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold uppercase text-xs tracking-wider rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    id="apply-for-admission-btn"
                  >
                    Apply For Direct Admission
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-slate-400 font-mono text-center">
                    No middle agencies • Direct college registration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-Up Direct Admission Form Modal */}
      <AnimatePresence>
        {applyModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setApplyModalOpen(false)}
              className="fixed inset-0 bg-primary-950/80 z-50 backdrop-blur-sm"
              id="admission-modal-backdrop"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-4 bottom-4 md:inset-y-20 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-md bg-white dark:bg-primary-900 rounded-3xl shadow-2xl z-50 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between"
              id="admission-modal"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white">
                      Admission Inquiry 2026-27
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono">
                      Ravindra Engineering College for Women • REC
                    </p>
                  </div>
                  <button
                    onClick={() => setApplyModalOpen(false)}
                    className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-primary-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    ×
                  </button>
                </div>

                {formSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                    id="admission-success-alert"
                  >
                    <div className="inline-flex items-center justify-center p-3.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-4">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-primary-900 dark:text-white">
                      Inquiry Successfully Filed!
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed max-w-xs mx-auto">
                      Thank you for choosing RCEW Kurnool. Our academic counseling panel will call you shortly on your provided contact number <strong className="text-slate-700 dark:text-slate-200">{formData.phone}</strong> to outline document processing and seat block details.
                    </p>
                    <div className="mt-6 font-mono text-[9px] text-slate-400 animate-pulse">
                      Processing credentials registry database...
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-4" id="admission-application-form">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        Student Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Pinjari Ayesha"
                          className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-primary-500 dark:focus:border-gold-400 bg-transparent text-slate-800 dark:text-white"
                          id="form-student-name"
                        />
                      </div>
                      {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Parent Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        Parent / Guardian Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          placeholder="Ex: Pinjari Mastan"
                          className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-primary-500 dark:focus:border-gold-400 bg-transparent text-slate-800 dark:text-white"
                          id="form-parent-name"
                        />
                      </div>
                      {errors.parentName && <p className="text-[10px] text-red-500 mt-1">{errors.parentName}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        Contact Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Ex: 9246922069"
                          className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-primary-500 dark:focus:border-gold-400 bg-transparent text-slate-800 dark:text-white"
                          id="form-phone"
                        />
                      </div>
                      {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: student@example.com"
                          className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-primary-500 dark:focus:border-gold-400 bg-transparent text-slate-800 dark:text-white"
                          id="form-email"
                        />
                      </div>
                      {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        Preferred Course Stream
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-primary-500 dark:focus:border-gold-400 bg-white dark:bg-primary-900 text-slate-800 dark:text-white"
                        id="form-course-selection"
                      >
                        <option>B.Tech - Computer Science & Engineering</option>
                        <option>B.Tech - Artificial Intelligence & Data Science</option>
                        <option>B.Tech - Electronics & Communication Engineering</option>
                        <option>B.Tech - Electrical & Electronics Engineering</option>
                        <option>B.Tech - Civil Engineering</option>
                        <option>B.Tech - Mechanical Engineering</option>
                        <option>Postgraduate MBA</option>
                      </select>
                    </div>

                    {/* EAPCET Rank */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        AP EAPCET / ICET Rank (If written)
                      </label>
                      <div className="relative">
                        <RankIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="rank"
                          value={formData.rank}
                          onChange={handleInputChange}
                          placeholder="Ex: 24352"
                          className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 outline-none focus:border-primary-500 dark:focus:border-gold-400 bg-transparent text-slate-800 dark:text-white"
                          id="form-rank"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-6 py-4 bg-primary-700 hover:bg-primary-600 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-primary-950 font-bold uppercase text-xs tracking-wider rounded-xl shadow-lg transition-colors"
                      id="form-submit-btn"
                    >
                      Submit Registration Request
                    </button>
                  </form>
                )}
              </div>

              <p className="text-[9px] text-slate-400 font-mono text-center mt-6">
                Direct College Registrar Helpline: +91 92469 22069
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
