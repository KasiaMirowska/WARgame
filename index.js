'use strict';

class Card {
    constructor(suit, rank){
        this.faceDown = true;
        this.suit = suit;
        this.rank = rank;
    }
}
Card.SUITS = ['spades','hearts','diamonds','clubs'];
Card.RANKS = [2,3,4,5,6,7,8,9,10,'jack','queen','king','ace'];


const deck = [];
for (let rank of Card.RANKS){
    for (let suit of Card.SUITS){
        deck.push(new Card(suit,rank))
    }
}

class Stack {
    constructor(cards = []){
        // this.drawDeck = new Deck;
       this.cards = cards;
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
    return Math.floor(Math.random() * (max-min))+ min;
    
    }

function randomizeDeck(drawDeck) {
    const gameDeck = [];
    const myCards = drawDeck.cards;
    for (let i =0; i< 52; i++){
        const index = randomNum(myCards.length);
        const currentCard = myCards.slice(index, index + 1)[0]; //returns an array and I need just its element, hence [0]
        myCards.splice(index, 1);
        gameDeck.push(currentCard);
    }
    return gameDeck;
}



(function game(){
    
        let deck = randomizeDeck(drawDeck);
        let player1Deck = deck.slice(0, 26);
        console.log(player1Deck);
        let player2Deck= deck.slice(26, deck.length)
        console.log(player2Deck)

    function cardsOnTable(deck) {
         let drawnCard = deck[0];
         drawnCard.faceDown = false;
        return drawnCard
     }
    
    function warCardsOnTable(deck) {
        let drawnCard = deck[0];
        drawnCard.faceDown = true;
       return drawnCard
    }
     console.log(cardsOnTable(player1Deck));
     console.log(cardsOnTable(player2Deck));
     
    function cardValue(card){
        let value = card.rank;
            switch(value){
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
    console.log(cardValue({ faceDown: false, suit: 'clubs', rank: 5 }))

    function findWinner(card1, card2){
        let winner;
        let cardA = cardValue(card1)
        let cardB = cardValue(card2)
        if (cardA > cardB){
            winner = cardA;
        }
        if (cardB > cardA){
            winner = cardB;
        }
        if (cardA === cardB){
            return " we have a WAR!"
        }
        return winner;
    }
    console.log(findWinner( {faceDown: false, suit: 'clubs', rank: 5 }, {faceDown: false, suit: 'clubs', rank: 5 }))
    
    
    function winnersStack(){
        //needs to take both cards from last function and add to the bottom of the pile face up
    }
    function war(deck1, deck2){
        let player1CardFlipped = cardsOnTable(deck1);
        let player1CardHidden = warCardsOnTable(deck1);
        let player2CardFlipped = cardsOnTable(deck2);
        let player2CardHidden = warCardsOnTable(deck2);
    if (player1CardFlipped > player2CardFlipped) {
        
    }
    // winner takes all cards adds to the bottom of the pile face up
    }

    }

}());