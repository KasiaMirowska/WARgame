'use strict';

import $ from 'jquery';
import Game from './Game';


export default class GameDisplay {
     constructor(){
        this.game = new Game();
     }

    generateStartView() {
        return (
            `<section>
            <h2>PLAYER 1</h2>
            <h2>PLAYER 2</h2>
            <h3>Current Stack Amount: hahaha ${this.game.player1.cards.length}</h3>
            <h3>Current Stack Amount:v blala ${this.game.player2.cards.length}</h3>
            
          </section>`
        )
    }
    

    handleStart() {
        console.log(this.game) 
        let html = (this.generateStartView())
        $('.start').on('click', e => {
            e.preventDefault();
            console.log('am i here?')
             this.game.start();
            $('.game-controls').html(html);
        })

        
    }
   
}

//on click populate players stacks=display