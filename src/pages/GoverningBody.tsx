import React from 'react';
import { Users, ShieldCheck, CheckCircle2, Building2, Award, FileText, Check, Layers, Briefcase, GraduationCap } from 'lucide-react';

const GOVERNING_BODY_FUNCTIONS = [
  'To provide necessary guidance and support to refine the academic standards year after year.',
  'To approve new programmes of study.',
  'To recruit teaching faculty in accordance with the norms laid down by the apex educational bodies and the government.',
  'To approve the annual budget of the college.',
  'To institute awards, fellowships, scholarships and certificates for the students.',
  'To perform any other functions and constitute committees as maybe deemed necessary in the best interest of the college.'
];

const GOVERNING_BODY_MEMBERS = [
  {
    sno: 1,
    name: 'Sri. G. V. M. Mohan Kumar',
    portfolio: 'Management',
    designation: 'Chairman'
  },
  {
    sno: 2,
    name: 'Sri. G. Pullaiah',
    portfolio: 'Management',
    designation: 'Secretary & Correspondent'
  },
  {
    sno: 3,
    name: 'Sri. G. Gopinath',
    portfolio: 'Management',
    designation: 'Joint Secretary & Treasurer'
  },
  {
    sno: 4,
    name: 'Sri. G. Vamsidhar',
    portfolio: 'Management',
    designation: 'Vice-Chairman'
  },
  {
    sno: 5,
    name: 'Prof K B Chandra sekhar',
    portfolio: 'JNTUA Nominee',
    designation: 'Prof in CHEM Dept. JNTUA, Anantapuramu'
  },
  {
    sno: 6,
    name: 'Dr. E S Chakravathi',
    portfolio: 'Industry Expert',
    designation: 'Global Head, TCS'
  },
  {
    sno: 7,
    name: 'Dr. U Chandrasekar',
    portfolio: 'Industry Expert',
    designation: 'Project Director, Wipro 3D'
  },
  {
    sno: 8,
    name: 'Dr. B Jayarami Reddy',
    portfolio: 'Member',
    designation: 'Director, RGUKT, IIT, Ongole Campus'
  },
  {
    sno: 9,
    name: 'Sri. H Babu Venkatesh Prasad',
    portfolio: 'Member',
    designation: 'Civil Engineering, Kurnool'
  },
  {
    sno: 10,
    name: 'Dr. J Mamatha',
    portfolio: 'Member',
    designation: 'Special Invitee'
  },
  {
    sno: 11,
    name: 'Sri. MDV Jogaiah Sharma',
    portfolio: 'Member',
    designation: 'Advocate'
  },
  {
    sno: 12,
    name: 'Dr. J Ushasree',
    portfolio: 'Member',
    designation: 'Vice Principal'
  },
  {
    sno: 13,
    name: 'Dr. N. Sreekanth',
    portfolio: 'Member Secretary',
    designation: 'Principal'
  }
];

export default function GoverningBody() {
  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden mb-12 rounded-b-[40px] shadow-lg border-b-2 border-amber-400/80">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="px-3.5 py-1 bg-white/10 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-amber-400/30">
            Apex Institutional Authority
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Governing Body
          </h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full shadow-xs" />
          <p className="max-w-3xl mx-auto text-blue-100 text-sm sm:text-base leading-relaxed font-medium">
            The Governing Body is the apex authority formulating policy directives, academic goals, budget approvals, and governance for RCEW.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
        
        {/* 1. GOVERNING BODY OVERVIEW & FUNCTIONS */}
        <section className="space-y-6">
          
          {/* Overview Card */}
          <div className="p-6 sm:p-8 bg-white border-l-4 border-blue-800 rounded-3xl shadow-2xs border-y border-r border-slate-200 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 text-blue-800 rounded-xl border border-blue-200">
                <ShieldCheck className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  Bi-Annual Governance Meetings
                </span>
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-slate-950 mt-0.5">
                  Apex Decision-Making Authority
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              The Governing Body is the apex authority in making all major decisions in the college. It chiefly formulates policies for the college and guides the college in reaching its academic goals. The Governing Body convenes meetings twice a year to discuss various matters pertaining to the betterment of college.
            </p>
          </div>

          {/* Functions & Responsibilities Grid */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-mono font-bold uppercase text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                Core Governance Charter
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-950 mt-1">
                Functions & Responsibilities
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GOVERNING_BODY_FUNCTIONS.map((func, idx) => (
                <div key={idx} className="p-5 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between hover:border-amber-400 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-blue-800 text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-2xs">
                      {idx + 1}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {func}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* 2. GOVERNING BODY MEMBERS TABLE */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                Official Roster
              </span>
              <h2 className="text-2xl font-serif font-bold text-slate-950 mt-1">
                Governing Body Members
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-amber-950 bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-300">
              13 Apex Members
            </span>
          </div>

          {/* Members Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-2xs bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                <tr>
                  <th className="py-3.5 px-4 w-16 text-center text-amber-300">S.No</th>
                  <th className="py-3.5 px-4 text-white">Name</th>
                  <th className="py-3.5 px-4 text-center text-amber-300">Portfolio</th>
                  <th className="py-3.5 px-4 text-slate-100">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
                {GOVERNING_BODY_MEMBERS.map((member) => {
                  let badgeStyle = "bg-slate-100 text-slate-800 border-slate-200";
                  if (member.portfolio.includes('Management')) badgeStyle = "bg-amber-100 text-amber-950 border border-amber-300 font-bold";
                  else if (member.portfolio.includes('Member Secretary')) badgeStyle = "bg-blue-800 text-white border border-blue-900 font-bold shadow-2xs";
                  else if (member.portfolio.includes('Nominee')) badgeStyle = "bg-blue-100 text-blue-950 border border-blue-200 font-bold";
                  else if (member.portfolio.includes('Industry Expert')) badgeStyle = "bg-amber-50 text-amber-900 border border-amber-200/80 font-bold";
                  else if (member.portfolio.includes('Member')) badgeStyle = "bg-slate-100 text-slate-900 border border-slate-200 font-medium";

                  return (
                    <tr key={member.sno} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-4 px-4 font-mono font-bold text-center text-blue-800">{member.sno}</td>
                      <td className="py-4 px-4 font-bold text-slate-950 whitespace-nowrap">{member.name}</td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-mono inline-block ${badgeStyle}`}>
                          {member.portfolio}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-700 font-medium">{member.designation}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
