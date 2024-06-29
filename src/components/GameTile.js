




import React from 'react';
import './GameTile.css';

const GameTile = ({ game }) => {
  return (
    <a className="game-tile" href={game.url} target="_blank" rel="noopener noreferrer">
      <img src={game.imageUrl} alt={game.title} className="game-image" />
      <div className="game-title">{game.title}</div>
    </a>
  );
};

export default GameTile;
