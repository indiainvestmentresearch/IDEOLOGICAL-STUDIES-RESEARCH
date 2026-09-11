import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AudioProvider } from './context/AudioPlayerContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedTwoColumnSection } from './components/FeaturedTwoColumnSection';
import { FocusAreasSection } from './components/FocusAreasSection';
import { ClassicalLibrarySection } from './components/ClassicalLibrarySection';
import { LivePodcastSection } from './components/LivePodcastSection';
import { GateWebAppCTA } from './components/GateWebAppCTA';
import { AboutFounderSection } from './components/AboutFounderSection';
import { CommunityAndFooter } from './components/CommunityAndFooter';
import { PersistentAudioPlayer } from './components/PersistentAudioPlayer';

export function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <div className="min-h-screen bg-[#faf9f5] dark:bg-[#0c0d0e] text-neutral-900 dark:text-neutral-100 flex flex-col font-sans selection:bg-amber-100 dark:selection:bg-amber-950 selection:text-amber-950 dark:selection:text-amber-200 pb-20 transition-colors duration-200">
          {/* Sticky Scholarly Navigation Header with Light/Dark Mode Switch */}
          <Navbar />

          <main id="main-content" className="flex-1">
            {/* Hero Introductory Section */}
            <HeroSection />

            {/* Reworked Two-Column Section with Fixed Creatives Slider */}
            <FeaturedTwoColumnSection />

            {/* Seven Core Scholarly Disciplines & Surah Al-Asr Mandate */}
            <FocusAreasSection />

            {/* The Classical Corpus: 74,297 Texts */}
            <ClassicalLibrarySection />

            {/* Real-time Anchor / Spotify RSS Podcast Feed & Audio Controls */}
            <LivePodcastSection />

            {/* Graphic Gate WebApp Presentation */}
            <GateWebAppCTA />

            {/* Narrative Biography of Founder Zayd Haji, Credentials & Books */}
            <AboutFounderSection />
          </main>

          {/* Study Circles, Communication Channels & Global Footer */}
          <CommunityAndFooter />

          {/* Persistent Bottom Audio Player */}
          <PersistentAudioPlayer />
        </div>
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;
