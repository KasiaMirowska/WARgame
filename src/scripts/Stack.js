'use strict';


export default class Stack {
    constructor(cards = []) {
        this.cards = cards;
        this.faceUp = [];
        this.cardsAmount = this.cards.length;
        
    } 
   
    pullCards() {
        let drawnCard = this.cards[0];
        if (drawnCard.faceDown = true){
            drawnCard.faceDown = false;
            } else {
               randomizeDeck(this.cards)
            }
                return drawnCard
    }
}
