import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Building2, Users, Trophy, Award, Heart, Sparkles, BookOpen, Search,
  CheckCircle2, ChevronRight, Globe, Dumbbell, Activity, Compass, Flame,
  Coffee, ShieldCheck, ArrowRight, HeartHandshake, Smile, Target, Lightbulb, Rocket
} from 'lucide-react';
import { CAMPUS_FACILITIES } from '../data';

// Imported campus images
import DRONE_DEMO_IMAGE from '../assets/images/rcew_drone_demo.jpg';
import MUGDHA_IMAGE from '../assets/images/rcew_mugdha_celebrations.jpg';
import BOOTCAMP_IMAGE from '../assets/images/rcew_visual_tour_bootcamp.jpg';
import WORKSHOP_IMAGE from '../assets/images/rcew_visual_tour_workshop.jpg';
import LABS_IMAGE from '../assets/images/rcew_visual_tour_labs.jpg';

// Imported IEEE media assets
import IEEE_STB_LOGO from '../assets/images/ieee_rcew_stb17311_logo.png';
import IEEE_STUDENTS_GROUP from '../assets/images/ieee_students_group.jpg';
import IEEE_DRONE_EVENT from '../assets/images/ieee_drone_event.png';
import CSI_WORKSHOP_LAB from '../assets/images/csi_workshop_lab.png';

// Imported Extra Curricular media assets
import SWAMYJI_LAMP_LIGHTING from '../assets/images/rcew_swamyji_lamp_lighting.png';
import SWAMYJI_STAGE_MEETING from '../assets/images/rcew_swamyji_stage_meeting.png';
import DASARA_DRAMA_DANCE from '../assets/images/rcew_dasara_drama_dance.png';
import FRESHERS_DAY_STAGE from '../assets/images/rcew_freshers_day_stage.png';
import ALUMNI_MEET_STAGE from '../assets/images/rcew_alumni_meet_stage.png';
import EXTRACURRICULAR_MAIN_IMAGE from '../assets/images/rcew_extracurricular_main.jpg';

// Imported Sports Club media assets
import SPORTS_WINNER_IMAGE from '../assets/images/rcew_sports_cross_country_winner.jpg';
import SPORTS_BADMINTON_IMAGE from '../assets/images/rcew_sports_badminton_court.png';

// Imported NSS Club media assets
import NSS_PLEDGE_OATH from '../assets/images/rcew_nss_pledge_oath.jpg';
import NSS_BLOOD_DONATION_CAMP from '../assets/images/rcew_nss_blood_donation_camp.png';
import NSS_SOCIAL_AWARENESS_AUDITORIUM from '../assets/images/rcew_nss_social_awareness_auditorium.png';

// Imported Speak Easy Club media assets
import SPEAKEASY_MAIN_FLASH_THEATER from '../assets/images/rcew_speakeasy_main_flash_theater.png';
import SPEAKEASY_CLASS_GROUP1 from '../assets/images/rcew_speakeasy_class_group1.jpg';
import SPEAKEASY_CLASS_GROUP2 from '../assets/images/rcew_speakeasy_class_group2.png';

// Imported Foreign Languages Club media assets
import FRENCH_LANGUAGE_MOU from '../assets/images/rcew_french_language_mou.png';

// Imported SWASTHA Health Club media assets
import SWASTHA_INAUGURATION_GROUP from '../assets/images/rcew_swastha_inauguration_group.png';
import SWASTHA_MEDITATION_PRANAYAMA from '../assets/images/rcew_swastha_meditation_pranayama.jpg';
import SWASTHA_STAGE_DIGNITARIES from '../assets/images/rcew_swastha_stage_dignitaries.png';
import SWASTHA_AUDITORIUM_VIEW from '../assets/images/rcew_swastha_auditorium_view.png';
import SWASTHA_SPEAKER_PRESENTATION from '../assets/images/rcew_swastha_speaker_presentation.png';

// Imported Yoga Club media assets
import YOGA_MAIN_HERO from '../assets/images/rcew_yoga_main_hero.jpg';
import YOGA_STAGE_PERFORMANCE from '../assets/images/rcew_yoga_stage_performance.jpg';
import YOGA_PYRAMID_FLAG from '../assets/images/rcew_yoga_pyramid_flag.jpg';
import YOGA_MEDAL_WINNER from '../assets/images/rcew_yoga_medal_winner.png';
import YOGA_DHANURASANA_STAGE from '../assets/images/rcew_yoga_dhanurasana_stage.jpg';
import YOGA_GROUP_LAWN_FORMATION from '../assets/images/rcew_yoga_group_lawn_formation.jpg';

export default function CampusLife() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Sidebar Tab Definitions
  const tabs = [
    { id: 'campus-connect', name: 'Campus Connect', icon: Building2 },
    { id: 'ieee-society', name: 'IEEE Society', icon: Globe },
    { id: 'csi-society', name: 'Computer Society of India (CSI)', icon: BookOpen },
    { id: 'extra-curricular', name: 'Extra Curricular Activities', icon: Sparkles },
    { id: 'sports-club', name: 'Sports Club', icon: Dumbbell },
    { id: 'nss-club', name: 'NSS Club', icon: HeartHandshake },
    { id: 'speak-easy', name: 'SPEAK EASY CLUB', icon: Flame },
    { id: 'foreign-languages', name: 'Foreign Languages Club', icon: Compass },
    { id: 'msrc-club', name: 'MSRC Club', icon: Lightbulb },
    { id: 'swastha-health', name: 'RCEW Swastha – Health Club', icon: Activity },
    { id: 'yoga-club', name: 'Yoga Club', icon: Heart }
  ];

  // Active Tab State (defaults to 'campus-connect')
  const activeTab = useMemo(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl && tabs.some(t => t.id === tabFromUrl)) {
      return tabFromUrl;
    }
    return 'campus-connect';
  }, [searchParams]);

  const handleTabChange = (id: string) => {
    setSearchParams({ tab: id });
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-14 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white overflow-hidden mb-10 shadow-md">
        <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest font-mono bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
            Vibrant Student Ecosystem
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Campus Life & Clubs
          </h1>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-3xl mx-auto text-blue-100 text-xs sm:text-base leading-relaxed font-sans">
            Explore our dynamic campus culture, technical societies, sports facilities, language clubs, and student empowerment initiatives at Ravindra Engineering College for Women.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR NAVIGATION ================= */}
          <aside className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sticky top-24 z-20">
            <div className="pb-3 mb-3 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
                <Compass className="h-5 w-5 text-amber-500" />
                Campus Life Options
              </h2>
              <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">
                11 Sections
              </span>
            </div>

            {/* Direct Vertical Navbar Options List */}
            <nav className="flex flex-col space-y-1 max-h-[70vh] lg:max-h-none overflow-y-auto pr-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 translate-x-1'
                        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-yellow-300' : 'text-slate-400'}`} />
                      <span className="truncate">{tab.name}</span>
                    </div>
                    {isActive && <ChevronRight className="h-4 w-4 shrink-0 text-yellow-300" />}
                  </button>
                );
              })}
            </nav>

            {/* Additional Sidebar Widgets to maximize space usage */}
            <div className="mt-6 pt-4 border-t border-slate-200 space-y-4">
              
              {/* Widget 1: Quick Helpline & Contact */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white space-y-2.5 shadow-sm border border-blue-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-yellow-400 shrink-0" />
                  <h4 className="font-serif font-bold text-xs text-amber-300">24/7 Security & Anti-Ragging</h4>
                </div>
                <p className="text-[11px] text-blue-100 leading-snug">
                  100% safe women's campus with CCTV surveillance, resident wardens, and lady security staff.
                </p>
                <div className="pt-1 border-t border-white/10 text-[11px] font-mono space-y-1">
                  <p className="text-yellow-300 font-bold">Helpline: +91 92469 22869</p>
                  <p className="text-blue-200">Email: principal@recw.ac.in</p>
                </div>
              </div>

              {/* Widget 2: Accreditations Summary */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">Institutional Ratings</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">NAAC A+</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900 border border-blue-200">NBA CSE & ECE</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">AICTE Approved</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-900 border border-purple-200">JNTUA Affiliated</span>
                </div>
              </div>

              {/* Widget 3: Quick Admission Link */}
              <div className="pt-1">
                <a
                  href="#/admissions"
                  className="w-full py-2.5 px-3 bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 group cursor-pointer"
                >
                  <span>Apply for Admissions 2026-27</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </aside>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <main className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 min-h-[600px]">

            {/* 1. CAMPUS CONNECT */}
            {activeTab === 'campus-connect' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Campus Infrastructure</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">Campus Connect</h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">A state-of-the-art campus environment designed for holistic learning, safety, and modern living.</p>
                </div>

                {/* Facilities Grid with Enlarged HD Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CAMPUS_FACILITIES.map((facility) => (
                    <div key={facility.id} className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                      <div className="relative h-64 sm:h-72 overflow-hidden border-b border-slate-200">
                        <img src={facility.image} alt={facility.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full font-mono uppercase tracking-wider shadow-sm">
                          {facility.name}
                        </span>
                      </div>
                      <div className="p-5 space-y-4">
                        <h3 className="font-serif font-bold text-lg text-slate-900">{facility.name}</h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{facility.description}</p>
                        <div className="pt-3 border-t border-slate-200">
                          <span className="text-[10px] text-blue-600 font-mono font-bold uppercase tracking-wider block mb-2">Key Highlights</span>
                          <div className="grid grid-cols-1 gap-1.5">
                            {facility.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 space-y-2">
                  <h4 className="font-serif font-bold text-sm flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    24/7 Security & High-Speed Wi-Fi Ecosystem
                  </h4>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    RCEW features complete round-the-clock security monitoring with CCTV cameras, biometric attendance logging, high-speed optic fiber connectivity across all hostels and academic blocks, and dedicated transport buses connecting Kurnool city.
                  </p>
                </div>
              </motion.div>
            )}

            {/* 2. IEEE SOCIETY */}
            {activeTab === 'ieee-society' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                {/* Header & Official STB Badge */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                      Global Technical Chapter • STB17311
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                      IEEE : World’s Largest Technical Professional Organization
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      IEEE Student Branch at Ravindra College of Engineering for Women (RCEW)
                    </p>
                  </div>

                  <div className="w-20 h-20 bg-white p-1 rounded-2xl shadow-md border border-slate-200 shrink-0 flex items-center justify-center">
                    <img src={IEEE_STB_LOGO} alt="IEEE RCEW STB17311 Logo Badge" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* About IEEE Box */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white space-y-4 shadow-lg border border-blue-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-yellow-400 text-blue-950 rounded-xl font-bold font-serif text-sm">
                      IEEE
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-amber-300">ABOUT IEEE AT RCEW</h3>
                      <p className="text-xs text-blue-200 font-mono">Ravindra College of Engineering for Women</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
                    <p>
                      The IEEE Student Branch at Ravindra College of Engineering for Women (RCEW) offers students opportunities to enhance their technical expertise, engage in innovative research, and stay connected with the latest advancements in technology. This branch serves as a hub for learning, collaboration, and professional development, empowering students to become leaders in their fields and contribute to technological innovation.
                    </p>
                    <p>
                      Through access to a wealth of global resources, including technical journals, international conferences, and collaboration opportunities with professionals worldwide, the IEEE Student Branch at RCEW aims to empower students to become leaders in engineering and technology, fostering innovation and excellence.
                    </p>
                    <p className="font-semibold text-yellow-300">
                      RCEW is committed to shaping future technocrats by providing opportunities for growth, learning, and global exposure through IEEE.
                    </p>
                  </div>
                </div>

                {/* Photo Gallery Grid with Enlarged HD Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={IEEE_STUDENTS_GROUP} alt="IEEE Students Group at RCEW Auditorium" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">IEEE RCEW Student Members & Chapter Leaders</span>
                    </div>
                  </div>

                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={IEEE_DRONE_EVENT} alt="IEEE Drone Technology Demonstration at RCEW" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">Drone Technology Demonstration & Field Event</span>
                    </div>
                  </div>
                </div>

                {/* IEEE SOCIETIES AT RCEW */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Specialized Technical Chapters</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      IEEE Societies at RCEW
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Ravindra College of Engineering for Women (RCEW) is proud to host a range of IEEE Societies that provide a focused platform for students to explore specialized fields, collaborate on technical projects, and advance their skills in emerging technologies.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* WIE */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-500 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-sm">IEEE Women in Engineering (WIE)</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Aims to inspire, engage, and empower women to excel in engineering and technology.
                      </p>
                    </div>

                    {/* Computer Society */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-yellow-500 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-sm">IEEE Computer Society</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Focuses on computer science, software development, and cutting-edge advancements in computing.
                      </p>
                    </div>

                    {/* Computational Intelligence */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-yellow-500 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-sm">IEEE Computational Intelligence Society</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Promotes research and innovation in artificial intelligence, machine learning, and data science.
                      </p>
                    </div>

                    {/* Nanotechnology Council */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-yellow-500 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-sm">IEEE Nanotechnology Council</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Encourages exploration and innovation in nanotechnology and its practical applications.
                      </p>
                    </div>

                    {/* Signal Processing */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-yellow-500 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-sm">IEEE Signal Processing Society</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Specializes in signal processing, image processing, and data analytics for real-world challenges.
                      </p>
                    </div>

                    {/* Robotics */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-yellow-500 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-sm">IEEE Robotics and Automation Society</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Fosters research and development in robotics, automation systems, and intelligent technologies.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 text-xs leading-relaxed space-y-1">
                    <span className="font-bold flex items-center gap-1.5 text-blue-900">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      IEEE Student Branch at RCEW (Parent Branch)
                    </span>
                    <p className="text-slate-700">
                      Acts as the parent branch, coordinating all IEEE activities and societies at the institution. These IEEE Societies at RCEW are dedicated to empowering students with knowledge, technical expertise, and professional skills.
                    </p>
                  </div>
                </div>

                {/* IEEE FUNDING AWARD BOX */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-blue-950 shadow-md space-y-3 relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-950/20 pb-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-950 text-yellow-300 px-2.5 py-0.5 rounded-full">
                        Prestigious International Grant
                      </span>
                      <h4 className="font-serif font-bold text-xl text-blue-950 mt-1">
                        IEEE FUNDING APPROVED: $2,313.00
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold bg-white/40 text-blue-950 px-3 py-1 rounded-full border border-blue-950/20">
                      SPS & HTB Grant
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm font-semibold">
                    <p>
                      On behalf of the <span className="underline">IEEE Signal Processing Society (SPS)</span> and the <span className="underline">IEEE Humanitarian Technologies Board (HTB)</span>, a research grant of <strong>$2,313.00</strong> has been approved for RCEW.
                    </p>
                    <div className="p-3 rounded-xl bg-blue-950 text-white space-y-1 mt-2">
                      <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">Approved Project Title</span>
                      <p className="font-serif font-bold text-sm text-yellow-300">
                        "Automatic Water Distribution for Piped and Micro Irrigation Network for Optimal Water Utilization"
                      </p>
                    </div>
                  </div>
                </div>

                {/* EVENTS AND BENEFITS */}
                <div className="space-y-6 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Growth & Exposure</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      Activities & Member Benefits
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      At Ravindra College of Engineering for Women (RCEW), IEEE offers a variety of activities to enhance technical knowledge and professional skills among students. These include technical workshops, international conferences, and competitions in coding, robotics, and projects.
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <Globe className="h-5 w-5 text-blue-600 mx-auto" />
                      <span className="font-bold text-xs text-slate-900 block">Global Networking</span>
                      <span className="text-[10px] text-slate-500">Connect with global engineers</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <BookOpen className="h-5 w-5 text-blue-600 mx-auto" />
                      <span className="font-bold text-xs text-slate-900 block">IEEE Xplore Access</span>
                      <span className="text-[10px] text-slate-500">Digital Library Access</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <Sparkles className="h-5 w-5 text-blue-600 mx-auto" />
                      <span className="font-bold text-xs text-slate-900 block">Emerging Tech Skills</span>
                      <span className="text-[10px] text-slate-500">Hands-on workshops</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <Trophy className="h-5 w-5 text-blue-600 mx-auto" />
                      <span className="font-bold text-xs text-slate-900 block">Scholarships & Awards</span>
                      <span className="text-[10px] text-slate-500">Global recognition</span>
                    </div>
                  </div>

                  {/* 14 EVENTS TABLE */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-amber-500" />
                      IEEE RCEW Conducted Events Roster
                    </h4>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px]">
                          <tr>
                            <th className="px-3.5 py-3 text-center w-14">S.No</th>
                            <th className="px-3.5 py-3">IEEE Event Name & Topic</th>
                            <th className="px-3.5 py-3 text-right w-28">Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">1</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">Conduct a Session on Achieving Problem-Solution Fit and Product-Market Fit</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">24-Jan-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">2</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">YESIST12-2024 Project Expo</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">27-Mar-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">3</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">TECH GIRLS – Empower the GIRLS through Emerging Technologies Education</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">14-Aug-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">4</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">MATLAB Essentials for Image Processing</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">14-Aug-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">5</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">WIE Pro Talks</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">30-Aug-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">6</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">Micro and Nano-Driven Antennas, Circuits, and Sensors for Telehealth and Telemedicine</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">20-Sep-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">7</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">Navigating the World of IoT Using Model-Based Design</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">21-Sep-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">8</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">Smart Self-Powered Flexible Sensory Devices</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">24-Sep-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">9</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">Workshop on “ROBOTICS”</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">27-Oct-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">10</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">Hands on 2 days session on FPGA Architecture on and Programming Using Verilog HDL</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">23-Dec-24</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">11</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">Best Career Opportunities in VLSI – By Dr Raghunath, Bangalore</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">27-Jan-25</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">12</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">BSNL Visit by 2nd Yr ECE students</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">31-Jan-25</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">13</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">Two days workshop on 5G Ran- By Sreeramulu BV</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">12-Mar-25</td>
                          </tr>
                          <tr className="hover:bg-blue-50/50 transition-colors">
                            <td className="px-3.5 py-2.5 text-center font-mono font-bold text-slate-400">14</td>
                            <td className="px-3.5 py-2.5 font-bold text-slate-900">Two days workshop on Design and Simulation in Robotics- By Dr. J. Sudharsan, PhD(Robotics)</td>
                            <td className="px-3.5 py-2.5 text-right font-mono font-bold text-blue-700">19-Mar-25</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. COMPUTER SOCIETY OF INDIA (CSI) */}
            {activeTab === 'csi-society' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                {/* Header & Tag */}
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    Premier IT Association • CSE Department Chapter
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Computer Society of India ( CSI )
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Ravindra College of Engineering for Women (RCEW), Kurnool
                  </p>
                </div>

                {/* Featured Workshop Image Banner */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                  <img src={CSI_WORKSHOP_LAB} alt="CSI Computer Lab Hands-on Workshop Session at RCEW" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="text-[10px] font-mono uppercase bg-yellow-400 text-blue-950 px-2.5 py-0.5 rounded font-bold">
                        Hands-On Code Lab Session
                      </span>
                      <h3 className="font-serif font-bold text-xl">CSI Student Chapter & Advanced Computing Labs</h3>
                    </div>
                  </div>
                </div>

                {/* About CSI Callout */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white space-y-4 shadow-md border border-blue-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-400 text-blue-950 rounded-xl font-bold font-serif text-sm">
                      CSI
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-amber-300">ABOUT COMPUTER SOCIETY OF INDIA AT RCEW</h3>
                      <p className="text-xs text-blue-200 font-mono">Department of Computer Science & Engineering</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
                    At Ravindra College of Engineering for Women, Kurnool, our affiliation with the Computer Society of India (CSI) serves as a cornerstone for advancing the knowledge and skills of our Computer Science and Engineering (CSE) department. CSI provides a dynamic platform for both faculty and students to engage with the latest trends and innovations in the field of computer science, ensuring we remain at the forefront of technological advancement.
                  </p>
                </div>

                {/* KEY ACTIVITIES AND BENEFITS (7 PILLARS GRID) */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Growth & Skill Pillars</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      Key Activities and Benefits
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Empowering students through continuous tech exposure, practical coding, industry mentorship, and career building.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* 1. Hackathons */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Hackathons</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Intensive 24/48-hour competitive coding challenges where students build software solutions for real-world problems.
                      </p>
                    </div>

                    {/* 2. Workshops */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Workshops</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Hands-on technical sessions covering Full Stack Web Development, Python, AI/ML, Cloud Computing, and Cyber Security.
                      </p>
                    </div>

                    {/* 3. Conferences */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
                          <Globe className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Conferences</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Opportunities to attend and present research papers at National and International CSI Conventions.
                      </p>
                    </div>

                    {/* 4. Seminars and Guest Lectures */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0">
                          <Users className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Seminars & Guest Lectures</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Industry stalwarts and IT leaders share insights on emerging software trends, DevOps, and corporate expectations.
                      </p>
                    </div>

                    {/* 5. Collaborative Projects */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
                          <Target className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Collaborative Projects</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Interdisciplinary team projects developing scalable web applications, mobile apps, and open-source contributions.
                      </p>
                    </div>

                    {/* 6. Skill Development Programs */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0">
                          <Trophy className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Skill Development Programs</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Rigorous training in Data Structures, Competitive Programming, System Design, and Technical Interview Prep.
                      </p>
                    </div>

                    {/* 7. Networking Opportunities */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2 sm:col-span-2 lg:col-span-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-600 text-white rounded-lg shrink-0">
                          <HeartHandshake className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Networking Opportunities</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Connect with IT professionals, CSI alumni network, tech entrepreneurs, and academic researchers across India to unlock internships and referral opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional CSI Ecosystem Highlights */}
                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 space-y-3">
                  <h4 className="font-serif font-bold text-base text-blue-900 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    CSI National Student Convention & Faculty Development
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Under CSI sponsorship, RCEW faculty and students regularly participate in Faculty Development Programs (FDPs), publish technical newsletters, and receive national recognition in CSI student project competitions.
                  </p>
                </div>
              </motion.div>
            )}

            {/* 4. EXTRA CURRICULAR ACTIVITIES */}
            {activeTab === 'extra-curricular' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                
                {/* Header & Tag */}
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    Cultural & Student Talent Oversight
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Extra Curricular Activities Committee
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    The Extra Curricular Activities Committee will look after the various extra curricular activities to be conducted in the college.
                  </p>
                </div>

                {/* Functions & Responsibilities Callout */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white space-y-3 shadow-md border border-blue-700">
                  <h3 className="font-serif font-bold text-lg text-amber-300 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-400" />
                    Functions & Responsibilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-blue-100 font-sans">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15">
                      <CheckCircle2 className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>To plan the various events to be conducted under various clubs to bring out the talents of students.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15">
                      <CheckCircle2 className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>Conduct various events to the students at appropriate intervals throughout the academic year.</span>
                    </div>
                  </div>
                </div>

                {/* MAIN POP-OUT FEATURED IMAGE (NO TAGLINE AS REQUESTED) */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Committee & Student Life</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      Extra Curricular Activities Highlights
                    </h3>
                  </div>

                  {/* Main Pop-out Featured Image (No tagline overlay) */}
                  <div className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 group">
                    <img
                      src={EXTRACURRICULAR_MAIN_IMAGE}
                      alt="Extra Curricular Activities Committee & Students"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* 2x2 Grid of Event Photos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    {/* Photo 1: Dasara Celebrations */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={DASARA_DRAMA_DANCE} alt="Dasara Mahishasura Mardhini Traditional Dance Drama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Dasara Mahishasura Mardhini Traditional Dance Drama
                        </span>
                      </div>
                    </div>
                    {/* Photo 1: Lamp Lighting */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={SWAMYJI_LAMP_LIGHTING} alt="Lamp Lighting by Sri Sri Sri Santh Sadanandagiri Swamy Ji" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Lamp Lighting by Sri Sri Sri Santh Sadanandagiri Swamy Ji
                        </span>
                      </div>
                    </div>

                    {/* Photo 2: Stage Dignitaries Meeting */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={SWAMYJI_STAGE_MEETING} alt="Auditorium Dignitaries & Spiritual Discourse Meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Spiritual Discourse & Stage Dignitaries Gathering
                        </span>
                      </div>
                    </div>

                    {/* Photo 3: Elite Freshers */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={FRESHERS_DAY_STAGE} alt="Elite Freshers Day Inauguration Stage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Elite Freshers Day Stage Celebrations
                        </span>
                      </div>
                    </div>

                    {/* Photo 4: Alumni Meet Stage */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={ALUMNI_MEET_STAGE} alt="Punarmilan Alumni Meet Stage Presentation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Punarmilan – Alumni Meet (2007-2012 Batches)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9-MEMBER COMMITTEE TABLE */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-500" />
                    Extra Curricular Activities Committee Members
                  </h3>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 text-center w-14">S.No</th>
                          <th className="px-4 py-3">Name of the Member</th>
                          <th className="px-4 py-3">Profession</th>
                          <th className="px-4 py-3 text-right">Designation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">1</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Dr .N. Sreekanth</td>
                          <td className="px-4 py-2.5">Principal</td>
                          <td className="px-4 py-2.5 text-right font-bold text-blue-700">Convener</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">2</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mrs. G. Spandana</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-blue-700">Member in charge</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">3</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mrs.Y.Indira Priyadarshini</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-slate-600">Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">4</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mrs.M.Jyothi</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-slate-600">Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">5</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mrs. A. Sai Rekha</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-slate-600">Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">6</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Ms. K.Swathi</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-slate-600">Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">7</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Ms. JanapalaAmrutha Vani (203T1A0417)</td>
                          <td className="px-4 py-2.5">Student</td>
                          <td className="px-4 py-2.5 text-right font-bold text-emerald-700">Student Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">8</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Ms Shaik Tayyiba Fathima (213T1A0598)</td>
                          <td className="px-4 py-2.5">Student</td>
                          <td className="px-4 py-2.5 text-right font-bold text-emerald-700">Student Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">9</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Ms. Ganda Maheswari (213T1A3114)</td>
                          <td className="px-4 py-2.5">Student</td>
                          <td className="px-4 py-2.5 text-right font-bold text-emerald-700">Student Member</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 9-ACTIVITY CONDUCTED ROSTER TABLE */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Events Conducted Roster
                  </h3>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 text-center w-14">S.No</th>
                          <th className="px-4 py-3">Name of the Activity</th>
                          <th className="px-4 py-3 text-right w-36">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">1</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Freshers Day</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">11-Jan-2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">2</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mugdha 2k24</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">08-Mar-2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">3</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Farewell Day</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">02-May-2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">4</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Orientation Day</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">12-Aug-2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">5</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Dasara Celebrations</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">07-Oct-2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">6</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Sri Sri Sri Santh Sadanandagiri Swamy Ji visit to RCEW</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">15-Dec-2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">7</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">World Meditation Day – By Art of Living</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">21-Dec-2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">8</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Swami Vivekananda Birthday Celebrations</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">08-Jan-2025</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">9</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Punarmilan – An Alumni Meet(2007-2012)Batches</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">11-Jan-2025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </motion.div>
            )}

            {/* 5. SPORTS CLUB */}
            {activeTab === 'sports-club' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                
                {/* Header & Tag */}
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    Fitness & Athletic Excellence
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    Sports Club
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    The Sports Club at Ravindra College of Engineering for Women, Kurnool, is dedicated to promoting physical fitness, teamwork, and a spirit of healthy competition among our students. Our club offers a variety of indoor and outdoor games, ensuring that students have ample opportunities to engage in physical activities and sports, which are crucial for their overall development.
                  </p>
                </div>

                {/* Functions & Responsibilities Callout */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white space-y-3 shadow-md border border-blue-700">
                  <h3 className="font-serif font-bold text-lg text-amber-300 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-400" />
                    Functions & Responsibilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-blue-100 font-sans">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15">
                      <CheckCircle2 className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>To Plan and organize diverse sports events under various clubs to identify and nurture students’ talents.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15">
                      <CheckCircle2 className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>Conduct sports activities and competitions regularly to provide students with consistent opportunities to excel.</span>
                    </div>
                  </div>
                </div>

                {/* STUDENT ACHIEVEMENTS HIGHLIGHT CARD (D. VENKATESWARI) */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-blue-950 shadow-md space-y-4 relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-950/20 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-blue-950 text-yellow-300 rounded-xl font-bold font-mono text-xs uppercase">
                        State & National Rank
                      </div>
                      <h3 className="font-serif font-bold text-xl text-blue-950">
                        Student Achievements
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold bg-white/40 text-blue-950 px-3 py-1 rounded-full border border-blue-950/20">
                      Jan 2025 Athletic Feat
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 space-y-3 text-xs sm:text-sm font-medium leading-relaxed">
                      <p>
                        <strong className="text-blue-950 text-base font-serif block">D. Venkateswari (III CAI Student)</strong>
                        Participated in the <strong>59th A.P. Cross Country Championship State Competition</strong> in West Godavari, Tanuku, on January 5, 2025. She secured <strong>4th place</strong> in the women’s category out of 30 participants across Andhra Pradesh!
                      </p>
                      <div className="p-3 rounded-xl bg-blue-950 text-white space-y-1">
                        <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">National Selection</span>
                        <p className="font-serif text-xs text-yellow-300">
                          Selected for the <strong>59th National Cross Country Athletic Championship</strong> held in Meerut, Uttar Pradesh, on January 12, 2025, under the guidance of Physical Director & Coach <strong>G. Kasi Rao</strong>.
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 relative h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60 group">
                      <img src={SPORTS_WINNER_IMAGE} alt="D. Venkateswari AP Cross Country Championship Winner with Coach G. Kasi Rao" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  </div>
                </div>

                {/* INDOOR & OUTDOOR SPORTS GALLERY */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={SPORTS_WINNER_IMAGE} alt="State Athletic Championship Trophy Presentation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                      <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                        59th AP State Athletic Championship Trophy & Medals
                      </span>
                    </div>
                  </div>

                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={SPORTS_BADMINTON_IMAGE} alt="Indoor Badminton Complex & Faculty/Student Tournament" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                      <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                        Indoor Shuttle Badminton Complex & Faculty Tournament
                      </span>
                    </div>
                  </div>
                </div>

                {/* 8-MEMBER COMMITTEE TABLE */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-500" />
                    Sports Club Committee Members
                  </h3>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 text-center w-14">S.No</th>
                          <th className="px-4 py-3">Name of the Member</th>
                          <th className="px-4 py-3">Profession</th>
                          <th className="px-4 py-3 text-right">Designation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">1</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Dr . N. Sreekanth</td>
                          <td className="px-4 py-2.5">Principal</td>
                          <td className="px-4 py-2.5 text-right font-bold text-blue-700">Convener</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">2</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mr P.Kishor Kumar</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-blue-700">Member in charge</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">3</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mr K Rani</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-blue-700">Member in charge</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">4</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mrs.M.Jyothirmai</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-slate-600">Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">5</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mrs.G.Spandana</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-slate-600">Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">6</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Ms.C.G.Chandra Mythri (233TA04012)</td>
                          <td className="px-4 py-2.5">Student</td>
                          <td className="px-4 py-2.5 text-right font-bold text-emerald-700">Student Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">7</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Ms. K.Nithya (233TA05136)</td>
                          <td className="px-4 py-2.5">Student</td>
                          <td className="px-4 py-2.5 text-right font-bold text-emerald-700">Student Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">8</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Ms D.Usha Sree (223T1A0420)</td>
                          <td className="px-4 py-2.5">Student</td>
                          <td className="px-4 py-2.5 text-right font-bold text-emerald-700">Student Member</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">9</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Ms.B.Lasya Reddy (223T1A3208)</td>
                          <td className="px-4 py-2.5">Student</td>
                          <td className="px-4 py-2.5 text-right font-bold text-emerald-700">Student Member</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 26-EVENT CONDUCTED ROSTER TABLE */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Sports Events Conducted Roster (26 Events)
                  </h3>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs max-h-[450px] overflow-y-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px] sticky top-0 z-10">
                        <tr>
                          <th className="px-4 py-3 text-center w-14">S.No</th>
                          <th className="px-4 py-3">Event Name & Tournament</th>
                          <th className="px-4 py-3 text-right w-36">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">1</td><td className="px-4 py-2.5 font-bold text-slate-900">Basketball (Mugdha-2k23)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">28-Feb-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">2</td><td className="px-4 py-2.5 font-bold text-slate-900">Chess (Mugdha-2k23)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">01-Mar-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">3</td><td className="px-4 py-2.5 font-bold text-slate-900">Kabaddi (Mugdha-2k23)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">02-Mar-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">4</td><td className="px-4 py-2.5 font-bold text-slate-900">ThrowBall (Mugdha-2k23)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">04-Mar-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">5</td><td className="px-4 py-2.5 font-bold text-slate-900">Tug of War (Mugdha-2k23)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">05-Mar-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">6</td><td className="px-4 py-2.5 font-bold text-slate-900">Badminton (Mugdha-2k23)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">06-Mar-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">7</td><td className="px-4 py-2.5 font-bold text-slate-900">Tug of War (Independence day -24)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">13-Aug-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">8</td><td className="px-4 py-2.5 font-bold text-slate-900">Chess competition (Independence day -24)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">14-Aug-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">9</td><td className="px-4 py-2.5 font-bold text-slate-900">Musical Chairs (Independence day -24)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">14-Aug-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">10</td><td className="px-4 py-2.5 font-bold text-slate-900">Carroms competition (Independence day -24)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">14-Aug-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">11</td><td className="px-4 py-2.5 font-bold text-slate-900">Running (Sports Day -24)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">22-Aug-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">12</td><td className="px-4 py-2.5 font-bold text-slate-900">Lemon & spoon (Sports Day -24)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">23-Aug-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">13</td><td className="px-4 py-2.5 font-bold text-slate-900">Kabaddi (Sports Day -24)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">24-Aug-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">14</td><td className="px-4 py-2.5 font-bold text-slate-900">Badminton (Sports Day -24)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">27-Aug-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">15</td><td className="px-4 py-2.5 font-bold text-slate-900">Kho-Kho (Sports Day -24)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">28-Aug-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">16</td><td className="px-4 py-2.5 font-bold text-slate-900">IN & OUT (Teachers day)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">02-Sep-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">17</td><td className="px-4 py-2.5 font-bold text-slate-900">Lemon & Spoon (Teachers day)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">02-Sep-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">18</td><td className="px-4 py-2.5 font-bold text-slate-900">Musical Chairs (Teachers day)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">03-Sep-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">19</td><td className="px-4 py-2.5 font-bold text-slate-900">Tug-of-War (Teachers day)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">03-Sep-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">20</td><td className="px-4 py-2.5 font-bold text-slate-900">Carroms (Teachers day)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">04-Sep-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">21</td><td className="px-4 py-2.5 font-bold text-slate-900">Cricket (for Gents faculty)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">16-Dec-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">22</td><td className="px-4 py-2.5 font-bold text-slate-900">Badminton for Gents (faculty)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">19-Dec-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">23</td><td className="px-4 py-2.5 font-bold text-slate-900">Badminton for Women (faculty)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">20-Dec-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">24</td><td className="px-4 py-2.5 font-bold text-slate-900">Throw Ball for Ladies (faculty)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">21-Dec-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">25</td><td className="px-4 py-2.5 font-bold text-slate-900">Tug of War for Ladies (faculty)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">23-Dec-24</td></tr>
                        <tr className="hover:bg-blue-50/50 transition-colors"><td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">26</td><td className="px-4 py-2.5 font-bold text-slate-900">Tug of War for Gents (faculty)</td><td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">24-Dec-24</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </motion.div>
            )}

            {/* 6. NSS CLUB */}
            {activeTab === 'nss-club' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                
                {/* Header & Tag */}
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    Social Responsibility & Rural Community Service
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                    NSS Club at Ravindra College of Engineering for Women
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    The NSS (National Service Scheme) Club at Ravindra College of Engineering for Women, Kurnool, is dedicated to fostering a sense of social responsibility and community service among our students. Through a variety of activities, the NSS Club aims to make a positive impact on nearby villages and our campus environment.
                  </p>
                </div>

                {/* Main Hero Photo: NSS Pledge Oath */}
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 group">
                  <img src={NSS_PLEDGE_OATH} alt="NSS Volunteers Taking National Service Oath at RCEW" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                    <div className="text-white space-y-1">
                      <span className="text-xs font-mono uppercase bg-yellow-400 text-blue-950 px-3 py-1 rounded-full font-bold shadow-sm">
                        NOT ME, BUT YOU
                      </span>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl drop-shadow-md">
                        NSS Volunteer Induction & National Service Pledge Ceremony
                      </h3>
                    </div>
                  </div>
                </div>

                {/* KEY ACTIVITIES AND INITIATIVES (6 PILLARS GRID) */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Community Outreach</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      Key Activities and Initiatives
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Empowering rural communities through sustainable development, health awareness, and environmental conservation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* 1. Village Outreach Programs */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
                          <HeartHandshake className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Village Outreach Programs</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        7-day special annual residential camps in adopted rural villages around Kurnool providing health screening and empowerment.
                      </p>
                    </div>

                    {/* 2. Tree Planting Drives */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Tree Planting Drives</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Mass sapling plantation drives (*Vanamahotsavam*) in campus and surrounding rural belts to combat climate change.
                      </p>
                    </div>

                    {/* 3. Campus Greenery Maintenance */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-amber-100 text-amber-700 rounded-lg shrink-0">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Campus Greenery Maintenance</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Plastic-free campus drives, botanical garden care, and organic waste management by student volunteers.
                      </p>
                    </div>

                    {/* 4. Cleanliness and Hygiene Campaigns */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg shrink-0">
                          <Users className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Cleanliness & Hygiene Campaigns</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        *Swachh Bharat* cleanliness rallies and personal health and hygiene awareness workshops for rural women.
                      </p>
                    </div>

                    {/* 5. Social Awareness Programs */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-rose-100 text-rose-700 rounded-lg shrink-0">
                          <Trophy className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Social Awareness Programs</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Road safety awareness rallies, anti-ragging seminars, gender equality drives, and National Voters Day pledge programs.
                      </p>
                    </div>

                    {/* 6. Disaster Relief and Support */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-purple-100 text-purple-700 rounded-lg shrink-0">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Disaster Relief & Blood Donation</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Annual voluntary blood donation camps in partnership with GGH Kurnool and emergency relief aid mobilization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FEATURED INITIATIVES CALLOUT: TREE PLANTING & LITERACY CAMPAIGNS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* Tree Planting Highlight Card */}
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-emerald-600 text-white rounded-xl">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif font-bold text-base text-emerald-950">Tree Planting Drives (Haritha Haram)</h4>
                    </div>
                    <p className="text-xs text-emerald-900 leading-relaxed">
                      NSS volunteers regularly plant fruit-bearing and shade trees inside the RCEW campus and neighboring schools, contributing to biodiversity and environmental sustainability.
                    </p>
                  </div>

                  {/* Literacy Campaigns Highlight Card */}
                  <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 space-y-3 shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-blue-600 text-white rounded-xl">
                        <Users className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif font-bold text-base text-blue-950">Literacy Campaigns & Digital Skills</h4>
                    </div>
                    <p className="text-xs text-blue-900 leading-relaxed">
                      RCEW engineering students teach basic reading, arithmetic, digital smartphone usage, and online banking safety to women and young girls in surrounding rural areas.
                    </p>
                  </div>
                </div>

                {/* PHOTO GALLERY GRID (BLOOD DONATION & AWARENESS SESSIONS) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={NSS_BLOOD_DONATION_CAMP} alt="NSS Voluntary Blood Donation & Health Camp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                      <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                        Voluntary Blood Donation & Health Diagnostic Camp
                      </span>
                    </div>
                  </div>

                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={NSS_SOCIAL_AWARENESS_AUDITORIUM} alt="Social Awareness & Technology Bootcamp Auditorium Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                      <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                        Social Awareness & Technology Bootcamp Session
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* 7. SPEAK EASY CLUB */}
            {activeTab === 'speak-easy' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                
                {/* Header & Tag */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                      Public Speaking & Conversational Skills
                    </span>
                    <span className="text-xs font-mono font-bold bg-amber-400 text-blue-950 px-2.5 py-0.5 rounded-md shadow-2xs">
                      Grow and Thrive
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                    SPEAK EASY CLUB
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    When you finish Linguaskill, you can join the exclusive Speak Easy Club, where you can get intense real-life experiences that will boost your confidence and conversational skills.
                  </p>
                </div>

                {/* MAIN FEATURED IMAGE (BIGGER SIZE - FLASH THEATER STAGE PRESENTATION) */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Featured Stage Event</span>
                  <div className="relative h-[420px] sm:h-[540px] rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 group bg-slate-900">
                    <img
                      src={SPEAKEASY_MAIN_FLASH_THEATER}
                      alt="Speak Easy English Club Flash Theater Event Stage Presentation at RCEW Auditorium"
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6 sm:p-8 pointer-events-none">
                      <div className="text-white space-y-1">
                        <span className="text-xs font-mono uppercase bg-yellow-400 text-blue-950 px-3 py-1 rounded-full font-bold shadow-sm">
                          Flash Theater Event
                        </span>
                        <h3 className="font-serif font-bold text-xl sm:text-2xl drop-shadow-md">
                          Speak Easy English Club Stage Presentation & Auditorium Performance
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WHY WE STARTED SPEAK EASY CLUB */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white space-y-3 shadow-md border border-blue-700">
                  <h3 className="font-serif font-bold text-lg text-amber-300 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-400" />
                    Why We Started Speak Easy Club
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
                    Today, it’s a crucial intelligence threat to communicate clearly. Graduates of Linguaskill can use the Speak Easy Club to learn English, which improves their confidence and gets them ready for problems they may face in the real world.
                  </p>
                </div>

                {/* SPEAK EASY CLUB BENEFITS (4 PILLARS) */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Growth & Skill Pillars</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      Speak Easy Club Benefits
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
                          <Flame className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Real-Life Tasks & Scenarios</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Develop language skills through interactive real-life tasks, conversational simulations, and public speaking scenarios.
                      </p>
                    </div>

                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                          <Users className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Supportive Alumni Network</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Develop a supportive network of peers and Linguaskill alumni with comparable career aims and shared growth experiences.
                      </p>
                    </div>

                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-amber-100 text-amber-700 rounded-lg shrink-0">
                          <Trophy className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Academic & Professional Mastery</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Learn high-impact communication skills tailored for academic presentations, interview success, and global corporate environments.
                      </p>
                    </div>

                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-purple-100 text-purple-700 rounded-lg shrink-0">
                          <Award className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-sm">Resume & Career Building</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Build your professional resume by demonstrating verified dedication to advanced English mastery and global communication confidence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* KEY MEMBER BENEFITS (5 PILLARS) */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Exclusive Perks</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      Key Member Benefits
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-xs font-bold text-blue-900 font-serif flex items-center gap-2">
                        <Award className="h-4 w-4 text-amber-500" /> Certification
                      </span>
                      <p className="text-xs text-slate-600">Showcase your active club involvement and verified Linguaskill mastery badge.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-xs font-bold text-blue-900 font-serif flex items-center gap-2">
                        <Users className="h-4 w-4 text-amber-500" /> Professional Network
                      </span>
                      <p className="text-xs text-slate-600">Make valuable professional relationships in a varied, supportive peer environment.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-xs font-bold text-blue-900 font-serif flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-500" /> Personal Growth
                      </span>
                      <p className="text-xs text-slate-600">Gain confidence, cultural understanding, and worldwide communication skills.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-xs font-bold text-blue-900 font-serif flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-500" /> Expert Workshops
                      </span>
                      <p className="text-xs text-slate-600">Enhance creative writing, public speaking, storytelling, and listen to industry leaders & language experts.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 sm:col-span-2 lg:col-span-2">
                      <span className="text-xs font-bold text-blue-900 font-serif flex items-center gap-2">
                        <Globe className="h-4 w-4 text-amber-500" /> Cultural Exchange Programs
                      </span>
                      <p className="text-xs text-slate-600">Learning from diverse international perspectives, global literature, and cross-cultural communication forums.</p>
                    </div>
                  </div>
                </div>

                {/* SCHOOL PARTNERSHIPS */}
                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3 shadow-xs">
                  <h3 className="font-serif font-bold text-lg text-amber-900 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-amber-600" />
                    School Partnerships & Community Outreach
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                    Speak Easy Club works with high schools to spread its message. Through this cooperation, we teach younger kids advanced English communication skills for academic and vocational success.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-amber-200">
                      <strong className="block text-amber-900 font-serif mb-0.5">Early Instruction</strong>
                      Early English instruction and improved communication fundamentals.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-amber-200">
                      <strong className="block text-amber-900 font-serif mb-0.5">Interactive Seminars</strong>
                      Debates, public speaking contests, and language seminars for school students.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-amber-200">
                      <strong className="block text-amber-900 font-serif mb-0.5">Exam Prep</strong>
                      Global communication confidence and competitive exam language prep.
                    </div>
                  </div>
                </div>

                {/* HOW TO JOIN SPEAK EASY CLUB & CONTACT BOX */}
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 space-y-4">
                  <h3 className="font-serif font-bold text-lg text-blue-950 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    How to Join Speak Easy Club
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="p-3.5 bg-white rounded-xl border border-blue-200 space-y-1">
                      <span className="font-bold text-blue-900 font-mono block">1. Qualification</span>
                      <p className="text-slate-600">Open to Linguaskill graduates or partner institution students.</p>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-blue-200 space-y-1">
                      <span className="font-bold text-blue-900 font-mono block">2. Registration</span>
                      <p className="text-slate-600">Register through MSMF or call/email the club organizer.</p>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-blue-200 space-y-1">
                      <span className="font-bold text-blue-900 font-mono block">3. Induction</span>
                      <p className="text-slate-600">Learn about club events, rules, and expectations at orientation.</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-blue-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="text-slate-700 font-medium">Contact us for additional information or to join the Speak Easy Club:</span>
                    <a href="mailto:support@msmfclasses.com" className="font-mono font-bold text-blue-700 bg-white px-3 py-1.5 rounded-lg border border-blue-300 hover:bg-blue-600 hover:text-white transition-colors">
                      ✉ support@msmfclasses.com
                    </a>
                  </div>
                </div>

                {/* PHOTO GALLERY GRID (CLASSROOM PRACTICE SESSIONS) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={SPEAKEASY_CLASS_GROUP1} alt="Cambridge Lingua-skills IIIrd Year Students Group Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                      <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                        Cambridge Lingua-skills IIIrd Year Students Group
                      </span>
                    </div>
                  </div>

                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                    <img src={SPEAKEASY_CLASS_GROUP2} alt="Lingua-skills Advanced Classroom Practice Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                      <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                        Lingua-skills Interactive Classroom Session
                      </span>
                    </div>
                  </div>
                </div>

                {/* EVENT CONDUCTED ROSTER TABLE */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Events Conducted Roster
                  </h3>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 text-center w-14">S.No</th>
                          <th className="px-4 py-3">Name of the Activity</th>
                          <th className="px-4 py-3 text-right w-36">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">1</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">An Awareness Program on Cambridge Lingua-skills Certification for IIIrd yr students.</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">24-Jan-25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </motion.div>
            )}

            {/* 8. FOREIGN LANGUAGES CLUB */}
            {activeTab === 'foreign-languages' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                
                {/* Header & Tag */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                      Multilingual Competencies & Global Opportunities
                    </span>
                    <span className="text-xs font-mono font-bold bg-amber-400 text-blue-950 px-2.5 py-0.5 rounded-md shadow-2xs">
                      🇫🇷 French Language Program
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                    Foreign Languages Club
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Broadening international career horizons, study abroad options, and global MNC eligibility through specialized foreign language instruction.
                  </p>
                </div>

                {/* HERO FEATURED IMAGE (FRENCH LANGUAGE MOU & CERTIFICATION) */}
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 group">
                  <img
                    src={FRENCH_LANGUAGE_MOU}
                    alt="French Language Training Program MoU & Certification Assessment Ceremony at RCEW"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                    <div className="text-white space-y-1">
                      <span className="text-xs font-mono uppercase bg-yellow-400 text-blue-950 px-3 py-1 rounded-full font-bold shadow-sm">
                        Certification & MOU Partnership
                      </span>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl drop-shadow-md">
                        French Language Training Program & Assessment Recognition
                      </h3>
                    </div>
                  </div>
                </div>

                {/* 4 STATISTICAL BADGES GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-1">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-blue-900 block">300+</span>
                    <span className="text-[11px] font-mono uppercase text-blue-700 font-bold">Active Students</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-1">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-900 block">160 Hrs</span>
                    <span className="text-[11px] font-mono uppercase text-amber-800 font-bold">Course Duration</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-900 block">Exclusive</span>
                    <span className="text-[11px] font-mono uppercase text-emerald-800 font-bold">Lady Expert Trainer</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-1">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-purple-900 block">Formal</span>
                    <span className="text-[11px] font-mono uppercase text-purple-800 font-bold">Skill Certification</span>
                  </div>
                </div>

                {/* DETAILED FRENCH PROGRAM OVERVIEW (USER DATASET CARDS) */}
                <div className="space-y-4 pt-2">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white space-y-3 shadow-md border border-blue-700">
                    <h3 className="font-serif font-bold text-lg text-amber-300 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-yellow-400" />
                      French Language Training Overview
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
                      The French language training program has garnered significant interest, with over 300 students actively participating. This program is conducted by an exclusive lady trainer with exceptional expertise in language instruction, ensuring a supportive and inclusive learning environment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* 160 Hours Structured Curriculum */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all space-y-2.5">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-base">Structured 160-Hour Curriculum</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        The course spans a total duration of 160 hours, offering comprehensive training that combines theoretical understanding and practical application. The structured curriculum is designed to cater to diverse learning needs and enables students to achieve proficiency in French.
                      </p>
                    </div>

                    {/* Skill Assessment & Formal Certification */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all space-y-2.5">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-amber-100 text-amber-700 rounded-xl">
                          <Award className="h-5 w-5" />
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-base">Assessment & Formal Certification</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Upon successful completion of the course, students will undergo an assessment to evaluate their language skills. Certificates will be issued to those who meet the performance criteria, providing formal recognition of their achievements.
                      </p>
                    </div>
                  </div>

                  {/* Multilingual Vision Callout */}
                  <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2 shadow-xs">
                    <span className="text-[11px] font-mono font-bold uppercase text-amber-800 tracking-wider block">Global Horizon Initiative</span>
                    <p className="text-xs sm:text-sm font-serif font-medium leading-relaxed">
                      This initiative reflects a strong commitment to fostering multilingual competencies and broadening global opportunities for students.
                    </p>
                  </div>
                </div>

              </motion.div>
            )}

            {/* 9. MSRC CLUB */}
            {activeTab === 'msrc-club' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                
                {/* Header & Tag */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                      Space Exploration & Rocketry Innovation
                    </span>
                    <span className="text-xs font-mono font-bold bg-yellow-400 text-blue-950 px-2.5 py-0.5 rounded-md shadow-2xs">
                      🚀 Est. Feb 2024 • 45 Student Pioneers
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                    MSRC Club (My Skills My Future Space Research Club)
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    The MSRC (My Skills My Future Space Research Club) was established in February 2024 with the primary aim of fostering the enthusiasm of students interested in innovating for space exploration and rocket technology. The club serves as a platform for students to delve into space-related endeavors, enriching their knowledge beyond the confines of their academic curriculum. Its inception saw the enrollment of 45 students.
                  </p>
                </div>

                {/* TWO PRIMARY FLAGSHIP PROJECTS GRID */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Pioneering Engineering Projects</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      Space Research Innovations
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project 1: ISRO-IROCU Rover Project */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white space-y-4 shadow-md border border-blue-800 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <Rocket className="h-5 w-5 text-amber-400" />
                            <h4 className="font-serif font-bold text-lg text-amber-300">ISRO-IROCU Project</h4>
                          </div>
                          <span className="text-[10px] font-mono uppercase bg-amber-400 text-blue-950 px-2 py-0.5 rounded font-bold">
                            Rover Prototype
                          </span>
                        </div>
                        <p className="text-xs text-blue-100 leading-relaxed font-sans">
                          The ISRO-IROCU project commenced in December, initially focusing on foundational research within our college premises. Seeking expert guidance, a delegation traveled to Bangalore in January, where they visited the PEENYA Industrial Area and consulted with Mr. Sashi, a distinguished expert in rover technology. His insights provided invaluable direction for the project’s advancement.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono space-y-1">
                        <span className="text-yellow-300 font-bold block">🏆 Milestone Achievement:</span>
                        <p className="text-blue-100">
                          Team developed a functional rover prototype and successfully qualified for the first round on January 31st!
                        </p>
                      </div>
                    </div>

                    {/* Project 2: Rocketry Project */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white space-y-4 shadow-md border border-blue-800 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-amber-400" />
                            <h4 className="font-serif font-bold text-lg text-amber-300">Rocketry Project</h4>
                          </div>
                          <span className="text-[10px] font-mono uppercase bg-emerald-400 text-blue-950 px-2 py-0.5 rounded font-bold">
                            DRDO Interaction
                          </span>
                        </div>
                        <p className="text-xs text-blue-100 leading-relaxed font-sans">
                          The Rocketry Project, initiated by a dedicated team of six members, also journeyed to Bangalore for inspiration and knowledge exchange. Interactions with professionals at DRDO proved enlightening, offering insights into rocket and missile technology. Additionally, encounters with fellow space enthusiasts at RIT College and Paavi University further fueled the team’s determination.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono space-y-1">
                        <span className="text-emerald-300 font-bold block">🚀 Successful Flight Trials:</span>
                        <p className="text-blue-100">
                          Notably, the team conducted three successful flight trials of mini rockets as part of their project!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACKNOWLEDGMENTS AND SUPPORT (4 MENTORS & PARTNERS GRID) */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Industry & Academic Mentorship</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      Acknowledgments and Support
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      MSRC extends sincere gratitude to our esteemed industry partners and research institutes for technical guidance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Partner 1 */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-blue-600 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-xs">RIT College Space Club</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Academic support & peer space club collaboration during Bangalore visit.
                      </p>
                    </div>

                    {/* Partner 2 */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-blue-600 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-xs">T-Works Company</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Prototyping assistance and hardware fabrication support.
                      </p>
                    </div>

                    {/* Partner 3 */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-xs">Mr. Madhav (Belcan Co.)</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Expert guidance on aerospace engineering and system design.
                      </p>
                    </div>

                    {/* Partner 4 */}
                    <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600 shrink-0" />
                        <h4 className="font-serif font-bold text-slate-900 text-xs">Mr. Chandan (IDEMI Institute)</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Precision instrumentation support and technical mentoring.
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* 10. RCEW SWASTHA – HEALTH CLUB */}
            {activeTab === 'swastha-health' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                
                {/* Header & Tag */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                      Women's Health & Total Well-Being
                    </span>
                    <span className="text-xs font-mono font-bold bg-amber-400 text-blue-950 px-2.5 py-0.5 rounded-md shadow-2xs">
                      Swastha / Svastha - (స్వస్థ)
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                    RCEW SWASTHA – HEALTH CLUB
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    A term taken from Sanskrit. Word refers to the state of being in which body, mind, soul and senses are in blissful equilibrium.
                  </p>
                </div>

                {/* SANSKRIT PHILOSOPHY & LOGO COLOR MEANING */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Blue Logo Meaning */}
                  <div className="p-5 rounded-2xl bg-blue-900 text-white space-y-2 shadow-md border border-blue-700">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-400 border border-white"></div>
                      <h4 className="font-serif font-bold text-base text-blue-100">Meaning of the Blue Color in Logo</h4>
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Blue has positive effects on the mind and the body. It is cool and calming, inspiring mental clarity and inner peace.
                    </p>
                  </div>

                  {/* Green Logo Meaning */}
                  <div className="p-5 rounded-2xl bg-emerald-900 text-white space-y-2 shadow-md border border-emerald-700">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-400 border border-white"></div>
                      <h4 className="font-serif font-bold text-base text-emerald-100">Meaning of the Green Color in Logo</h4>
                    </div>
                    <p className="text-xs text-emerald-100 leading-relaxed">
                      Green is the color of nature; it emits a feeling of balance, harmony and growth. It signifies health, serenity, and tranquility.
                    </p>
                  </div>
                </div>

                {/* VISION & PHILOSOPHY CALLOUT (GVM MOHAN KUMAR GARU INITIATIVE) */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white space-y-4 shadow-md border border-blue-800">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-amber-400 font-bold bg-white/10 px-3 py-1 rounded-full border border-amber-400/30">
                      Healthy Women, Healthy World
                    </span>
                    <h3 className="font-serif font-bold text-xl text-yellow-300 mt-1">
                      “For every Woman, Good Education and better Health are like two sides of a coin.”
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
                    Women’s lives have transformed over the centuries. Women can live longer, and they can also enjoy a better quality of life throughout their span of years. This is only possible, however, if women take charge of their own bodies and understand how they can maximize their personal health and wellness. A women’s health does not refer only to her physical condition but to her total well-being. It is not determined solely by biological factors but also by effects of workload, nutrition and stress.
                  </p>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
                    Keeping this as a vision, <strong>His Excellency, Sri G.V.M. Mohan Kumar Garu</strong> took an initiation of Health Club <strong>“SWASTHA”</strong> to empower the girl students not only with education but also with better health.
                  </p>

                  <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-yellow-200 space-y-1">
                    <strong className="text-white block font-serif">📅 Bi-Monthly Specialized Doctor Visits:</strong>
                    Under SWASTHA, reputed female Doctors and Nutritionists in various Specializations are invited to the campus on <strong>every first and third Friday of every month</strong> to give students tips on health & hygiene, preventive healthcare, and early disease detection.
                  </div>
                </div>

                {/* ENLARGED HIGH-IMPACT PHOTO GALLERY SHOWCASE (5 PHOTOS) */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Visual Highlights</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      Swastha Health & Pranayama Sessions
                    </h3>
                  </div>

                  {/* Main Featured Large Photo: SWASTHA Inauguration */}
                  <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 group">
                    <img src={SWASTHA_INAUGURATION_GROUP} alt="RCEW Swastha Health Club Inauguration Poster Ceremony" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                      <div className="text-white space-y-1">
                        <span className="text-xs font-mono uppercase bg-yellow-400 text-blue-950 px-3 py-1 rounded-full font-bold shadow-sm">
                          Official Launch
                        </span>
                        <h4 className="font-serif font-bold text-xl sm:text-2xl drop-shadow-md">
                          Inaugural Ceremony of RCEW Swastha Health Club
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* 2x2 Grid of Enlarged Cropped Photos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Photo 1: Meditation & Pranayama */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={SWASTHA_MEDITATION_PRANAYAMA} alt="Breathe Deep Live Free Pranayama Meditation Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          “Breathe Deep – Live Free: Power of Pranayama” Meditation
                        </span>
                      </div>
                    </div>

                    {/* Photo 2: Stage Dignitaries */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={SWASTHA_STAGE_DIGNITARIES} alt="Swastha Poster Release Stage Dignitaries" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Swastha Poster Release & Management Dignitaries
                        </span>
                      </div>
                    </div>

                    {/* Photo 3: Auditorium Health Presentation */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={SWASTHA_AUDITORIUM_VIEW} alt="Health & Hygiene Seminar Auditorium Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Medical Awareness & Hygiene Auditorium Session
                        </span>
                      </div>
                    </div>

                    {/* Photo 4: Speaker Presentation */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={SWASTHA_SPEAKER_PRESENTATION} alt="Global Happiness Program Keynote Presentation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Global Happiness Program Speaker Presentation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4-MEMBER COMMITTEE TABLE */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-500" />
                    RCEW Swastha Committee Members
                  </h3>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 text-center w-14">S.No</th>
                          <th className="px-4 py-3">Name of the Member</th>
                          <th className="px-4 py-3">Profession</th>
                          <th className="px-4 py-3 text-right">Designation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">1</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Dr. N. Sreekanth</td>
                          <td className="px-4 py-2.5">Principal</td>
                          <td className="px-4 py-2.5 text-right font-bold text-blue-700">Convener</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">2</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mrs. R. Deepthi Crestose Rebekah</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-blue-700">Member in charge</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">3</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mrs. V. Prema Manvi</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-blue-700">Member in charge</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">4</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Mrs. S. Saritha</td>
                          <td className="px-4 py-2.5">Asst.Prof</td>
                          <td className="px-4 py-2.5 text-right font-bold text-blue-700">Member in charge</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 12-EVENT CONDUCTED ROSTER TABLE */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Swastha Medical & Wellness Events Roster (12 Events)
                  </h3>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs max-h-[450px] overflow-y-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px] sticky top-0 z-10">
                        <tr>
                          <th className="px-4 py-3 text-center w-12">S.No</th>
                          <th className="px-4 py-3">Name of the Event</th>
                          <th className="px-4 py-3">Resource Person</th>
                          <th className="px-4 py-3 text-right w-32">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">1</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Inauguration of RCEW – SWASTHA & “MEDITATION” – Key to Unlock your inner Rainbow</td>
                          <td className="px-4 py-2.5 text-slate-600">DR. K. E. SrinivasaMurthy, Principal, RCEW</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">04/AUG/2023</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">2</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Awareness on GYNAECOLOGICAL Problems in girls</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. V. K. Sruthi, Gynecologist & Laparoscopic Surgeon, GEMCARE KAMINENI Hospitals</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">19/AUG/2023</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">3</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Interactive session on Daily Routine with Ayurveda: DINACHARYA</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. Sumanjali, Homeopathy (online)</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">01/SEP/2023</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">4</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Addressing the Common Adolescent GYNAECOLOGICAL Problems</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. G. Priyanka Edwin, M.S, OBG, Nakshathra Poly Clinic, Kurnool</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">15/SEP/2023</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">5</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">WORLD HEART DAY – 2023</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. Raghavendra Cheruku & Dr. G.L. Sudheer Kumar</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">29/SEP/2023</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">6</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Awareness on Topical Use of Steroid Cream</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. Uma Devi, Dermatologist & Cosmetologist, Uma Skin Care, Kurnool</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">03/NOV/2023</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">7</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">BLOOD DONATION & BLOOD GROUPING CAMP</td>
                          <td className="px-4 py-2.5 text-slate-600">RED CROSS SOCIETY, Kurnool</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">05/JAN/2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">8</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Awareness on Oral Health</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. K. S. Vidya, Reader Dept. of Oral Pathology, GPRDCH</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">23/FEB/2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">9</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Awareness on GYNAECOLOGICAL Problems in girls</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. V. K. Sruthi, Gynecologist & Laparoscopic Surgeon</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">15/MAR/2024</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">10</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Awareness on Myths & Facts about Oral Health</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. K. Sravanthi , MDS Prosthodontist, OAK Dental Clinic</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">07/JAN/2025</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">11</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Breathe Deep – Live Free : The Power of Pranayama</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. K.E. Srinivasa Murthy garu & ART OF LIVING Volunteers</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">18/MAR/2025</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">12</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Neurological Disorders ” Brain matters: Your Questions Answered by Neurologist”</td>
                          <td className="px-4 py-2.5 text-slate-600">Dr. K. Nishanth Reddy, MBBS, DNB, DM(Neurology) Neurologist</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">03/APR/2025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </motion.div>
            )}

            {/* 11. YOGA CLUB */}
            {activeTab === 'yoga-club' && (
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                
                {/* Header & Tag */}
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                      Holistic Health, Happiness & Harmony
                    </span>
                    <span className="text-xs font-mono font-bold bg-amber-400 text-blue-950 px-2.5 py-0.5 rounded-md shadow-2xs">
                      🧘 Sanskrit: Yuj (To Join / Unite)
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">
                    Yoga Club
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Yoga is essentially a spiritual discipline based on an extremely subtle Science which focuses on bringing harmony between mind and body. It is an art and science for healthy living.
                  </p>
                </div>

                {/* YOGIC PHILOSOPHY & SCIENCE CALLOUT */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white space-y-4 shadow-md border border-blue-700">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <h3 className="font-serif font-bold text-lg text-amber-300 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-yellow-400" />
                      Yogic Philosophy & Self-Realization Science
                    </h3>
                    <span className="text-[10px] font-mono uppercase bg-white/10 px-3 py-1 rounded-full text-yellow-200 border border-white/15">
                      Book Protocol: International Yoga Day
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
                    The word <strong>“Yoga”</strong> is derived from the Sanskrit root <em>yuj</em> meaning “to join”, “to yoke” or “to unite”. According to Yogic scriptures, the practice of Yoga leads to the union of individual consciousness with universal consciousness. According to modern scientists, everything in the universe is just a manifestation of the same quantum firmament.
                  </p>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans">
                    One who experiences this oneness of existence is said to be “in Yoga” and is termed as a yogi who has attained a state of freedom, referred to as <strong>Mukti, nirvana, kaivalya or moksha</strong>. “Yoga” also refers to an inner science comprising of a variety of methods through which human beings can achieve union between the body and mind to attain self-realisation. The aim of Yoga practice (sadhana) is to overcome all kinds of sufferings that lead to a sense of freedom in every walk of life with holistic health, happiness and harmony.
                  </p>
                </div>

                {/* ENLARGED HIGH-IMPACT PHOTO GALLERY SHOWCASE (5 PHOTOS) */}
                <div className="space-y-4 pt-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Visual Highlights</span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                      International Yoga Day & Asana Demonstrations
                    </h3>
                  </div>

                  {/* Main Featured Large Photo */}
                  <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 group">
                    <img src={YOGA_MAIN_HERO} alt="2024 International Yoga Day Acrobatic Stage Performance at RCEW" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                      <div className="text-white space-y-1">
                        <span className="text-xs font-mono uppercase bg-yellow-400 text-blue-950 px-3 py-1 rounded-full font-bold shadow-sm">
                          Main Hero Showcase • 21st June 2024
                        </span>
                        <h4 className="font-serif font-bold text-xl sm:text-2xl drop-shadow-md">
                          International Yoga Day Acrobatic Stage Performance
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* 2x2 Grid of Enlarged Cropped Photos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Photo 1: Pyramid Formation */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={YOGA_PYRAMID_FLAG} alt="Human Pyramid Yoga Asana Formation with Indian Flag" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Human Pyramid & National Tricolor Flag Lawn Asana Formation
                        </span>
                      </div>
                    </div>

                    {/* Photo 2: Medal Winner */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group bg-slate-100">
                      <img src={YOGA_MEDAL_WINNER} alt="State & District Yogasana Competition Medalist Student" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          State & District Yogasana Competition Medal Winner
                        </span>
                      </div>
                    </div>

                    {/* Photo 3: Advanced Dhanurasana */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={YOGA_DHANURASANA_STAGE} alt="Advanced Dhanurasana Bow Pose Stage Demonstration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Advanced Dhanurasana (Bow Pose) Stage Demonstration
                        </span>
                      </div>
                    </div>

                    {/* Photo 4: Group Lawn Formation */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <img src={YOGA_GROUP_LAWN_FORMATION} alt="Group Outdoor Lawn Asana Formation with National Flag" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                        <span className="text-white text-xs sm:text-sm font-serif font-bold drop-shadow-sm">
                          Group Outdoor Lawn Asana Formation with National Flag
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 12-STUDENT STATE & DISTRICT YOGASANA COMPETITION ROSTER TABLE */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-serif font-bold text-lg text-slate-900 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-amber-500" />
                      Participated in State & District Yogasana Competition
                    </h3>
                    <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full border border-emerald-200">
                      12 Student Representatives
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono uppercase text-[11px]">
                        <tr>
                          <th className="px-4 py-3 text-center w-14">S.No</th>
                          <th className="px-4 py-3">Name of the Student</th>
                          <th className="px-4 py-3 text-right">Roll Number</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">1</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">E.Bhavitha</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">213T1A3211</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">2</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">S.Prathyusha</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">213T1A0445</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">3</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">P. Hima Teja</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">213T1A3142</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">4</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">M. Pallavi</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">213T1A0433</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">5</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Y. Sujitha</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">213T1A05B5</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">6</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Sujitha</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">233TA04036</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">7</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Yojana Sri</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">233TA04060</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">8</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">somala Indhu</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">233TA05165</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">9</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">Padma Shri</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">233TA05153</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">10</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">B. Srivani</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">213T1A3203</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">11</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">B. Lasya Reddy</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">223T1A3208</td>
                        </tr>
                        <tr className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-400">12</td>
                          <td className="px-4 py-2.5 font-bold text-slate-900">K. Poojitha</td>
                          <td className="px-4 py-2.5 text-right font-mono font-bold text-blue-700">223T1A3223</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </motion.div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}
