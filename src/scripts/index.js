'use strict';

import $ from 'jquery';
import GameDisplay from './GameDisplay';


function main(){

  const display = new GameDisplay();
  console.log(display);
  display.handleStart();
  display.handlePullCards();
  display.generateAnnouncement();
  display.handleScore();
  
}
$(main);
