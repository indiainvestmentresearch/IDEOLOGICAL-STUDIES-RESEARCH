import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, ExternalLink, CheckCircle, BookOpen, Layers, ShieldCheck } from 'lucide-react';
import { ECOSYSTEM_PLATFORMS, SOCIAL_LINKS } from '../data/staticData';

export const FeaturedTwoColumnSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const creatives = [
    {
      id: 'gate-ecosystem',
      title: '.Gate Knowledge Ecosystem Showcase',
      tag: 'Unified Platform',
      imageSrc: '/assets/gate-showcase.jpg',
      altText: '.Gate application ecosystem interface showcasing Books, Podcasts, Infographics, and Research Reports',
      description: 'A multi-platform digital ecosystem uniting books, research reports, audiobooks, and infographics across IPN, IGC, IFR, and ISR.',
      highlights: [
        'Connecting theology, ethical economics, policy, and personal growth',
        'Structured audio library with 4,000+ research profiles and reports',
        'Access to 74,297 classical texts and verified commentary'
      ]
    },
    {
      id: 'isr-library',
      title: 'ISR Classical Research Library',
      tag: 'Prophetic Scholarship',
      imageSrc: '/assets/isr-creative.jpg',
      altText: 'Ideological Studies Research classical texts exhibition highlighting Quranic exegesis and authentic Hadith collections',
      description: 'Preserving and teaching classical Islamic sciences through verified manuscripts, audios, and exegesis spanning 68,061 Hadiths and 6,236 Quranic verses.',
      highlights: [
        'Complete Sahih al-Bukhari and Sahih Muslim collections',
        'Systematic exegesis covering the Four Sunan and early Fiqh Imams',
        'Rigorous isnad verification and biographic evaluation of narrators'
      ]
    }
  ];

  const current = creatives[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % creatives.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + creatives.length) % creatives.length);
  };

  return (
    <section id="featured-creatives" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200 dark:bg-[#0e0f11] dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Featured Ecosystem & Research Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
            A Clean Architecture for Purposeful Human Attention.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
            Instead of dispersing your focus across disparate applications and algorithmically driven distractions, the .Gate ecosystem and ISR unify classical theology, economic analysis, and deliberate growth into a singular digital library.
          </p>
        </div>

        {/* Two-Column Responsive Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Substantial Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="border-l-2 border-amber-600 pl-4 py-1">
                <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold block mb-1">
                  Core Differentiation
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-neutral-900 dark:text-white">
                  Four Specialized Platforms. One Unified Knowledge Ecosystem.
                </h3>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 font-sans text-sm sm:text-base leading-relaxed">
                Knowledge retains value only when it produces clarity of mind and upright conduct. Most modern platforms isolate disciplines: financial news ignores ethics, religious content lacks socioeconomic context, and career advice forgets character. 
              </p>

              <p className="text-neutral-700 dark:text-neutral-300 font-sans text-sm sm:text-base leading-relaxed">
                Gate changes this dynamic by organizing specialized research arms under one coherent architecture, allowing you to examine sacred texts, audit banking mechanisms, and refine career strategy through the same uncompromising ethical lens.
              </p>

              {/* 4 Platforms Detail Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {ECOSYSTEM_PLATFORMS.map((platform) => (
                  <div
                    key={platform.code}
                    className="p-4 rounded-lg bg-neutral-50 hover:bg-stone-50 border border-neutral-200/80 dark:bg-neutral-900/80 dark:hover:bg-neutral-900 dark:border-neutral-800 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-mono">
                        {platform.code}
                      </span>
                      <a
                        href={platform.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                        title={`Visit ${platform.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
                      {platform.name}
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                      {platform.focus}
                    </p>
                  </div>
                ))}
              </div>

              {/* Attention Reflection Box */}
              <div className="p-5 rounded-lg bg-stone-100 border border-stone-200 dark:bg-neutral-900 dark:border-neutral-800">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-2">
                  The Opportunity Cost of Attention
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="bg-white/80 dark:bg-neutral-950/80 p-3 rounded border border-neutral-200 dark:border-neutral-800">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 block mb-1">
                      20 Minutes on Generic Social Media
                    </span>
                    Rapid dopamine surges, fragmented memory, disjointed algorithmic stimuli, and cognitive fatigue without durable insight.
                  </div>
                  <div className="bg-amber-50/80 dark:bg-amber-950/20 p-3 rounded border border-amber-200/80 dark:border-amber-500/30">
                    <span className="font-semibold text-amber-950 dark:text-amber-200 block mb-1">
                      20 Minutes on .Gate & ISR
                    </span>
                    A verified Hadith exegesis, an audit of debt mechanics in modern banking, or a foundational lesson in Arabic jurisprudence.
                  </div>
                </div>
              </div>
            </div>

            {/* Links and CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={SOCIAL_LINKS.gateWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-amber-600 dark:hover:bg-amber-500 dark:text-neutral-950 font-medium text-xs sm:text-sm tracking-wide transition-all shadow-sm"
              >
                <span>Visit Gate Platform (DrZaydH.com)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#live-podcasts"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
              >
                <span>Listen to ISR Audio Research Below</span>
              </a>
            </div>
          </div>

          {/* Right Side: Clean Two-Creative Slider */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-neutral-900 text-white rounded-xl p-4 sm:p-5 shadow-lg border border-neutral-800">
              
              {/* Slider Header Controls */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
                    {current.tag}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">
                    Creative {activeSlide + 1} of {creatives.length}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                    title="Expand creative in full screen"
                    aria-label="Expand image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={prevSlide}
                    className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                    aria-label="Previous Creative"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                    aria-label="Next Creative"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Slider Frame: Intended Proportions, NO Unwanted Crop or Stretch */}
              <div className="relative w-full aspect-[2/3] max-h-[580px] bg-neutral-950 rounded-lg overflow-hidden flex items-center justify-center border border-neutral-800 group">
                <img
                  src={current.imageSrc}
                  alt={current.altText}
                  className="w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                
                {/* Floating expand prompt */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/80 text-[11px] text-neutral-200 hover:text-white flex items-center gap-1.5 transition-all opacity-90 hover:opacity-100"
                >
                  <Maximize2 className="w-3 h-3 text-amber-400" />
                  <span>Inspect Proportions</span>
                </button>
              </div>

              {/* Creative Information Panel */}
              <div className="mt-4 pt-3 border-t border-neutral-800 space-y-2">
                <div className="text-sm font-serif font-bold text-neutral-100">
                  {current.title}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {current.description}
                </p>

                {/* Thumbnails to switch directly */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {creatives.map((c, idx) => (
                    <button
                      key={c.id}
                      onClick={() => setActiveSlide(idx)}
                      className={`text-left p-2 rounded text-xs transition-all border ${
                        activeSlide === idx
                          ? 'bg-amber-500/10 border-amber-500/50 text-amber-300'
                          : 'bg-neutral-800/60 border-neutral-700/60 text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <div className="font-semibold truncate">{c.title}</div>
                      <div className="text-[10px] opacity-75">{c.tag}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Full-Screen Modal for Precision Inspection */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="w-full max-w-4xl flex items-center justify-between text-white pb-3 border-b border-neutral-800 mb-4">
            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-neutral-100">{current.title}</h4>
              <p className="text-xs text-neutral-400 font-sans">{current.altText}</p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative max-w-3xl max-h-[80vh] w-full flex items-center justify-center overflow-auto">
            <img
              src={current.imageSrc}
              alt={current.altText}
              className="max-h-[78vh] w-auto object-contain rounded shadow-2xl border border-neutral-700"
            />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="px-4 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium"
            >
              Previous Creative
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium"
            >
              Next Creative
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
