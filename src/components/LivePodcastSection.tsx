import React, { useState, useEffect } from 'react';
import { Play, Pause, Search, Radio, Headphones, RefreshCw, ExternalLink, Calendar, Clock, Filter } from 'lucide-react';
import { PodcastEpisode } from '../types';
import { fetchLivePodcastFeed } from '../utils/podcastService';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { FEATURED_TOPICS, SOCIAL_LINKS } from '../data/staticData';

export const LivePodcastSection: React.FC = () => {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());

  const { currentEpisode, isPlaying, playEpisode, togglePlay } = useAudioPlayer();

  const loadEpisodes = async () => {
    setIsLoading(true);
    try {
      const data = await fetchLivePodcastFeed();
      setEpisodes(data);
      setLastRefreshed(new Date());
    } catch {
      // Handled in service fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadEpisodes();
  }, []);

  const categories = ['All', 'Tarbiyah Islamiyah', 'Tafsir', 'Hadith', 'Seerah', 'Fiqh', 'Aqeedah'];

  const filteredEpisodes = episodes.filter((ep) => {
    const matchesCategory = selectedCategory === 'All' || ep.category === selectedCategory;
    const matchesSearch =
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="live-podcasts" className="py-16 sm:py-20 lg:py-24 bg-[#f8f6f0] text-neutral-900 border-b border-neutral-200 dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2.5 sm:mb-3">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Live RSS Integration Connected</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-900 dark:text-white tracking-tight leading-snug sm:leading-tight">
              Scholarly Audio Lectures & Podcast Exegesis.
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              Connected live to the Anchor RSS feed. Any lecture uploaded to Spotify automatically appears here. Listen directly within the browser audio player, or open episodes in Spotify and Apple Podcasts.
            </p>
          </div>

          {/* External platform quick buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={SOCIAL_LINKS.spotifyChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wide transition-all shadow-sm"
            >
              <span>Spotify Channel</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a
              href={SOCIAL_LINKS.applePodcasts}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-700 font-medium text-xs tracking-wide shadow-xs transition-all"
            >
              <span>Apple Podcasts</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <button
              onClick={loadEpisodes}
              className="p-2 sm:p-2.5 rounded-lg bg-white hover:bg-neutral-50 text-neutral-600 hover:text-neutral-900 border border-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:border-neutral-700 transition-colors shadow-xs"
              title="Refresh live RSS feed"
              aria-label="Refresh podcast feed"
            >
              <RefreshCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isLoading ? 'animate-spin text-amber-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Six Featured Spotify Topics Curated Modules */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Featured Discipline Episodes on Spotify
            </h3>
            <span className="text-xs text-neutral-500 font-mono">
              6 Core Subjects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_TOPICS.map((topic) => (
              <div
                key={topic.title}
                className="p-5 rounded-xl bg-white border border-neutral-200/90 hover:border-amber-400/80 shadow-xs dark:bg-neutral-800/70 dark:border-neutral-700/80 dark:hover:border-amber-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20">
                      {topic.category}
                    </span>
                    <span className="text-xs font-serif text-neutral-500 dark:text-neutral-400">
                      {topic.arabicName}
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                    {topic.title}
                  </h4>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans mb-4">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {topic.keyConcepts.slice(0, 2).map((k) => (
                      <span key={k} className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 dark:bg-neutral-700/50 dark:text-neutral-400">
                        {k}
                      </span>
                    ))}
                  </div>

                  <a
                    href={topic.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                  >
                    <span>Open Episode</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Episodes Search and Filter Bar */}
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-neutral-200/90 shadow-xs dark:bg-neutral-800/90 dark:border-neutral-700 mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search lectures by topic, surah, hadith or keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-500"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-600 text-neutral-950 font-bold'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>
              Showing {filteredEpisodes.length} {filteredEpisodes.length === 1 ? 'lecture' : 'lectures'} from live RSS catalog
            </span>
            <span>
              Updated: {lastRefreshed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>

        {/* Live Episode Audio Cards List */}
        <div className="space-y-3">
          {filteredEpisodes.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-neutral-200 dark:bg-neutral-800/40 dark:border-neutral-800">
              <Headphones className="w-8 h-8 mx-auto text-neutral-400 mb-2" />
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">No episodes matched your query.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-3 text-xs text-amber-700 dark:text-amber-400 hover:underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredEpisodes.slice(0, 15).map((ep) => {
              const isThisPlaying = isPlaying && currentEpisode?.id === ep.id;
              const isThisCurrent = currentEpisode?.id === ep.id;

              return (
                <div
                  key={ep.id}
                  className={`p-4 sm:p-5 rounded-xl transition-all border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isThisCurrent
                      ? 'bg-amber-50/90 border-amber-400/80 shadow-xs dark:bg-amber-950/20 dark:border-amber-500/50'
                      : 'bg-white border-neutral-200/90 hover:border-neutral-300 hover:bg-neutral-50/80 shadow-xs dark:bg-neutral-800/60 dark:border-neutral-700/60 dark:hover:border-neutral-600 dark:hover:bg-neutral-800'
                  }`}
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Play/Pause Button */}
                    <button
                      onClick={() => {
                        if (isThisCurrent) {
                          togglePlay();
                        } else {
                          playEpisode(ep);
                        }
                      }}
                      className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                        isThisPlaying
                          ? 'bg-amber-500 text-neutral-950 shadow-md scale-105'
                          : 'bg-neutral-100 hover:bg-amber-600 text-neutral-700 hover:text-white dark:bg-neutral-700 dark:hover:bg-amber-600 dark:text-neutral-100 dark:hover:text-neutral-950'
                      }`}
                      aria-label={isThisPlaying ? `Pause ${ep.title}` : `Play ${ep.title}`}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>

                    {/* Metadata */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 font-mono">
                          {ep.category}
                        </span>
                        {ep.duration && (
                          <span className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400">
                            <Clock className="w-3 h-3" />
                            <span>{ep.duration}</span>
                          </span>
                        )}
                        {ep.pubDate && (
                          <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
                            {new Date(ep.pubDate).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-serif font-bold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                        {ep.title}
                      </h4>

                      {ep.description && (
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 font-sans leading-relaxed">
                          {ep.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => playEpisode(ep)}
                      className="px-3 py-1.5 rounded text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-200 transition-colors cursor-pointer"
                    >
                      {isThisPlaying ? 'Playing' : 'Listen Now'}
                    </button>

                    {ep.link && (
                      <a
                        href={ep.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded hover:bg-neutral-100 text-neutral-500 hover:text-emerald-700 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-emerald-400 transition-colors"
                        title="View episode on Anchor / Spotify"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* View full catalogue on Spotify notice */}
        {filteredEpisodes.length > 15 && (
          <div className="mt-8 text-center pt-4 border-t border-neutral-800">
            <p className="text-xs text-neutral-400 mb-3">
              Displaying the latest 15 lectures from our continuous library of 58+ published episodes.
            </p>
            <a
              href={SOCIAL_LINKS.spotifyChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Browse All Episodes on Spotify</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
