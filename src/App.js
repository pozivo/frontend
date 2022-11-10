
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Flop from './components/Flop';
import Player from './components/Player';
import Table from './components/Table';

const MAZZO = [];
const cardsStringArray = [
  "1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "11C", "12C", "13C",
  "1D", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "11D", "12D", "13D",
  "1H", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "11H", "12H", "13H",
  "1S", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "11S", "12S", "13S"
];

cardsStringArray.forEach(card => {
  MAZZO.push({
    suit: card.slice(-1),
    number: parseInt(card, 10),
    holder: "deck",
    flipped: true
  })
});

function App() {

  const [players, setPlayers] = useState(["player1", "player2", "player3", "player4"]);
  const [FLOP, setFLOP] = useState(["burn", "Flop1", "Flop2", "Flop3"]);


  const shuffle = (e) => {
    e.preventDefault();
    const mazzo = JSON.parse(JSON.stringify(MAZZO))
    const numberOfCards = mazzo.length;
    for (var i = 0; i < numberOfCards; i++) {
      let j = Math.floor(Math.random() * numberOfCards);
      let tmp = mazzo[i];
      mazzo[i] = mazzo[j];
      mazzo[j] = tmp;
    }

    const getCard = (mazzo) => mazzo.find(card => card.holder == "deck");

    players.forEach((player) => {
      const freeCard = getCard(mazzo);
      freeCard.holder = player;
    });
    players.forEach((player) => {
      const freeCard = getCard(mazzo);
      freeCard.holder = player;
    });

    
    console.log(getCard(mazzo));



    setDeck(mazzo.map(el => el));

  };


  const [deck, setDeck] = useState([]);


  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>

      <div className='flop-table mt-5'>
        <Flop />
      </div>

      <div className='player-box mt-3 gap-3'>
        <Player name="Player 1" cards={deck.filter(card => card.holder === "player1")} />
        <Player name="Player 2" cards={deck.filter(card => card.holder === "player2")} />
        <Player name="Player 3" cards={deck.filter(card => card.holder === "player3")} />
        <Player name="Player 4" cards={deck.filter(card => card.holder === "player4")} />
      </div>

      <div className='button-action p-3 mt-2'>
        <button type="button" className="nes-btn btn-p is-success">Bet</button>
        <button type="button" className="nes-btn btn-p is-primary">Check</button>
        <button type="button" className="nes-btn btn-p is-error">Fold</button>
      </div>

      <div className='d-flex justify-content-center py-3 mt-3 gap-2'>
        <Button onClick={shuffle} label="Shuffle" />
        <Button label="FLOP" />
        <Button label="Turn" />
        <Button label="River" />
      </div>
      <div className='log-mazzo py-5 gap-2'>
        {deck.map((card) => {
          return <Card number={card.number} suit={card.suit} flipped={card.flipped} />;
        })}
      </div>
    </div>
  );
}

export default App;

// {deck.filter(card => card.holder === "FLOP1") && deck.filter(card => card.holder === "FLOP2") && deck.filter(card => card.holder === "FLOP3")}