import React, { useState } from 'react'
import './App.css'
import GameDisplay from './components/GameDisplay.jsx';
import BanList from './components/BanList.jsx';
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
function App() {
  const [banList, setBanList] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);
  const fetchRandomGame = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=1&page=${Math.floor(Math.random() * 100)}`);
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      const data = await response.json();
      const game = data.results[0];
      if (!banList.includes(game.name)) {
        setCurrentGame(game);
      } else {
        fetchRandomGame();
      }
    } catch (error) {
      console.error('Error fetching game:', error);
    }
  };
  
  const addToBanList = (gameName) => {
    setBanList([...banList, gameName]);
  };

  return (
    <div className="App">
      <h1>Discover Random Video Games</h1>
      <button onClick={fetchRandomGame}>Get New Game</button>
      {currentGame && <GameDisplay game={currentGame} addToBanList={addToBanList} />}
      <BanList banList={banList} />
    </div>
  );
};

export default App;
