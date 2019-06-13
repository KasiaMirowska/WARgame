'use strict';




export default class Stack {
    constructor(cards = []) {
        this.cards = cards;
        console.log(this.cards, 'inside stack')
    } 
    
    pull() {
        let drawnCard = this.cards.shift();
        if (drawnCard.faceDown = true){
            drawnCard.faceDown = false;
            } else {
               randomizeDeck(this.cards)
            }
                return drawnCard
    }

    warPull() {
        let warCard =this.cards.shift()
                return warCard;
       
    }
}
