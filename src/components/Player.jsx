import React from 'react'
import Card from './Card';
import './Player-style.css'

const Player = ({ name, cards }) => {
    return (
        <div className='player-style'>
            <div className='cards-style'>
                {cards && cards.map((card) => {
                    return <Card number={card.number} suit={card.suit} />;
                })
                }
            </div>
            <div className='name-style'>
                {name}
            </div>
        </div>
    )
}

export default Player

// {
//     cards.map((card) => {
//         return <Card number={card.number} suit={card.suit} />;
//     })
// }