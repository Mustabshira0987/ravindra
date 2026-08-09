import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Building2,
  Users,
  Award,
  Briefcase,
  Quote,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Search,
  ArrowUpDown,
  Calendar,
  GraduationCap,
  FileSpreadsheet
} from 'lucide-react';
import {
  PLACEMENT_STATS,
  COMPANY_VISITS_DATA,
  YEARLY_PLACEMENT_SUMMARY,
  PLACED_ACADEMIC_YEARS,
  PLACED_STUDENTS_ROSTER
} from '../data';
import COMPANY_VISITS_LOGOS from '../assets/images/company_visits_logos.png';
import WALMART_PLACEMENT_IMAGE from '../assets/images/rcew_walmart_placement.png';
import TCS_ACCENTURE_IMAGE from '../assets/images/rcew_tcs_accenture_placements.png';
import ADP_PLACEMENT_IMAGE from '../assets/images/rcew_adp_placement.png';
import TCS_DIGITAL_IMAGE from '../assets/images/rcew_tcs_digital_placement.png';

export default function Placements() {
  const location = useLocation();

  // Active tab strictly calculated from path / hash
  const activeTab = useMemo(() => {
    if (location.pathname.includes('placed-students') || location.hash === '#placed-students') {
      return 'placed-students';
    }
    return 'company-visits';
  }, [location.pathname, location.hash]);
  
  // Company visits state
  const [companySearch, setCompanySearch] = useState('');
  const [tierFilter, setTierFilter] = useState<'ALL' | 'Super Dream' | 'Dream' | 'Standard'>('ALL');
  const [companySortAsc, setCompanySortAsc] = useState<boolean | null>(null);

  // Placed students state
  const [studentSearch, setStudentSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('2024 - 25');
  const [branchFilter, setBranchFilter] = useState<'ALL' | 'ECE' | 'CSE'>('ALL');

  // Filtered & Sorted Company List
  const filteredCompanies = useMemo(() => {
    let list = COMPANY_VISITS_DATA.filter(item => {
      const matchesSearch =
        item.company.toLowerCase().includes(companySearch.toLowerCase()) ||
        item.ctc.toLowerCase().includes(companySearch.toLowerCase());
      const matchesTier = tierFilter === 'ALL' || item.category === tierFilter;
      return matchesSearch && matchesTier;
    });

    if (companySortAsc !== null) {
      list = [...list].sort((a, b) => {
        const numA = parseFloat(a.ctc.replace(/[^0-9.]/g, '')) || 0;
        const numB = parseFloat(b.ctc.replace(/[^0-9.]/g, '')) || 0;
        return companySortAsc ? numA - numB : numB - numA;
      });
    }

    return list;
  }, [companySearch, tierFilter, companySortAsc]);

  // Filtered Placed Students Roster
  const filteredStudents = useMemo(() => {
    return PLACED_STUDENTS_ROSTER.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
        item.rollNo.toLowerCase().includes(studentSearch.toLowerCase()) ||
        item.employer.toLowerCase().includes(studentSearch.toLowerCase()) ||
        item.ctc.toLowerCase().includes(studentSearch.toLowerCase());
      const matchesBranch = branchFilter === 'ALL' || item.branch === branchFilter;
      return matchesSearch && matchesBranch;
    });
  }, [studentSearch, branchFilter]);

  // Visual card logos list
  const logoCards = [
    { company: 'Value Labs', ctc: '27 CTC', tag: 'Super Dream', badgeBg: 'bg-amber-400 text-slate-950' },
    { company: 'Wiley Edge', ctc: '11 CTC', tag: 'Super Dream', badgeBg: 'bg-blue-600 text-white' },
    { company: 'Crisil', ctc: '7.7 CTC', tag: 'Dream', badgeBg: 'bg-indigo-600 text-white' },
    { company: 'ADP', ctc: '6 CTC', tag: 'Dream', badgeBg: 'bg-red-500 text-white' },
    { company: 'TCS (DIGITAL)', ctc: '7 CTC', tag: 'Dream', badgeBg: 'bg-purple-600 text-white' },
    { company: 'Accenture', ctc: '6 CTC', tag: 'Dream', badgeBg: 'bg-violet-600 text-white' },
    { company: 'Technovert', ctc: '6.6 CTC', tag: 'Dream', badgeBg: 'bg-emerald-600 text-white' },
    { company: 'HCL', ctc: '4.25 CTC', tag: 'Standard', badgeBg: 'bg-blue-700 text-white' },
    { company: 'Manomay', ctc: '5.5 CTC', tag: 'Dream', badgeBg: 'bg-sky-600 text-white' },
    { company: 'Cognizant (CTS)', ctc: '5.4 CTC', tag: 'Dream', badgeBg: 'bg-teal-600 text-white' },
    { company: 'GEP', ctc: '5.5 CTC', tag: 'Dream', badgeBg: 'bg-cyan-600 text-white' },
    { company: 'EPAM', ctc: '6 CTC', tag: 'Dream', badgeBg: 'bg-indigo-600 text-white' },
    { company: 'Hexaware', ctc: '6 CTC', tag: 'Dream', badgeBg: 'bg-slate-700 text-white' },
    { company: 'Deloitte', ctc: '6 CTC', tag: 'Dream', badgeBg: 'bg-green-600 text-white' },
  ];

  return (
    <div className="py-6 bg-slate-50 min-h-screen">
      {/* Website Theme Blue Header Banner */}
      <section className="relative py-20 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden mb-12 shadow-xl">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-400/20 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-400 text-slate-950 shadow-md"
          >
            <Sparkles className="h-4 w-4 text-slate-950" />
            CORPORATE PLACEMENT DESK • RCEW KURNOOL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white leading-tight"
          >
            Placements & Corporate Relations
          </motion.h1>

          <div className="h-1.5 w-24 bg-amber-400 mx-auto rounded-full shadow-md" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-blue-100 text-base sm:text-lg leading-relaxed font-sans font-normal"
          >
            Empowering women engineers to lead top multinational technology corporations, financial powerhouses, and global innovation centers.
          </motion.p>

          {/* Clean Stand-Alone Buttons without Outer Grey Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/placements/company-visits"
              className={`px-8 py-3.5 rounded-xl font-serif font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg ${
                activeTab === 'company-visits'
                  ? 'bg-amber-400 text-slate-950 shadow-amber-400/30 scale-105 ring-2 ring-amber-300'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/30 backdrop-blur-md'
              }`}
            >
              <Building2 className="h-5 w-5" />
              Company Visits
            </Link>
            <Link
              to="/placements/placed-students"
              className={`px-8 py-3.5 rounded-xl font-serif font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg ${
                activeTab === 'placed-students'
                  ? 'bg-amber-400 text-slate-950 shadow-amber-400/30 scale-105 ring-2 ring-amber-300'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/30 backdrop-blur-md'
              }`}
            >
              <Users className="h-5 w-5" />
              Placed Students
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* OPTION 1: COMPANY VISITS SECTION */}
        {activeTab === 'company-visits' && (
          <section id="company-visits" className="scroll-mt-24 space-y-12">
            <div className="bg-white p-6 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl space-y-14 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-blue-600 to-indigo-700" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-200">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    RECRUITMENT DRIVES & PLACEMENT VISITS
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                    Corporate Giants & Employers of Choice for Our Graduates
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                    Ravindra Engineering College for Women takes pride in hosting world-class technology MNCs, financial institutions, and global product teams for on-campus and virtual hiring drives.
                  </p>
                </div>
                
                <div className="flex flex-col items-end gap-2 bg-gradient-to-br from-amber-500 to-yellow-600 text-slate-950 p-4 rounded-2xl shrink-0 shadow-md font-mono text-xs font-bold border border-amber-400">
                  <div className="flex items-center gap-2 text-sm font-serif">
                    <Award className="h-5 w-5 text-slate-950" />
                    <span>39 Top Recruiting Companies</span>
                  </div>
                  <span className="text-[11px] opacity-90">Packages up to ₹27.0 Lakhs</span>
                </div>
              </div>

              {/* VISUAL LOGO & CTC SHOWCASE GRID */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2.5">
                      <Briefcase className="h-6 w-6 text-amber-500" />
                      Key Recruiting Partners & CTC Badges
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-1">
                      Prominent MNC hiring partners visiting RCEW Kurnool with annual CTC compensation packages.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                    Featured Top Offers
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {logoCards.map((card, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden group border-t-4 border-t-blue-600"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-600 text-blue-700 group-hover:text-white flex items-center justify-center font-serif font-bold text-xl transition-all shadow-inner border border-blue-100">
                        {card.company.charAt(0)}
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-serif font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                          {card.company}
                        </h4>
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                          Hiring MNC Partner
                        </span>
                      </div>

                      <div className={`px-4 py-1.5 rounded-full font-mono font-bold text-xs shadow-md ${card.badgeBg}`}>
                        {card.ctc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* OFFICIAL RECRUITER REFERENCE BOARD IMAGE */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white space-y-6 relative overflow-hidden shadow-xl border border-blue-600">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/20 pb-4">
                  <div>
                    <h4 className="text-xl font-serif font-bold text-amber-300 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-amber-300 fill-amber-300" />
                      Official Corporate Recruiter & CTC Symbol Board
                    </h4>
                    <p className="text-xs text-blue-100 font-sans mt-1">
                      Verified recruiter list and salary offer structure at Ravindra Engineering College for Women.
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-white/15 text-amber-300 px-3 py-1.5 rounded-full border border-white/25 font-bold">
                    Official RCEW Accreditation
                  </span>
                </div>

                <div className="max-w-lg mx-auto bg-white p-3 rounded-2xl shadow-2xl border-4 border-amber-400">
                  <img
                    src={COMPANY_VISITS_LOGOS}
                    alt="Corporate Giants Logo CTC Reference"
                    className="w-full object-contain max-h-[360px] mx-auto rounded-xl"
                  />
                </div>
              </div>

              {/* PLACEMENTS HALL OF FAME BANNERS */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                  <Award className="h-6 w-6 text-amber-500" />
                  Placements Hall of Fame & Top Achievers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={WALMART_PLACEMENT_IMAGE} alt="Walmart 27 Lakhs Placement" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={TCS_ACCENTURE_IMAGE} alt="TCS & Accenture Placements" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={ADP_PLACEMENT_IMAGE} alt="ADP 6 Lakh Placements" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={TCS_DIGITAL_IMAGE} alt="TCS Digital 7 Lakh Package" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* INTERACTIVE 39-COMPANY TABLE */}
              <div className="space-y-6 pt-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900">
                      Complete 39 Company Visits & CTC Table
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-1">
                      Browse or search the full list of visiting companies and their respective CTC (in Lakhs).
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    <div className="p-1 bg-slate-100 rounded-xl flex gap-1 border border-slate-200 text-xs font-mono font-semibold">
                      {(['ALL', 'Super Dream', 'Dream', 'Standard'] as const).map(tier => (
                        <button
                          key={tier}
                          onClick={() => setTierFilter(tier)}
                          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                            tierFilter === tier
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1 sm:w-64">
                      <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search company or CTC..."
                        value={companySearch}
                        onChange={(e) => setCompanySearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
                      />
                    </div>

                    <button
                      onClick={() => setCompanySortAsc(prev => (prev === null ? false : prev === false ? true : null))}
                      className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-bold rounded-xl flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer shadow-sm"
                      title="Sort by CTC package"
                    >
                      <ArrowUpDown className="h-3.5 w-3.5 text-amber-300" />
                      {companySortAsc === null ? 'Sort CTC' : companySortAsc ? 'CTC: Low to High' : 'CTC: High to Low'}
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-md">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                        <th className="py-4 px-6 font-bold w-20 text-center text-amber-300">SNO</th>
                        <th className="py-4 px-6 font-bold text-white">Company Name</th>
                        <th className="py-4 px-6 font-bold text-right text-amber-300">CTC (in Lakh)</th>
                        <th className="py-4 px-6 font-bold text-center text-slate-100">Offer Category</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/70 text-xs font-sans bg-white text-slate-800">
                      {filteredCompanies.map((item, idx) => (
                        <tr
                          key={item.sno}
                          className={`transition-colors duration-150 group ${
                            idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                          } hover:bg-blue-50/80`}
                        >
                          <td className="py-4 px-6 font-mono font-bold text-slate-400 text-center group-hover:text-blue-600">
                            #{item.sno}
                          </td>
                          <td className="py-4 px-6 font-serif font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-700">
                            {item.company}
                          </td>
                          <td className="py-4 px-6 text-right font-mono font-bold text-amber-600 text-sm sm:text-base">
                            {item.ctc}
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span
                              className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs ${
                                item.category === 'Super Dream'
                                  ? 'bg-amber-400 text-slate-950 border border-amber-500'
                                  : item.category === 'Dream'
                                  ? 'bg-blue-600 text-white border border-blue-700'
                                  : 'bg-slate-200 text-slate-800 border border-slate-300'
                              }`}
                            >
                              {item.category}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {filteredCompanies.length === 0 && (
                        <tr>
                          <td colSpan={4} className="py-12 text-center text-slate-400 text-sm italic">
                            No companies found matching "{companySearch}".
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* OPTION 2: PLACED STUDENTS SECTION */}
        {activeTab === 'placed-students' && (
          <section id="placed-students" className="scroll-mt-24 space-y-12">
            <div className="bg-white p-6 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl space-y-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-blue-700 to-amber-400" />

              {/* Main Section Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-200">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    90% OF ELIGIBLE STUDENTS ARE PLACED
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                    Placed Students & Graduate Roster
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                    Detailed record of placed students across B.Tech branches (ECE & CSE) with roll numbers, recruiters, and salary packages.
                  </p>
                </div>

                {/* Theme Blue 90% Placed Badge */}
                <div className="flex flex-col items-end gap-1.5 bg-blue-600 text-white p-4 rounded-2xl shrink-0 shadow-lg font-mono text-xs font-bold border border-blue-500">
                  <span className="text-amber-300 font-serif font-bold text-2xl">90% Placed</span>
                  <span className="text-[11px] text-blue-100">Consistent Excellence Year over Year</span>
                </div>
              </div>

              {/* Theme Blue Yearly Placement Summary Cards (2024-25, 2023-24, 2022-23, 2021-22) */}
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2.5">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Recent Placement Summary by Academic Year
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {YEARLY_PLACEMENT_SUMMARY.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white border border-blue-500 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                          Academic Year
                        </span>
                        <Calendar className="h-4 w-4 text-blue-200 group-hover:text-amber-300 transition-colors" />
                      </div>
                      <div className="my-4">
                        <span className="font-serif font-bold text-4xl text-amber-300 block group-hover:scale-105 transition-transform">
                          {item.count}
                        </span>
                        <span className="text-xs text-blue-100 font-mono font-semibold block mt-1">
                          Students Placed
                        </span>
                      </div>
                      <span className="text-xs font-serif font-bold text-white bg-white/20 px-3 py-1 rounded-full self-start border border-white/20">
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Year Selector Pills */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest block">
                  Select Academic Batch Year:
                </span>
                <div className="flex flex-wrap gap-2">
                  {PLACED_ACADEMIC_YEARS.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        selectedYear === year
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* 137 Placed Students Roster Table */}
              <div className="space-y-6 pt-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-2">
                      <FileSpreadsheet className="h-6 w-6 text-blue-600" />
                      Placed Students Master Roster ({selectedYear})
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-1">
                      Showing official student placement records with roll numbers, employers, CTC packages, and department branches.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    {/* Branch Filter Tabs */}
                    <div className="p-1 bg-slate-100 rounded-xl flex gap-1 border border-slate-200 text-xs font-mono font-semibold">
                      {(['ALL', 'ECE', 'CSE'] as const).map(branch => (
                        <button
                          key={branch}
                          onClick={() => setBranchFilter(branch)}
                          className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                            branchFilter === branch
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {branch}
                        </button>
                      ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative flex-1 sm:w-72">
                      <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search student, roll no, employer..."
                        value={studentSearch}
                        onChange={(e) => setStudentSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
                      />
                    </div>
                  </div>
                </div>

                {/* Theme Blue Styled Table of 137 Placed Students */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-md">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-blue-800 text-white font-serif font-bold uppercase text-[11px] border-b-2 border-amber-400">
                        <th className="py-4 px-5 font-bold w-16 text-center text-amber-300">S.NO</th>
                        <th className="py-4 px-5 font-bold text-white">ROLL NUMBER</th>
                        <th className="py-4 px-6 font-bold text-white">STUDENT NAME</th>
                        <th className="py-4 px-6 font-bold text-white">EMPLOYER</th>
                        <th className="py-4 px-5 font-bold text-right text-amber-300">CTC</th>
                        <th className="py-4 px-5 font-bold text-center text-slate-100">BRANCH</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/70 text-xs font-sans bg-white text-slate-800">
                      {filteredStudents.map((item, idx) => (
                        <tr
                          key={item.sno}
                          className={`transition-colors duration-150 group ${
                            idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                          } hover:bg-blue-50/40`}
                        >
                          <td className="py-3.5 px-5 font-mono font-bold text-blue-800 text-center">
                            {item.sno}
                          </td>
                          <td className="py-3.5 px-5 font-mono font-bold text-slate-700 tracking-wider">
                            {item.rollNo}
                          </td>
                          <td className="py-3.5 px-6 font-serif font-bold text-slate-900 text-sm group-hover:text-blue-700">
                            {item.name}
                          </td>
                          <td className="py-3.5 px-6 font-sans font-bold text-slate-800">
                            <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-900">
                              {item.employer}
                            </span>
                          </td>
                          <td className="py-3.5 px-5 text-right font-mono font-bold text-amber-600 text-sm">
                            {item.ctc}
                          </td>
                          <td className="py-3.5 px-5 text-center">
                            <span
                              className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                                item.branch === 'CSE'
                                  ? 'bg-blue-100 text-blue-900 border border-blue-200'
                                  : 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                              }`}
                            >
                              {item.branch}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {filteredStudents.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-slate-400 text-sm italic">
                            No student records found matching "{studentSearch}".
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
