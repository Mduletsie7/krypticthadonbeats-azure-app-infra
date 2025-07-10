// ProductionCredits.js
import React, { useState, useCallback, useMemo } from 'react';
import '../styles/ProductionCredits.css';
import MusicPlayer from './MusicPlayer';

const BLOB_BASE_URL = "https://krypticthadonstorage.blob.core.windows.net/media/";

const ProductionCredits = () => {
  const [currentPlayingId, setCurrentPlayingId] = useState(null);

  // Memoize static data to prevent recreation on every render
  const creditsData = useMemo(() => [
    { 
      id: 1, 
      title: 'Forever Blessed', 
      artist: 'Kryptic Tha Don (ft. Neeks BTP)', 
      artworkKey: 'images/ForeverBlessed.jpg', 
      audioKey: 'music/Neeks_ForeverBlessed.mp3' 
    },
    { 
      id: 2, 
      title: 'Broken House', 
      artist: 'Bugzy Niaire', 
      artworkKey: 'images/BrokenHouse.jpg', 
      audioKey: 'music/BugzyNiaire_BrokenHouse.mp3' 
    },
    { 
      id: 3, 
      title: 'Dream', 
      artist: 'Bugzy Niaire, Future Quarterz', 
      artworkKey: 'images/BrokenHouse.jpg', 
      audioKey: 'music/BugzyNiaire_Dream.mp3' 
    },
    { 
      id: 4, 
      title: 'Feng Sui', 
      artist: 'Sunny Pineal', 
      artworkKey: 'images/FengSui.jpg', 
      audioKey: 'music/SunnyPineal-FengSui.mp3' 
    },
    { 
      id: 5, 
      title: 'Beautiful Struggle', 
      artist: 'Bugzy Niaire', 
      artworkKey: 'images/PavementPoems.jpg', 
      audioKey: 'music/BugzyNiaire_BeautifulStruggle.mp3' 
    },
    { 
      id: 6, 
      title: 'Born Kings', 
      artist: 'Greenland Cak', 
      artworkKey: 'images/TheyCallMeCaddy.jpg', 
      audioKey: 'music/GreenlandCak_BORN-KINGS.mp3' 
    },
    {
      id: 7,
      title: 'Pavement Poems', 
      artist: 'Bugzy Niaire', 
      artworkKey: 'images/PavementPoems.jpg', 
      audioKey: 'music/GreenlandCak_BORN-KINGS.mp3' 
    },
  ], []);

  // Handle play/pause - only one song can play at a time
  const handlePlayStateChange = useCallback((creditId, isPlaying) => {
    setCurrentPlayingId(isPlaying ? creditId : null);
  }, []);

  // Memoize album items to prevent unnecessary re-renders
  const albumItems = useMemo(() => 
    creditsData.map((credit) => (
      <article key={credit.id} className="album-item">
        {credit.artworkKey && (
          <div className="album-artwork">
            <img 
              src={`${BLOB_BASE_URL}${credit.artworkKey}`}
              alt={`Album artwork for ${credit.title} by ${credit.artist}`}
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                console.warn(`Failed to load image: ${credit.artworkKey}`);
              }}
            />
            {credit.audioKey && (
              <div className="music-player-overlay">
                <MusicPlayer 
                  audioSource={`${BLOB_BASE_URL}${credit.audioKey}`}
                  isCurrentlyPlaying={currentPlayingId === credit.id}
                  onPlayStateChange={(isPlaying) => handlePlayStateChange(credit.id, isPlaying)}
                />
              </div>
            )}
          </div>
        )}
        
        <div className="album-info">
          <h3 className="album-title">{credit.title}</h3>
          <p className="album-artist">by {credit.artist}</p>
        </div>
      </article>
    )), 
    [creditsData, currentPlayingId, handlePlayStateChange]
  );

  return (
    <section className="production-credits" aria-label="Production Credits">
      <div className="album-list" role="list">
        {albumItems}
      </div>
    </section>
  );
};

export default ProductionCredits;