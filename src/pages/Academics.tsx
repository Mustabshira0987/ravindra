import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle, Sparkles, Building2 } from 'lucide-react';

import LAB2_IMG from '../assets/images/rcew_academic_lab2_1785860326438.png';
import LAB1_IMG from '../assets/images/rcew_academic_lab1_1785860397152.png';
import LAB3_IMG from '../assets/images/rcew_academic_lab3_1785860375164.png';
import WORKSHOP_IMG from '../assets/images/rcew_academic_workshop_1785860399511.jpg';

export default function Academics() {
  const btechCourses = [
    { sNo: 1, name: 'Computer Science and Engineering', intake: 360, inception: 2008 },
    { sNo: 2, name: 'Electronics and Communications Engineering', intake: 180, inception: 2008 },
    { sNo: 3, name: 'Computer Science and Engineering(Artificial Intelligence)', intake: 180, inception: 2025 },
  ];

  const mtechCourses = [
    { sNo: 1, name: 'M.Tech ( Computer Science and Engineering )', intake: 18, inception: 2024 },
    { sNo: 2, name: 'M.Tech ( AI & ML )', intake: 18, inception: 2026 },
  ];

  const labGallery = [
    {
      title: 'High-Speed Computing & AI Lab',
      desc: 'Equipped with modern high-performance workstations and gigabit networking for advanced programming.',
      image: LAB2_IMG
    },
    {
      title: 'Advanced Software Engineering Lab',
      desc: 'Specialized lab setups for software architecture, VLSI simulations, and database design.',
      image: LAB1_IMG
    },
    {
      title: 'Interactive Language & Communication Lab',
      desc: 'Digital multimedia console system for audio-visual English language proficiency training.',
      image: LAB3_IMG
    },
    {
      title: 'Engineering Workshop & Practical Physics Lab',
      desc: 'Hands-on hardware modeling, mechanical fitting bench vises, and applied engineering workshop.',
      image: WORKSHOP_IMG
    }
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      {/* HEADER BANNER */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 via-white to-slate-50 text-slate-900 overflow-hidden mb-12 border-b border-slate-200 shadow-sm">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">
            Ravindra Engineering College for Women
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-slate-900">
            Academic Programs
          </h1>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Approved by AICTE, New Delhi and Affiliated to JNTUA, Anantapuramu.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-20">
        
        {/* UNDER GRADUATE (B.TECH) SECTION */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-red-50 text-red-700 rounded-lg border border-red-100">
              <GraduationCap className="h-6 w-6 text-red-700" />
            </span>
            <h2 className="text-2xl font-serif font-bold text-red-800">
              Under Graduate (B.Tech)
            </h2>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            The curricula of programmes have been designed by the JNTUA, Anantapuramu & Approved by the AICTE, New Delhi to cater to the ever changing needs and demands of IT industry. The focus is on holistic learning and empowering students to make significant contributions at all levels. The cafeteria system of electives gives a handful of choices for students to develop expertise in their area of interest.
          </p>

          {/* B.Tech Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f3838] text-white text-xs sm:text-sm font-semibold">
                  <th className="py-3.5 px-4 border-r border-[#1a4a4a] text-center w-16">S.No</th>
                  <th className="py-3.5 px-6 border-r border-[#1a4a4a]">Name of the Course</th>
                  <th className="py-3.5 px-6 border-r border-[#1a4a4a] text-center">Sanctioned Intake</th>
                  <th className="py-3.5 px-6 text-center">Year of Inception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-800 bg-white">
                {btechCourses.map((course) => (
                  <tr key={course.sNo} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 text-center font-mono border-r border-slate-200">{course.sNo}</td>
                    <td className="py-3.5 px-6 font-medium border-r border-slate-200 text-slate-900">{course.name}</td>
                    <td className="py-3.5 px-6 text-center font-mono border-r border-slate-200">{course.intake}</td>
                    <td className="py-3.5 px-6 text-center font-mono">{course.inception}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* POST GRADUATE (M.TECH) SECTION */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-red-50 text-red-700 rounded-lg border border-red-100">
              <Award className="h-6 w-6 text-red-700" />
            </span>
            <h2 className="text-2xl font-serif font-bold text-red-800">
              Post Graduate (M.Tech)
            </h2>
          </div>

          {/* M.Tech Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0f3838] text-white text-xs sm:text-sm font-semibold">
                  <th className="py-3.5 px-4 border-r border-[#1a4a4a] text-center w-16">S.No</th>
                  <th className="py-3.5 px-6 border-r border-[#1a4a4a]">Name of the Course</th>
                  <th className="py-3.5 px-6 border-r border-[#1a4a4a] text-center">Sanctioned Intake</th>
                  <th className="py-3.5 px-6 text-center">Year of Inception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-800 bg-white">
                {mtechCourses.map((course) => (
                  <tr key={course.sNo} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 text-center font-mono border-r border-slate-200">{course.sNo}</td>
                    <td className="py-3.5 px-6 font-medium border-r border-slate-200 text-slate-900">{course.name}</td>
                    <td className="py-3.5 px-6 text-center font-mono border-r border-slate-200">{course.intake}</td>
                    <td className="py-3.5 px-6 text-center font-mono">{course.inception}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ACADEMIC INFRASTRUCTURE & LABORATORIES GALLERY */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest font-mono">
              Academic Facilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Academic Infrastructure & Laboratories
            </h2>
            <div className="h-1 w-16 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labGallery.map((lab, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] bg-blue-600 text-white px-2.5 py-1 rounded-md font-mono uppercase font-bold tracking-wider">
                      Academic Lab Facility
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {lab.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {lab.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
