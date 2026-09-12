import React, { useState, useEffect } from 'react';
import { ISRLogo, GateLogo } from './BrandLogos';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import {
  Volume2,
  Menu,
  X,
  Radio,
  ArrowUpRight,
  Compass,
  Sparkles,
  BookOpen,
  Headphones,
  Layers,
  User,
  Globe,
  ChevronRight,
  Users
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/staticData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentEpisode, isPlaying, togglePlay } = useAudioPlayer();
  const { isDark } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    {
      label: t('Focus Areas', 'مגالات التركيز'),
      description: t('Jurisprudence, Quranic Tafsir & Hadith Sciences', 'الفقه، التفسير، وعلوم الحديث الشريف'),
      href: '#focus-areas',
      icon: Compass
    },
    {
      label: t('Featured Creatives', 'المحتوى المميز'),
      description: t('Slide-decks, infocards & visual scholarly summaries', 'شرائح وعروض مرئية وملخصات بحثية'),
      href: '#featured-creatives',
      icon: Sparkles
    },
    {
      label: t('Classical Library', 'المكتبة التراثية'),
      description: t('1,400+ indexed manuscripts and digital texts', 'أكثر من ١,٤٠٠ مخطوطة ونص رقمي مفهرس'),
      href: '#classical-library',
      icon: BookOpen
    },
    {
      label: t('Live Podcasts', 'البث المباشر'),
      description: t('Real-time lectures, Spotify feed & audio archive', 'محاضرات مباشرة، أرشيف صوتي وحلقات بودكاست'),
      href: '#live-podcasts',
      icon: Headphones
    },
    {
      label: t('Gate Ecosystem', 'منظومة بوابة المعرفة'),
      description: t('Personal knowledge management & AI scholarship', 'إدارة المعرفة الشخصية والذكاء الاصطناعي الأكاديمي'),
      href: '#gate-ecosystem',
      icon: Layers
    },
    {
      label: t('Founder & Research', 'المؤسس والأبحاث'),
      description: t('Zayd Iqbal Haji, publications & academic credentials', 'زيد إقبال حاجي، الإصدارات والمؤهلات الأكاديمية'),
      href: '#about-founder',
      icon: User
    },
    {
      label: t('Community & Channels', 'المجتمع والقنوات'),
      description: t('Telegram circle, YouTube lectures, Substack & X', 'حلقة تلغرام، محاضرات يوتيوب، ومنشورات سابستاك'),
      href: '#community-channels',
      icon: Globe
    }
  ];

  return (
    <>
      <header className="fixed top-2 sm:top-3 left-2 sm:left-4 right-2 sm:right-4 z-40 max-w-7xl mx-auto transition-all duration-300">
        <div
          className={`relative px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-2xl sm:rounded-3xl md:rounded-full border transition-all duration-300 flex items-center justify-between shadow-lg ${
            isDark
              ? isScrolled
                ? 'bg-neutral-950/80 backdrop-blur-xl border-neutral-800/90 text-neutral-100 shadow-black/40'
                : 'bg-neutral-950/45 backdrop-blur-md border-neutral-800/60 text-neutral-100 shadow-black/20'
              : isScrolled
                ? 'bg-white/85 backdrop-blur-xl border-neutral-200/90 text-neutral-900 shadow-neutral-900/10'
                : 'bg-white/55 backdrop-blur-md border-neutral-200/60 text-neutral-900 shadow-neutral-900/5'
          }`}
        >
          {/* Top Notch Sensor Dot Accent */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1.5 px-3 py-0.5 rounded-b-xl bg-black/90 border-x border-b border-neutral-800/80 text-[9px] font-mono text-neutral-400 pointer-events-none shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="w-3 h-0.5 rounded-full bg-neutral-700" />
          </div>

          {/* Brand Lockup */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-5 min-w-0">
            <a
              href="#"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm shrink-0"
              aria-label="Ideological Studies Research Home"
            >
              <ISRLogo className="h-8 sm:h-11 md:h-13 lg:h-14 w-auto rounded-xl sm:rounded-3xl p-0.5 bg-transparent shadow-none" variant={isDark ? 'light' : 'dark'} />
            </a>
            <span className={`hidden sm:inline-block w-0.5 h-7 sm:h-9 md:h-10 ${isDark ? 'bg-neutral-700' : 'bg-neutral-300'}`} />
            <a
              href={SOCIAL_LINKS.gateWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              title="Visit .Gate"
              aria-label=".Gate Official Website"
            >
              <GateLogo className="h-7 sm:h-9 md:h-11 lg:h-12 w-auto rounded-xl sm:rounded-3xl p-0.5 bg-transparent shadow-none" variant={isDark ? 'light' : 'dark'} />
            </a>
          </div>

          {/* Action Controls & Unified Desktop/Mobile Menu Trigger */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-2.5 shrink-0">
            {/* Audio Indicator if active */}
            {currentEpisode && (
              <button
                onClick={togglePlay}
                className={`hidden xs:flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border text-[10px] sm:text-[11px] font-medium transition-all ${
                  isDark
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20'
                    : 'bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100'
                }`}
                aria-label={isPlaying ? 'Pause currently playing audio' : 'Play currently active audio'}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-amber-500 ${isPlaying ? 'animate-ping' : ''}`} />
                <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 dark:text-amber-400" />
                <span className="hidden md:inline truncate max-w-[100px]">
                  {isPlaying ? t('Now Playing', 'يعمل حالياً') : t('Paused', 'متوقف مؤقتاً')}
                </span>
              </button>
            )}

            {/* Compact Mobile / Full Desktop Live Podcast Link */}
            <a
              id="header-listen-live-btn"
              href="#live-podcasts"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-amber-600 hover:bg-amber-500 text-neutral-950 font-semibold text-[10px] sm:text-xs tracking-tight sm:tracking-wider uppercase transition-all shadow-sm shrink-0 whitespace-nowrap"
              title="Listen Live to Podcasts & Audio Lectures"
            >
              <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>
                <span className="inline sm:hidden">{t('Live', 'بث')}</span>
                <span className="hidden sm:inline">{t('Listen Live', 'استمع للبث المباشر')}</span>
              </span>
            </a>

            {/* Compact Mobile / Full Desktop Community CTA Button */}
            <a
              id="header-join-community-btn"
              href="#community-channels"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[10px] sm:text-xs tracking-tight sm:tracking-wider uppercase transition-all shadow-sm shrink-0 whitespace-nowrap"
              title="Join ISR Research & Study Circles"
            >
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>
                <span className="inline sm:hidden">{t('Join', 'انضم')}</span>
                <span className="hidden sm:inline">{t('Join Community', 'انضم للمجتمع')}</span>
              </span>
            </a>

            {/* iPhone Dynamic Island / Notch Styled Menu Trigger */}
            <button
              id="desktop-menu-toggle-btn"
              onClick={() => setMenuOpen(true)}
              className={`relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-1.5 rounded-full border shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.04] active:scale-95 cursor-pointer shrink-0 whitespace-nowrap ml-1 sm:ml-2.5 ${
                isDark
                  ? 'bg-black/95 border-neutral-800 text-white hover:border-amber-500/50 hover:bg-black hover:shadow-amber-500/10'
                  : 'bg-neutral-950 border-neutral-900 text-white hover:bg-neutral-900 hover:border-amber-400/50 hover:shadow-black/20'
              }`}
              title="Open Navigation Menu"
              aria-label="Open Navigation Menu"
              aria-expanded={menuOpen}
            >
              {/* iPhone Notch Lens / Sensor Dot */}
              <span className="relative flex h-2 w-2 items-center justify-center shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
              </span>

              <Menu className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-xs font-semibold tracking-wide text-white uppercase font-sans">
                {t('Menu', 'القائمة')}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu Drawer for Desktop and Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end p-2 sm:p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel - iPhone Notch & Floating Rounded Island Style */}
          <aside
            id="desktop-navigation-drawer"
            className={`relative w-full max-w-md sm:max-w-lg h-full max-h-[96vh] my-auto flex flex-col z-10 shadow-2xl rounded-3xl sm:rounded-[36px] overflow-hidden border transition-all duration-300 ${
              isDark
                ? 'bg-[#0b0c0e] border-neutral-800/90 text-neutral-100 shadow-black/80'
                : 'bg-white border-neutral-200/90 text-neutral-900 shadow-2xl'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Website Navigation Menu"
          >
            {/* Side Notch Tab Indicator on the border edge */}
            <div className={`hidden sm:flex absolute top-1/2 -translate-y-1/2 ${language === 'ar' ? '-right-1' : '-left-1'} z-30 flex-col items-center gap-1.5 py-4 px-1 rounded-full bg-neutral-950 border border-neutral-800 shadow-md pointer-events-none`}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="w-1 h-3 rounded-full bg-neutral-700" />
            </div>

            {/* Top Island Header Bar with iPhone Notch Element */}
            <div className={`flex flex-col border-b ${isDark ? 'border-neutral-800/80 bg-neutral-950/90' : 'border-neutral-200 bg-neutral-900 text-white'}`}>
              
              {/* iPhone Top Notch Sensor Strip */}
              <div className="w-full flex justify-center pt-2 pb-1">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black border border-neutral-800/80 text-[10px] font-mono tracking-wider text-neutral-400 shadow-inner">
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="w-3 h-1 rounded-full bg-neutral-800" />
                  <span className="text-[9px] uppercase tracking-widest text-amber-400 font-sans font-semibold">
                    {t('Gate Dynamic Island', 'جزيرة بوابة المعرفة')}
                  </span>
                </div>
              </div>

              {/* Main Header Content */}
              <div className="flex items-center justify-between px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <ISRLogo className="h-7 w-auto" variant="light" />
                  <span className="w-px h-4 bg-neutral-700" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400">
                    {t('Navigation', 'التنقل الرئيسي')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-1.5 rounded-full border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {/* Language & Appearance quick bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                  isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                      {t('Language', 'اللغة')}
                    </span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-300">
                      {language === 'en' ? 'English (EN)' : 'العربية (AR)'}
                    </span>
                  </div>
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                    className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    {language === 'en' ? 'العربية' : 'English'}
                  </button>
                </div>

                <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                  isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                      {t('Appearance', 'المظهر')}
                    </span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-300">
                      {t('Theme Switch', 'فاتح / داكن')}
                    </span>
                  </div>
                  <ThemeToggle />
                </div>
              </div>

              {/* Navigation Section */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 block px-1">
                  {t('Explore Research & Corpus', 'استكشف البحوث والمصنفات')}
                </span>
                <nav className="space-y-1.5" aria-label="Menu Sections">
                  {navLinks.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`group flex items-start gap-3.5 p-3 rounded-xl border transition-all ${
                          isDark
                            ? 'border-neutral-800/60 bg-neutral-900/40 hover:bg-neutral-800 hover:border-amber-500/40'
                            : 'border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-100 hover:border-amber-600/30'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 transition-colors ${
                          isDark
                            ? 'bg-neutral-800 group-hover:bg-amber-500/20 text-amber-400'
                            : 'bg-white group-hover:bg-amber-100 text-amber-700 shadow-xs'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                              {item.label}
                            </span>
                            <ChevronRight className={`w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-0.5' : ''}`} />
                          </div>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Quick Actions & Ecosystem */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2 block px-1">
                  {t('Ecosystem & Broadcasting', 'المنظومة والبث')}
                </span>

                <a
                  href="#community-channels"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4" />
                    <span>{t('Join Research Community', 'انضم إلى مجتمع الأبحاث')}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </a>

                <a
                  href="#live-podcasts"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <Radio className="w-4 h-4" />
                    <span>{t('Access Live Audio Broadcast', 'الوصول للبث الصوتي المباشر')}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </a>

                <a
                  href={SOCIAL_LINKS.gateWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-200 hover:bg-neutral-800 hover:text-white'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <GateLogo className="h-4 w-auto" variant={isDark ? 'light' : 'dark'} />
                    <span className="text-xs font-semibold">{t('Visit DrZaydH.com (.Gate)', 'زيارة بوابة د. زيد (.Gate)')}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className={`px-6 py-4 border-t text-center ${
              isDark ? 'border-neutral-800/80 bg-neutral-950/60 text-neutral-500' : 'border-neutral-200 bg-neutral-50/60 text-neutral-500'
            }`}>
              <p className="text-[11px] tracking-wider uppercase font-medium">
                {t('Ideological Studies Research • ISR', 'أبحاث الدراسات العقدية • ISR')}
              </p>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-600 mt-0.5">
                {t('Independent Academic & Classical Islamic Thought', 'الفكر الإسلامي الأكاديمي والتراثي المستقل')}
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};


