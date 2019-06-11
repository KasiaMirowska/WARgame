'use strict';

console.log("hi there, card is connected")


export default class Card {
    static SUITS = ['spades', 'hearts', 'diamonds', 'clubs'];
    static RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    
    constructor(suit, rank) {
        this.faceDown = true;
        this.suit = suit;
        this.rank = rank;
    }

    getCardValue(card) {
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
}


// console.log(new Card)
