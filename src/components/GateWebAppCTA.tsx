import React from 'react';
import { GateLogo } from './BrandLogos';
import { BookOpen, ShieldCheck, Database, Smartphone, FileText, Headphones, Sparkles, CheckCircle } from 'lucide-react';
import { ECOSYSTEM_PLATFORMS, SOCIAL_LINKS } from '../data/staticData';

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
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                <GateLogo className="h-4 w-auto" variant="light" />
                <span className="ml-1">The .Gate Knowledge WebApp</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Access 6,236 Quranic Verses, 68,061 Hadiths, and 4,000+ Market Research Resources.
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                Curated deliberately for faith, intellectual development, and strategic competence. The .Gate application bridges the divide between classical scholasticism and contemporary institutional analysis.
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

            {/* Right Graphical WebApp Representation (No dead links, purely graphic presentation) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-neutral-950 rounded-2xl border border-neutral-700 shadow-2xl p-5 space-y-4">
                
                {/* Mockup Mobile Status Header */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[11px] text-neutral-400">
                  <span className="font-mono">GATE WEBAPP</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Synchronized</span>
                  </div>
                </div>

                {/* Brand in Mockup */}
                <div className="text-center py-2">
                  <GateLogo className="h-8 w-auto mx-auto mb-1" variant="light" />
                  <div className="text-xs text-neutral-400 font-serif italic">
                    The Curated Gate Ecosystem
                  </div>
                </div>

                {/* Graphic Modules in Mockup */}
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <div>
                        <div className="font-semibold text-white">Classical Texts Vault</div>
                        <div className="text-[10px] text-neutral-400">6,236 Verses + 68,061 Hadiths</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                      Verified
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="font-semibold text-white">Market Research Reports</div>
                        <div className="text-[10px] text-neutral-400">4,000+ Listed Companies Audited</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                      IFR Data
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Headphones className="w-4 h-4 text-sky-400" />
                      <div>
                        <div className="font-semibold text-white">Curated Audiobooks</div>
                        <div className="text-[10px] text-neutral-400">Self-Help, Finance, Psychology</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">
                      Audio
                    </span>
                  </div>
                </div>

                {/* Graphic Status Footer */}
                <div className="pt-2 text-center text-[11px] text-neutral-500">
                  Graphic Gate WebApp Overview
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
