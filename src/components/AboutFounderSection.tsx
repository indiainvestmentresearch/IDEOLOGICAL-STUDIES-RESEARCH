import React, { useState, useRef } from 'react';
import { ZaydSignature } from './BrandLogos';
import founderPortraitImg from '../assets/images/IMG_9322.jpg';
import {
  Award,
  BookOpen,
  GraduationCap,
  ExternalLink,
  Heart,
  Globe,
  Shield,
  Sparkles,
  Camera,
  RotateCcw,
  Calendar,
  MapPin,
  Landmark,
  ShieldCheck,
  Flame,
  Compass,
  Sun,
  Quote
} from 'lucide-react';
import { FOUNDER_BOOKS, FOUNDER_CREDENTIALS, SOCIAL_LINKS } from '../data/staticData';
import { useTheme } from '../context/ThemeContext';

export const AboutFounderSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="about-founder" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200 dark:bg-[#0e0f11] dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Leadership & Scholastic Provenance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
            About Zayd Iqbal Haji.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
            Researcher, author, and institutional founder working across the intersection of classical Islamic sciences, macroeconomic analysis, and ethical capital allocation.
          </p>
        </div>

        {/* Narrative & Portrait Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Portrait Column */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 shadow-md p-2.5">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-neutral-900 group">
                <img
                  src={founderPortraitImg}
                  alt="Zayd Iqbal Haji, Founder of Ideological Studies Research"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/images/IMG_9322.jpg';
                  }}
                />
              </div>

              <div className="pt-4 pb-3 px-2 text-center">
                <div className="font-serif font-bold text-lg text-neutral-900 dark:text-white">
                  Zayd Iqbal Haji
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                  Author & Research Student
                </div>

                {/* Creative Founder Ecosystem Badges */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 px-2">
                  <span className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider w-full mb-0.5">Founder & Visionary of</span>
                  {[
                    { name: 'ISR', desc: 'Ideological Studies' },
                    { name: 'IFR', desc: 'Integrity Finance' },
                    { name: 'IGC', desc: 'Inspire Guide Connect' },
                    { name: 'IPN', desc: 'International Public Net' },
                    { name: 'GATE', desc: 'Gateway Ecosystem' },
                    { name: 'Z', desc: 'Productivity WebAPP' },
                  ].map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-bold text-[10px] shadow-2xs tracking-wide"
                      title={item.desc}
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                      {item.name}
                    </span>
                  ))}
                </div>

                {/* Signature Display */}
                <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex justify-center">
                  <ZaydSignature className="h-12 w-auto" color={theme === 'dark' ? '#f0ece1' : '#1a1a18'} />
                </div>
              </div>
            </div>

            {/* Greeting & Official Digital Portals Widget */}
            <div className="mt-6 w-full max-w-sm rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 dark:from-[#131417] dark:via-[#16181d] dark:to-[#0f1013] border border-amber-500/30 dark:border-amber-500/20 p-5 shadow-xl text-xs space-y-4 text-neutral-200 relative overflow-hidden">
              {/* Subtle background ornamentation */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Islamic Greeting & Sincerity Statement */}
              <div className="space-y-2 pb-3 border-b border-neutral-800/80 text-center">
                <div className="font-serif italic text-amber-300 dark:text-amber-400 text-xs sm:text-sm font-medium tracking-wide">
                  "Assalamu Alaikum wa Rahmatullahi wa Barakatuh"
                </div>
                <div className="text-[11px] text-neutral-400 dark:text-neutral-400 font-sans leading-relaxed px-1">
                  With sincerity, struggle, and submission to the truth.
                </div>
              </div>

              {/* Header Title */}
              <div className="flex items-center justify-between text-[11px] font-bold text-amber-400/90 tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>Official Research Ecosystem</span>
                </span>
                <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px]">6 Portals</span>
              </div>

              {/* Creative Visual Buttons Grid */}
              <div className="grid grid-cols-1 gap-2">
                {/* ISR */}
                <a
                  href="https://www.zaydalhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 hover:border-amber-500/50 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs group-hover:text-amber-300 transition-colors">ISR (Ideological Studies)</div>
                      <div className="text-[10px] text-neutral-400">www.zaydalhaji.com</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                </a>

                {/* IFR */}
                <a
                  href="https://www.zaydhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 hover:border-amber-500/50 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Landmark className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs group-hover:text-emerald-300 transition-colors">IFR (Integrity Finance)</div>
                      <div className="text-[10px] text-neutral-400">www.zaydhaji.com</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* IGC */}
                <a
                  href="https://www.drzaydalhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 hover:border-amber-500/50 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Compass className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs group-hover:text-blue-300 transition-colors">IGC (Inspire Guide Connect)</div>
                      <div className="text-[10px] text-neutral-400">www.drzaydalhaji.com</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                </a>

                {/* IPN */}
                <a
                  href="https://www.drzaydhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 hover:border-amber-500/50 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs group-hover:text-purple-300 transition-colors">IPN (International Public Net)</div>
                      <div className="text-[10px] text-neutral-400">www.drzaydhaji.com</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-purple-400 transition-colors" />
                </a>

                {/* GATE */}
                <a
                  href={SOCIAL_LINKS.gateWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/40 hover:border-amber-400 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-amber-200 text-xs group-hover:text-amber-100 transition-colors">GATE Ecosystem</div>
                      <div className="text-[10px] text-amber-300/70">www.drzaydh.com</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </a>

                {/* Z */}
                <a
                  href="https://www.zaydh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/60 hover:border-amber-500/50 transition-all duration-200 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-500/15 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs group-hover:text-rose-300 transition-colors">Z Productivity WebAPP</div>
                      <div className="text-[10px] text-neutral-400">www.zaydh.com</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-rose-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-8 space-y-6 text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed text-sm sm:text-base">
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 dark:text-white">
                A Mission of Intellectual Stewardship and Moral Clarification.
              </h3>

              <p>
                Zayd Iqbal Haji established Ideological Studies Research (ISR) to address a widening schism in contemporary education: the estrangement of rigorous Islamic exegesis from modern institutional reality. While commercial academia frequently treats ethical philosophy as an abstract novelty, classical Islamic jurisprudence offers an exhaustively tested, cohesive framework for law, governance, family sanctity, and trade.
              </p>

              <p>
                Through ISR, Zayd leads a continuous effort to make the classical Arabic textual tradition accessible to English-speaking students, scholars, and professionals. Rather than providing selective interpretations or ideological adaptations, the research program prioritizes direct engagement with primary sources: 6,236 Quranic verses and 68,061 Hadith narrations authenticated through rigorous isnad analysis.
              </p>

              <p>
                Parallel to his theological scholarship, his economic writing confronts the predatory mechanics of interest-bearing credit systems. His investigative treatises explore the mechanisms by which fiat expansion and fractional reserve banking drain purchasing power from families and communities, offering actionable, Shari‘ah-compliant alternatives founded on asset backing, equity risk sharing, and commercial transparency.
              </p>
            </div>

            {/* Academic Credentials Board */}
            <div className="pt-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <GraduationCap className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>Academic Degrees and Specialized Research Training</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {FOUNDER_CREDENTIALS.map((cred) => (
                  <div
                    key={cred.degree}
                    className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-amber-400 dark:hover:border-amber-500/50 transition-colors"
                  >
                    <div className="text-xs font-serif font-bold text-neutral-900 dark:text-white mb-0.5">
                      {cred.degree}
                    </div>
                    <div className="text-[11px] font-semibold text-amber-800 dark:text-amber-400 mb-1.5">
                      {cred.institution}
                    </div>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-normal font-sans">
                      {cred.field}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spiritual, Familial & Ancestral Legacy */}
            <div className="p-5 sm:p-7 rounded-2xl bg-stone-50/80 dark:bg-neutral-900/80 border border-stone-200/90 dark:border-neutral-800 space-y-6 shadow-xs">
              
              {/* Section Header */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-stone-200 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-800 dark:text-amber-400 border border-amber-500/20">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-neutral-900 dark:text-white">
                      Spiritual Legacy & Familial Roots
                    </h4>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans">
                      Raised in a home grounded in Amanah, Adab, and Tawhid
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-200/60 dark:bg-neutral-800 text-stone-700 dark:text-stone-300 font-medium">
                  Origins & Lineage
                </span>
              </div>

              {/* Birth & Early Life Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-neutral-950/60 border border-stone-200/80 dark:border-neutral-800/80 space-y-3">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                        Birth & Early Life
                      </span>
                    </div>
                    <div className="text-base font-serif font-bold text-neutral-900 dark:text-white">
                      Birth Name: Zaid Iqbal Haji
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 bg-stone-100 dark:bg-neutral-900 px-2.5 py-1 rounded-md border border-stone-200 dark:border-neutral-800">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Mazgaon, Mumbai, India</span>
                  </div>
                </div>

                {/* Partitioned Birth Date Details */}
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 dark:bg-neutral-900 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-neutral-800 font-mono text-[11px]">
                    <Calendar className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>1 February 1998 CE</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100/80 dark:bg-neutral-900/80 text-stone-600 dark:text-stone-300 border border-stone-200/80 dark:border-neutral-800 text-[11px] font-mono">
                    <span>3 Shawwal 1418 AH</span>
                  </div>
                  <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 text-[10px] font-semibold">
                    Eid al-Fitr
                  </div>
                </div>

                {/* The Primordial Covenant Insight */}
                <div className="p-3.5 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  <div className="flex items-start gap-2.5">
                    <Quote className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 rotate-180" />
                    <p>
                      From his first breath, crying <em>"Allah! Allah!"</em>, his family felt the whisper of the Primordial Covenant (Surah Al-A‘raf 7:172), symbolizing innate spiritual instinct and divine memory.
                    </p>
                  </div>
                </div>
              </div>

              {/* Living Pillars: Mother & Brother */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2.5">
                  Living Guiding Presences
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Mother */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-950/60 border border-stone-200/80 dark:border-neutral-800/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-900/50">
                        Mother
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        Born 14 Jan 1977
                      </span>
                    </div>
                    <div className="font-serif font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
                      <span>Almas Iqbal Haji</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Continues to be a guiding presence and source of inspiration in his life.
                    </p>
                  </div>

                  {/* Younger Brother */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-950/60 border border-stone-200/80 dark:border-neutral-800/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-900/50">
                        Younger Brother
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        Born 28 Dec 2006
                      </span>
                    </div>
                    <div className="font-serif font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>Tauhid Iqbal Haji</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Remains a cherished companion and support in his journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillars of Legacy: Ancestral Heritage */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    His Pillars of Legacy
                  </span>
                  <span className="text-[10px] text-neutral-400 italic">
                    Lineage of Integrity and Faith
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Late Ismail Abbas Haji */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-950/60 border border-stone-200/80 dark:border-neutral-800/80 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-md bg-stone-100 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 shrink-0">
                          <Landmark className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 dark:text-white">
                            Late Ismail Abbas Haji
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-600 dark:text-stone-400 border border-stone-200/80 dark:border-neutral-700/80">
                            Great-Grandfather
                          </span>
                        </div>
                      </div>

                      {/* Partitioned UI: Date Badge & Arabic Badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100/90 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-neutral-800 text-[11px] font-mono">
                          <Calendar className="w-3 h-3 text-stone-400 shrink-0" />
                          <span>9 Apr 1999</span>
                        </div>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-500/10 dark:bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30 text-xs font-serif leading-none shadow-xs">
                          <span dir="rtl">إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-8 sm:pl-9 leading-relaxed font-sans">
                      A symbol of foresight, faith, and foundational wisdom.
                    </p>
                  </div>

                  {/* Late Ahmed Ismail Haji */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-950/60 border border-stone-200/80 dark:border-neutral-800/80 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-md bg-stone-100 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 dark:text-white">
                            Late Ahmed Ismail Haji
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-600 dark:text-stone-400 border border-stone-200/80 dark:border-neutral-700/80">
                            Grandfather
                          </span>
                        </div>
                      </div>

                      {/* Partitioned UI: Date Badge & Arabic Badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100/90 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-neutral-800 text-[11px] font-mono">
                          <Calendar className="w-3 h-3 text-stone-400 shrink-0" />
                          <span>19 Dec 1934 to 8 July 2025</span>
                        </div>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-500/10 dark:bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30 text-xs font-serif leading-none shadow-xs">
                          <span dir="rtl">إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-8 sm:pl-9 leading-relaxed font-sans">
                      Whose strength and honesty shaped generations.
                    </p>
                  </div>

                  {/* Late Iqbal Ahmed Haji */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-950/60 border border-stone-200/80 dark:border-neutral-800/80 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-md bg-stone-100 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 shrink-0">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 dark:text-white">
                            Late Iqbal Ahmed Haji
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-600 dark:text-stone-400 border border-stone-200/80 dark:border-neutral-700/80">
                            Father
                          </span>
                        </div>
                      </div>

                      {/* Partitioned UI: Date Badge & Arabic Badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100/90 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-neutral-800 text-[11px] font-mono">
                          <Calendar className="w-3 h-3 text-stone-400 shrink-0" />
                          <span>26 Jan 1965 to 21 Mar 2020</span>
                        </div>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-500/10 dark:bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30 text-xs font-serif leading-none shadow-xs">
                          <span dir="rtl">إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-8 sm:pl-9 leading-relaxed font-sans">
                      A man of quiet discipline and unwavering devotion.
                    </p>
                  </div>

                  {/* Late Khayyamudin Mimli */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-950/60 border border-stone-200/80 dark:border-neutral-800/80 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-md bg-stone-100 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 shrink-0">
                          <Sun className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 dark:text-white">
                            Late Khayyamudin Mimli
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-600 dark:text-stone-400 border border-stone-200/80 dark:border-neutral-700/80">
                            Maternal Grandfather
                          </span>
                        </div>
                      </div>

                      {/* Partitioned UI: Date Badge & Arabic Badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100/90 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-neutral-800 text-[11px] font-mono">
                          <Calendar className="w-3 h-3 text-stone-400 shrink-0" />
                          <span>Year 2023</span>
                        </div>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-500/10 dark:bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30 text-xs font-serif leading-none shadow-xs">
                          <span dir="rtl">إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-8 sm:pl-9 leading-relaxed font-sans">
                      Known for his deep spirituality and service to others.
                    </p>
                  </div>

                  {/* Late Suraiya Mimli */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-950/60 border border-stone-200/80 dark:border-neutral-800/80 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-md bg-stone-100 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 shrink-0">
                          <Flame className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 dark:text-white">
                            Late Suraiya Mimli
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-600 dark:text-stone-400 border border-stone-200/80 dark:border-neutral-700/80">
                            Maternal Grandmother
                          </span>
                        </div>
                      </div>

                      {/* Partitioned UI: Date Badge & Arabic Badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100/90 dark:bg-neutral-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-neutral-800 text-[11px] font-mono">
                          <Calendar className="w-3 h-3 text-stone-400 shrink-0" />
                          <span>Year 2020</span>
                        </div>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-amber-500/10 dark:bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30 text-xs font-serif leading-none shadow-xs">
                          <span dir="rtl">إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-8 sm:pl-9 leading-relaxed font-sans">
                      A woman of compassion, du’a, and unwavering sabr.
                    </p>
                  </div>
                </div>
              </div>

              {/* Du'a & Eternal Mandate Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-stone-50 to-amber-50 dark:from-emerald-950/30 dark:via-neutral-900 dark:to-amber-950/20 border border-emerald-200/70 dark:border-emerald-900/40 text-center space-y-1.5">
                <p className="text-xs font-serif font-semibold text-emerald-900 dark:text-emerald-300">
                  May Allah elevate their ranks and grant them the highest levels of Jannah.
                </p>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  In honoring them, Zayd carries a legacy not measured by titles or wealth, but by trust, truth, and transcendence.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Published Books & Works Section */}
        <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1">
              <BookOpen className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>Authored Books and Critical Publications</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900 dark:text-white">
              Works by Zayd Haji Available on Google Play Books.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans mt-2">
              Investigative analyses of the debt economy, value investment frameworks, entrepreneurial ethics, and psychological self-command.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDER_BOOKS.map((book) => (
              <div
                key={book.title + (book.volume || '')}
                className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-amber-400 dark:hover:border-amber-500/50 hover:bg-white dark:hover:bg-neutral-850 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    {book.volume ? (
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-300">
                        {book.volume}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                        Treatise
                      </span>
                    )}
                    <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-sans">
                      Official Edition
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-neutral-900 dark:text-white mb-1">
                    {book.title}
                  </h4>
                  <div className="text-xs text-amber-800 dark:text-amber-400 font-medium mb-3 italic">
                    {book.subtitle}
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed mb-4">
                    {book.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200/80 dark:border-neutral-800">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {book.topics.map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={book.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-amber-600 dark:hover:bg-amber-500 dark:text-neutral-950 text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                  >
                    <span>Read on Google Play</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={SOCIAL_LINKS.googlePlayBooks}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-neutral-900 border border-stone-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-700 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Explore Complete Book Catalogue on Google Play</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
