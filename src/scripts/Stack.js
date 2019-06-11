'use strict';


export default class Stack {
    constructor(cards = []) {
        this.cards = cards;
        this.faceUp = [];
        this.cardsAmount = this.cards.length;
        
    } 
    toggleFace(){
        return this.card.faceUp = !this.card.faceUp;
    }
    pullCards() {
        let drawnCard = this.cards.shift();
        if (drawnCard.facedown = true){
            drawnCard.faceDown.toggleFace();
            } else {
               randomizeDeck(myDeck)
            }
                return drawnCard
    }
}
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