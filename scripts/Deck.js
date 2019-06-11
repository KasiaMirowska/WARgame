'use strict';
import Card from './Card'

console.log("hi there, deck is connected")

export default class Deck {
    constructor() {
        this.deck = [];
        for (let rank of Card.RANKS) {
            for (let suit of Card.SUITS) {
                this.deck.push(new Card(suit, rank))
            }
        }
    }

    randomNum(num) {
        let min = Math.ceil(0);
        let max = Math.floor(num);
        return Math.floor(Math.random() * (max - min)) + min;
    
    }
 
    randomizeDeck() {
        const gameDeck = [];
        const myCards = this.deck;
        
        for (let i = 0; i < 52; i++) {
            const index = this.randomNum(myCards.length);
            const currentCard = myCards.slice(index, index + 1)[0]; //returns an array and I need just its element, hence [0]
            myCards.splice(index, 1);
            gameDeck.push(currentCard);
        }
        
       return gameDeck;
    }

}
// let deck = new Deck();
// console.log(typeof deck, 'hi')
// console.log(new Deck)
// // export default Deck;