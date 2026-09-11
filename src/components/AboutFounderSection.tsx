import React, { useState, useRef } from 'react';
import { ZaydSignature } from './BrandLogos';
import { Award, BookOpen, GraduationCap, ExternalLink, Heart, Globe, Shield, Sparkles, Camera, RotateCcw } from 'lucide-react';
import { FOUNDER_BOOKS, FOUNDER_CREDENTIALS, SOCIAL_LINKS } from '../data/staticData';
import { useTheme } from '../context/ThemeContext';

export const AboutFounderSection: React.FC = () => {
  const { theme } = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('isr_custom_author_photo') || '/assets/IMG_9322.jpg';
  });
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    return !!localStorage.getItem('isr_custom_author_photo');
  });

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          localStorage.setItem('isr_custom_author_photo', result);
          setPhotoUrl(result);
          setIsCustomPhoto(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('isr_custom_author_photo');
    setPhotoUrl('/assets/IMG_9322.jpg');
    setIsCustomPhoto(false);
  };

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
                  src={photoUrl}
                  alt="Zayd Iqbal Haji, Founder of Ideological Studies Research"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (photoUrl !== '/assets/zayd-portrait.jpg') {
                      setPhotoUrl('/assets/zayd-portrait.jpg');
                    }
                  }}
                />

                {/* Hidden photo input to load exact face without alteration */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoSelect}
                  className="hidden"
                  aria-label="Upload author photo"
                />

                {/* Floating overlay to update photo directly with IMG_9322.jpg */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-neutral-900 text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                    title="Upload or replace with your exact photo (e.g. IMG_9322.jpg)"
                  >
                    <Camera className="w-3.5 h-3.5 text-neutral-700" />
                    <span>{isCustomPhoto ? 'Change Photo' : 'Upload My Photo'}</span>
                  </button>

                  {isCustomPhoto && (
                    <button
                      type="button"
                      onClick={handleResetPhoto}
                      className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white/90 text-xs transition-colors cursor-pointer"
                      title="Reset photo"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="pt-4 pb-2 px-2 text-center">
                <div className="font-serif font-bold text-lg text-neutral-900 dark:text-white">
                  Zayd Iqbal Haji
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                  Founder: ISR, IFR, IGC, IPN & .Gate
                </div>

                {/* Signature Display */}
                <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex justify-center">
                  <ZaydSignature className="h-12 w-auto" color={theme === 'dark' ? '#f0ece1' : '#1a1a18'} />
                </div>
              </div>
            </div>

            {/* Platform Quick Links */}
            <div className="mt-6 w-full max-w-sm p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs space-y-2.5">
              <div className="font-bold text-neutral-900 dark:text-white uppercase tracking-wider text-[11px]">
                Official Digital Portals
              </div>
              <div className="space-y-1.5">
                <a
                  href="https://www.zaydalhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-1.5 rounded hover:bg-neutral-200/60 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <span className="font-medium">ISR: Ideological Studies</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
                <a
                  href="https://www.zaydhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-1.5 rounded hover:bg-neutral-200/60 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <span className="font-medium">IFR: Integrity Finance</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
                <a
                  href="https://www.drzaydalhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-1.5 rounded hover:bg-neutral-200/60 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <span className="font-medium">IGC: Inspire Guide Connect</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
                <a
                  href="https://www.drzaydhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-1.5 rounded hover:bg-neutral-200/60 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <span className="font-medium">IPN: International Public Network</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
                <a
                  href={SOCIAL_LINKS.gateWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-1.5 rounded bg-amber-100/60 hover:bg-amber-100 text-amber-950 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 dark:text-amber-200 font-semibold transition-colors"
                >
                  <span>GATE Ecosystem: DrZaydH.com</span>
                  <ExternalLink className="w-3 h-3 text-amber-800 dark:text-amber-300" />
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

            {/* Spiritual and Familial Heritage */}
            <div className="p-5 rounded-xl bg-stone-50 dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                <Heart className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>Spiritual and Familial Dedication</span>
              </div>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Honoring the spiritual endurance and moral legacy of generations: the late Ismail Abbas Haji, the late Ahmed Ismail Haji, the late Iqbal Ahmed Haji, the late Khayyamudin Mimli, and the late Suraiya Mimli. Guided by the enduring prayers and devotion of mother Almas Iqbal Haji and the continuous fellowship of brother Tauhid Iqbal Haji.
              </p>
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
