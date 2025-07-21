// MusicPlayer.js
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import '../styles/MusicPlayer.css';

const MusicPlayer = ({ audioSource, isCurrentlyPlaying, onPlayStateChange }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Memoized play/pause handler to prevent unnecessary re-renders
  const handlePlayPause = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
        if (onPlayStateChange) onPlayStateChange(true);
      } else {
        audio.pause();
        setIsPlaying(false);
        if (onPlayStateChange) onPlayStateChange(false);
      }
    } catch (error) {
      console.error('Playback error:', error);
      setIsPlaying(false);
      if (onPlayStateChange) onPlayStateChange(false);
    }
  }, [onPlayStateChange]);

  // Stop this player when it's not the currently playing one
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isCurrentlyPlaying && isPlaying) {
      audio.pause();
    }
  }, [isCurrentlyPlaying]);

  // Sync state with actual audio events to handle external play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      if (onPlayStateChange) onPlayStateChange(false);
    };

    // Add event listeners
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    // Cleanup function
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioSource, onPlayStateChange]); // Re-run when audioSource changes

  // Reset playing state and stop previous audio when audio source changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
  }, [audioSource]);

  return (
    <div className="music-player">
      <button 
        className="play-button" 
        onClick={handlePlayPause}
        aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
        type="button"
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <audio 
        ref={audioRef} 
        src={audioSource}
        preload="metadata"
      />
    </div>
  );
};

export default MusicPlayer;