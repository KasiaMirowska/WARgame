'use strict';

import $ from 'jquery';
import Game from './Game';


export default class GameDisplay {
     constructor(){
        this.game = new Game();
     }
    

    handleStart() {
         console.log(this.game.player1) 
        // let html = (this.generateStartView())
        $('.start').on('click', e => {
            e.preventDefault();
            console.log('am i here?')
             this.game.start();
            // $('.game-controls').html(html);
        })

        
    }
   
}

//on click populate players stacks=display