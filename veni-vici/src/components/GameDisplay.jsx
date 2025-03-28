import React from 'react';
function GameDisplay({ game, addToBanList }) {
  return (
    <div>
      <h2 onClick={() => addToBanList('name', game.name)} style={{ cursor: 'pointer'}}>
        {game.name}
      </h2>
      <p className="genres">
        Genre:{' '}
        {game.genres.map((genre) => (
          <span key={genre.name} onClick={() => addToBanList('genre', genre.name)} style={{ cursor: 'pointer'}}>
            {genre.name}
          </span>
        ))}
      </p>
      <p onClick={() => addToBanList('release', game.released)} style={{ cursor: 'pointer'}}>
        Released: {game.released}
      </p>
      <img src={game.background_image} alt={game.name} style={{ width: '300px', height: '200px' }} />
    </div>
  );
}

export default GameDisplay;
