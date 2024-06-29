

// src/components/GameList.js
import React, { useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import GameTile from './GameTile';
import './GameList.css';

const GameList = ({ games }) => {
  const navigate = useNavigate();
  const listRef = useRef(null);

  useEffect(() => {
    window.listRef = listRef; // Attach listRef to the window object
  }, []);

  const handleClick = (url) => {
    navigate(url);
  };

  const scrollLeft = () => {
    if (listRef.current) {
      console.log("Scrolling left"); // Debug log
      listRef.current.scrollBy({
        left: -620,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      console.log("Scrolling right"); // Debug log
      listRef.current.scrollBy({
        left: 620,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="game-list-container">
      <div className="arrow left-arrow" onClick={scrollLeft}>
        {'<'}
      </div>
      <div className="game-list" ref={listRef}>
        {games.map((game) => (
          <GameTile key={game.id} game={game} onClick={() => handleClick(game.url)} />
        ))}
      </div>
      <div className="arrow right-arrow" onClick={scrollRight}>
        {'>'}
      </div>
    </div>
  );
};

export default GameList;
