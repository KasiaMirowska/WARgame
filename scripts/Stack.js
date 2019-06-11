'use strict';



export default class Stack {
    constructor(cards = []) {
        this.cards = cards;
        this.faceUp = [];
        this.cardsAmount = this.cards.length;
    }   
}

// console.log(myStack)