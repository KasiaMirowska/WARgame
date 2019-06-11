'use strict';

import Deck from "./Deck";
import Stack from './Stack'

console.log("hi there, game is connected")

export default class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.card1 = null;
        this.card2 = null;
    }
   
    start() {
        const deck = new Deck();
        deck.randomizeDeck();
        this.player1 =  new Stack(deck.cards.slice(0, 26));
        this.player2 = new Stack(deck.cards.slice(27, 52));
    }

    compare(){

    }

    war() {
        
    }
}


