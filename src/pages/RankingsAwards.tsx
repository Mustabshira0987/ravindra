import React, { useState } from 'react';
import { Award, Trophy, Star, ShieldCheck, CheckCircle2, Medal, GraduationCap, Building2, ChevronRight, Calendar } from 'lucide-react';

const RANKINGS_DATA = [
  {
    yearSection: '2025-26',
    title: 'Rankings/Awards applied in various national level surveys – 2025-26',
    items: [
      {
        rank: 'AIR 128',
        survey: 'Internshala Annual Rankings 2025',
        detail: 'Ravindra College of Engineering for Women secured All India Rank 128 among 600+ colleges participating in Internshala Annual rankings for the Year 2025.'
      },
      {
        rank: 'Rank 43',
        survey: 'DataQuest Top 100 T-Schools 2026',
        detail: 'Ranked 43rd among Top 100 T-Schools in the survey conducted by Data Quest for the year 2026.'
      },
      {
        rank: 'Rank 41',
        survey: 'DataQuest Top Private T-Schools 2026',
        detail: 'Ranked 41st among Top Private T-Schools in the survey conducted by Data Quest for the year 2026.'
      },
      {
        rank: 'Grade A',
        survey: 'NPTEL Local Chapter Rating 2026',
        detail: 'Recognized as a valuable local chapter with a rating of ‘A‘ based on performance in NPTEL online certification courses-2026.'
      },
      {
        rank: 'State Rank 3',
        survey: 'GHRDC Engineering Colleges Survey 2026',
        detail: 'Ranked 14th in the category of Excellence, 3rd Rank in the State of Andhra Pradesh, and 20th Rank in the Southern Region in Nationwide survey conducted by GHRDC 2026.'
      },
      {
        rank: 'Rank 6',
        survey: 'CSR Engineering Colleges Survey 2026 (Excellence Category)',
        detail: 'Secured 6th rank in the Category of Top Engineering Colleges of Excellence in CSR Engineering Colleges Survey 2026.'
      },
      {
        rank: 'AP Rank 9',
        survey: 'CSR Engineering Colleges Survey 2026 (State-wide)',
        detail: 'Secured 9th rank among top Engineering colleges in the Andhra Pradesh state in CSR Engineering Colleges Survey 2026.'
      }
    ]
  },
  {
    yearSection: '2024-25',
    title: 'Rankings/Awards applied in various national level surveys – 2024-25',
    items: [
      {
        rank: '30th Rank',
        survey: 'THE WEEK Magazine Best College Survey 2025 (Private Colleges AP)',
        detail: '30th Rank among Private Engineering Colleges in Andhra Pradesh.'
      },
      {
        rank: '70th Rank',
        survey: 'THE WEEK Magazine Best College Survey 2025 (Emerging Private India)',
        detail: '70th Rank among Emerging Private Engineering Colleges category in India.'
      },
      {
        rank: '141st Rank',
        survey: 'THE WEEK Magazine Best College Survey 2025 (Private South India)',
        detail: '141st Rank among Private Engineering Colleges in South India.'
      },
      {
        rank: '219th Rank',
        survey: 'THE WEEK Magazine Best College Survey 2025 (Top Private India)',
        detail: '219th Rank among top Private Engineering Colleges in India.'
      },
      {
        rank: '248th Rank',
        survey: 'THE WEEK Magazine Best College Survey 2025 (Overall India)',
        detail: '248th Rank among top Engineering Colleges in India.'
      },
      {
        rank: 'Rank 3',
        survey: 'CSR Engineering Colleges Survey 2025 (Excellence Category)',
        detail: 'Got 3rd rank in the Category of Top Engineering Colleges of Excellence in CSR Engineering Colleges Survey 2025.'
      },
      {
        rank: 'AP Rank 2',
        survey: 'GHRDC Engineering Colleges Survey 2025',
        detail: 'Ranked 14th in the category of Excellence, 2nd Rank in the State of Andhra Pradesh, 20th Rank in the Southern Region in Nationwide survey conducted by GHRDC 2025.'
      },
      {
        rank: 'Rank 42',
        survey: 'DataQuest Top 100 T-Schools 2025',
        detail: 'Ranked 42nd among Top 100 T-Schools in the survey conducted by Data Quest.'
      },
      {
        rank: 'Rank 38',
        survey: 'DataQuest Top Private T-Schools 2025',
        detail: 'Ranked 38th among Top Private T-Schools in the survey conducted by Data Quest.'
      },
      {
        rank: '3.5 Star Rating',
        survey: 'Institution’s Innovation Council (IIC) AY 2023-24',
        detail: 'Rated with 3.5 star rating for IIC activities by Ministry of Education Innovation Cell.'
      },
      {
        rank: 'AIR 38',
        survey: 'Internship Day Rankings 2024',
        detail: 'Secured All India Rank 38 among 1000+ colleges participating in Internship Day for the year 2024.'
      },
      {
        rank: 'Grade A',
        survey: 'NPTEL Local Chapter Rating 2024',
        detail: 'Recognized as a valuable local chapter with a rating of ‘A‘ based on performance in NPTEL online certification courses-2024.'
      },
      {
        rank: 'AP Rank 4',
        survey: 'GHRDC Engineering Colleges Survey 2024',
        detail: 'Ranked 21st in the top colleges in the southern region category of excellence, 4th among Top Engineering Colleges in AP and 15th Rank among Top Engineering Colleges of Excellence in GHRDC 2024.'
      },
      {
        rank: 'Nation Rank 9',
        survey: 'India Today – MDRA Survey 2024 (Best Value for Money)',
        detail: 'Ranked 9th among top 10 colleges (Nation Wide) with best value for money and 239th Rank among best colleges of India in India Today – MDRA Survey 2024.'
      },
      {
        rank: 'Rank 98',
        survey: 'DQ-CMR T-School Employability Index Survey 2024',
        detail: 'Ranked 98th among Top 100 T-Schools and 88th among Top private T-Schools in DQ-CMR Employability Index Survey 2024.'
      },
      {
        rank: 'ISO Certified',
        survey: 'ISO 9001:2015 Certification (2024-2027)',
        detail: 'Received ISO 9001:2015 certificate for the 3-year period of 2024-2027.'
      }
    ]
  },
  {
    yearSection: '2023-24',
    title: 'Rankings/Awards applied in various national level surveys – 2023-24',
    items: [
      {
        rank: '3.5 Star Rating',
        survey: 'Institution’s Innovation Council (IIC) AY 2022-23',
        detail: 'Rated with 3.5 star rating for IIC activities for AY 2022-23.'
      },
      {
        rank: 'Rank 88',
        survey: 'India Today – MDRA Survey 2023 (South Zone)',
        detail: 'Ranked 88th among Emerging Engineering Colleges in South-2023, 233rd rank among Top Engineering (Pvt) Colleges in India 2023 and 268th among Top Engineering Colleges in India 2023 in India Today – MDRA Survey 2023.'
      },
      {
        rank: 'AP Rank 9',
        survey: 'GHRDC Engineering Colleges Survey 2024',
        detail: 'Ranked 9th among Top Engineering Colleges in Andhra Pradesh and 27th Rank among Top Engineering Colleges of Excellence in GHRDC Survey 2024.'
      },
      {
        rank: 'SIRO Recognition',
        survey: 'DSIR, Ministry of Science & Technology, Govt. of India',
        detail: 'Sri Krishna Educational Society recognized as a Scientific and Industrial Research Organization (SIRO) by Department of Scientific and Industrial Research, Govt. of India.'
      },
      {
        rank: 'Rank 78',
        survey: 'Internshala National Rankings 2023',
        detail: 'Ranked 78th among top colleges in India by Internshala.'
      },
      {
        rank: '10-Yr Autonomous',
        survey: 'UGC Autonomous Status (2023-24 to 2032-33)',
        detail: 'Granted UGC Autonomous Status effective from academic year 2023-24 to 2032-33 (10 years).'
      },
      {
        rank: 'AA+ Rating',
        survey: 'Careers 360 Survey 2023',
        detail: 'Graded with AA+ rating by Career 360 survey-2023.'
      },
      {
        rank: 'Best College 2023',
        survey: 'INDIAN ICON AWARDS 2023',
        detail: 'Received Best Engineering College of the Year - 2023 award from INDIAN ICON AWARDS-2023.'
      },
      {
        rank: 'State Rank 8',
        survey: 'IIRF Ranking 2023',
        detail: 'Received 8th Rank in AP State Rank conducted by Indian Institutional Ranking Framework (IIRF) 2023.'
      },
      {
        rank: 'T&P Recognition',
        survey: 'Observe Now 2nd Education Leaders Conclave 2023',
        detail: 'Received center of recognition from Observe Now as an outstanding Institute in Training and Placements-2023 at 2nd Education Leaders Conclave & Awards, Hyderabad.'
      },
      {
        rank: 'Appreciation Award',
        survey: 'APSSDC Skill Development Initiatives',
        detail: 'Received Certificate of Appreciation from APSSDC in recognition of outstanding achievement and dedication to skill development and training initiatives.'
      }
    ]
  },
  {
    yearSection: '2022-23',
    title: 'Rankings/Awards applied in various national level surveys – 2022-23',
    items: [
      {
        rank: '3.5 Star Rating',
        survey: 'Institution’s Innovation Council (IIC) AY 2021-22',
        detail: 'Rated with 3.5 star rating for IIC activities for AY 2021-22.'
      },
      {
        rank: 'Rank 88',
        survey: 'India Today – MDRA Survey 2023',
        detail: 'Ranked 88th among Emerging Engineering Colleges in South-2023, 233rd rank among Top Engineering (Pvt) Colleges in India 2023 and 268th among Top Engineering Colleges in India 2023.'
      },
      {
        rank: 'AP Rank 9',
        survey: 'GHRDC Engineering Colleges Survey 2023',
        detail: 'Ranked 9th among Top Engineering Colleges in Andhra Pradesh and 27th Rank among Top Engineering Colleges of Excellence in GHRDC 2023.'
      },
      {
        rank: 'Rank 49',
        survey: 'DataQuest Top 100 T-Schools (Overall) 2022',
        detail: 'Ranked 49th among Top 100 T-Schools (overall): government and private sector -2022 in Dataquest.'
      },
      {
        rank: 'Rank 41',
        survey: 'DataQuest Top T-Schools India (Private) 2022',
        detail: 'Ranked 41st among Top T-Schools in India-2022 (Private) in Dataquest.'
      },
      {
        rank: 'SIRO Recognition',
        survey: 'DSIR, Ministry of Science & Technology, Govt of India',
        detail: 'Sri Krishna Educational Society recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR, Ministry of Science and Technology.'
      },
      {
        rank: 'Rank 78',
        survey: 'Internshala National Rankings',
        detail: 'Ranked 78th among top colleges in India by Internshala.'
      },
      {
        rank: 'UGC Autonomous',
        survey: 'UGC 10-Year Autonomous Status',
        detail: 'Got UGC autonomous Status with effective from the academic year 2023-24 to 2032-33 (10 yrs).'
      },
      {
        rank: 'AA+ Rating',
        survey: 'Careers 360 Survey 2023',
        detail: 'Given AA+ rating by Career 360 survey-2023.'
      },
      {
        rank: 'Icon Award',
        survey: 'INDIAN ICON AWARDS 2023',
        detail: 'Received Best Engineering College of the year -2023 award from INDIAN ICON AWARDS-2023.'
      },
      {
        rank: 'State Rank 8',
        survey: 'IIRF Ranking 2023',
        detail: 'Received 8th Rank in AP State Rank conducted by IIRF Ranking -2023.'
      },
      {
        rank: 'Outsanding T&P',
        survey: 'Observe Now 2nd Education Leaders Conclave 2023',
        detail: 'Received center of recognition from Observe Now as an outstanding Institute in Training and Placements-2023.'
      },
      {
        rank: 'NAAC A+ Appreciation',
        survey: 'Andhra Pradesh State IQAC Cell',
        detail: 'Received appreciation from Andhra Pradesh State IQAC cell for obtaining NAAC A+ grade.'
      },
      {
        rank: 'Mentor College',
        survey: 'AP State IQAC Cell Mentor Role',
        detail: 'Recognized as Mentor College by AP State IQAC cell and guided two colleges for NAAC accreditation.'
      },
      {
        rank: 'Skill Award',
        survey: 'APSSDC Skill Development',
        detail: 'Received Certificate of Appreciation from APSSDC in recognition of outstanding achievement in skill development.'
      },
      {
        rank: 'National Award',
        survey: 'National Educational Excellence Awards 2022',
        detail: 'Selected for “Most Trusted & Promising Women Engineering & Technology College of the Year 2022” Andhra Pradesh Award.'
      },
      {
        rank: 'Admin Award',
        survey: 'National Educational Excellence Awards 2022',
        detail: 'Selected for “Outstanding Administration & Innovative Approach in Teaching and Academics of the Year 2022”.'
      }
    ]
  },
  {
    yearSection: '2021-22',
    title: 'Rankings/Awards applied in various national level surveys – 2021-22',
    items: [
      {
        rank: 'NAAC A+ Grade',
        survey: 'NAAC Assessment (CGPA 3.45 / 4.0)',
        detail: 'Achieved NAAC A+ grade in National Assessment and Accreditation Council (NAAC) assessment by scoring 3.45/4 CGPA.'
      },
      {
        rank: 'Rank 547',
        survey: 'Internshala National Rankings 2022',
        detail: 'Ranked 547 among 1123 colleges in India and 229 among 488 colleges in South Zone in Internshala Rankings.'
      },
      {
        rank: 'AA+ Rating',
        survey: 'Careers 360 Survey 2022',
        detail: 'Given AA+ rating by Career 360 survey-2022.'
      },
      {
        rank: 'Rank 86',
        survey: 'DataQuest Top T-Schools (Private) 2022',
        detail: 'Ranked 86 among Top-T Schools (private) in National wide survey 2022 conducted by Dataquest.'
      },
      {
        rank: 'Rank 68',
        survey: 'DataQuest Digital Index Tech-Enabled 2022',
        detail: 'Ranked 68 among Top 100 Tech-enabled T-Schools in National wide survey 2022 conducted by Dataquest Digital Index.'
      },
      {
        rank: 'Rank 56',
        survey: 'DataQuest Private Tech-Enabled 2022',
        detail: 'Ranked 56 among Top private Tech-enabled T-Schools in National wide survey 2022 conducted by Dataquest Digital Index.'
      },
      {
        rank: 'Rank 4',
        survey: 'CSR 2022 Promising Engineering Colleges India',
        detail: 'Ranked 4th among Promising Engineering Colleges in India by Competition Success Review (CSR) 2022.'
      },
      {
        rank: 'AP Rank 12',
        survey: 'CSR 2022 Top Engineering Colleges AP',
        detail: 'Ranked 12th among Top Engineering Colleges in Andhra Pradesh by Competition Success Review (CSR) 2022.'
      },
      {
        rank: '1.5 Star Rating',
        survey: 'Institution’s Innovation Council (IIC) AY 2020-21',
        detail: 'Rated with 1.5 star rating for IIC Q1 & Q2 activities for AY 2020-21.'
      },
      {
        rank: 'Rank 77',
        survey: 'DataQuest – CMR Employability Ranking 2022',
        detail: 'Ranked 77th Rank among Top 100 Govt and Pvt Engineering Colleges in India and 66th Rank among Top 100 Pvt Engineering Colleges in India.'
      }
    ]
  },
  {
    yearSection: '2020-21',
    title: 'Rankings/Awards in various surveys – 2020-2021',
    items: [
      {
        rank: 'Rank 94 & 79',
        survey: 'DataQuest T-School Survey 2021',
        detail: 'Ranked 94 among Top-T Schools (Govt & Private) and Ranked 79 among Top-T Schools (private) in 2021 by Dataquest.'
      },
      {
        rank: 'Rank 4 & 11',
        survey: 'Competition Success Review (CSR) 2021',
        detail: 'Ranked 4th in Promising Engineering Colleges category and Ranked 11th in Top Engineering Colleges AP in CSR All India Rankings-2021.'
      },
      {
        rank: 'AA+ Rating',
        survey: 'Careers 360 Survey 2021',
        detail: 'Given AA+ rating by Career 360 survey-2021.'
      },
      {
        rank: 'Rank 709',
        survey: 'Internshala National Rankings 2021',
        detail: 'Ranked 709 among top colleges in India and 268 among top colleges in Zonal level in Internshala Rankings.'
      },
      {
        rank: 'WEEK Ranks',
        survey: 'THE WEEK All India Rankings 2021',
        detail: 'Ranked 170th in Top Pvt Engineering colleges Nationwide, 102nd in Top Pvt Engineering colleges in South Zone, and 109th in Top Pvt/Govt Engineering colleges in South Zone.'
      },
      {
        rank: 'Excellence Award',
        survey: 'National Educational Excellence Awards 2021',
        detail: 'Selected for “Most Promising & Leading Women Engineering & Technology College of the Year 2021” AP Award and “Outstanding Performance in Virtual Knowledge Delivery during Pandemic”.'
      }
    ]
  }
];

export default function RankingsAwards() {
  const [selectedYear, setSelectedYear] = useState<string>('2025-26');

  const currentSurveyData = RANKINGS_DATA.find(d => d.yearSection === selectedYear) || RANKINGS_DATA[0];

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      
      {/* Page Header Banner in Vibrant Blue Theme */}
      <section className="relative py-16 sm:py-20 bg-slate-900 text-white overflow-hidden mb-12 rounded-b-[40px] shadow-lg">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="px-3.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-amber-400/30">
            Institutional Accreditations & Honors
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white">
            Rankings and Awards
          </h1>
          <div className="h-1 w-20 bg-amber-400 mx-auto mt-2 rounded-full" />
          <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            National rankings, survey accolades, state honors, and quality certifications conferred on Ravindra College of Engineering for Women.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mb-20">
        
        {/* Year Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 justify-center pb-2">
          {RANKINGS_DATA.map((sec) => {
            const isActive = selectedYear === sec.yearSection;
            return (
              <button
                key={sec.yearSection}
                onClick={() => setSelectedYear(sec.yearSection)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 border border-blue-500'
                    : 'bg-white text-slate-700 hover:bg-blue-50 border border-slate-200'
                }`}
              >
                Academic Year {sec.yearSection}
              </button>
            );
          })}
        </div>

        {/* Selected Year Section Title Header */}
        <div className="p-6 bg-white border-l-4 border-blue-600 rounded-2xl shadow-xs border-y border-r border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              Survey Records
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1">
              {currentSurveyData.title}
            </h2>
          </div>
          <span className="px-3.5 py-1 bg-amber-100 text-amber-900 font-mono font-bold text-xs rounded-full border border-amber-300">
            {currentSurveyData.items.length} Award Records
          </span>
        </div>

        {/* Rankings Cards Grid for Selected Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSurveyData.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-600 hover:shadow-md transition-all space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center font-bold border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span className="px-3 py-1 bg-blue-600 text-white font-mono font-bold text-xs rounded-full shadow-2xs">
                    {item.rank}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-slate-900 text-base leading-snug">
                  {item.survey}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" /> National Survey Verification
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
