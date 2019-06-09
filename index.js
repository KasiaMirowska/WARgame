'use strict';

class Card {
    constructor(suit, rank) {
        this.faceDown = true;
        this.suit = suit;
        this.rank = rank;
    }
}
Card.SUITS = ['spades', 'hearts', 'diamonds', 'clubs'];
Card.RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];


const deck = [];
for (let rank of Card.RANKS) {
    for (let suit of Card.SUITS) {
        deck.push(new Card(suit, rank))
    }
}

class Stack {
    constructor(cards = []) {
        // this.drawDeck = new Deck;
        this.cards = cards;
        this.cardsAmount = this.cards.length;
    }
    // if someone passes cards in, they are part of the array otherwise it's an emtpty array
}

//part of the GAME:

const drawDeck = new Stack(deck);

// function randomizedeck + first a deck needs assigned index
// divide deck into 2 playerStacks
// start game=> flip button when each draws one card and flips it face up at once 
//whoever has higher rank takes al cards at puts it into his stack but still flipped up
// when we reach flipped cards in the stack again then randomize again and start over

//war => when drawn cards are the same, then redraw 2 each but flip just one of the pairs, winner takes all 6 cards

function randomNum(num) {
    let min = Math.ceil(0);
    let max = Math.floor(num);
    return Math.floor(Math.random() * (max - min)) + min;

}

function randomizeDeck(drawDeck) {
    const gameDeck = [];
    const myCards = drawDeck.cards;
    for (let i = 0; i < 52; i++) {
        const index = randomNum(myCards.length);
        const currentCard = myCards.slice(index, index + 1)[0]; //returns an array and I need just its element, hence [0]
        myCards.splice(index, 1);
        gameDeck.push(currentCard);
    }
    return new Stack(gameDeck);
}

let gameDeck = randomizeDeck(drawDeck);
 let player1Deck = new Stack(gameDeck.cards.slice(0, 26));
 let player2Deck = new Stack(gameDeck.cards.slice(26, 52));


function cardsOnTable(myDeck) {
    let drawnCard = myDeck.cards[0];
    if (drawnCard.facedown = true){
        drawnCard.faceDown = false;
    } else {
        randomizeDeck(myDeck)
    }
    return drawnCard
}
console.log(cardsOnTable(player1Deck))

//on each click we need to adjust myDeck.cardsAmount either -1 for each player


function cardValue(card) {
    let value = card.rank;
    switch (value) {
        case 'jack':
            value = 11;
            break;
        case 'queen':
            value = 12;
            break;
        case 'king':
            value = 13;
            break;
        case 'ace':
            value = 14;
            break;
    }
    return value
}
console.log(cardValue(cardsOnTable(player1Deck)))

function findWinner(card1, card2) {
    let winner;
    console.log(card1,card2, 'here?')
    let cardA = cardValue(card1)
    let cardB = cardValue(card2)
    if (cardA > cardB) {
        winner = cardA;
    }
    if (cardB > cardA) {
        winner = cardB;
    }
    if (cardA === cardB) {
        return " we have a WAR!"
    }
    return winner;
}
//need to adjust myDeck.push(2 cards from the game with faceDown false) and myDeck.cardsAmount +2 for winner 
console.log(findWinner(cardsOnTable(player1Deck), cardsOnTable(player2Deck)))


function war(deck1, deck2) {
    let winner;
    let player1CardFlipped = cardsOnTable(deck1);
    let player1CardHidden = deck1[1];
    let player2CardFlipped = cardsOnTable(deck2);
    let player2CardHidden = deck2[1];
    let player1 = cardValue(player1CardFlipped);
    let player2 = cardValue(player2CardFlipped);
    if (player1 > player2) {
        winner = player1
    }
    if (player2 > player1) {
        winner = player2
    }
    else {
        return 'try again'
    }
    return winner
}

console.log(war(player1Deck, player2Deck))
// need to adjust myDeck.push(6 cards from the game with faceDown false) and myDeck.cardsAmount +2 for winner 

//every time before clicking for a 'next pull' I need to check if a card about to be pulled has faceDown property set to true. when I come across the cards with property faceDown:false I need to run randomizeDeck() on each player's stack. Also once one of the player's cardAmount hits 0 means the end of the game

