import React from 'react'
import './players.css'
import Card from './Card';

const Players = ({ id, stake, cards, showCards, hand }) => {
  return (
    <div className='player-box mt-3 m-3'>
      <div className='cards-box'>
        {cards && cards.map((card) => {
          return <Card number={card._rank} suit={card._suit} />;
        })
        }
      </div>
      <div className='info-box'>
        <h5>{id}</h5>
        <div className='info-box-stake'>
          <h6>{hand?.name}</h6>
          <p>{stake}bb</p>
        </div>
      </div>
    </div>
  )
}

export default Players

