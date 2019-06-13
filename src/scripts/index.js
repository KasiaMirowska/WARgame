'use strict';

import $ from 'jquery';
import Deck from './Deck';
import Card from './Card';
import Stack from'./Stack';
import Game from './Game';
import GameDisplay from './GameDisplay';

// let myCard = new Card();
// console.log(myCard)
function main(){
// let newDeck = new Deck();
// console.log(newDeck)
//  newDeck.randomizeDeck();


//  let myStack = new Stack(newDeck.cards);
// // // myStack.randomize();
// console.log(myStack.pull().getCardValue())

// const myGame = new Game();
// console.log(myGame)
//    myGame.start();
//     myGame.pullCards()   
//   myGame.compare()
//   myGame.adjustStack()
//   myGame.pullForWar();
//   myGame.compareWar();
  const display = new GameDisplay();
  console.log(display);
  display.handleStart()
}
$(main);
