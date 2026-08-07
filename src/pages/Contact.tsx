import React from 'react';
import {
  MapPin, Phone, Mail, GraduationCap, Briefcase, Building2, UserCheck
} from 'lucide-react';
import { COLLEGE_INFO } from '../data';

export default function Contact() {
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
        
        {/* Contact Info Directory Grid */}
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

        {/* Administrative Help Desk Summary Banner */}
        <section>
          <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-md space-y-4 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold uppercase rounded-full border border-amber-400/30">
                  Help Desk Availability
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-2">
                  RCEW Campus Administrative Office
                </h2>
              </div>
              <span className="text-xs font-mono font-bold bg-amber-400 text-slate-950 px-3 py-1 rounded-full w-fit">
                Mon - Sat: 9:00 AM - 5:00 PM
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Our administrative help desks remain open on all academic working days. Feel free to visit our campus in Kurnool or reach out to our designated coordinators.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-3 bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60">
                <UserCheck className="h-5 w-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block font-bold">Admissions Coordinator</span>
                  <span className="font-semibold text-white">Mrs. G. Spandana (+91 8639756876)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60">
                <Briefcase className="h-5 w-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block font-bold">Placement Cell Officer</span>
                  <span className="font-semibold text-white">Mrs. Indira Priyadarshini (+91 9948187766)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60">
                <Building2 className="h-5 w-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block font-bold">Campus Landline</span>
                  <span className="font-semibold text-white">08518-285088</span>
                </div>
              </div>
            </div>
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
