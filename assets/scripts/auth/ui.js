'use strict';

const store = require('../store');
const app = require('./app');

const clear = (modal) => {
  setTimeout(function() {
    $(modal).modal('hide'); }, 500);
    $(modal).on('hidden.bs.modal', function () {
      $(this).find("input,textarea,select").val('').end();
      $('.modal-success').text('');
    });
};

const success = (data) => {
$('.messages').text('Domo arigato...You Must Sign In.');
  console.log(data);
  clear('#signUp');
  clear('#changePass');
};

const signOutSuccess = (data) => {
$('.messages').text('Be well and walk long...');
  console.log(data);
  clear('#signOut');
};

const signInSuccess = data => {
  store.user = data.user;
  success(data);
$('.messages').text('You may play but please create a game first...');
  console.log(data);
  clear('#signIn');
};

const passSuccess = (data) => {
$('.messages').text('Your new secret word is safe with me.');
  console.log(data);
  clear('#signUp');
  clear('#changePass');
};

const failure = (error) => {
$('.messages').text('So sorry...you failed authentication.');
  console.error(error);
  clear('#signIn');
};

const createGameSuccess = (data) => {
  app.game = data.game;
  $('.messages').text("Well done Player-San...You may begin with an 'X'");
  console.log(data);
};

//const updateGameSuccess = (data) => {
//  app.game = data.game;
//  $('.messages').text("I anticipate the next move with patience...");
//  console.log(data);
//};

module.exports = {
  signInSuccess,
  signOutSuccess,
  passSuccess,
  failure,
  success,
  createGameSuccess,
//  updateGameSuccess,

};
