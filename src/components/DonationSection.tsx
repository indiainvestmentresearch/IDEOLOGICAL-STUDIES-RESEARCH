import React, { useState } from 'react';
import { Heart, ShieldCheck, BookOpen, Headphones, MessageSquare, Sparkles, ArrowUpRight, CheckCircle2, Users, CreditCard, Send, Award, Globe } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/staticData';

export function DonationSection() {
  const [activeTab, setActiveTab] = useState<'donate' | 'patron'>('donate');
  const [selectedTier, setSelectedTier] = useState<string>('monthly');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'donate' | 'patron'>('donate');

  const handleOpenModal = (type: 'donate' | 'patron') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <section id="donate-patron" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-100/70 dark:bg-neutral-950/70 border-y border-stone-200/80 dark:border-neutral-800/80 relative overflow-hidden transition-colors duration-200">
      {/* Subtle Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-12 right-10 w-80 h-80 rounded-full bg-stone-500/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/20 text-xs font-semibold tracking-wide uppercase">
            <Heart className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Support Scholarly Independence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 dark:text-white tracking-tight">
            Invest in Independent Research & Knowledge
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Contributions directly sustain ongoing theological research, classical text publication, educational resources, live podcasts, infographics, and open-access community initiatives without corporate or institutional compromises.
          </p>
        </div>

        {/* Two Core Pillars / Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Option 1: Donate */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-stone-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-amber-500/40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-600 dark:text-stone-300">
                  One-Time or Regular
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-white mb-3">
                Make a Contribution
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Support specific research modules, publication editions, or general operational independence with a direct financial contribution of your choosing.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Directly funds open-access scholastic papers and digital libraries</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Enables high-production podcasts and academic translations</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Ensures absolute freedom from algorithmic or commercial bias</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => handleOpenModal('donate')}
                className="w-full py-3.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Donate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Option 2: Become a Patron */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-stone-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-amber-500/40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300">
                  Monthly Partnership
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-white mb-3">
                Become a Patron
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Join our dedicated circle of patrons providing reliable monthly backing for long-term institutional research, publishing schedules, and public welfare initiatives.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Early access to research papers, manuscripts, and book editions</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Exclusive invitations to private study circles and Q&A sessions</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Direct connection with founder Zayd Iqbal Haji and research fellows</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => handleOpenModal('patron')}
                className="w-full py-3.5 px-6 rounded-xl bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm border border-neutral-700 dark:border-neutral-700"
              >
                <span>Become a Patron</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Direct Discussion Banner */}
        <div className="bg-gradient-to-br from-stone-900 to-neutral-900 dark:from-neutral-900 dark:to-neutral-950 text-white rounded-2xl p-8 sm:p-10 border border-stone-800 shadow-xl relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Dialogue & Institutional Support</span>
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-tight">
                Discuss Support, Partnerships or Major Patronage
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                If you wish to discuss institutional grants, dedicated research funding, corporate partnerships, or personal patronage arrangements, reach out directly.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={SOCIAL_LINKS.whatsappContact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Reach Out on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust & Transparency Note */}
        <div className="mt-12 text-center text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>All funds are administered with strict transparency dedicated exclusively to Islamic scholarship and public educational research.</span>
        </div>
      </div>

      {/* Interactive Modal for Donate / Patron */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl max-w-md w-full p-6 sm:p-8 border border-stone-200 dark:border-neutral-800 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
                  {modalType === 'donate' ? <CreditCard className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-neutral-900 dark:text-white">
                    {modalType === 'donate' ? 'Support via Donation' : 'Become a Monthly Patron'}
                  </h4>
                  <p className="text-xs text-neutral-500">Secure your contribution for independent scholarship</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-500 hover:text-stone-900 dark:hover:text-white flex items-center justify-center text-sm font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                To complete your {modalType === 'donate' ? 'donation' : 'patronage'} securely or coordinate wire transfers and direct assistance, connect with us instantly on WhatsApp or coordinate with our team.
              </p>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200 dark:border-neutral-700/80 space-y-2">
                <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">Quick Connection:</div>
                <a
                  href={SOCIAL_LINKS.whatsappContact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reach Out on WhatsApp to Proceed</span>
                </a>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-stone-200 dark:bg-neutral-800 text-stone-700 dark:text-stone-300 text-xs font-medium hover:bg-stone-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
