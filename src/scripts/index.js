'use strict';

import $ from 'jquery';
import Deck from './Deck';
import Card from './Card';
import Stack from'./Stack';
import Game from './Game';

function main() {
  
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);

let myCard = new Card();
console.log(myCard)

let newDeck = new Deck();
console.log(newDeck)
console.log(newDeck.cards[30].getCardValue());

let myStack = new Stack(newDeck.cards);
console.log(myStack.pullCards())

const myGame = new Game();
console.log(myGame.start(newDeck))
  myGame.start();
       

// const drawDeck = new Stack(deck);

// // function randomizedeck + first a deck needs assigned index
// // divide deck into 2 playerStacks
// // start game=> flip button when each draws one card and flips it face up at once 
// //whoever has higher rank takes al cards at puts it into his stack but still flipped up
// // when we reach flipped cards in the stack again then randomize again and start over

// //war => when drawn cards are the same, then redraw 2 each but flip just one of the pairs, winner takes all 6 cards



// let gameDeck = randomizeDeck(drawDeck);
// let player1Deck = new Stack(gameDeck.cards.slice(0, 26));
// let player2Deck = new Stack(gameDeck.cards.slice(26, 52));


// function cardsOnTable(myDeck) {
//     let drawnCard = myDeck.cards[0];
//     if (drawnCard.facedown = true){
//         drawnCard.faceDown = false;
//     } else {
//         randomizeDeck(myDeck)
//     }
//     return drawnCard
// }
// console.log(cardsOnTable(player1Deck))

// //on each click we need to adjust myDeck.cardsAmount either -1 for each player


// function cardValue(card) {
//     let value = card.rank;
//     switch (value) {
//         case 'jack':
//             value = 11;
//             break;
//         case 'queen':
//             value = 12;
//             break;
//         case 'king':
//             value = 13;
//             break;
//         case 'ace':
//             value = 14;
//             break;
//     }
//     return value
// }
// console.log(cardValue(cardsOnTable(player1Deck)))

// function findWinner(card1, card2) {
//     let winner;
//     console.log(card1,card2, 'here?')
//     let cardA = cardValue(card1)
//     let cardB = cardValue(card2)
//     if (cardA > cardB) {
//         winner = cardA;
//     }
//     if (cardB > cardA) {
//         winner = cardB;
//     }
//     if (cardA === cardB) {
//         return " we have a WAR!"
//     }
//     return winner;
// }
// //need to adjust myDeck.push(2 cards from the game with faceDown false) and myDeck.cardsAmount +2 for winner 
// console.log(findWinner(cardsOnTable(player1Deck), cardsOnTable(player2Deck)))

// function winnerScore(card1, card2) {
//     let winnerStack;
    
// }

// function war(deck1, deck2) {
//     let winner;
//     let player1CardFlipped = cardsOnTable(deck1);
//     let player1CardHidden = deck1[1];
//     let player2CardFlipped = cardsOnTable(deck2);
//     let player2CardHidden = deck2[1];
//     let player1 = cardValue(player1CardFlipped);
//     let player2 = cardValue(player2CardFlipped);
//     if (player1 > player2) {
//         winner = player1
//     }
//     if (player2 > player1) {
//         winner = player2
//     }
//     else {
//         return 'try again'
//     }
//     return winner
// }

// console.log(war(player1Deck, player2Deck))
// // need to adjust myDeck.push(6 cards from the game with faceDown false) and myDeck.cardsAmount +2 for winner 

// //every time before clicking for a 'next pull' I need to check if a card about to be pulled has faceDown property set to true. when I come across the cards with property faceDown:false I need to run randomizeDeck() on each player's stack. Also once one of the player's cardAmount hits 0 means the end of the game

