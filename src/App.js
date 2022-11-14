import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Players from './components/Players';

const { Table } = require("@queval_j/poker-engine");


const table = new Table();

table.sitDown("Player 1", 1000);
table.sitDown("Player 2", 1000);
table.sitDown("Player 3", 1000);

table.dealCards();
table.currentActor.callAction();


table.currentActor.callAction();
table.currentActor.checkAction();

// flop.
table.currentActor.checkAction();
table.currentActor.betAction(20);
table.currentActor.callAction();
table.currentActor.callAction();

// turn.
table.currentActor.betAction(40);
table.currentActor.raiseAction(70);
table.currentActor.foldAction();
table.currentActor.callAction();

// river.
table.currentActor.checkAction();
table.currentActor.checkAction();



// Find all player hole cards.
// table.players.forEach(player => console.log(player?.holeCards));

// console.log(table.players[0].holeCards[0]._rank);










function App() {



  const [players, setPlayers] = useState(table.players.filter((el) => el));
  console.log(players);

  const [communityCards, setCommunityCards] = useState(table.communityCards);
  console.log(table);

  const [winner, setWinner] = useState(table.winners);
  console.log(table.winners);


  // Find all players.





  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        {communityCards && communityCards.map((card) => {
          return <Card number={card._rank} suit={card._suit} />;
        })
        }        
      </div>
      <div className='winner d-flex'>
        <h6>Winner: {winner.map((el) => {
          return el.id;
        })}
        </h6>
      </div>
      <div className="Player-box gap-3">
        {players.map((el) => {
          return <Players 
          id={el.id} 
          stake={el.stackSize} 
          cards={el.holeCards} 
          showCards={el.showCards} 
          hand={el.hand} />;
        })}
      </div>
      <div className='button-action p-3 mt-2'>
        <button type="button" className="nes-btn btn-p is-success">Bet</button>
        <button type="button" className="nes-btn btn-p is-primary">Check</button>
        <button type="button" className="nes-btn btn-p is-error">Fold</button>
      </div>

    </div>
  );
}

export default App;

