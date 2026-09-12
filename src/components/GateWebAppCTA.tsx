import React from 'react';
import { GateLogo } from './BrandLogos';
import { BookOpen, ShieldCheck, Database, Smartphone, FileText, Headphones, Sparkles, CheckCircle } from 'lucide-react';
import { ECOSYSTEM_PLATFORMS, SOCIAL_LINKS } from '../data/staticData';
import gateFiImg from '../assets/images/GATE FI.png';

export const GateWebAppCTA: React.FC = () => {
  return (
    <section id="gate-ecosystem" className="py-16 sm:py-20 lg:py-24 bg-stone-100 border-b border-stone-300 dark:bg-neutral-950 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Graphic WebApp Showcase Container */}
        <div className="rounded-2xl bg-neutral-900 text-white p-6 sm:p-10 lg:p-14 shadow-xl border border-neutral-800 relative overflow-hidden">
          
          {/* Background subtle radial texture */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-neutral-800 border border-neutral-700 text-amber-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                <GateLogo className="h-3.5 sm:h-4 w-auto" variant="light" />
                <span className="ml-1">The Gate Knowledge WebApp</span>
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-snug sm:leading-tight">
                Access 6,236 Quranic Verses, 68,061 Hadiths, and 4,000+ Market Research Resources.
              </h2>

              <p className="text-xs sm:text-base text-neutral-300 font-sans leading-relaxed">
                Curated deliberately for faith, intellectual development, and strategic competence. The Gate application bridges the divide between classical scholasticism and contemporary institutional analysis.
              </p>

              {/* Verified Resource Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700/80">
                  <div className="text-lg sm:text-xl font-bold font-serif text-amber-400">
                    74,297
                  </div>
                  <div className="text-[11px] text-neutral-300 font-medium uppercase tracking-wider">
                    Sacred Texts
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    Quran & Hadiths
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700/80">
                  <div className="text-lg sm:text-xl font-bold font-serif text-emerald-400">
                    4,000+
                  </div>
                  <div className="text-[11px] text-neutral-300 font-medium uppercase tracking-wider">
                    Company Reports
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    Ethical market analysis
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700/80 col-span-2 sm:col-span-1">
                  <div className="text-lg sm:text-xl font-bold font-serif text-white">
                    4 Podcasts
                  </div>
                  <div className="text-[11px] text-neutral-300 font-medium uppercase tracking-wider">
                    Audio Library
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    IFR, ISR, IGC & IPN
                  </div>
                </div>
              </div>

              {/* 4 Pillars Breakdown */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  The Four Pillars of the Ecosystem
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-neutral-950/70 border border-neutral-800">
                    <span className="font-bold text-amber-400 font-mono mr-1.5">ISR:</span>
                    <span className="text-neutral-300">Ideological Studies Research | Faith, Classical Scholarship & Authentic Sources</span>
                  </div>
                  <div className="p-2.5 rounded bg-neutral-950/70 border border-neutral-800">
                    <span className="font-bold text-sky-400 font-mono mr-1.5">IFR:</span>
                    <span className="text-neutral-300">Integrity Finance Research | Ethical Finance & Economic Insight</span>
                  </div>
                  <div className="p-2.5 rounded bg-neutral-950/70 border border-neutral-800">
                    <span className="font-bold text-emerald-400 font-mono mr-1.5">IGC:</span>
                    <span className="text-neutral-300">Inspire Guide Connect | Career, Growth & Strategic Direction</span>
                  </div>
                  <div className="p-2.5 rounded bg-neutral-950/70 border border-neutral-800">
                    <span className="font-bold text-purple-400 font-mono mr-1.5">IPN:</span>
                    <span className="text-neutral-300">International Public Network | Planet, People, Progress & Policies</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Graphical WebApp Representation with Featured Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-neutral-950 rounded-2xl border border-neutral-700 shadow-2xl overflow-hidden p-3 space-y-3">
                <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-neutral-800 text-[11px] text-neutral-400">
                  <span className="font-mono text-amber-400 font-semibold">GATE FEATURED VISUAL</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Ecosystem</span>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="relative overflow-hidden flex items-center justify-center p-1">
                  <img
                    src={gateFiImg}
                    alt="GATE Ecosystem Featured View"
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/GATE FI.png';
                    }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 px-1 pb-1">
                  <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-center">
                    <div className="text-[10px] text-neutral-400">Verses</div>
                    <div className="text-xs font-bold text-amber-400">6,236</div>
                  </div>
                  <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-center">
                    <div className="text-[10px] text-neutral-400">Hadiths</div>
                    <div className="text-xs font-bold text-emerald-400">68,061</div>
                  </div>
                  <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-center">
                    <div className="text-[10px] text-neutral-400">Companies</div>
                    <div className="text-xs font-bold text-sky-400">4,000+</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
