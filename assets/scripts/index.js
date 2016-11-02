'use strict';

const authEvents = require('./auth/events.js');


$(()=>{

//$('.sign-up-form').on('submit', function(e){
//e.preventDefault();

//let $zenplayer1 = $('#sign-up-email').val();



authEvents.addHandlers();

});
