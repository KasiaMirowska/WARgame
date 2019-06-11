'use strict';
import Card from './Card';
import Stack from './Stack';
import Deck from './Deck';
console.log("hi there, game is connected")

export default class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.card1 = null;
        this.card2 = null;
        
    }
   
    start() {
        this.deck = new Deck();
        this.deck.randomizeDeck();
        this.player1 = new Stack(this.deck.cards.slice(0, 26)) ;
        this.player2 = new Stack(this.deck.cards.slice(26, 52));
    }

    pullCards() {
        this.card1 = this.player1.pull();
        this.card2 = this.player2.pull();
        console.log(this.card1, this.card2)
    }
    compare(){
        let winner;
        let cardA = this.card1.getCardValue()
        let cardB = this.card2.getCardValue()
            if (cardA > cardB) {
                winner = `Player1 wins this round!`;
            }
            if (cardB > cardA) {
                winner = `Player2 wins this round !`;
            }
            if (cardA === cardB) {
                return " we have a WAR!"
            }
            console.log(winner);
        }
    
    war() {
        
    }
}


