// NotableCredits.js
import React from 'react';
import '../styles/NotableCredits.css';
import MusicPlayer from './MusicPlayer';

const NotableCredits = () => {
    const credits = [
      { id: 1, title: 'Forever Blessed', artist: 'Kryptic Tha Don (ft. Neeks BTP)', artwork: 'https://krypticmusicportfolio.s3.amazonaws.com/images/ForeverBlessed.jpg', audio: 'https://krypticmusicportfolio.s3.amazonaws.com/music/Neeks_ForeverBlessed.mp3' },
      { id: 2, title: 'Broken House', artist: 'Bugzy Niaire', artwork: 'https://krypticmusicportfolio.s3.amazonaws.com/images/BrokenHouse.jpg', audio: 'https://krypticmusicportfolio.s3.amazonaws.com/music/BugzyNiaire_BrokenHouse.mp3' },
      { id: 3, title: 'Dream', artist: 'Bugzy Niaire, Future Quarterz', artwork: 'https://krypticmusicportfolio.s3.amazonaws.com/images/BrokenHouse.jpg', audio: 'https://krypticmusicportfolio.s3.amazonaws.com/music/BugzyNiaire_Dream.mp3' },
      { id: 4, title: 'Feng Sui', artist: 'Sunny Pineal', artwork: 'https://krypticmusicportfolio.s3.amazonaws.com/images/FengSui.jpg', audio: 'https://krypticmusicportfolio.s3.amazonaws.com/music/SunnyPineal-FengSui.mp3' },
      { id: 5, title: 'Beautiful Struggle', artist: 'Bugzy Niaire', artwork: 'https://krypticmusicportfolio.s3.amazonaws.com/images/PavementPoems.jpg', audio: 'https://krypticmusicportfolio.s3.amazonaws.com/music/BugzyNiaire_BeautifulStruggle.mp3' },
      { id: 6, title: 'Born Kings', artist: 'Greenland Cak', artwork: 'https://krypticmusicportfolio.s3.amazonaws.com/images/TheyCallMeCaddy.jpg', audio: 'https://krypticmusicportfolio.s3.amazonaws.com/music/GreenlandCak_BORN-KINGS.mp3' },
      { id: 7, title: 'Bros 4 Life', artist: 'Greenland Label', artwork: 'https://krypticmusicportfolio.s3.amazonaws.com/images/Bros4Life.jpg', audio: 'https://krypticmusicportfolio.s3.amazonaws.com/music/GreenlandCak_BORN-KINGS.mp3' },
      // Add more credits as needed
    ];
  
    return (
        <div className="notable-credits">
          <div className="album-list">
            {credits.map((credit) => (
              <div key={credit.id} className="album-item">
                <img src={`${credit.artwork}`} alt={`Album artwork for ${credit.title}`} />
                <MusicPlayer audioSource={`${credit.audio}`} />
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