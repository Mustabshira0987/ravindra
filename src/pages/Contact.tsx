import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Check, Loader2, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
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
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Contact College Offices
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out to our campus offices for admissions, credentials verification, hostels lodging, and job alignments.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Contact Info cards & Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel - Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono block">Contact Directory</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white">Reach Our Offices</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">Our help desks remain open from 9:00 AM to 5:00 PM on all academic calendar working days.</p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white dark:bg-primary-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
                <div className="w-10 h-10 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-primary-950 dark:text-white leading-tight">Campus Address</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{COLLEGE_INFO.contact.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white dark:bg-primary-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-gold-400 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-primary-950 dark:text-white leading-tight">Admissions Helpline</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{COLLEGE_INFO.contact.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white dark:bg-primary-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
                <div className="w-10 h-10 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-primary-950 dark:text-white leading-tight">Official Email</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{COLLEGE_INFO.contact.email}</p>
                </div>
              </div>
            </div>

            {/* Social Communities */}
            <div className="p-6 bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-3xl">
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-4 text-center">Social Communities</span>
              <div className="flex justify-center gap-6">
                <a href={COLLEGE_INFO.contact.socials.facebook} className="p-3 bg-slate-50 hover:bg-slate-100 dark:bg-primary-950 dark:hover:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-xl text-primary-700 dark:text-gold-300 transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={COLLEGE_INFO.contact.socials.twitter} className="p-3 bg-slate-50 hover:bg-slate-100 dark:bg-primary-950 dark:hover:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-xl text-primary-700 dark:text-gold-300 transition-all">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={COLLEGE_INFO.contact.socials.linkedin} className="p-3 bg-slate-50 hover:bg-slate-100 dark:bg-primary-950 dark:hover:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-xl text-primary-700 dark:text-gold-300 transition-all">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={COLLEGE_INFO.contact.socials.instagram} className="p-3 bg-slate-50 hover:bg-slate-100 dark:bg-primary-950 dark:hover:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-xl text-primary-700 dark:text-gold-300 transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={COLLEGE_INFO.contact.socials.youtube} className="p-3 bg-slate-50 hover:bg-slate-100 dark:bg-primary-950 dark:hover:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-xl text-primary-700 dark:text-gold-300 transition-all">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right panel - Form */}
          <div className="lg:col-span-7 bg-white dark:bg-primary-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-lg text-primary-950 dark:text-white pb-4 border-b border-slate-100 dark:border-slate-800">Send Inquiry Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-primary-950/40 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-primary-950/40 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block mb-1">Contact No</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-primary-950/40 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block mb-1">Inquiry Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-primary-950/40 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block mb-1">Detailed Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-primary-950/40 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-gold-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-700 hover:bg-primary-800 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 font-bold uppercase text-xs transition-all cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4.5 w-4.5 animate-spin" /> Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Inquiry
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

        {/* Google Maps Iframe */}
        <section className="pb-12">
          <div className="bg-white dark:bg-primary-900 border border-slate-150 dark:border-slate-800 rounded-[30px] p-2 overflow-hidden shadow-sm h-[400px]">
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
