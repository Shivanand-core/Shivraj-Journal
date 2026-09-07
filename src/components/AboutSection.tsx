import { FlaskConical, Users2, BookOpen, TrendingUp } from 'lucide-react';
import { JOURNAL_INFO } from '../data/journalData';
import aboutImage from '../assets/images/about_image.png';

interface AboutSectionProps {
  isStandalonePage?: boolean;
}

export default function AboutSection({ isStandalonePage = false }: AboutSectionProps) {
  const focusAreas = [
    {
      title: 'Sciences',
      desc: 'Empirical investigations, natural sciences, computational sciences, biotechnology, and environmental studies.',
      icon: FlaskConical,
    },
    {
      title: 'Social Sciences',
      desc: 'Economics, sociology, political discourse, public policy, community studies, and contemporary human geography.',
      icon: Users2,
    },
    {
      title: 'Humanities',
      desc: 'Literature, philosophy, history, cultural studies, linguistics, ethics, and critical archival analysis.',
      icon: BookOpen,
    },
    {
      title: 'Professional Studies',
      desc: 'Commerce, management, educational leadership, legal studies, applied statistics, and organizational governance.',
      icon: TrendingUp,
    },
  ];

  return (
    <div id="about">
      {/* If viewing dedicated About Page: Dark Atmospheric Library Banner */}
      {isStandalonePage && (
        <div className="relative bg-[#071322] text-white py-16 sm:py-20 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 z-0">
            <img
              src="/src/assets/images/academic_library_bg_1788796629847.jpg"
              alt="Academic Library Bookshelves"
              className="w-full h-full object-cover opacity-35 mix-blend-luminosity filter brightness-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#071322]/80 to-[#071322]/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              About the Journal
            </h1>
            <div className="w-16 h-0.5 bg-[#C5A059] mx-auto" />
            <p className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#E0C58A] font-medium pt-1">
              IDEAS FOR A BRIGHTER TOMORROW
            </p>
          </div>
        </div>
      )}

      {/* Main About Section Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              {/* Gold Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059] font-sans">
                  ABOUT
                </span>
                <div className="w-16 h-0.5 bg-[#C5A059]" />
              </div>

              {/* Section Heading */}
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight">
                {isStandalonePage ? 'Shivraj 350: Multidisciplinary Journal' : 'About the Journal'}
              </h2>

              {/* Exact Verbatim Scope & Academic Platform Text */}
              <div className="space-y-3 sm:space-y-4 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-sans">
                <p>
                  Shivraj 350: Multidisciplinary Journal is a peer-reviewed, academic platform dedicated to fostering interdisciplinary research and dialogue across the sciences, social sciences, humanities, and professional studies. The journal aims to promote original thinking, critical inquiry and innovative solutions to contemporary challenges with global relevance and local impact.
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Published by Shivaji College, University of Delhi, the journal upholds the highest standards of double-blind peer review and academic ethics, offering open-access scholarship without publication fees to bridge scholars worldwide.
                </p>
              </div>

              {/* Accreditation & Institutional Footnote */}
              <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-500 font-sans">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#781D26]" />
                  Shivaji College, University of Delhi
                </span>
                <span>•</span>
                <span>NAAC Grade &apos;A&apos; Accredited</span>
                <span>•</span>
                <span className="font-mono">ISSN: {JOURNAL_INFO.issn}</span>
              </div>
            </div>

            {/* Right Column: Campus & Academic Heritage Image */}
            <div className="lg:col-span-6 mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-lg bg-[#FAF8F5] p-3 sm:p-5 rounded-lg border border-slate-200 shadow-sm">
                
                {/* Image Container matching 3:2 aspect ratio (1536x1024) */}
                <div className="relative aspect-[3/2] rounded-sm overflow-hidden border border-amber-900/15 shadow-inner bg-[#F5F2EB]">
                  <img
                    src={aboutImage}
                    alt="Shivaji College Campus & Academic Heritage"
                    className="w-full h-full object-contain select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* Key Focus Areas (Prominent on About Page, clean & accessible) */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-200">
            <div className="text-left mb-6 sm:mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Key Focus Areas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-sans">
                Interdisciplinary publication streams advancing original scholarship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="bg-[#FAF8F5] p-6 rounded-lg border border-slate-200/80 hover:border-[#C5A059] hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-full border border-[#C5A059] bg-white flex items-center justify-center mb-4 text-[#781D26]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-slate-900">
                        {area.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-sans">
                        {area.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-[#781D26] font-semibold flex items-center justify-between">
                      <span>Peer Reviewed Track</span>
                      <span>Vol. 1</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
