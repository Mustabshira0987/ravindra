import React, { useState } from 'react';
import { Download, Bell, Newspaper, Search, ArrowRight } from 'lucide-react';
import { NEWS_EVENTS } from '../data';

const DOWNLOAD_FILES = [
  { name: "B.Tech Academic Calendar - Year 2026-27", size: "1.2 MB", category: "Calendar" },
  { name: "AP EAPCET (EAMCET) Web Options Choice Form", size: "0.8 MB", category: "Admissions" },
  { name: "JNTUA B.Tech R23 Regulation Syllabus", size: "4.5 MB", category: "Syllabus" },
  { name: "Hostel Registration & Accommodation Form", size: "1.1 MB", category: "Hostel" },
  { name: "Special Merit Fee Waiver Application - RCEW", size: "0.6 MB", category: "Scholarships" }
];

export default function Bulletins() {
  const [activeTab, setActiveTab] = useState<'all' | 'News' | 'Event' | 'Announcement'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = NEWS_EVENTS.filter(item => {
    const matchesTab = activeTab === 'all' ? true : item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="py-12 bg-slate-50 dark:bg-primary-950/20">
      {/* Banner */}
      <section className="relative py-20 bg-primary-900 text-white overflow-hidden mb-16 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-gold-400 text-xs font-bold uppercase tracking-widest font-mono">
            College Notices
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Latest Bulletins & Circulars
          </h1>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-2 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Stay completely connected with urgent academic notifications, JNTUA circulars, events scheduling, and news announcements.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* News, Circulars, Tab filters */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left panel - News Feed */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2">
                {(['all', 'News', 'Event', 'Announcement'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-primary-750 text-white dark:bg-gold-500 dark:text-primary-950 shadow-sm'
                        : 'bg-white dark:bg-primary-900 text-slate-500 dark:text-slate-300 border border-slate-100 dark:border-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Bulletins..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white dark:bg-primary-900 border border-slate-250 dark:border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-gold-500 w-full sm:w-60"
                />
                <Search className="h-4 w-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div className="space-y-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-primary-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow"
                  >
                    <div className="h-36 w-full sm:w-44 rounded-2xl overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-3 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex gap-2 items-center text-[10px] font-mono text-slate-400">
                          <span>{item.date}</span>
                          <span>•</span>
                          <span className="font-bold uppercase text-gold-600 dark:text-gold-400">{item.category}</span>
                        </div>
                        <h3 className="font-serif font-bold text-base sm:text-lg text-primary-950 dark:text-white leading-tight mt-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-white dark:bg-primary-900 border border-slate-150 dark:border-slate-800 rounded-3xl">
                  <Newspaper className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-400 text-xs">No bulletin articles found matching the current filters.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right panel - Downloads List & Urgent Notices */}
          <div className="lg:col-span-4 space-y-8">
            {/* Downloads */}
            <div className="bg-white dark:bg-primary-900 p-6 sm:p-8 rounded-3xl border border-slate-150 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex gap-2 items-center text-primary-950 dark:text-white pb-4 border-b border-slate-100 dark:border-slate-800">
                <Download className="h-5 w-5 text-gold-500" />
                <h4 className="font-serif font-bold text-base">Academic Downloads</h4>
              </div>

              <div className="space-y-4">
                {DOWNLOAD_FILES.map((file, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 dark:bg-primary-950/40 rounded-xl border border-slate-100 dark:border-slate-850 flex items-center justify-between gap-3 hover:border-gold-500/20 transition-all">
                    <div>
                      <span className="text-[9px] font-bold text-gold-600 dark:text-gold-400 uppercase tracking-wide font-mono block">{file.category}</span>
                      <h5 className="font-bold text-[11px] sm:text-xs text-primary-950 dark:text-white leading-tight mt-0.5">{file.name}</h5>
                    </div>
                    <button className="h-8 w-8 bg-primary-700 hover:bg-primary-800 dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-primary-950 rounded-lg flex items-center justify-center text-white shrink-0 cursor-pointer">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgent examination reminders */}
            <div className="bg-primary-950 text-white p-6 sm:p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/10 rounded-bl-full" />
              <Bell className="h-6 w-6 text-gold-400 mb-4" />
              <h4 className="font-serif font-bold text-base text-white mb-2">Examination Notices</h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Students are directed to complete their regular / supply exam registration fee transactions prior to August 10, 2026. Hall tickets will be printed on biometric verified check-ins.
              </p>
              <button className="text-xs font-bold text-gold-400 uppercase tracking-widest flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Exam Cell Portal <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
