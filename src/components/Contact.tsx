import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, HelpCircle, ChevronDown, ChevronUp, CheckCircle, Clock } from 'lucide-react';
import { COLLEGE_INFO, FAQS } from '../data';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormFields({
      ...formFields,
      [e.target.id]: e.target.value
    });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formFields.name.trim()) newErrors.name = 'Full name is required';
    if (!formFields.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formFields.message.trim()) newErrors.message = 'Please type a brief message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormFields({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 4500);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-primary-950/40 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-900 dark:text-white mt-1">
            Contact & General FAQs
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Reach out to our admissions counselor desk, submit a general inquiry, or review our detailed FAQ listings below to assist your pathway.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Contact Details (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-primary-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white">
                RCEW Campus Office Kurnool
              </h3>
              
              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-primary-50 dark:bg-primary-850 text-primary-700 dark:text-gold-400 rounded-xl shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400 font-mono">Our Location</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {COLLEGE_INFO.contact.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-primary-50 dark:bg-primary-850 text-primary-700 dark:text-gold-400 rounded-xl shrink-0 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400 font-mono">Call Us Directly</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-semibold">
                      {COLLEGE_INFO.contact.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-primary-50 dark:bg-primary-850 text-primary-700 dark:text-gold-400 rounded-xl shrink-0 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400 font-mono">Administrative Email</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-semibold text-primary-700 dark:text-gold-300">
                      {COLLEGE_INFO.contact.email}
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-primary-50 dark:bg-primary-850 text-primary-700 dark:text-gold-400 rounded-xl shrink-0 mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400 font-mono">Campus Office Hours</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      Monday – Saturday: <strong className="font-semibold text-slate-800 dark:text-white">9:00 AM – 4:30 PM</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md h-72">
              <iframe
                title="RCEW Location Map"
                src={COLLEGE_INFO.contact.mapIframeUrl}
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Inquiry Form (Right) */}
          <div className="lg:col-span-7 bg-white dark:bg-primary-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-primary-900 dark:text-white mb-2">
              Inquiry / Grievance Desk Form
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-6 uppercase">
              Expect feedback or reply within 24 operational hours
            </p>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center"
                  id="contact-form-success-banner"
                >
                  <div className="inline-flex items-center justify-center p-3.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-4">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-primary-900 dark:text-white">
                    Message Successfully Sent!
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed max-w-sm mx-auto">
                    Thank you. We have recorded your message and reference contact detail (<strong className="text-slate-700 dark:text-slate-200">{formFields.email}</strong>). Our administrative desk will verify your query and follow up.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5" id="general-contact-inquiry-form">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formFields.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Pinjari Ayesha"
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent outline-none focus:border-primary-500 dark:focus:border-gold-400 text-slate-800 dark:text-white"
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formFields.email}
                        onChange={handleInputChange}
                        placeholder="ayesha@example.com"
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent outline-none focus:border-primary-500 dark:focus:border-gold-400 text-slate-800 dark:text-white"
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="text"
                        id="phone"
                        value={formFields.phone}
                        onChange={handleInputChange}
                        placeholder="Ex: 9246922069"
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent outline-none focus:border-primary-500 dark:focus:border-gold-400 text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                      Subject Matter
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formFields.subject}
                      onChange={handleInputChange}
                      placeholder="Ex: B.Tech Direct Admission Inquiry"
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent outline-none focus:border-primary-500 dark:focus:border-gold-400 text-slate-800 dark:text-white"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                      Your Query / Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formFields.message}
                      onChange={handleInputChange}
                      placeholder="Type details of your request here..."
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent outline-none focus:border-primary-500 dark:focus:border-gold-400 text-slate-800 dark:text-white"
                    />
                    {errors.message && <p className="text-[10px] text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary-700 hover:bg-primary-600 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-primary-950 font-bold uppercase text-xs tracking-wider rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Expandable FAQs Accordion */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-primary-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-sm" id="accordion-faqs-container">
          <div className="flex items-center gap-2.5 mb-8">
            <HelpCircle className="h-6 w-6 text-primary-700 dark:text-gold-400" />
            <h3 className="text-lg sm:text-xl font-serif font-bold text-primary-900 dark:text-white">
              Common Administrative & Placement FAQs
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4.5 text-left bg-slate-50/50 dark:bg-primary-950/20 hover:bg-slate-50 dark:hover:bg-primary-950/40 transition-colors"
                  >
                    <span className="text-slate-800 dark:text-white font-serif font-bold text-xs sm:text-sm">
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp className="h-4 w-4 text-gold-500" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-white dark:bg-primary-900"
                      >
                        <div className="p-5 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
