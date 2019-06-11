'use strict';
import Card from './Card'

// console.log("hi there, deck is connected")

export default class Deck {
    constructor() {
        this.cards = [];
        for (let rank of Card.RANKS) {
            for (let suit of Card.SUITS) {
                this.cards.push(new Card(suit, rank))
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
        const myCards = this.cards;
        for (let i = 0; i < 52; i++) {
            const index = this.randomNum(myCards.length);
            const currentCard = myCards.slice(index, index + 1)[0]; //returns an array and I need just its element, hence [0]
            myCards.splice(index, 1);
            gameDeck.push(currentCard);
        }
        
       this.cards = gameDeck;
    }

}

