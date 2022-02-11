import React from 'react';
import './index.css';

export default function GameCardCounter({ counter }) {
    let scoreClasses = 'game-count ';

    if (counter) {
        scoreClasses +=
        counter <= 100 && counter >= 80
            ? 'game-count--green'
            : counter <= 79 && counter >= 60 ? 'game-count--yellow'
            : counter <= 59 && counter >= 40 ? 'game-count--orange' : 'game-count--red'
    }

    return (
        <div className={scoreClasses}>
            {counter}
        </div>   
    )
}
