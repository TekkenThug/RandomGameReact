import React from 'react';
import GameCardCounter from './GameCardCounter';
import './index.css';

export default function GameCard({ title, score, cover, releaseDate }) {
  return (
      <div
          className="game-card"
          style={{
              backgroundImage: `url('${cover}')`
          }}
      >
        <div className="game-card__content">
            <div className="game-card__title">
                  {title}
                  <span className="game-card__date">
                      Release date: {releaseDate}
                  </span>
            </div>
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
