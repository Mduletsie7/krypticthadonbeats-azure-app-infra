import React from 'react';
import '../styles/NotableCredits.css';
import MusicPlayer from './MusicPlayer';

const ProductionCredits = () => {
  const staticCreditsData = [
    { id: 1, title: 'Forever Blessed', artist: 'Kryptic Tha Don (ft. Neeks BTP)', artworkKey: 'images/FengSui.jpg', audioKey: 'music/Neeks_ForeverBlessed.mp3' },
    { id: 2, title: 'Broken House', artist: 'Bugzy Niaire', artworkKey: 'images/BrokenHouse.jpg', audioKey: 'music/BugzyNiaire_BrokenHouse.mp3' },
    { id: 3, title: 'Dream', artist: 'Bugzy Niaire, Future Quarterz', artworkKey: 'images/BrokenHouse.jpg', audioKey: 'music/BugzyNiaire_Dream.mp3' },
    { id: 4, title: 'Feng Sui', artist: 'Sunny Pineal', artworkKey: 'images/FengSui.jpg', audioKey: 'music/SunnyPineal-FengSui.mp3' },
    { id: 5, title: 'Beautiful Struggle', artist: 'Bugzy Niaire', artworkKey: 'images/PavementPoems.jpg', audioKey: 'music/BugzyNiaire_BeautifulStruggle.mp3' },
    { id: 6, title: 'Born Kings', artist: 'Greenland Cak', artworkKey: 'images/TheyCallMeCaddy.jpg', audioKey: 'music/GreenlandCak_BORN-KINGS.mp3' },
    { id: 7, title: 'Bros 4 Life', artist: 'Greenland Label', artworkKey: 'images/Bros4Life.jpg', audioKey: 'music/GreenlandCak_BORN-KINGS.mp3' },
  ];

  return (
    <div className="notable-credits">
      <div className="album-list">
        {staticCreditsData.map((credit) => (
          <div key={credit.id} className="album-item">
            {credit.artworkKey && (
              <img src={credit.artworkKey} alt={`Album artwork for ${credit.title}`} />
            )}
            {credit.audioKey && <MusicPlayer audioSource={credit.audioKey} />}
            <div className="album-info">
              <strong>{credit.title}</strong> by {credit.artist}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionCredits;