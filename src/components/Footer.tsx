import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { COLLEGE_INFO } from '../data';
import COLLEGE_LOGO_IMAGE from '../assets/images/rcew_college_logo_1784036182954.png';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollToAnchor = (anchorId: string) => {
    setTimeout(() => {
      const el = document.getElementById(anchorId);
      if (el) {
        const offset = 140;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const offsetPosition = (elementRect - bodyRect) - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <footer className="relative bg-gradient-to-b from-blue-900 via-blue-900 to-slate-950 text-white pt-16 pb-10 border-t-2 border-amber-400/80 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-blue-800/60">
          {/* Brand/About column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center p-1 border border-amber-300/40 shadow-md shrink-0">
                <img src={COLLEGE_LOGO_IMAGE} alt="RCEW Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base uppercase text-white leading-none">
                  Ravindra Engineering College
                </span>
                <span className="text-amber-300 text-[9px] font-mono tracking-widest uppercase mt-1">
                  for Women (RCEW), Kurnool
                </span>
              </div>
            </div>
            
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-sm">
              Ravindra Engineering College for Women (RCEW) is Kurnool’s elite academic center, solely committed to sharpening technological competency and leadership profiles of young women engineers.
            </p>

            {/* Accreditations badge list */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-blue-800/80 text-amber-300 border border-amber-400/30">
                NAAC Accredited A+
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-blue-800/80 text-amber-300 border border-amber-400/30">
                Autonomous Status
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-blue-800/80 text-amber-300 border border-amber-400/30">
                AICTE Approved
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Quick Pathways
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-100">
              <li>
                <Link to="/" onClick={handleScrollTop} className="hover:text-amber-300 transition-colors">
                  Home Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about/profile" onClick={handleScrollTop} className="hover:text-amber-300 transition-colors">
                  About & Legacy
                </Link>
              </li>
              <li>
                <Link to="/admissions" onClick={handleScrollTop} className="hover:text-amber-300 transition-colors">
                  Admissions Panel
                </Link>
              </li>
              <li>
                <Link to="/placements/company-visits" onClick={handleScrollTop} className="hover:text-amber-300 transition-colors">
                  Corporate Placements
                </Link>
              </li>
              <li>
                <Link to="/campus-life" onClick={handleScrollTop} className="hover:text-amber-300 transition-colors">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/faculty" onClick={handleScrollTop} className="hover:text-amber-300 transition-colors">
                  Faculty Roster
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Academic Streams
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-100">
              <li>
                <Link to="/departments/cse" onClick={handleScrollTop} className="hover:text-amber-300 transition-colors">
                  Computer Science (CSE)
                </Link>
              </li>
              <li>
                <Link to="/departments/ece" onClick={handleScrollTop} className="hover:text-amber-300 transition-colors">
                  Electronics (ECE)
                </Link>
              </li>
              <li>
                <Link to="/admissions" onClick={handleScrollTop} className="hover:text-amber-300 transition-colors">
                  Fee Structures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details brief */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Registrar Helpline
            </h4>
            <p className="text-blue-100 text-xs leading-relaxed">
              Nandikotkur Road, Venkayapalli,<br />
              Kurnool, Andhra Pradesh - 518002
            </p>
            <p className="text-blue-100 text-xs font-mono">
              PH: +91 92469 22069<br />
              Mail: admissions@recw.ac.in
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 pt-2">
              <a href={COLLEGE_INFO.contact.socials.facebook} target="_blank" rel="noreferrer" className="p-2 bg-blue-800/80 hover:bg-amber-400 hover:text-blue-950 rounded-lg transition-colors text-white" aria-label="Facebook Link">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={COLLEGE_INFO.contact.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-blue-800/80 hover:bg-amber-400 hover:text-blue-950 rounded-lg transition-colors text-white" aria-label="Linkedin Link">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={COLLEGE_INFO.contact.socials.instagram} target="_blank" rel="noreferrer" className="p-2 bg-blue-800/80 hover:bg-amber-400 hover:text-blue-950 rounded-lg transition-colors text-white" aria-label="Instagram Link">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={COLLEGE_INFO.contact.socials.youtube} target="_blank" rel="noreferrer" className="p-2 bg-blue-800/80 hover:bg-amber-400 hover:text-blue-950 rounded-lg transition-colors text-white" aria-label="Youtube Link">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and scroll to top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-blue-100 font-mono">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Ravindra Engineering College for Women. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-block text-amber-300">College Counseling Code: RAVW</span>
            <button
              onClick={handleScrollTop}
              className="p-2.5 bg-blue-800 hover:bg-amber-400 hover:text-blue-950 text-white rounded-xl shadow transition-all duration-300 flex items-center gap-1 border border-amber-400/40 cursor-pointer"
              aria-label="Scroll to top"
            >
              Top <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
