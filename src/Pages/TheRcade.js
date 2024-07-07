


import GameCarousel from '../components/gameCarousels/GameCarousel';
import React from 'react';



function TheRcade() {
  return (
    <div className="thercade" style={{ textAlign: 'center', color: 'white' }}>
      <h1 style={{ marginTop: '100px', marginBottom: '50px' }}>Welcome To The Rcade</h1>
      <GameCarousel/>
    </div>
  );
}

export default TheRcade;
