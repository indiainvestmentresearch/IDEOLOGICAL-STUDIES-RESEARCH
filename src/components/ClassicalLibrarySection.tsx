import React, { useState } from 'react';
import { BookMarked, Search, Check, Library, ExternalLink, ShieldCheck } from 'lucide-react';
import { CLASSICAL_TEXT_BREAKDOWN } from '../data/staticData';

export const ClassicalLibrarySection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'sahih' | 'sunan' | 'imams'>('all');

  const collections = [
    {
      name: 'The Noble Quran',
      scholar: 'Divine Revelation',
      count: 6236,
      category: 'quran',
      description: 'The direct revelation of Allah, preserving divine commands, moral statutes, and historical paradigms across 114 Surahs.',
      tag: 'Direct Revelation'
    },
    {
      name: 'Sahih al-Bukhari',
      scholar: 'Imam Muhammad ibn Isma‘il al-Bukhari (194 to 256 AH)',
      count: 7563,
      category: 'sahih',
      description: 'The most authentic book after the Book of Allah, compiled with stringent conditions for narration and isnad verification.',
      tag: 'Highest Sahih'
    },
    {
      name: 'Sahih Muslim',
      scholar: 'Imam Muslim ibn al-Hajjaj al-Naysaburi (204 to 261 AH)',
      count: 7563,
      category: 'sahih',
      description: 'Celebrated for thematic organization, rigorous transmission standards, and compilation of prophetic traditions in sound order.',
      tag: 'Highest Sahih'
    },
    {
      name: 'Sunan Abu Dawud',
      scholar: 'Imam Abu Dawud al-Sijistani (202 to 275 AH)',
      count: 5274,
      category: 'sunan',
      description: 'Focuses primarily on legal Hadiths (Ahadith al-Ahkam) establishing legal rulings in commercial, civil, and devotional matters.',
      tag: 'Legal Ahkam'
    },
    {
      name: 'Jami‘ at-Tirmidhi',
      scholar: 'Imam Abu ‘Isa Muhammad at-Tirmidhi (209 to 279 AH)',
      count: 3956,
      category: 'sunan',
      description: 'Noted for scholarly evaluations of Hadith grades (Sahih, Hasan, Da‘if) and comparative jurisprudence of early companions.',
      tag: 'Grading & Fiqh'
    },
    {
      name: 'Sunan an-Nasa’i',
      scholar: 'Imam Ahmad ibn Shu‘ayb an-Nasa’i (214 to 303 AH)',
      count: 5758,
      category: 'sunan',
      description: 'Renowned for strict authentication criteria, second only to the Saheeh in precision among the classical Sunan works.',
      tag: 'Strict Isnad'
    },
    {
      name: 'Sunan Ibn Majah',
      scholar: 'Imam Ibn Majah al-Qazwini (209 to 273 AH)',
      count: 4341,
      category: 'sunan',
      description: 'Completes the classical Six Books (al-Kutub al-Sittah), notable for rare legal narrations and well structured chapter sequences.',
      tag: 'Kutub al-Sittah'
    },
    {
      name: 'Muwatta Imam Malik',
      scholar: 'Imam Malik ibn Anas (93 to 179 AH)',
      count: 1861,
      category: 'imams',
      description: 'The earliest surviving legal text of Islam, combining prophetic Hadith with the living practice (‘Amal) of the people of Medina.',
      tag: 'Early Jurisprudence'
    },
    {
      name: 'Musnad Ahmad ibn Hanbal',
      scholar: 'Imam Ahmad ibn Hanbal (164 to 241 AH)',
      count: 28199,
      category: 'imams',
      description: 'The monumental encyclopedic Hadith compendium organized by companion transmitters (Musnad), preserving thousands of traditions.',
      tag: 'Encyclopedic Corpus'
    },
    {
      name: 'Sunan ad-Darimi',
      scholar: 'Imam ‘Abdullah ad-Darimi (181 to 255 AH)',
      count: 3546,
      category: 'imams',
      description: 'Precedes several of the Six Books in time, distinguished by essential introductory chapters on the etiquette of seeking sacred knowledge.',
      tag: 'Early Scholarship'
    }
  ];

  const filtered = collections.filter((c) => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'sahih') return c.category === 'sahih';
    if (selectedTab === 'sunan') return c.category === 'sunan';
    if (selectedTab === 'imams') return c.category === 'imams';
    return true;
  });

  return (
    <section id="classical-library" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200 dark:bg-[#0c0d0e] dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Primary Sources & Verified Texts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
            The Classical Archive: 74,297 Primary Islamic Texts.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
            Authenticity requires transparent provenance. ISR provides physical and digital access to the verified texts of the Quran, the Sahih collections, the Four Sunan, and the monumental works of early legal pioneers.
          </p>
        </div>

        {/* Structural Statistics Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-xl bg-neutral-900 text-neutral-100 border border-neutral-800">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Core Quranic Revelation
            </span>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
              6,236 Verses
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              The direct word of Allah revealed to Prophet Muhammad (peace be upon him). Studied with classical tafsir, grammatical exegesis, and contextual reasons for revelation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900 text-neutral-100 border border-neutral-800">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Total Hadith Narrations
            </span>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
              68,061 Hadiths
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Comprising 15,126 Saheeh traditions, 19,329 Four Sunan legal narrations, and 33,606 reports preserved by early Imams including Ahmad ibn Hanbal and Malik.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-amber-500/10 text-neutral-900 dark:text-amber-100 border border-amber-500/30 dark:border-amber-500/30">
            <span className="text-xs uppercase tracking-widest text-amber-900 dark:text-amber-300 font-bold block mb-1">
              Combined Sacred Corpus
            </span>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 dark:text-amber-200 mb-2">
              74,297 Texts
            </div>
            <p className="text-xs text-amber-900/80 dark:text-neutral-300 leading-relaxed font-sans">
              A lifelong research commitment by Zayd Iqbal Haji and the ISR faculty: to systematically study, live, verify, and transmit these texts to modern generations.
            </p>
          </div>

        </div>

        {/* Interactive Collection Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mr-2">
            Filter Compendiums:
          </span>
          {[
            { id: 'all', label: 'All Collections (10 Works)' },
            { id: 'sahih', label: 'Saheeh (Bukhari & Muslim)' },
            { id: 'sunan', label: 'The Four Sunan' },
            { id: 'imams', label: 'Early Imams & Musnad' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedTab === tab.id
                  ? 'bg-neutral-900 text-white dark:bg-amber-600 dark:text-neutral-950 shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Collections Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="p-5 sm:p-6 rounded-xl bg-neutral-50/70 border border-neutral-200 hover:border-amber-400/80 dark:bg-neutral-900/80 dark:border-neutral-800 dark:hover:border-amber-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-100/80 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300">
                    {item.count.toLocaleString()} Texts
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-white mb-1">
                  {item.name}
                </h3>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mb-3 italic">
                  Compiled by: {item.scholar}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 font-medium">
                  <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Full Arabic Text & Translation Verified</span>
                </span>
                <span className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
                  Ref: ISR-LIB
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
