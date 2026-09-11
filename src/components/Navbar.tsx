import React, { useState, useEffect } from 'react';
import { ISRLogo, GateLogo } from './BrandLogos';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { useTheme } from '../context/ThemeContext';
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
      label: 'Focus Areas',
      description: 'Jurisprudence, Quranic Tafsir & Hadith Sciences',
      href: '#focus-areas',
      icon: Compass
    },
    {
      label: 'Featured Creatives',
      description: 'Slide-decks, infocards & visual scholarly summaries',
      href: '#featured-creatives',
      icon: Sparkles
    },
    {
      label: 'Classical Library',
      description: '1,400+ indexed manuscripts and digital texts',
      href: '#classical-library',
      icon: BookOpen
    },
    {
      label: 'Live Podcasts',
      description: 'Real-time lectures, Spotify feed & audio archive',
      href: '#live-podcasts',
      icon: Headphones
    },
    {
      label: '.Gate Ecosystem',
      description: 'Personal knowledge management & AI scholarship',
      href: '#gate-ecosystem',
      icon: Layers
    },
    {
      label: 'Founder & Research',
      description: 'Zayd Iqbal Haji, publications & academic credentials',
      href: '#about-founder',
      icon: User
    },
    {
      label: 'Community & Channels',
      description: 'Telegram circle, YouTube lectures, Substack & X',
      href: '#community-channels',
      icon: Globe
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-250 ${
          isDark
            ? isScrolled
              ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg border-b border-neutral-800 py-3 text-neutral-100'
              : 'bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800/60 py-4 text-neutral-100'
            : isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/90 py-3 text-neutral-900'
              : 'bg-white/90 backdrop-blur-sm border-b border-neutral-200/70 py-4 text-neutral-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Lockup */}
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              aria-label="Ideological Studies Research Home"
            >
              <ISRLogo className="h-10 sm:h-11 md:h-12 w-auto" variant={isDark ? 'light' : 'dark'} />
            </a>
            <span className={`hidden sm:inline-block w-px h-6 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
            <a
              href={SOCIAL_LINKS.gateWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm"
              title="Visit .Gate"
              aria-label=".Gate Official Website"
            >
              <GateLogo className="h-7 sm:h-8 w-auto" variant={isDark ? 'light' : 'dark'} />
            </a>
          </div>

          {/* Action Controls & Unified Desktop/Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Audio Indicator if active */}
            {currentEpisode && (
              <button
                onClick={togglePlay}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                  isDark
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20'
                    : 'bg-amber-50 border-amber-200 text-amber-900 hover:bg-amber-100'
                }`}
                aria-label={isPlaying ? 'Pause currently playing audio' : 'Play currently active audio'}
              >
                <span className={`w-2 h-2 rounded-full bg-amber-500 ${isPlaying ? 'animate-ping' : ''}`} />
                <Volume2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span className="hidden md:inline truncate max-w-[120px]">
                  {isPlaying ? 'Now Playing' : 'Paused'}
                </span>
              </button>
            )}

            {/* Quick Live Podcast Link */}
            <a
              href="#live-podcasts"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-600 hover:bg-amber-500 text-neutral-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Listen Live</span>
            </a>

            {/* Community CTA Button */}
            <a
              id="header-join-community-btn"
              href="#community-channels"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
              title="Join ISR Research & Study Circles"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Join Community</span>
            </a>

            {/* Light / Dark Mode Toggle */}
            <ThemeToggle showLabel className="hidden sm:inline-flex" />

            {/* Unified Desktop & Mobile Menu Button */}
            <button
              id="desktop-menu-toggle-btn"
              onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-xs ${
                isDark
                  ? 'bg-neutral-900 border-neutral-700 text-neutral-100 hover:bg-neutral-800 hover:border-neutral-600 hover:text-amber-400'
                  : 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200 hover:border-neutral-400 hover:text-amber-800'
              }`}
              aria-label="Open Navigation Menu"
              aria-expanded={menuOpen}
            >
              <Menu className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Menu Drawer for Desktop and Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <aside
            id="desktop-navigation-drawer"
            className={`relative w-full max-w-md sm:max-w-lg h-full flex flex-col z-10 shadow-2xl transition-transform duration-300 ${
              isDark
                ? 'bg-[#0f1013] border-l border-neutral-800 text-neutral-100'
                : 'bg-white border-l border-neutral-200 text-neutral-900'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Website Navigation Menu"
          >
            {/* Drawer Header */}
            <div className={`flex items-center justify-between px-6 py-5 border-b ${isDark ? 'border-neutral-800/80 bg-neutral-950/60' : 'border-neutral-200 bg-neutral-50/60'}`}>
              <div className="flex items-center gap-3">
                <ISRLogo className="h-8 w-auto" variant={isDark ? 'light' : 'dark'} />
                <span className={`w-px h-5 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
                <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                  Navigation
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMenuOpen(false)}
                  className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                    isDark
                      ? 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white'
                      : 'border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700 hover:text-neutral-950'
                  }`}
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {/* Appearance / Theme quick bar */}
              <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
              }`}>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                    Appearance
                  </span>
                  <span className="text-xs text-neutral-600 dark:text-neutral-300">
                    Switch Light / Dark theme
                  </span>
                </div>
                <ThemeToggle showLabel />
              </div>

              {/* Navigation Section */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3 block px-1">
                  Explore Research & Corpus
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
                            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
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
                  Ecosystem & Broadcasting
                </span>

                <a
                  href="#community-channels"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4" />
                    <span>Join Research Community</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="#live-podcasts"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <Radio className="w-4 h-4" />
                    <span>Access Live Audio Broadcast</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
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
                    <span className="text-xs font-semibold">Visit DrZaydH.com (.Gate)</span>
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
                Ideological Studies Research • ISR
              </p>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-600 mt-0.5">
                Independent Academic & Classical Islamic Thought
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

