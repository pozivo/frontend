import React from 'react'
import './Flop-style.css'
import Card from './Card';
import Turn from './Turn';

const Flop = ({ cards }) => {
    return (
        <div className='flop-style gap-2'>
            
            <div className='flop-cards gap-2 position-absolute'>
                {cards && cards.map((card) => {
                    return <Card number={card.number} suit={card.suit} />;
                })
                }
            </div>
            <div className='flop z-index-n1'></div>
            <div className='flop z-index-n1'></div>
            <div className='flop z-index-n1'></div>
            <div className='turn'></div>
            <div className='river'></div>
            
        </div>
    )
}

export default Flop

