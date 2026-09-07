import { ArrowRight, BookOpen, FileText, ShieldCheck, Share2, Globe, GraduationCap } from 'lucide-react';
import OfficialJournalCover from './OfficialJournalCover';

interface HeroProps {
  onReadInauguralClick: () => void;
  onExploreIssueClick: () => void;
  onOpenTitlePageModal?: () => void;
}

export default function Hero({
  onReadInauguralClick,
  onExploreIssueClick,
  onOpenTitlePageModal,
}: HeroProps) {
  const highlights = [
    {
      title: 'Peer Reviewed',
      desc: 'Double-blind scholarly evaluation and rigorous editorial review',
      icon: ShieldCheck,
    },
    {
      title: 'Multidisciplinary',
      desc: 'Bridging sciences, social sciences, humanities, and professional studies',
      icon: Share2,
    },
    {
      title: 'Global Perspective',
      desc: 'Fostering international dialogue with localized grassroots impact',
      icon: Globe,
    },
    {
      title: 'Academic Excellence',
      desc: 'Official University of Delhi research publication of record',
      icon: GraduationCap,
    },
  ];

  return (
    <div>
      {/* Primary Academic Hero Section */}
      <section className="relative bg-[#071322] text-white overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b-4 border-[#C5A059]">
        {/* Subtle Ambient Decorative Gradients */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#781D26]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#C5A059]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            
            {/* Column 1: Official Identity & Typography */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              
              {/* Commemoration Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-semibold shadow-sm max-w-full">
                <span className="text-sm shrink-0">🚩</span>
                <span className="truncate">350 Years of Hindavi Swaraj (1674–2024)</span>
              </div>

              {/* Stately Journal Title (Matching PDF Page 1) */}
              <div className="space-y-1.5 sm:space-y-2">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                  Shivraj <span className="text-[#E0C58A]">350</span>
                </h1>
                <p className="font-serif text-xl sm:text-3xl lg:text-[32px] font-medium text-[#C5A059] leading-snug">
                  International Peer Reviewed Multidisciplinary Journal
                </p>
              </div>

              {/* Classical Gold Divider Line */}
              <div className="flex items-center gap-3 py-0.5 sm:py-1">
                <div className="w-12 sm:w-16 h-0.5 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-xs">✦ ❖ ✦</span>
                <div className="w-12 sm:w-16 h-0.5 bg-[#C5A059]" />
              </div>

              {/* Published By & Verbatim Mission Excerpt */}
              <div className="space-y-1.5 sm:space-y-2">
                <div className="text-[11px] sm:text-xs font-sans tracking-widest text-[#E0C58A] uppercase font-semibold">
                  Published by:
                </div>
                <div className="text-lg sm:text-2xl font-serif font-bold text-white tracking-wide">
                  Shivaji College, University of Delhi
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl pt-1">
                  A peer-reviewed academic platform dedicated to fostering interdisciplinary research and dialogue across the sciences, social sciences, humanities, and professional studies.
                </p>
              </div>

              {/* Action Buttons: Full width on mobile, inline on sm+ */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <button
                  type="button"
                  id="hero-read-inaugural-btn"
                  onClick={onReadInauguralClick}
                  className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#781D26] to-[#8E222D] hover:from-[#5A121A] hover:to-[#781D26] text-white text-xs sm:text-sm font-bold shadow-xl shadow-black/40 border border-amber-400/40 transition-all transform hover:scale-[1.02] cursor-pointer text-center"
                >
                  <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Read Inaugural Issue (Vol. 1, No. 1)</span>
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={onExploreIssueClick}
                  className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all cursor-pointer text-center"
                >
                  <FileText className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Browse Articles</span>
                </button>
              </div>

              {/* Tracked Slogan Bar */}
              <div className="pt-3 sm:pt-4 border-t border-slate-800/80">
                <p className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] font-sans font-semibold text-slate-400 uppercase leading-relaxed">
                  IDEAS &nbsp;|&nbsp; INQUIRY &nbsp;|&nbsp; IMPACT &nbsp;|&nbsp; BEYOND BOUNDARIES
                </p>
              </div>
            </div>

            {/* Column 2: The Official Journal Cover below text on mobile */}
            <div className="lg:col-span-5 flex flex-col items-center pt-4 lg:pt-0">
              
              {/* Motto with Underline */}
              <div className="self-center sm:self-end text-center sm:text-right mb-3 sm:mb-4">
                <p className="font-serif italic text-base sm:text-xl text-[#F2E5CA] tracking-wide">
                  &ldquo;Higher learning for a brighter tomorrow&rdquo;
                </p>
                <div className="w-20 sm:w-24 h-0.5 bg-[#C5A059] mx-auto sm:ml-auto sm:mr-0 mt-1" />
              </div>

              {/* Authentic Official Cover Render (Page 1 of PDF) */}
              <div className="w-full max-w-[310px] sm:max-w-[420px] lg:max-w-[490px] mx-auto">
                <OfficialJournalCover onClick={onReadInauguralClick} />
              </div>

              {/* Sub-label under book */}
              <div className="mt-3 sm:mt-4 text-center">
                <span className="text-xs text-amber-300/80 font-serif italic">
                  Volume 1, Issue 1 (Jan-June 2026) • Official Cover
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4 Feature Highlights Strip */}
      <section className="bg-white py-10 sm:py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center flex flex-col items-center space-y-2 group">
                  <div className="w-14 h-14 rounded-full border-2 border-[#C5A059] flex items-center justify-center bg-amber-50/50 group-hover:bg-[#C5A059]/15 transition-colors shadow-xs">
                    <Icon className="w-6 h-6 text-[#A17A32]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-[220px] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative bg-[#F8F5EE] py-8 px-4 border-b border-slate-200 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-2">
          <p className="font-serif italic text-lg sm:text-2xl text-[#0B192C]">
            &ldquo;A platform for ideas that shape a better tomorrow.&rdquo;
          </p>
          <div className="w-20 h-0.5 bg-[#C5A059] mx-auto" />
        </div>
      </section>
    </div>
  );
}
