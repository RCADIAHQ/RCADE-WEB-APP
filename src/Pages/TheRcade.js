



import React from 'react';
import GameList from '../components/GameList';

const games = [
  { id: 1, title: 'Atem Sprint', imageUrl: './assets/images/Atem_Car_1.png', url: 'https://atem-race-game.vercel.app/' },
  { id: 2, title: 'Atem Endless Driver', imageUrl: './assets/images/Atem_Car_2.png', url: 'https://atem-js-racer-endless.vercel.app/' },
  { id: 3, title: 'Bigheeno Game', imageUrl: '/assets/images/Bigheeno_Game.png', url: 'https://x.com/bigheeno/status/1804812951234445326' },
  { id: 4, title: 'Zerpmon', imageUrl: './assets/images/Zerpmon_GameTile.png', url: 'https://app.zerpmon.world/en'}
  // Add more games as needed
];

function TheRcade() {
  return (
    <div className="thercade" style={{ textAlign: 'center', color: 'white' }}>
      <h1 style={{ marginTop: '100px' }}>Welcome To The Rcade</h1>
      <GameList games={games} />
    </div>
  );
}

export default TheRcade;
