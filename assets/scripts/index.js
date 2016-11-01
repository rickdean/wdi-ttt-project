'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./auth/events.js');

$(()=>{

$('.sign-up-form').on('submit', function(e){
e.preventDefault();

let $coolBro = $('#sign-up-email').val();

authEvents.addHandlers();
  gameEvents.addHandlers();

});
});
