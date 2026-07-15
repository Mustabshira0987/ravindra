import React from 'react';
import { Award, FileText, Download, CheckCircle } from 'lucide-react';

const IQAC_COMMITTEE = [
  { name: "Dr. K. E. Sreenivasa Murthy", role: "Chairperson", designation: "Principal, RCEW" },
  { name: "Dr. G. Ramesh", role: "Coordinator", designation: "Professor, CSE Dept" },
  { name: "Dr. J. Prasanna Kumar", role: "Member", designation: "Professor, ECE Dept" },
  { name: "Dr. T. Kavitha", role: "Member", designation: "Professor, AI&DS Dept" },
  { name: "Sri G. Pullaiah", role: "Management Representative", designation: "Chairman, RCEW" },
  { name: "Mrs. K. Radhika Sree", designation: "Associate Professor, CSE Dept", role: "Member" }
];

const NAAC_DOCUMENTS = [
  { title: "Self Study Report (SSR) - Cycle I", size: "14.2 MB", date: "Jan 15, 2025" },
  { title: "Annual Quality Assurance Report (AQAR) 2024-25", size: "4.5 MB", date: "June 20, 2025" },
  { title: "Annual Quality Assurance Report (AQAR) 2023-24", size: "3.8 MB", date: "June 18, 2024" },
  { title: "NAAC Accreditation Certificate & Peer Team Report", size: "5.1 MB", date: "Feb 10, 2025" }
];

export default function IQAC() {
  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            Internal Quality Assurance Cell
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            IQAC & NAAC Documents
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Sustaining academic rigor, quality enhancement, and administrative audits under national quality models.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. About IQAC */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono block">
              Continuous Improvement
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white">
              About IQAC Cell
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              The Internal Quality Assurance Cell (IQAC) of Ravindra Engineering College for Women was established to design, implement, and monitor continuous quality improvement pathways. It serves as an institutional compass reviewing academic structures, laboratory resources, student feedbacks, and career placement systems.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                <span>Designing feedback mechanisms to gather continuous input from students, parents, and recruiters.</span>
              </div>
              <div className="flex gap-3 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                <span>Organizing inter-departmental academic audits, seminar series, and technical workshops.</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="bg-primary-950 text-white p-8 rounded-3xl border border-white/10 shadow-xl space-y-4 text-center">
              <Award className="h-12 w-12 text-gold-400 mx-auto mb-2" />
              <h3 className="font-serif font-bold text-lg">AQAR Reporting</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                IQAC compiles and submits AQAR (Annual Quality Assurance Reports) regularly to NAAC, validating RCEW's continuous alignment with top institutional standards in India.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Committee Details */}
        <section className="bg-white dark:bg-primary-900/35 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Governing Body</span>
            <h3 className="text-2xl font-serif font-bold text-primary-900 dark:text-white">IQAC Committee Members</h3>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {IQAC_COMMITTEE.map((member, index) => (
              <div key={index} className="p-5 bg-slate-50 dark:bg-primary-950/40 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-mono bg-gold-100 text-gold-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{member.role}</span>
                <h4 className="font-serif font-bold text-primary-950 dark:text-white text-sm sm:text-base mt-3">{member.name}</h4>
                <p className="text-xs text-slate-400 font-mono mt-1">{member.designation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. NAAC Documents Download List */}
        <section className="pb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">Transparency Disclosure</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-900 dark:text-white mt-1">NAAC Public Documents</h2>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {NAAC_DOCUMENTS.map((doc, idx) => (
              <div key={idx} className="bg-white dark:bg-primary-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-gold-100 dark:bg-primary-950 text-gold-600 dark:text-gold-400 rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-primary-950 dark:text-white leading-tight">{doc.title}</h4>
                    <span className="text-[10px] text-slate-400 font-mono">Published: {doc.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-slate-400 font-mono font-bold uppercase shrink-0">{doc.size}</span>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-700 hover:bg-primary-800 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 text-xs font-bold uppercase transition-all shadow-sm shrink-0">
                    <Download className="h-3.5 w-3.5" /> Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
