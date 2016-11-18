'use strict';

const store = require('../store');
const app = require('./app');
const logic = require('./game.js');

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
  clear('#signUp');
  clear('#changePass');
};

const signOutSuccess = (data) => {
$('.messages').text('Be well and walk long...');
$('.wrap-board').hide(500);
$('#reset').hide(500);
$('.button-wrapper').hide(500);
$('.title').hide(500);
$('#game-stats').hide();
  clear('#signOut');
};

const signInSuccess = data => {
  store.user = data.user;
  success(data);
$('.messages').text('You may play but please create a game first...');
$('.title').show(500);
  $('.begin').hide(500);
  clear('#signIn');
};

const passSuccess = (data) => {
$('.messages').text('Your new secret word is safe with me.');
  clear('#signUp');
  clear('#changePass');
};

const failure = (error) => {
$('.messages').text('So sorry...you failed authentication.');
  clear('#signIn');
};

const createGameSuccess = (data) => {
  app.game = data.game;
  $('.messages').text("Well done Player-San...You may begin with an 'X'");
  $('.wrap-board').show(500);
  $('#reset').show(500);
  $('.button-wrapper').show(500);
  $('#game-stats').hide();
};

const updateGameSuccess = (data) => {
  app.game = data.game;
  $('.messages').text("I anticipate the next move with patience...");
};

const getGameSuccess = (data) => {
  $('.messages').text("You have been a very busy student...");
  $('#total-games').text('Games Played: ' + data.games.length);
  $('#completed-games').text('Games Completed: ' +
    logic.calcCompletedGames(data));
};

const displayStats = () => {
  $('#game-stats').show();
};

module.exports = {
  signInSuccess,
  signOutSuccess,
  passSuccess,
  failure,
  success,
  createGameSuccess,
  updateGameSuccess,
  getGameSuccess,
  displayStats,
};
