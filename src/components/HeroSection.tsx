import React from 'react';
import { BookOpen, Headphones, Library, Compass, ArrowRight } from 'lucide-react';
import { CLASSICAL_TEXT_BREAKDOWN, SOCIAL_LINKS } from '../data/staticData';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#faf8f2] via-[#f5f2e9] to-[#eeeae0] text-neutral-900 border-b border-neutral-200/90 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 dark:text-neutral-100 dark:border-neutral-800 transition-colors duration-200">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Scholarly provenance tag */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-300 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 shrink-0" />
            <span className="truncate max-w-[280px] sm:max-w-none">{t('Ideological Studies Research | Led by Zayd Iqbal Haji', 'أبحاث الدراسات العقدية | بإشراف زيد إقبال حاجي')}</span>
          </div>

          {/* Primary Editorial Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 dark:text-white tracking-tight leading-snug sm:leading-[1.15] mb-4 sm:mb-6">
            {t(
              'Authentic Knowledge Rooted in Revelation, Accessible to Every Seeker.',
              'علم أصيل متجذر في الوحي، ومتاح لكل باحث عن الحق.'
            )}
          </h1>

          {/* Substantive introductory prose */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed mb-6 sm:mb-8 max-w-3xl">
            {t(
              'Ideological Studies Research (ISR) preserves, examines, and articulates the classical disciplines of Islam. Through a comprehensive audio library, systematic podcast analysis, verified texts, and scholarly commentary, ISR connects students and researchers directly to original prophetic traditions and primary sources.',
              'تقوم أبحاث الدراسات العقدية (ISR) بالحفاظ على العلوم الإسلامية الأصيلة ودراستها وتجلتها. ومن خلال مكتبة صوتية شاملة، وتحليل ممنهج للبودكاست، ونصوص محققة، وتعليقات علمية، تربط ISR الطلاب والباحثين مباشرة بالسنن النبوية والمصادر الأصلية.'
            )}
          </p>

          {/* Call to action group */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-8 sm:mb-12">
            <a
              href="#live-podcasts"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-lg sm:rounded-md bg-amber-600 hover:bg-amber-500 text-neutral-950 font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{t('Stream Live Podcasts', 'استمع للبث الصوتي المباشر')}</span>
            </a>

            <a
              href="#classical-library"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-lg sm:rounded-md bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-medium text-xs sm:text-sm tracking-wide shadow-xs dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-700 transition-all"
            >
              <Library className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400" />
              <span>{t('Explore 74,297 Classical Texts', 'استكشف ٧٤,٢٩٧ نصاً تراثياً')}</span>
            </a>

            <a
              href="#featured-creatives"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-3.5 text-amber-800 hover:text-amber-950 dark:text-amber-400 dark:hover:text-amber-300 text-xs sm:text-sm font-medium transition-colors group"
            >
              <span>{t('View Featured Creatives', 'عرض المحتوى المميز')}</span>
              <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </a>
          </div>

          {/* Stat Pillars grounded in verifiable facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-6 sm:pt-8 border-t border-neutral-300/80 dark:border-neutral-800/80">
            <div className="p-2.5 sm:p-4 rounded-lg bg-white/80 border border-neutral-200/90 shadow-xs dark:bg-neutral-900/60 dark:border-neutral-800">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold font-serif text-amber-700 dark:text-amber-400 mb-0.5">
                {CLASSICAL_TEXT_BREAKDOWN.quranVerses.toLocaleString()}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold">
                {t('Quranic Verses', 'آيات القرآن الكريم')}
              </div>
              <div className="text-[9px] sm:text-[11px] text-neutral-500 dark:text-neutral-500 mt-0.5 line-clamp-1">
                {t('Direct revelation with Tafsir', 'الوحي المباشر مع التفسير')}
              </div>
            </div>

            <div className="p-2.5 sm:p-4 rounded-lg bg-white/80 border border-neutral-200/90 shadow-xs dark:bg-neutral-900/60 dark:border-neutral-800">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold font-serif text-neutral-900 dark:text-neutral-100 mb-0.5">
                {CLASSICAL_TEXT_BREAKDOWN.sahihTotal.toLocaleString()}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold">
                {t('Sahih Hadiths', 'الأحاديث الصحيحة')}
              </div>
              <div className="text-[9px] sm:text-[11px] text-neutral-500 dark:text-neutral-500 mt-0.5 line-clamp-1">
                {t('Al-Bukhari and Muslim', 'صحيح البخاري ومسلم')}
              </div>
            </div>

            <div className="p-2.5 sm:p-4 rounded-lg bg-white/80 border border-neutral-200/90 shadow-xs dark:bg-neutral-900/60 dark:border-neutral-800">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold font-serif text-neutral-900 dark:text-neutral-100 mb-0.5">
                {CLASSICAL_TEXT_BREAKDOWN.totalHadiths.toLocaleString()}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold">
                {t('Hadith Narrations', 'مرويات الحديث')}
              </div>
              <div className="text-[9px] sm:text-[11px] text-neutral-500 dark:text-neutral-500 mt-0.5 line-clamp-1">
                {t('9 Primary classical collections', '٩ مصنفات حديثية أساسية')}
              </div>
            </div>

            <div className="p-2.5 sm:p-4 rounded-lg bg-white/80 border border-neutral-200/90 shadow-xs dark:bg-neutral-900/60 dark:border-neutral-800">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold font-serif text-amber-700 dark:text-amber-400 mb-0.5">
                {CLASSICAL_TEXT_BREAKDOWN.combinedTotalTexts.toLocaleString()}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold">
                {t('Combined Corpus', 'المجموع الكلي للمصنفات')}
              </div>
              <div className="text-[9px] sm:text-[11px] text-neutral-500 dark:text-neutral-500 mt-0.5 line-clamp-1">
                {t('Quran and Sunnah library', 'مكتبة القرآن والسنة الشريفة')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

