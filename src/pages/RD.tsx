import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FlaskConical, BookOpen, Award, Users, ChevronRight,
  Sparkles, FileText, Download, ShieldCheck, Database,
  Cpu, Layers, ExternalLink, Globe, CheckCircle2, Rocket, Lightbulb
} from 'lucide-react';

// R&D Sidebar Navigation Configuration
const RD_SIDEBAR_MENU = [
  { id: 'home', label: 'Home' },
  { id: 'resources', label: 'Research Resources' },
  { id: 'memberships', label: 'Professional Body Memberships' },
];

// Key Research Statistics
const RESEARCH_STATS = [
  { label: "Scopus / IEEE Publications", value: "125+", icon: BookOpen },
  { label: "Patents Published & Granted", value: "18+", icon: Lightbulb },
  { label: "Funded Grants & Projects", value: "₹48.5 L", icon: Award },
  { label: "Ph.D. Faculty Supervisors", value: "14", icon: Users }
];

// R&D Key Committee
const RD_COMMITTEE = [
  { name: "Dr. K. E. Sreenivasa Murthy", role: "Chief Patron", designation: "Principal, RCEW" },
  { name: "Dr. G. Ramesh", role: "Dean (R&D)", designation: "Professor & Head, CSE" },
  { name: "Dr. J. Prasanna Kumar", role: "R&D Coordinator (ECE)", designation: "Professor, ECE Dept" },
  { name: "Dr. T. Kavitha", role: "R&D Coordinator (AI&DS)", designation: "Professor, AI&DS Dept" },
  { name: "Dr. B. Sabeena", role: "R&D Member", designation: "Associate Professor, CSE" },
];

// Professional Bodies Memberships List
const PROFESSIONAL_BODIES = [
  {
    code: "IEEE",
    name: "Institute of Electrical and Electronics Engineers (IEEE)",
    details: "Active IEEE Student Branch (STB60021) & IEEE Women in Engineering (WIE) Affinity Group. Enables access to IEEE Xplore, global conferences, and tech summits.",
    badge: "Student Branch & WIE Chapter"
  },
  {
    code: "ISTE",
    name: "Indian Society for Technical Education (ISTE)",
    details: "Institutional Membership & Active Student Chapter organizing national level technical symposia, faculty development programs, and skill bootcamps.",
    badge: "Institutional Member"
  },
  {
    code: "CSI",
    name: "Computer Society of India (CSI)",
    details: "Institutional Branch facilitating coding competitions, hackathons, and software engineering workshops for students and faculty.",
    badge: "Institutional Branch"
  },
  {
    code: "IEI",
    name: "The Institution of Engineers (India) - IEI",
    details: "Student Chapter promoting multidisciplinary engineering research, guest lectures, and industrial project sponsorships.",
    badge: "Students' Chapter"
  },
  {
    code: "ACM",
    name: "Association for Computing Machinery (ACM)",
    details: "ACM Student Chapter empowering computing research, algorithmic problem solving, and global networking.",
    badge: "Student Chapter"
  }
];

// Research Laboratories Data
const RESEARCH_LABS = [
  {
    name: "AI & High-Performance Computing (HPC) Lab",
    description: "Equipped with high-end NVIDIA GPU Workstations, dedicated AI acceleration frameworks, and deep learning libraries for computer vision and NLP research.",
    facility: "NVIDIA Workstations • Tensor Cores"
  },
  {
    name: "IoT & Embedded Systems Innovation Hub",
    description: "Advanced IoT development kits, Raspberry Pi 4 clusters, Arduino, LoRaWAN gateways, and wireless sensor node setups for smart city projects.",
    facility: "ARM Cortex Kits • LoRaWAN Gateways"
  },
  {
    name: "VLSI Design & Microelectronics Research Lab",
    description: "CAD tools including Cadence Virtuoso, Tanner EDA, and Xilinx Vivado for ASIC and FPGA prototyping.",
    facility: "Cadence EDA • Xilinx FPGA Boards"
  },
  {
    name: "RCEW Incubation & Start-up Center",
    description: "Dedicated space for student entrepreneurs to convert research prototypes into commercial products with seed funding assistance.",
    facility: "Seed Funding • Mentorship Hub"
  }
];

export default function RD() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (tabParam && RD_SIDEBAR_MENU.some(m => m.id === tabParam)) {
      return tabParam;
    }
    return 'home';
  });

  useEffect(() => {
    if (tabParam && RD_SIDEBAR_MENU.some(m => m.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-primary-950/40 py-8 sm:py-12">
      {/* Top Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <span className="text-yellow-400 text-xs font-mono font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Innovation & Scientific Excellence
            </span>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight pt-1">
              Research & Development (R&D) Cell
            </h1>
            <p className="text-blue-100 text-sm sm:text-base max-w-3xl leading-relaxed">
              Empowering women researchers and engineers to innovate, publish in top-tier journals, file patents, and lead sponsored research projects.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout with Left Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR ================= */}
          <div className="lg:col-span-3 bg-white dark:bg-primary-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden sticky top-24">
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700" />

            {/* Sidebar Title Card */}
            <div className="p-5 text-center bg-gradient-to-b from-indigo-800 to-blue-950 text-white relative">
              <FlaskConical className="h-6 w-6 text-yellow-400 mx-auto mb-1" />
              <h2 className="text-lg font-serif font-bold text-white">
                R&D Navigation
              </h2>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/20 text-white">
                RCEW Research Cell
              </span>
            </div>

            {/* Navigation Options List */}
            <nav className="divide-y divide-slate-100 dark:divide-slate-800">
              {RD_SIDEBAR_MENU.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full text-left px-5 py-3.5 text-sm font-semibold flex items-center justify-between transition-all cursor-pointer relative ${
                      isActive
                        ? 'text-indigo-700 dark:text-yellow-400 bg-indigo-50 dark:bg-indigo-950/60 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {isActive && <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-yellow-400 animate-pulse" />}
                      <span>{item.label}</span>
                    </span>

                    <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'text-indigo-600 dark:text-yellow-400 font-bold translate-x-0.5' : 'text-slate-400'}`} />

                    {/* Active Indicator Bar */}
                    {isActive && (
                      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-indigo-600 dark:bg-yellow-400 rounded-l" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <div className="lg:col-span-9 bg-white dark:bg-primary-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8 md:p-10 min-h-[550px]">
            
            {/* 1. TAB: HOME */}
            {activeTab === 'home' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Section Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-yellow-400">Research Portal</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mt-1">
                    Research & Development Overview
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Fostering interdisciplinary engineering research, patent generation, and funded technology projects.
                  </p>
                </div>

                {/* Key Research Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {RESEARCH_STATS.map((stat, idx) => {
                    const IconComp = stat.icon;
                    return (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-primary-950/50 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
                        <IconComp className="h-6 w-6 text-indigo-600 dark:text-yellow-400 mx-auto" />
                        <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white">{stat.value}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono leading-tight">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Dean Message / Research Vision */}
                <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white">Vision of R&D Cell</h3>
                  <p>
                    The Research & Development Cell at Ravindra Engineering College for Women serves as an engine for scientific discovery, technological innovation, and societal problem-solving. We actively support faculty and student researchers with financial seed grants, patent filing support, and access to state-of-the-art research laboratories.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-indigo-50/60 dark:bg-indigo-950/40 rounded-xl border border-indigo-100 dark:border-indigo-900/50 space-y-2">
                      <div className="flex items-center gap-2 text-indigo-900 dark:text-yellow-400 font-serif font-bold text-sm">
                        <Rocket className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                        Core Focus Areas
                      </div>
                      <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                        <li>Artificial Intelligence & Deep Learning Applications</li>
                        <li>IoT, Smart Sensors & Embedded Systems</li>
                        <li>VLSI Design & Microelectronics</li>
                        <li>Cybersecurity, Cryptography & Cloud Security</li>
                        <li>Sustainable Energy & Green Computing</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-indigo-50/60 dark:bg-indigo-950/40 rounded-xl border border-indigo-100 dark:border-indigo-900/50 space-y-2">
                      <div className="flex items-center gap-2 text-indigo-900 dark:text-yellow-400 font-serif font-bold text-sm">
                        <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                        Key Objectives
                      </div>
                      <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                        <li>Enhance Scopus/IEEE journal publications.</li>
                        <li>Promote student-led prototype building and patents.</li>
                        <li>Secure external research grants from DST, SERB & AICTE.</li>
                        <li>Collaborate with top industries and research institutes.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* R&D Executive Committee Table */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Users className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                    R&D Executive Committee
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 dark:bg-primary-950 text-slate-800 dark:text-slate-200 uppercase font-mono text-[11px]">
                        <tr>
                          <th className="px-4 py-3">Member Name</th>
                          <th className="px-4 py-3">R&D Designation</th>
                          <th className="px-4 py-3">Department / Profile</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        {RD_COMMITTEE.map((m, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{m.name}</td>
                            <td className="px-4 py-3">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-yellow-300">
                                {m.role}
                              </span>
                            </td>
                            <td className="px-4 py-3">{m.designation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 2. TAB: RESEARCH RESOURCES */}
            {activeTab === 'resources' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Section Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-yellow-400">Facilities & Support</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mt-1">
                    Research Resources & Infrastructure
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Advanced research laboratories, e-journal databases, digital libraries, and institutional seed grants.
                  </p>
                </div>

                {/* Specialized Labs Grid */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                    Specialized Research Laboratories & Centers
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {RESEARCH_LABS.map((lab, idx) => (
                      <div key={idx} className="p-5 bg-slate-50 dark:bg-primary-950/60 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-yellow-300">
                          {lab.facility}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white mt-1">{lab.name}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{lab.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* E-Journal Subscriptions & Policy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 bg-slate-50 dark:bg-primary-950/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <Database className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                      E-Journals & Digital Subscriptions
                    </h3>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span><strong>IEEE Xplore Digital Library:</strong> Full access to IEEE transactions & conference proceedings.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span><strong>SpringerLink & Elsevier:</strong> Direct access to peer-reviewed CS & engineering journals.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span><strong>DELNET & NPTEL:</strong> Inter-library loan system & video lecture repositories.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 bg-slate-50 dark:bg-primary-950/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                      <Award className="h-5 w-5 text-indigo-600 dark:text-yellow-400" />
                      Incentives & Seed Funding Policy
                    </h3>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span><strong>Seed Money Scheme:</strong> Up to ₹1.0 Lakh for innovative faculty/student prototypes.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span><strong>Publication Incentives:</strong> Up to ₹15,000 per SCI/Scopus journal paper.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span><strong>Patent Assistance:</strong> 100% filing fee reimbursement for granted institutional patents.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 3. TAB: PROFESSIONAL BODY MEMBERSHIPS */}
            {activeTab === 'memberships' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Section Header */}
                <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-yellow-400">Global Tech Networks</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mt-1">
                    Professional Body Memberships
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Institutional and student branch affiliations with prestigious national and international professional bodies.
                  </p>
                </div>

                {/* Professional Bodies List */}
                <div className="space-y-4">
                  {PROFESSIONAL_BODIES.map((body, idx) => (
                    <div key={idx} className="p-5 bg-slate-50 dark:bg-primary-950/60 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 hover:border-indigo-300 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-xl bg-indigo-600 text-white font-mono font-bold text-xs">
                            {body.code}
                          </span>
                          <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                            {body.name}
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 px-2.5 py-0.5 rounded-full self-start sm:self-center">
                          {body.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                        {body.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
