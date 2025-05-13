import React, { useEffect, useState } from 'react';
import '../styles/NotableCredits.css';
import MusicPlayer from './MusicPlayer';

const NotableCredits = () => {
  const [credits, setCredits] = useState([]);

  const staticCreditsData = [
    { id: 1, title: 'Forever Blessed', artist: 'Kryptic Tha Don (ft. Neeks BTP)', artworkKey: 'images/FengSui.jpg', audioKey: 'music/Neeks_ForeverBlessed.mp3' },
    { id: 2, title: 'Broken House', artist: 'Bugzy Niaire', artworkKey: 'images/BrokenHouse.jpg', audioKey: 'music/BugzyNiaire_BrokenHouse.mp3' },
    { id: 3, title: 'Dream', artist: 'Bugzy Niaire, Future Quarterz', artworkKey: 'images/BrokenHouse.jpg', audioKey: 'music/BugzyNiaire_Dream.mp3' },
    { id: 4, title: 'Feng Sui', artist: 'Sunny Pineal', artworkKey: 'images/FengSui.jpg', audioKey: 'music/SunnyPineal-FengSui.mp3' },
    { id: 5, title: 'Beautiful Struggle', artist: 'Bugzy Niaire', artworkKey: 'images/PavementPoems.jpg', audioKey: 'music/BugzyNiaire_BeautifulStruggle.mp3' },
    { id: 6, title: 'Born Kings', artist: 'Greenland Cak', artworkKey: 'images/TheyCallMeCaddy.jpg', audioKey: 'music/GreenlandCak_BORN-KINGS.mp3' },
    { id: 7, title: 'Bros 4 Life', artist: 'Greenland Label', artworkKey: 'images/Bros4Life.jpg', audioKey: 'music/GreenlandCak_BORN-KINGS.mp3' },
  ];

useEffect(() => {
  const fetchSignedUrls = async () => {
    try {
      const resolved = await Promise.all(staticCreditsData.map(async (credit) => {
        const [artworkRes, audioRes] = await Promise.all([
          fetch(`/signed-url?key=${encodeURIComponent(credit.artworkKey)}`),
          fetch(`/signed-url?key=${encodeURIComponent(credit.audioKey)}`)
        ]);

        const artworkJson = await artworkRes.json();
        const audioJson = await audioRes.json();

        return {
          ...credit,
          artwork: artworkJson.url || '',
          audio: audioJson.url || ''
        };
      }));

      setCredits(resolved);
    } catch (err) {
      console.error('Error fetching signed URLs:', err);
    }
  };

  fetchSignedUrls();
}, []);


  return (
    <div className="notable-credits">
      <div className="album-list">
        {credits.map((credit) => (
          <div key={credit.id} className="album-item">
            {credit.artwork && (
              <img src={credit.artwork} alt={`Album artwork for ${credit.title}`} />
            )}
            {credit.audio && <MusicPlayer audioSource={credit.audio} />}
            <div className="album-info">
              <strong>{credit.title}</strong> by {credit.artist}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotableCredits;
