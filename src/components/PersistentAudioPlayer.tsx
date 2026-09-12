import React, { useState } from 'react';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Radio, ExternalLink, X, ChevronUp, ChevronDown } from 'lucide-react';

export const PersistentAudioPlayer: React.FC = () => {
  const {
    currentEpisode,
    isPlaying,
    currentTime,
    duration,
    volume,
    playbackRate,
    togglePlay,
    seek,
    setVolume,
    setPlaybackRate,
    skipForward,
    skipBackward,
    closePlayer
  } = useAudioPlayer();

  const [isMinimized, setIsMinimized] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(0.85);

  if (!currentEpisode) return null;

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
  };

  const toggleMute = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
    } else {
      setVolume(previousVolume || 0.85);
    }
  };

  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackRate);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    setPlaybackRate(nextSpeed);
  };

  return (
    <aside
      className="fixed bottom-3 sm:bottom-6 inset-x-0 z-50 pointer-events-none px-3 sm:px-6 flex justify-center transition-all duration-300"
      aria-label="Audio Lecture Player"
    >
      <div className="pointer-events-auto w-full max-w-3xl lg:max-w-4xl rounded-[22px] sm:rounded-[28px] bg-gradient-to-r from-neutral-950/92 via-neutral-900/85 to-neutral-950/92 backdrop-blur-2xl border border-white/15 dark:border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06),0_0_30px_rgba(245,158,11,0.08)] px-3.5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 text-neutral-100">
        
        {/* Progress Bar Header */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
          <span className="text-[10px] font-mono text-neutral-400 w-9 sm:w-10 text-right shrink-0">
            {formatTime(currentTime)}
          </span>
          <div className="relative flex-1 group">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 sm:h-1.5 bg-neutral-800/90 rounded-lg appearance-none cursor-pointer accent-amber-500 group-hover:h-2 transition-all"
              aria-label="Audio progress seek bar"
            />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 w-9 sm:w-10 shrink-0">
            {formatTime(duration)}
          </span>
        </div>

        {/* Controls and Metadata Layout */}
        <div className="flex items-center justify-between gap-2.5 sm:gap-4">
          
          {/* Episode Info */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 max-w-[170px] xs:max-w-xs sm:max-w-sm md:max-w-md">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
              <Radio className={`w-4 h-4 ${isPlaying ? 'animate-pulse' : ''}`} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25 uppercase font-medium">
                  {currentEpisode.category}
                </span>
                <span className="text-[10px] sm:text-[11px] text-neutral-400 truncate hidden md:inline">
                  ISR Audio
                </span>
              </div>
              <div className="text-xs sm:text-sm font-serif font-bold text-white truncate mt-0.5" title={currentEpisode.title}>
                {currentEpisode.title}
              </div>
            </div>
          </div>

          {/* Core Player Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={() => skipBackward(15)}
              className="p-1 sm:p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Rewind 15 seconds"
              aria-label="Rewind 15 seconds"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={togglePlay}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 flex items-center justify-center shadow-[0_4px_16px_rgba(245,158,11,0.35)] transition-transform active:scale-95 cursor-pointer shrink-0"
              aria-label={isPlaying ? 'Pause lecture audio' : 'Play lecture audio'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={() => skipForward(30)}
              className="p-1 sm:p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Fast forward 30 seconds"
              aria-label="Fast forward 30 seconds"
            >
              <RotateCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Volume, Speed, External Link and Close Button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Desktop Controls: Speed & Volume */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Speed Changer */}
              <button
                onClick={cycleSpeed}
                className="px-2 py-0.5 rounded-full bg-neutral-800/80 hover:bg-neutral-700/80 border border-neutral-700/60 text-neutral-300 text-[11px] font-mono font-medium transition-colors cursor-pointer"
                title="Playback speed"
              >
                {playbackRate}x
              </button>

              {/* Volume Control */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleMute}
                  className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  aria-label={volume === 0 ? 'Unmute' : 'Mute'}
                >
                  {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-14 lg:w-16 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  aria-label="Volume level"
                />
              </div>

              {/* Spotify Link */}
              {currentEpisode.link && (
                <a
                  href={currentEpisode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full hover:bg-neutral-800/80 text-neutral-400 hover:text-emerald-400 transition-colors"
                  title="Listen on Spotify / Anchor"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* iPhone-style Pill Close Button */}
            <button
              id="audio-player-close-btn"
              onClick={closePlayer}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border border-neutral-700/70 bg-neutral-800/80 hover:bg-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white transition-all cursor-pointer shadow-xs active:scale-95"
              title="Stop audio and close player"
              aria-label="Stop audio and close player"
            >
              <X className="w-3.5 h-3.5 text-neutral-400 hover:text-white" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider hidden xs:inline">Close</span>
            </button>
          </div>

        </div>

      </div>
    </aside>
  );
};
