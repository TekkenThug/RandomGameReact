import React from 'react';
import GameCardCounter from './GameCardCounter';
import './index.css';

export default function GameCard({ title, score, cover, releaseDate }) {
  const localDate = new Date(releaseDate).toLocaleDateString('ru-RU');

  return (
      <div
          className="game-card"
          style={{
              backgroundImage: `url('${cover}')`
          }}
      >
        <div className="game-card__content">
              <h3 className="game-card__title">{title}</h3>
              <span className="game-card__date">
                  Release date: {localDate}
              </span>
            {
                  score &&
                    <div className="game-card__score">
                        <GameCardCounter counter={score} />
                    </div>
            }
        </div>
      </div>
  )
}
