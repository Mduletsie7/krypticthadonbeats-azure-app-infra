// Discography.js
import React from 'react';
import '../styles/Discography.css';

const Discography = () => {
  const albums = [
    { id: 1, title: 'Forever Blessed', year: 2022, cover: 'ForeverBlessed.jpg' },
    { id: 2, title: 'Album 2', year: 2021, cover: 'vinyl.jpg' },
    // Add more albums as needed
  ];

  return (
    <section className="discography">
      <h2>Discography</h2>
      <div className='song-list'>
        
      </div>
      <div className="album-list">
        {albums.map((album) => (
          <div key={album.id} className="album">
            <img src={require(`../assets/${album.cover}`).default} alt={`Cover for ${album.title}`} />
            <div className="album-info">
              <p className="album-title">{album.title}</p>
              <p className="album-year">{album.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discography;
