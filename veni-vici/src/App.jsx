import React, { useState } from 'react';
import './App.css';
import GameDisplay from './components/GameDisplay.jsx';
import BanList from './components/BanList.jsx';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

function App() {
  const [banList, setBanList] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);

  const fetchRandomGame = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=1&page=${Math.floor(Math.random() * 100)}`
      );

      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

      const data = await response.json();
      const game = data.results[0];

      const isBanned = banList.some((ban) => {
        if (ban.attribute === 'name' && ban.value === game.name) return true;
        if (ban.attribute === 'genre' && game.genres.some((g) => g.name === ban.value)) return true;
        if (ban.attribute === 'release' && ban.value === game.released) return true;
        return false;
      });

      if (!isBanned) {
        setCurrentGame(game);
      } else {
        fetchRandomGame();
      }
    } catch (error) {
      console.error('Error fetching game:', error);
    }
  };

  const addToBanList = (attribute, value) => {
    setBanList([...banList, { attribute, value }]);
  };

  return (
    <div className="App">
      <div className="game-container">
      <h1>Discover Random Video Games</h1>
      <button onClick={fetchRandomGame}>Get New Game</button>
      {currentGame && <GameDisplay game={currentGame} addToBanList={addToBanList} />}
    </div>
    <BanList banList={banList} setBanList={setBanList} />

</div>
  );
}

export default App;