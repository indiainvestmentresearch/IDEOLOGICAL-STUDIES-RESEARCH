import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { PodcastEpisode } from '../types';

interface AudioContextType {
  currentEpisode: PodcastEpisode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
  playEpisode: (episode: PodcastEpisode) => void;
  togglePlay: () => void;
  seek: (seconds: number) => void;
  setVolume: (val: number) => void;
  setPlaybackRate: (rate: number) => void;
  skipForward: (seconds?: number) => void;
  skipBackward: (seconds?: number) => void;
  closePlayer: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.85);
  const [playbackRate, setPlaybackRateState] = useState(1);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const playEpisode = (episode: PodcastEpisode) => {
    if (!audioRef.current) return;

    if (currentEpisode?.id === episode.id) {
      togglePlay();
      return;
    }

    setCurrentEpisode(episode);
    audioRef.current.src = episode.audioUrl;
    audioRef.current.volume = volume;
    audioRef.current.playbackRate = playbackRate;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    });
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentEpisode) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const seek = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = seconds;
    setCurrentTime(seconds);
  };

  const setVolume = (val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
  };

  const setPlaybackRate = (rate: number) => {
    setPlaybackRateState(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const skipForward = (seconds = 30) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(audioRef.current.duration || 0, audioRef.current.currentTime + seconds);
  };

  const skipBackward = (seconds = 15) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - seconds);
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = '';
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setCurrentEpisode(null);
  };

  return (
    <AudioContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        currentTime,
        duration,
        volume,
        playbackRate,
        playEpisode,
        togglePlay,
        seek,
        setVolume,
        setPlaybackRate,
        skipForward,
        skipBackward,
        closePlayer
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export function useAudioPlayer() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioProvider');
  }
  return context;
}
