'use strict';

import $ from 'jquery';
import Game from './Game';


export default class GameDisplay {
     constructor(){
        this.myGame = new Game();
     }

    generateStartView() {
        return (
            `<section>
            <h2>PLAYER 1</h2>
            <h2>PLAYER 2</h2>
            <h3>Current Stack Amount: ${this.myGame.player1.cards.length}</h3>
            <h3>Current Stack Amount: ${this.myGame.player2.cards.length}</h3>
            
          </section>`
        )
    }
    
    generateCardView() {
        return (
            `<section>
            <p>${this.myGame.card1.rank}</p>
            <p>${this.myGame.card2.rank}</p>
            </section>`
        )

    }
    generateAnnouncement() {
        if (this.myGame.pullWinner === this.myGame.player1) {
            return `PLAYER 1 WON THIS ROUND`
        }
        if (this.myGame.pullWinner === this.myGame.player2) {
            return `PLAYER 2 WON THIS ROUND`
        }
        if (typeof this.pullWinner === 'string'){
            this.handleWar();
        }
        else {
            $('.card-display').empty(); 
        }
    }

    handleStart() {
        $('.start').on('click', e => {
            e.preventDefault();
            this.myGame.start();
            let html = (this.generateStartView())
            $('.game-controls').html(html);
            $('.pull-cards').removeAttr('hidden');
            $('.check').removeAttr('hidden');
            $('.start').attr('hidden', true);
        }) 
    }
   
    handlePullCards() {
        
        $('.pull-cards').on('click', e => {
            e.preventDefault();
            this.myGame.pullCards();
            this.myGame.compare();
            
            
            let html1 = this.generateCardView();
            let html2 = this.generateStartView();
            
            console.log(this.myGame.card1)
            console.log(this.myGame.card2)
            $('.card-display2').empty();
            $('.card-display').html(html1);
            $('.game-controls').html(html2);
            $('.check').prop('disabled',false)
        })
    }

    handleScore() {
        $('.check').on('click', e => {
            e.preventDefault();
            this.myGame.adjustStack();
            let html3 = this.generateAnnouncement();
            let html2 = this.generateStartView();
            $('.card-display').empty();
            $('.game-controls').html(html2);
            $('.card-display2').html(html3);
            $('.check').prop('disabled',true)
        })
    }
    handleWar() {
        console.log('war here')
        $('.card-display').html(`We have a war!<br>
        Pull additional cards`) 
    }
}

//on click populate players stacks=display