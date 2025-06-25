// Youtube.js - YouTube Video Component
import React from 'react';
import '../styles/YoutubeCred.css';

const YoutubeCred = ({ 
  videoId = "g9dvYOEkxFI", 
  title = "YouTube video player",
  width = "100%",
  height = "auto"
}) => {
  return (
    <div className="youtube-container">
      <div className="youtube-card">
        <h1 className="youtube-title">Find Me on Youtube</h1>
        
        <div className="video-wrapper">
          <iframe
            className="video-iframe"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      

    </div>
  );
};

export default YoutubeCred;