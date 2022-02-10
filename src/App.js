import { useState } from "react";
import { getGameById } from "./services/api";
import GameCard from "./components/GameCard";
import UIButton from "./components/UI/ui-button";

function App() {
  const [gameCards, setGameCards] = useState([]);

  const getRandomGame = async () => {
    console.log('berba')
    const maxId = 5000;
    const game = await getGameById(Math.floor(Math.random() * maxId));

    setGameCards([game, ...gameCards]);
  }

  return (
    <div className="App">
      <div className="random__container">
        <div className="random__description">
          <h1>Random Game Access</h1>
          <p>
            This is a game randomizer. If you don't now, what game is choose, use this app.
          </p>

          <p>
            P.S. App use public API and making on React
          </p>
          <UIButton onClick={getRandomGame}>
            Get random game!
          </UIButton>
        </div>
        
        <div className="games-container">
          {
            gameCards.length > 0 && gameCards.map((card, index) => 
              <GameCard
                key={index}
                title={card.name}
                releaseDate={card.released}
                cover={card.background_image}
                score={card.metacritic}
              />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
