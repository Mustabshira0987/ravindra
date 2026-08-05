import React, { useState } from 'react';
import {
  BookOpen, Award, CheckCircle2, FlaskConical, Users, FileText, ChevronRight,
  History, ShieldCheck, GraduationCap, Download, Eye, Sparkles, Building2,
  Calendar, Layers, MapPin, Mail, Phone, ExternalLink
} from 'lucide-react';
import { DEPARTMENTS } from '../data';

// Detailed data models for each sidebar section
const DEPARTMENT_SIDEBAR_MENU = [
  { id: 'home', label: 'Home' },
  { id: 'history', label: 'History of the Department' },
  { id: 'bos', label: "Board of Studies' Members" },
  { id: 'courses', label: 'Courses Offered' },
  { id: 'obe', label: 'OBE', hasSubmenu: true },
  { id: 'faculty', label: 'Faculty Members' },
  { id: 'labs', label: 'CSE Lab Facilities' },
  { id: 'question-papers', label: 'Autonomous Question Papers' },
];

// Board of Studies Members
const BOS_MEMBERS = [
  { name: 'Dr. G. Ramesh', designation: 'Chairman', affiliation: 'HOD & Professor, Dept of CSE, RCEW Kurnool', role: 'Head of Board' },
  { name: 'Dr. K. Srinivasulu', designation: 'University Nominee', affiliation: 'Professor of CSE, JNTU Anantapur', role: 'Academic Expert' },
  { name: 'Dr. V. Sankar', designation: 'Subject Expert', affiliation: 'Professor, Dept of CSE, NIT Warangal', role: 'External Expert' },
  { name: 'Dr. M. Sunitha', designation: 'Subject Expert', affiliation: 'Associate Professor, Dept of CSE, IIIT Hyderabad', role: 'External Expert' },
  { name: 'Mr. S. Venkatakrishnan', designation: 'Industry Representative', affiliation: 'Principal Technical Architect, TCS Hyderabad', role: 'Industry Specialist' },
  { name: 'Mrs. R. Bhavani', designation: 'Alumni Representative', affiliation: 'Senior Software Engineer, Cognizant Bengaluru', role: 'Alumni Specialist' },
];

// OBE Details
const OBE_DATA = {
  peos: [
    { code: 'PEO 1', title: 'Professional Career', desc: 'To prepare graduates with strong mathematical, scientific, and engineering fundamentals necessary to formulate, solve, and analyze computer engineering problems.' },
    { code: 'PEO 2', title: 'Core Competency', desc: 'To provide students with solid foundation in computer software and hardware concepts required to design innovative products and digital applications.' },
    { code: 'PEO 3', title: 'Leadership & Ethics', desc: 'To inculcate professional, ethical attitude, team spirit, effective communication skills, and lifelong learning capabilities in young women leaders.' },
  ],
  pos: [
    { code: 'PO 1', name: 'Engineering Knowledge', desc: 'Apply knowledge of mathematics, science, and engineering fundamentals to complex CSE problems.' },
    { code: 'PO 2', name: 'Problem Analysis', desc: 'Identify, formulate, and analyze complex software and computing problems reaching substantiated conclusions.' },
    { code: 'PO 3', name: 'Design & Development of Solutions', desc: 'Design solutions for complex technical systems that meet specified public health, safety, and societal needs.' },
    { code: 'PO 4', name: 'Conduct Investigations of Complex Problems', desc: 'Use research-based knowledge and research methods including design of experiments and synthesis of data.' },
    { code: 'PO 5', name: 'Modern Tool Usage', desc: 'Create, select, and apply appropriate techniques, resources, and modern IT and engineering tools.' },
    { code: 'PO 6', name: 'The Engineer and Society', desc: 'Apply reasoning informed by contextual knowledge to assess societal, safety, legal, and cultural issues.' },
    { code: 'PO 7', name: 'Environment and Sustainability', desc: 'Understand the impact of professional engineering solutions in societal and environmental contexts.' },
    { code: 'PO 8', name: 'Ethics', desc: 'Apply ethical principles and commit to professional ethics and responsibilities of engineering practice.' },
    { code: 'PO 9', name: 'Individual and Team Work', desc: 'Function effectively as an individual, and as a member or leader in diverse and multidisciplinary teams.' },
    { code: 'PO 10', name: 'Communication', desc: 'Communicate effectively on complex engineering activities with the engineering community and society.' },
    { code: 'PO 11', name: 'Project Management and Finance', desc: 'Demonstrate knowledge and understanding of engineering and management principles.' },
    { code: 'PO 12', name: 'Life-long Learning', desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning.' },
  ],
  psos: [
    { code: 'PSO 1', title: 'Software System Architecture', desc: 'Develop efficient algorithms and robust software architectures using modern programming languages (Java, Python, C++).' },
    { code: 'PSO 2', title: 'Data Analytics & Cloud Intelligence', desc: 'Apply data science techniques, cloud deployments, and intelligent systems to design enterprise-grade platforms.' },
  ]
};

// Faculty Roster
const FACULTY_ROSTER = [
  { name: "Dr. G. Ramesh", designation: "Professor & HOD", qualification: "M.Tech, Ph.D. (CSE)", experience: "18+ Years", specialization: "Artificial Intelligence & Cloud Computing", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" },
  { name: "Mrs. K. Radhika Sree", designation: "Associate Professor", qualification: "M.Tech, (Ph.D.)", experience: "12+ Years", specialization: "Data Structures & Database Systems", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
  { name: "Mr. P. Kalyan Rao", designation: "Assistant Professor", qualification: "M.Tech", experience: "8+ Years", specialization: "Full-Stack Web Technologies & DevOps", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" },
  { name: "Mrs. J. Lakshmi Priya", designation: "Assistant Professor", qualification: "M.Tech", experience: "6+ Years", specialization: "Cyber Security & Computer Networks", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300" },
  { name: "Dr. M. Suresh Kumar", designation: "Professor", qualification: "M.Tech, Ph.D.", experience: "15+ Years", specialization: "Machine Learning & Neural Networks", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" },
  { name: "Mrs. S. Anitha", designation: "Assistant Professor", qualification: "M.Tech", experience: "7+ Years", specialization: "Operating Systems & System Software", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" },
];

// Lab Facilities
const CSE_LABS = [
  {
    name: "Advanced AI & Deep Learning Studio",
    systems: "60 High-End Workstations (Intel i7 13th Gen, 32GB RAM, NVIDIA RTX 4070 GPUs)",
    software: "Python 3.11, TensorFlow, PyTorch, CUDA, Jupyter Notebooks, OpenCV",
    desc: "State-of-the-art laboratory dedicated to machine learning modeling, computer vision experiments, and natural language processing thesis research.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Data Structures & Java Programming Lab",
    systems: "70 Desktop Workstations (Intel i5, 16GB RAM, Gigabit LAN)",
    software: "JDK 21, Eclipse IDE, VS Code, Git, NetBeans, MySQL",
    desc: "Equipped for foundational coding bootcamps, competitive programming sessions, and Object-Oriented Software design paradigms.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Database Systems & Cloud Computing Studio",
    systems: "65 Workstations connected to High-Speed Central Linux Servers",
    software: "Oracle 19c, PostgreSQL, Docker, AWS CLI, Kubernetes, MongoDB",
    desc: "Hands-on data architecture, SQL query optimization, distributed cloud microservices deployment, and NoSQL database modeling.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Cyber Security & Networks Lab",
    systems: "50 Security Hardened Stations",
    software: "Wireshark, Kali Linux, Cisco Packet Tracer, Snort IDS, Metasploit",
    desc: "Network packet inspection, cryptographic protocol implementation, ethical hacking simulations, and network topology configurations.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600"
  }
];

// Autonomous Question Papers
const QUESTION_PAPERS = [
  { year: '2024-25', sem: 'IV-I (7th Sem)', code: 'CSE401', title: 'Artificial Intelligence & Neural Networks', type: 'End-Semester' },
  { year: '2024-25', sem: 'III-II (6th Sem)', code: 'CSE306', title: 'Compiler Design & Automata Theory', type: 'End-Semester' },
  { year: '2023-24', sem: 'III-I (5th Sem)', code: 'CSE301', title: 'Database Management Systems', type: 'End-Semester' },
  { year: '2023-24', sem: 'II-II (4th Sem)', code: 'CSE204', title: 'Design and Analysis of Algorithms', type: 'End-Semester' },
  { year: '2023-24', sem: 'II-I (3rd Sem)', code: 'CSE201', title: 'Data Structures using C++', type: 'Mid-Semester' },
  { year: '2022-23', sem: 'I-II (2nd Sem)', code: 'CSE102', title: 'Python Programming & Problem Solving', type: 'End-Semester' },
];

export default function CSE() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [obeSubtab, setObeSubtab] = useState<'peos' | 'pos' | 'psos'>('peos');

  const baseDept = DEPARTMENTS.find(d => d.id === 'cse');

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout with Sidebar on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR ================= */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden sticky top-24">
            {/* Top Maroon Header Accent */}
            <div className="h-3 bg-[#900C3F]" />

            {/* Sidebar Title */}
            <div className="p-6 text-center border-b border-slate-100 bg-white">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#900C3F] leading-tight">
                Department <br /> of CSE
              </h2>
            </div>

            {/* Navigation Options List */}
            <nav className="divide-y divide-slate-100">
              {DEPARTMENT_SIDEBAR_MENU.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-5 py-3.5 text-sm sm:text-base font-semibold flex items-center justify-between transition-all cursor-pointer relative ${
                      isActive
                        ? 'text-blue-700 bg-blue-50/70 font-bold'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>

                    {item.hasSubmenu ? (
                      <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'rotate-90 text-blue-700' : 'text-slate-400'}`} />
                    ) : null}

                    {/* Active Right Vertical Blue Bar Indicator */}
                    {isActive && (
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <div className="lg:col-span-9 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 md:p-10 min-h-[600px]">
            
            {/* 1. HOME TAB */}
            {activeTab === 'home' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">RCEW Academic Stream</span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                      Computer Science & Engineering
                    </h1>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    NBA Accredited • Code: CSE
                  </span>
                </div>

                {/* Hero Feature Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
                    alt="CSE Department Overview"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <p className="font-serif text-lg sm:text-xl font-bold">Pioneering Software Engineering & AI Solutions</p>
                      <p className="text-xs sm:text-sm text-slate-300">Empowering young women engineers with cutting-edge tech skills since 2008.</p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <span className="text-2xl font-serif font-bold text-blue-900 block">180</span>
                    <span className="text-[11px] text-slate-500 font-mono uppercase">Annual Intake</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <span className="text-2xl font-serif font-bold text-blue-900 block">2008</span>
                    <span className="text-[11px] text-slate-500 font-mono uppercase">Established</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <span className="text-2xl font-serif font-bold text-amber-600 block">96.4%</span>
                    <span className="text-[11px] text-slate-500 font-mono uppercase">Placement Rate</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <span className="text-2xl font-serif font-bold text-blue-900 block">14.5 LPA</span>
                    <span className="text-[11px] text-slate-500 font-mono uppercase">Highest Package</span>
                  </div>
                </div>

                {/* HOD Message */}
                <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100 flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"
                    alt="Dr. G. Ramesh"
                    className="w-24 h-24 rounded-full object-cover border-2 border-blue-600 shrink-0 shadow-sm"
                  />
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-slate-900 text-lg">Message from Head of Department</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                      "Our mission in the Department of Computer Science & Engineering is to inspire creativity, logical rigor, and software leadership. We provide state-of-the-art computational infrastructure and individual mentorship to make our women graduates industry leaders."
                    </p>
                    <p className="text-xs font-bold text-blue-900 font-mono pt-1">— Dr. G. Ramesh, HOD & Professor</p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. HISTORY OF THE DEPARTMENT */}
            {activeTab === 'history' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Legacy & Growth</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    History of the Department
                  </h1>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Established in the year <strong>2008</strong> with an initial intake of 60 seats, the Department of Computer Science & Engineering at Ravindra College of Engineering for Women (RCEW) has evolved into one of Kurnool's premier software education hubs. To meet rising corporate demand for trained women software engineers, the intake was progressively expanded to <strong>180 seats</strong>.
                </p>

                {/* Timeline */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-serif font-bold text-lg text-slate-900">Milestone Timeline</h3>
                  <div className="space-y-4 border-l-2 border-blue-600 pl-6 ml-2">
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                      <span className="text-xs font-mono font-bold text-blue-600">2008</span>
                      <h4 className="font-bold text-slate-900 text-sm">Department Inception</h4>
                      <p className="text-xs text-slate-600">Started operations with 60 intake capacity, high-speed digital computing lab, and JNTUA affiliation.</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                      <span className="text-xs font-mono font-bold text-blue-600">2014</span>
                      <h4 className="font-bold text-slate-900 text-sm">Expansion & Research Labs</h4>
                      <p className="text-xs text-slate-600">Intake increased to 120 seats. Inauguration of specialized Linux and Cloud Computing research suites.</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                      <span className="text-xs font-mono font-bold text-blue-600">2018</span>
                      <h4 className="font-bold text-slate-900 text-sm">NBA Accreditation</h4>
                      <p className="text-xs text-slate-600">Awarded Prestigious NBA Accreditation for top teaching standards, curriculum alignment, and high placement ratios.</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 bg-amber-500 rounded-full border-4 border-white" />
                      <span className="text-xs font-mono font-bold text-amber-600">2023 - Present</span>
                      <h4 className="font-bold text-slate-900 text-sm">AI Center of Excellence & 180 Seats</h4>
                      <p className="text-xs text-slate-600">Expanded intake to 180 seats. Built GPU-powered Deep Learning studio and hackathon incubation cell.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. BOARD OF STUDIES MEMBERS */}
            {activeTab === 'history' ? null : activeTab === 'bos' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Academic Governance</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Board of Studies' (BOS) Members
                  </h1>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The Board of Studies (BOS) for the Department of Computer Science & Engineering comprises distinguished academic professors from JNTUA, premier IIT/NIT subject experts, and corporate technical directors to design an industry-relevant curriculum.
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-800 font-serif font-bold uppercase text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">S.No</th>
                        <th className="py-3 px-4">Name of the Member</th>
                        <th className="py-3 px-4">Designation in BOS</th>
                        <th className="py-3 px-4">Affiliation & Institution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {BOS_MEMBERS.map((member, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-mono font-bold text-slate-500">{idx + 1}</td>
                          <td className="py-3 px-4 font-bold text-slate-900">{member.name}</td>
                          <td className="py-3 px-4">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 font-mono">
                              {member.designation}
                            </span>
                          </td>
                          <td className="py-3 px-4">{member.affiliation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. COURSES OFFERED */}
            {activeTab === 'courses' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Curriculum & Intake</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Courses Offered
                  </h1>
                </div>

                {/* Course Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase bg-blue-600 text-white font-bold px-2 py-0.5 rounded">Undergraduate (UG)</span>
                      <h3 className="font-serif font-bold text-xl text-slate-900 mt-1">B.Tech in Computer Science & Engineering</h3>
                    </div>
                    <span className="text-sm font-mono font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      Intake: 180 Seats / Year
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 font-mono uppercase">Duration</span>
                      <p className="font-bold text-slate-900 text-sm">4 Years (8 Semesters)</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 font-mono uppercase">Affiliation</span>
                      <p className="font-bold text-slate-900 text-sm">JNTU Anantapur (JNTUA)</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 font-mono uppercase">Approval</span>
                      <p className="font-bold text-slate-900 text-sm">AICTE, New Delhi</p>
                    </div>
                  </div>
                </div>

                {/* Syllabus Highlights */}
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-lg text-slate-900">Key Specialization Electives</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">Artificial Intelligence & Machine Learning</span>
                    </div>
                    <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">Full-Stack Cloud & Web Development</span>
                    </div>
                    <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">Cyber Security & Cryptography</span>
                    </div>
                    <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">Big Data Analytics & NoSQL Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. OBE (Outcome Based Education) */}
            {activeTab === 'obe' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">NBA Accredited Framework</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Outcome Based Education (OBE)
                  </h1>
                </div>

                {/* Sub-tabs for PEOs, POs, PSOs */}
                <div className="flex gap-2 border-b border-slate-200">
                  <button
                    onClick={() => setObeSubtab('peos')}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      obeSubtab === 'peos'
                        ? 'text-blue-600 border-b-2 border-blue-600 font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    PEOs (Objectives)
                  </button>
                  <button
                    onClick={() => setObeSubtab('pos')}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      obeSubtab === 'pos'
                        ? 'text-blue-600 border-b-2 border-blue-600 font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    POs (Program Outcomes)
                  </button>
                  <button
                    onClick={() => setObeSubtab('psos')}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      obeSubtab === 'psos'
                        ? 'text-blue-600 border-b-2 border-blue-600 font-extrabold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    PSOs (Specific Outcomes)
                  </button>
                </div>

                {/* Subtab PEOs */}
                {obeSubtab === 'peos' && (
                  <div className="space-y-4">
                    {OBE_DATA.peos.map((peo, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">{peo.code}</span>
                        <h4 className="font-serif font-bold text-slate-900 text-sm mt-1">{peo.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{peo.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subtab POs */}
                {obeSubtab === 'pos' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {OBE_DATA.pos.map((po, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">{po.code}</span>
                        <h4 className="font-bold text-slate-900 text-xs mt-1.5">{po.name}</h4>
                        <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{po.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subtab PSOs */}
                {obeSubtab === 'psos' && (
                  <div className="space-y-4">
                    {OBE_DATA.psos.map((pso, idx) => (
                      <div key={idx} className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl space-y-1">
                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">{pso.code}</span>
                        <h4 className="font-serif font-bold text-slate-900 text-sm mt-1">{pso.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{pso.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 6. FACULTY MEMBERS */}
            {activeTab === 'faculty' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Academic Roster</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Faculty Members
                  </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {FACULTY_ROSTER.map((fac, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                      <img
                        src={fac.image}
                        alt={fac.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-blue-200 shadow-sm mb-3"
                      />
                      <h3 className="font-serif font-bold text-slate-900 text-sm">{fac.name}</h3>
                      <span className="text-xs font-bold text-blue-600 mt-0.5">{fac.designation}</span>
                      <p className="text-[11px] font-mono text-slate-500 mt-1">{fac.qualification}</p>
                      <p className="text-[11px] text-slate-600 mt-2 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100 w-full line-clamp-1">
                        Specialization: {fac.specialization}
                      </p>
                      <span className="text-[10px] font-bold font-mono text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full mt-3 border border-amber-200">
                        Experience: {fac.experience}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. CSE LAB FACILITIES */}
            {activeTab === 'labs' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Practical Infrastructure</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    CSE Lab Facilities
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CSE_LABS.map((lab, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                      <div>
                        <div className="relative h-44 overflow-hidden">
                          <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-5 space-y-2">
                          <h3 className="font-serif font-bold text-slate-900 text-base">{lab.name}</h3>
                          <p className="text-xs text-slate-600 leading-relaxed">{lab.desc}</p>
                          <div className="pt-2 text-[11px] font-mono text-slate-500 space-y-1">
                            <p><strong>Hardware:</strong> {lab.systems}</p>
                            <p><strong>Software Platforms:</strong> {lab.software}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. AUTONOMOUS QUESTION PAPERS */}
            {activeTab === 'question-papers' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Exam Repository</span>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Autonomous Question Papers
                  </h1>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  Access Mid-Semester and End-Semester autonomous examination question papers for all B.Tech CSE academic years.
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-800 font-serif font-bold uppercase text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Academic Year</th>
                        <th className="py-3 px-4">Semester</th>
                        <th className="py-3 px-4">Subject Code & Name</th>
                        <th className="py-3 px-4">Exam Type</th>
                        <th className="py-3 px-4 text-right">Download</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {QUESTION_PAPERS.map((qp, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-mono font-bold text-blue-900">{qp.year}</td>
                          <td className="py-3 px-4 font-semibold">{qp.sem}</td>
                          <td className="py-3 px-4">
                            <span className="font-bold text-slate-900">{qp.code}</span> - {qp.title}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-200 text-slate-800">
                              {qp.type}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => alert(`Downloading Question Paper: ${qp.title}`)}
                              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                            >
                              <Download className="h-3.5 w-3.5" /> PDF
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
