import React from 'react';
import { ISRLogo, GateLogo, ZaydSignature } from './BrandLogos';
import { MessageSquare, Users, Radio, Youtube, Twitter, Instagram, ExternalLink, HeartHandshake, Shield, Globe } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/staticData';

export const CommunityAndFooter: React.FC = () => {
  return (
    <footer id="community-channels" className="bg-neutral-950 text-neutral-300 pt-16 sm:pt-20 pb-20 sm:pb-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Community Engagement Section */}
        <div className="pb-16 border-b border-neutral-800">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <span>Study Circles & Communication</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Connect with Research Circles & Active Dispatches.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 font-sans leading-relaxed">
              Engage directly with ongoing exegesis, seminar announcements, and weekly Hadith reviews across our official communication channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* WhatsApp Community */}
            <a
              href={SOCIAL_LINKS.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  WhatsApp Study Circle
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Daily Hadith breakdowns, community reflections, and lecture reminders.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-neutral-800 text-[11px] text-emerald-400 flex items-center gap-1">
                <span>Join Community Group</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>

            {/* Microsoft Teams */}
            <a
              href={SOCIAL_LINKS.microsoftTeams}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-sky-500/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                  Microsoft Teams Circle
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Structured workshops, live study webinars, and research roundtables.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-neutral-800 text-[11px] text-sky-400 flex items-center gap-1">
                <span>Access Teams Space</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>

            {/* Instagram Broadcast */}
            <a
              href={SOCIAL_LINKS.instagramBroadcast}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-rose-500/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center mb-3">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors">
                  Instagram Broadcast
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Direct dispatches from Zayd Haji, infographics, and research announcements.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-neutral-800 text-[11px] text-rose-400 flex items-center gap-1">
                <span>Subscribe Channel</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>

            {/* Direct WhatsApp Contact */}
            <a
              href={SOCIAL_LINKS.whatsappContact}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                  Direct Inquiries & Support
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Scholarly queries, institutional partnerships, and patronage inquiries.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-neutral-800 text-[11px] text-amber-400 flex items-center gap-1">
                <span>Start Direct Chat</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>

          </div>
        </div>

        {/* Global Footer Grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <ISRLogo className="h-10 w-auto" variant="light" />
            <p className="text-xs text-neutral-400 leading-relaxed font-sans max-w-sm">
              Ideological Studies Research is dedicated to authentic Quranic exegesis, Hadith verification, and Islamic jurisprudence. Led by Zayd Iqbal Haji, ISR serves researchers, students, and practitioners worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.spotifyChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-neutral-400 transition-colors"
                title="Spotify Channel"
              >
                <Radio className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-rose-600 hover:text-white flex items-center justify-center text-neutral-400 transition-colors"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagramISR}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-pink-600 hover:text-white flex items-center justify-center text-neutral-400 transition-colors"
                title="Instagram @isr.gate"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitterISR}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-800 hover:text-white flex items-center justify-center text-neutral-400 transition-colors"
                title="Twitter @isrgate"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#focus-areas" className="hover:text-amber-400 transition-colors">
                  Seven Disciplines
                </a>
              </li>
              <li>
                <a href="#featured-creatives" className="hover:text-amber-400 transition-colors">
                  Featured Creatives
                </a>
              </li>
              <li>
                <a href="#classical-library" className="hover:text-amber-400 transition-colors">
                  74,297 Classical Texts
                </a>
              </li>
              <li>
                <a href="#live-podcasts" className="hover:text-amber-400 transition-colors">
                  Live Podcast RSS
                </a>
              </li>
              <li>
                <a href="#gate-ecosystem" className="hover:text-amber-400 transition-colors">
                  Gate Knowledge Ecosystem
                </a>
              </li>
              <li>
                <a href="#about-founder" className="hover:text-amber-400 transition-colors">
                  Founder & Books
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem Portals */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Ecosystem Websites
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a
                  href="https://www.zaydalhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>ISR (zaydalhaji.com)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.zaydhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>IFR (zaydhaji.com)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.drzaydalhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>IGC (drzaydalhaji.com)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.drzaydhaji.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>IPN (drzaydhaji.com)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.gateWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between font-semibold text-amber-300"
                >
                  <span>GATE (drzaydh.com)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Support & Credentials */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Direct Contact
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              For research collaboration, academic inquiries, or student queries, connect via verified WhatsApp or official institutional channels.
            </p>
            <div className="pt-2">
              <a
                href={SOCIAL_LINKS.whatsappContact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>WhatsApp Desk</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Ethical Declarations */}
        <div className="py-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            Copyright {new Date().getFullYear()} Ideological Studies Research (ISR). All rights reserved. Founded by Zayd Iqbal Haji.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Quran & Sunnah Scholastic Integrity</span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span>Independent Research</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
