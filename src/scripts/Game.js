'use strict';

import Stack from './Stack';
import Deck from './Deck';
console.log("hi there, game is connected")

export default class Game {
    constructor(){
        this.deck = null;
        this.stack = null;
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
        
         console.log(this.player1, 'player1')
         console.log(this.player2, 'player2')
    }

    pullCards() {
        this.card1 = this.player1.pull();
        this.card2 = this.player2.pull();
        // console.log(this.card1,'first', this.card2,'second')
    }
    compare(){
        let winner;
        let cardA = this.card1.getCardValue()
        let cardB = this.card2.getCardValue()
        console.log(cardA, cardB)
            if (cardA > cardB) {
                winner = this.player1;
                
            }
            if (cardB > cardA) {
                winner = this.player2;
            }
            if (cardA === cardB) {
                winner = " we have a WAR!"
            }
            
            this.pullWinner = winner;
            console.log(this.pullWinner)
        }
    
    adjustStack(){
        console.log(this.pullWinner)
        this.pullWinner.cards.push(this.card1, this.card2)
            console.log(this.player2.cards, 'P2')
            console.log(this.player1.cards, 'P1')
            console.log(this.player1.cards.length)
            console.log(this.player2.cards.length)
    }
    
    pullForWar() {
        this.card3 = this.player1.warPull()
        console.log(this.card3, 'P1')
        this.card4 = this.player1.pull()
        console.log(this.card4, 'P1')
        this.card5 = this.player2.warPull();
        this.card6 = this.player2.pull()
        console.log(this.card5, this.card6,'P2')
        console.log(this.player1.cards.length, 'P1')
        console.log(this.player2.cards.length, 'P2')
    }

    compareWar() {
        let winner;
        let cardA = this.card4.getCardValue()
        let cardB = this.card6.getCardValue()
        console.log(cardA, cardB)
            if (cardA > cardB) {
                winner = this.player1;
                
            }
            if (cardB > cardA) {
                winner = this.player2;
            }
            if (cardA === cardB) {
                winner = " we have a WAR!"
            }
            
            this.warWinner = winner;
            console.log(this.warWinner)
           
        }

        adjustWarStack(){
            this.warWinner.cards.push(this.card1, this.card2, this.card3, this.card4, this.card5, this.card6)
    }
}



