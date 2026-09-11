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
    skipBackward
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
      className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900/98 backdrop-blur-lg border-t border-neutral-800 text-neutral-100 shadow-2xl transition-all duration-300"
      aria-label="Audio Lecture Player"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
        
        {/* Progress Bar Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] font-mono text-neutral-400 w-10 text-right">
            {formatTime(currentTime)}
          </span>
          <div className="relative flex-1 group">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500 group-hover:h-2 transition-all"
              aria-label="Audio progress seek bar"
            />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 w-10">
            {formatTime(duration)}
          </span>
        </div>

        {/* Controls and Metadata Layout */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Episode Info */}
          <div className="flex items-center gap-3 min-w-0 max-w-sm sm:max-w-md">
            <div className="w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Radio className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase">
                  {currentEpisode.category}
                </span>
                <span className="text-[11px] text-neutral-400 truncate hidden md:inline">
                  ISR Scholarly Audio
                </span>
              </div>
              <div className="text-xs sm:text-sm font-serif font-bold text-white truncate" title={currentEpisode.title}>
                {currentEpisode.title}
              </div>
            </div>
          </div>

          {/* Core Player Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => skipBackward(15)}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors"
              title="Rewind 15 seconds"
              aria-label="Rewind 15 seconds"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 flex items-center justify-center shadow-lg transition-transform active:scale-95"
              aria-label={isPlaying ? 'Pause lecture audio' : 'Play lecture audio'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={() => skipForward(30)}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors"
              title="Fast forward 30 seconds"
              aria-label="Fast forward 30 seconds"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>

          {/* Volume, Speed and External Link */}
          <div className="hidden md:flex items-center gap-3">
            {/* Speed Changer */}
            <button
              onClick={cycleSpeed}
              className="px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono font-medium transition-colors"
              title="Playback speed"
            >
              {playbackRate}x
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleMute}
                className="p-1 text-neutral-400 hover:text-white transition-colors"
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
                className="w-16 h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                aria-label="Volume level"
              />
            </div>

            {/* Spotify Link */}
            {currentEpisode.link && (
              <a
                href={currentEpisode.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-emerald-400 transition-colors"
                title="Listen on Spotify / Anchor"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

      </div>
    </aside>
  );
};
