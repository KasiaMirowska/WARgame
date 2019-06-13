'use strict';

import $ from 'jquery';
import Game from './Game';
console.log('here')

export default class GameDisplay extends Game {
    constructor(){
        super()
        this.game = new Game();
    }

    // _generateStartView() {
    //     return (
    //         `<section>
    //         <h2>PLAYER 1</h2>
    //         <h2>PLAYER 2</h2>
    //         <h3>Current Stack Amount: hahaha ${this.player1.cards.length}</h3>
    //         <h3>Current Stack Amount:v blala ${this.player2.cards.length}</h3>
            
    //       </section>`
    //     )
    // }

    handleStart() {
        let html = (`<section>
        <h2>PLAYER 1</h2>
        <h2>PLAYER 2</h2>
        <h3>Current Stack Amount: ${this.player1.cards.length} </h3>
        <h3>Current Stack Amount:${this.player2.cards.length} </h3>
        
      </section>`);
        console.log(player1)
        $('.start').on('click', 'button', e => {
             this.game.startGame();
            $('.game-controls').html(html);
        })

        
    }
   
}
//on click populate players stacks=display