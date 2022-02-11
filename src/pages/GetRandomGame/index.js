import Description from './Description';
import GameCardList from '../../components/GameCard/GameCardList';
import UIButton from '../../components/UI/ui-button';
import { getGameList } from '../../services/api';
import { useState } from 'react';
import './index.css';

export default function GetRandomGame() {
    const [maxCount, setMaxCount] = useState(0);
    const [gameCards, setGameCards] = useState([]);

    const getRandomGame = async () => {
        const pageSize = 20;

        const response = await getGameList({
            metacritic: '40,100',
            dates: '2021-01-01,2022-01-01',
            page_size: pageSize,
            page: maxCount ? Math.floor(Math.random() * Math.floor(maxCount / pageSize)) : 1
        });

        if (!maxCount) {
            setMaxCount(response.count);
        }

        const games = response.results;
        const randomGame = games[Math.floor(Math.random() * games.length - 1)];

        if (gameCards.includes(game => game.name === randomGame.name)) {
            await getRandomGame();
        } else {
            setGameCards([randomGame, ...gameCards]);
        }
    }

    return (
        <div className="random-game">
            <div className="random-game__description">
                <Description />

                <UIButton onClick={getRandomGame}>
                    Get random game!
                </UIButton>
            </div>


            <div className="random-game__games">
                {
                    gameCards.length > 0 && <GameCardList games={gameCards} />
                }
            </div>
        </div>
    )
}
