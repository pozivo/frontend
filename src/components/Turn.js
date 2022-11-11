import React from 'react'
import './Flop-style.css'
import Card from './Card';

const Turn = ({cards}) => {
    return (
        <div className='turn-style'>
            <div className='turn-cards'>
                {cards && cards.map((card) => {
                    return <Card number={card.number} suit={card.suit} />;
                })
                }
            </div>
        </div>
    )
}

export default Turn