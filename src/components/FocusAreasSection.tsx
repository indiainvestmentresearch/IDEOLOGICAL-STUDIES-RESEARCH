import React from 'react';
import { BookOpen, Compass, Scroll, Shield, Scale, Clock, Heart, Award, CheckCircle2 } from 'lucide-react';
import { FEATURED_TOPICS } from '../data/staticData';

export const FocusAreasSection: React.FC = () => {
  const disciplines = [
    {
      title: 'Quran Studies',
      arabic: 'علوم القرآن الكريم',
      icon: BookOpen,
      count: '6,236 Verses',
      summary: 'Direct revelation, thematic exegesis, recitation rules, and analytical exploration of divine commandments across every Surah.',
      focusPoints: ['Thematic Analysis', 'Recitation & Tajweed', 'Context of Revelation', 'Linguistic Architecture']
    },
    {
      title: 'Tafsir Exegesis',
      arabic: 'التفسير والبيان',
      icon: Scroll,
      count: 'Classical Scholars',
      summary: 'Systematic commentary drawing upon established authorities, resolving linguistic subtleties and guarding against baseless modern misinterpretations.',
      focusPoints: ['Classical Scholasticism', 'Grammatical Nuance', 'Asbab al-Nuzul', 'Comparative Exegesis']
    },
    {
      title: 'Hadith Sciences',
      arabic: 'مصطلح الحديث وروايته',
      icon: Shield,
      count: '68,061 Narrations',
      summary: 'Critical biographical evaluation of narrators, isnad authentication, matn text verification, and separating sound traditions from weak attributions.',
      focusPoints: ['Saheeh Methodology', 'Four Sunan Verification', 'Ilm al-Rijal (Biographies)', 'Prophetic Akhlaq']
    },
    {
      title: 'Aqeedah',
      arabic: 'العقيدة والتوحيد',
      icon: Compass,
      count: 'Purity of Creed',
      summary: 'The bedrock of Islamic belief: Tawhid in lordship, worship, and divine attributes, harmonizing sound reason with explicit revelation.',
      focusPoints: ['Tawhid Sovereignty', 'Fitrah & Primordial Covenant', 'Divine Attributes', 'Rational Theology']
    },
    {
      title: 'Fiqh Jurisprudence',
      arabic: 'الفقه الإسلامي المقارن',
      icon: Scale,
      count: 'Recognized Madhahib',
      summary: 'Structured understanding of Islamic law across established schools of jurisprudence, regulating personal worship, family matters, and commercial contracts.',
      focusPoints: ['Madhab Principles', 'Taharah & Salah', 'Commercial Ethics & Trade', 'Usul al-Fiqh']
    },
    {
      title: 'Seerah',
      arabic: 'السيرة النبوية العطرة',
      icon: Clock,
      count: 'Prophetic Life',
      summary: 'Historical documentation of the Prophet’s mission (peace be upon him), from early Da’wah at Mount Safa to the moral constitution of Medina.',
      focusPoints: ['Meccan Period Da’wah', 'Medina Statecraft', 'Prophetic Diplomacy', 'Mercy to Mankind']
    },
    {
      title: 'Tarbiyah Islamiyah',
      arabic: 'التربية والتزكية الإسلامية',
      icon: Heart,
      count: 'Spiritual Discipline',
      summary: 'Internal purification, intellectual humility before scholars, cultivation of patience, and translating theological knowledge into righteous conduct.',
      focusPoints: ['Purification of the Heart', 'Humility in Learning', 'Etiquette with Teachers', 'Steadfastness (Istiqamah)']
    }
  ];

  return (
    <section id="focus-areas" className="py-16 sm:py-20 bg-[#faf8f4] border-b border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Core Disciplines of Study</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
            Seven Pillars of Islamic Scholarship Examined with Critical Rigour.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
            Ideological Studies Research does not reduce Islam to slogans or disjointed quotes. Every course, audio report, and podcast episode belongs to a defined scholastic discipline grounded in classical methodology.
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {disciplines.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-white border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-amber-400/60 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200/60 dark:border-amber-500/20 flex items-center justify-center text-amber-700 dark:text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-mono">
                      {item.count}
                    </span>
                  </div>

                  <div className="text-xs font-serif text-amber-800 dark:text-amber-400 font-medium mb-1 tracking-wide">
                    {item.arabic}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                    Key Topics
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.focusPoints.map((point) => (
                      <span
                        key={point}
                        className="inline-block px-2 py-0.5 rounded text-[11px] bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Surah Al-Asr & Scholastic Mandate Banner */}
        <div className="rounded-xl bg-neutral-900 text-neutral-100 p-6 sm:p-8 lg:p-10 border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                <span>The Scholastic Directive</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Surah Al-Asr: The Divine Formula for Time and Purpose.
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans">
                Imam Al-Shafi’i remarked that if humanity were to reflect deeply upon Surah Al-Asr alone, it would suffice them for comprehensive guidance. ISR operates upon these three verses:
              </p>
              
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-100">By the declining day (103:1):</span>
                    <span className="text-neutral-400 ml-1.5">Time is an unrenewable resource; every hour squandered in trivia is an irreversible loss.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-100">Indeed, mankind is in loss (103:2):</span>
                    <span className="text-neutral-400 ml-1.5">The default state of human distraction leads to spiritual and cognitive insolvency.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    3
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-100">Except those who believe, perform righteous deeds, and encourage truth and patience (103:3):</span>
                    <span className="text-neutral-400 ml-1.5">The four prerequisites of salvage: authentic conviction, righteous action, mutual teaching of truth, and enduring steadfastness.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-neutral-950 p-5 sm:p-6 rounded-lg border border-neutral-800 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Foundational Quranic Citations
              </div>
              
              <blockquote className="text-xs sm:text-sm italic text-neutral-300 border-l-2 border-amber-500/70 pl-3 leading-relaxed">
                "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best."
                <cite className="block text-[11px] text-amber-400 font-sans not-italic mt-1">
                  Surah An-Nahl (16:125)
                </cite>
              </blockquote>

              <blockquote className="text-xs sm:text-sm italic text-neutral-300 border-l-2 border-amber-500/70 pl-3 leading-relaxed">
                "And let there be among you a community inviting to all that is good, enjoining what is right and forbidding what is wrong."
                <cite className="block text-[11px] text-amber-400 font-sans not-italic mt-1">
                  Surah Ali ‘Imran (3:104)
                </cite>
              </blockquote>

              <div className="pt-2 text-[11px] text-neutral-400 font-sans">
                These principles guide ISR research, community circles, and the Gate knowledge ecosystem.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
