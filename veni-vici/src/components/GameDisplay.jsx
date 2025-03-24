import React from 'react'
function GameDisplay({ game, addToBanList }) {
    return (
      <div>
        <h2>{game.name}</h2>
        <p>Genre: {game.genres.map((genre) => genre.name).join(', ')}</p>
        <p>Released: {game.released}</p>
        <img src={game.background_image} alt={game.name} style={{ width: '300px', height: '200px' }} />
        <button onClick={() => addToBanList(game.name)}>Ban This Game</button>
      </div>
    );
  }
export default GameDisplay;  