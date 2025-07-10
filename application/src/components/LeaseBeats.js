import React, { memo, useMemo } from 'react';
import '../styles/LeaseBeats.css';

// Optimized LeaseBeats component
const LeaseBeats = memo(() => {
  const iframeContent = useMemo(() => ({
    __html: '<iframe src="https://player.beatstars.com/?storeId=117930" width="100%" height="800" style="max-width:1024px;" title="BeatStars Player" loading="lazy"> -- none -- </iframe>'
  }), []);

  return (
    <div className="LeaseBeats-section">
      <header>
        <h1 className="LeaseBeats-heading">Browse Beats</h1>
        <h2 className="beats-meta">Instant download after purchase</h2>
      </header>
      <div 
        dangerouslySetInnerHTML={iframeContent}
        className="beatstars-player-container" 
      />
    </div>
  );
});

LeaseBeats.displayName = 'LeaseBeats';

export default LeaseBeats;