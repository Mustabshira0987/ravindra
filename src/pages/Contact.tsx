import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  MapPin, Phone, Mail, Send, Check, Loader2, Facebook, Twitter, Linkedin,
  Instagram, Youtube, GraduationCap, Briefcase, Building2, UserCheck, MessageSquare
} from 'lucide-react';
import { COLLEGE_INFO } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-50">
      
      {/* Balanced Elegant Banner */}
      <section className="relative py-16 sm:py-20 bg-slate-900 text-white overflow-hidden mb-12 sm:mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-amber-400/30">
            Contact Details
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            We’d Love To Meet You In Person Or Via The Web!
          </h1>
          <div className="h-1 w-24 bg-amber-400 mx-auto mt-2 rounded-full" />
          <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Connect directly with Ravindra College of Engineering for Women for Admissions, Training & Placements, and Official Administration Inquiry.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Contact Info Directory Grid (Clean white cards with blue highlights) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Address Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-blue-600 hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center font-bold border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug">
                Campus Postal Address
              </h3>
              <div className="text-xs text-slate-600 leading-relaxed font-medium space-y-1 pt-1">
                <p className="font-bold text-blue-700">RAVINDRA COLLEGE OF ENGINEERING FOR WOMEN (Autonomous)</p>
                <p>Near Venkayapalle,</p>
                <p>Pasupula Village, Nandikotkur Road,</p>
                <p className="font-semibold text-slate-800">Kurnool – 518452, Andhra Pradesh – India.</p>
              </div>
            </div>
          </div>

          {/* 2. For Admissions Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-blue-600 hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center font-bold border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  UG & PG Admissions Desk
                </span>
                <h3 className="font-serif font-bold text-lg text-slate-900 mt-1">
                  For Admissions
                </h3>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <p className="text-xs text-slate-500 font-medium">Please contact:</p>
                <p className="font-serif font-bold text-sm text-slate-900">Mrs. G. Spandana</p>
                <a
                  href="tel:+918639756876"
                  className="inline-flex items-center gap-1.5 font-mono font-bold text-xs text-blue-700 hover:text-blue-800 bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-2xs w-full justify-center transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-blue-600" /> +91 8639756876
                </a>
              </div>
            </div>
          </div>

          {/* 3. For Placements Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-blue-600 hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center font-bold border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Career & Recruitment Cell
                </span>
                <h3 className="font-serif font-bold text-lg text-slate-900 mt-1">
                  For Placements
                </h3>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <p className="text-xs text-slate-500 font-medium">Please Contact:</p>
                <p className="font-serif font-bold text-sm text-slate-900">Mrs. Indira Priyadarshini</p>
                <div className="space-y-1.5 pt-1">
                  <a
                    href="tel:+919948187766"
                    className="inline-flex items-center gap-1.5 font-mono font-bold text-xs text-blue-700 hover:text-blue-800 bg-white px-3 py-1 rounded-lg border border-blue-200 shadow-2xs w-full justify-center transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-blue-600" /> Mobile: +91 9948187766
                  </a>
                  <a
                    href="tel:08518285088"
                    className="inline-flex items-center gap-1.5 font-mono font-semibold text-xs text-slate-700 bg-white px-3 py-1 rounded-lg border border-slate-200 w-full justify-center"
                  >
                    Landline: 08518-285088
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Official Email Desks */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-blue-600 hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center font-bold border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug">
                Official Email Desk
              </h3>
              <div className="space-y-2 pt-1 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Principal Office:</span>
                  <a href="mailto:principal@recw.ac.in" className="font-mono font-bold text-blue-700 hover:underline block break-all">
                    principal@recw.ac.in
                  </a>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Placement Officer:</span>
                  <a href="mailto:placementofficer@recw.ac.in" className="font-mono font-bold text-blue-700 hover:underline block break-all">
                    placementofficer@recw.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Send Inquiry Form & Quick Contact Panel */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Summary Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-md space-y-4 border border-slate-800">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase rounded-full border border-amber-400/30">
                Help Desk Availability
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                RCEW Campus Administrative Office
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Our help desks remain open from 9:00 AM to 5:00 PM on all academic working days. Feel free to visit our campus in Kurnool or send an online message using the inquiry form.
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-3">
                  <UserCheck className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Admissions Coordinator: Mrs. G. Spandana (+91 8639756876)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Placement Cell Officer: Mrs. Indira Priyadarshini (+91 9948187766)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Campus Office Landline: 08518-285088</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-serif font-bold text-xl text-slate-900 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" /> Send Inquiry Message
              </h3>
              <span className="text-[10px] font-mono font-bold uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                Direct Desk Response
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-slate-600 font-semibold font-mono block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-600 font-semibold font-mono block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-slate-600 font-semibold font-mono block mb-1">Contact Phone No *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Mobile number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-600 font-semibold font-mono block mb-1">Inquiry Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Admission Inquiry / Placement Drive"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-slate-600 font-semibold font-mono block mb-1">Detailed Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your query or message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase text-xs transition-all cursor-pointer shadow-xs disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4.5 w-4.5 animate-spin" /> Submitting Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Submit Inquiry
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
                  className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-medium text-center flex items-center justify-center gap-2"
                >
                  <Check className="h-4 w-4 text-emerald-600" /> Thank you! Your message has been sent to RCEW Administrative Desk.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </section>

        {/* Google Maps Location Section */}
        <section className="pb-12 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                Campus Geography
              </span>
              <h3 className="font-serif font-bold text-xl text-slate-900 mt-1">
                Campus Location & Navigation Map
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Ravindra+Engineering+College+for+Women+Kurnool"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-[30px] p-2 overflow-hidden shadow-xs h-[400px]">
            <iframe
              src={COLLEGE_INFO.contact.mapIframeUrl}
              className="w-full h-full rounded-[22px] border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ravindra Engineering College for Women Location Map"
            />
          </div>
        </section>

      </div>
    </div>
  );
}
