
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
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
    holder: "deck"
  })
});

function App() {

  const [players, setPlayers] = useState(["player1", "player2", "player3", "player4"]);

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

    players.forEach((player, index) => {
      mazzo[index].holder = player;
      mazzo[index + players.length].holder = player;
    })




    setDeck(mazzo.map(el => el));

  };


  const [deck, setDeck] = useState([]);


  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <Table />
      <div className='d-flex justify-content-center py-3'>
        <a className="nes-btn m-3" onClick={shuffle}>Shuffle</a>
        <a className="nes-btn is-success m-3" href="#">Nascondi</a>
        <a className="nes-btn is-warning m-3">Mostra</a>
      </div>
      <div className='log-mazzo'>
        <h5>Player1</h5>
        {deck.filter(card => card.holder === "player1").map((card) => {
          return <Card number={card.number} suit={card.suit} />;
        })}
      </div>
      <div className='log-mazzo'>
        <h5>Player2</h5>
        {deck.filter(card => card.holder === "player2").map((card) => {
          return <Card number={card.number} suit={card.suit} />;
        })}
      </div>
      <div className='log-mazzo'>
        <h5>Player3</h5>
        {deck.filter(card => card.holder === "player3").map((card) => {
          return <Card number={card.number} suit={card.suit} />;
        })}
      </div>
      <div className='log-mazzo'>
        <h5>Player4</h5>
        {deck.filter(card => card.holder === "player4").map((card) => {
          return <Card number={card.number} suit={card.suit} />;
        })}
      </div>
      <div className='log-mazzo'>
        {deck.map((card) => {
          return <Card number={card.number} suit={card.suit} />;
        })}
      </div>
    </div>
  );
}

export default App;

