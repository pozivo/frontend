import React from 'react'
import './Flop-style.css'
import Card from './Card';

const River = ({ cards }) => {
    return (
        <div className='river-style'>
            <div className='river-cards position-absolute'>
                {cards && cards.map((card) => {
                    return <Card number={card.number} suit={card.suit} />;
                })
                }
            </div>
        </div>
    )
}

export default River