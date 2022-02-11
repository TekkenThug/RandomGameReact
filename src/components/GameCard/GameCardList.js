import React from 'react';
import GameCard from './';

export default function GameCardList({ games }) {
  return (
      <div className="game-list">
          {
              games.map((game, index) =>
                  <GameCard
                      key={index}
                      title={game.name}
                      releaseDate={game.released}
                      cover={game.background_image}
                      score={game.metacritic}
                  />
                )
          }
      </div>
  )
}
