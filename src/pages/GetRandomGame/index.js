import Description from './Description';
import GameCardList from '../../components/GameCard/GameCardList';
import UIButton from '../../components/UI/ui-button';
import UIInput from '../../components/UI/ui-input';
import { getGameList } from '../../services/api';
import { useState } from 'react';
import './index.css';
import { shuffle } from '../../utils';

export default function GetRandomGame() {
    const [gameCards, setGameCards] = useState([]);
    // const [options, setOptions] = useState({
    //     metacriticMin: '',
    // });

    const getGames = async () => {
        const pageSize = 60;

        const response = await getGameList({
            metacritic: '80,100',
            dates: '2010-01-01,2022-01-01',
            page_size: pageSize,
        });

        setGameCards([...shuffle(response.results)]);
    }

    const getRandomGame = () => {
        console.log('Roulette is start!')
    }

    return (
        <div className="random-game">
            <div className="random-game__description">
                <Description />

                <UIButton onClick={gameCards.length ? getRandomGame : getGames}>
                    {
                        gameCards.length ? 'Get random game!': 'Fill this list!'
                    }
                </UIButton>

                {/*<h2>Options</h2>*/}

                {/*<UIInput*/}
                {/*    placeholder="Metacritic min score"*/}
                {/*    onChange={(value) => setOptions({...options, metacriticMin: value })}*/}
                {/*    value={options.metacriticMin}*/}
                {/*/>*/}

                {/*{JSON.stringify(options, null, 2)}*/}
            </div>


            <div className="random-game__games">
                {
                    gameCards.length > 0 && <GameCardList games={gameCards} />
                }
            </div>
        </div>
    )
}
