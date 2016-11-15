'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api.js');
const ui = require('./ui.js');
const gameState = require('./game.js');


const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .then(ui.passSuccess)
    .catch(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure);
};

const onCreateGame = function () {
  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.createGameFailure);
};

const onUpdateGame = function () {
  console.log("this is the events game data" + gameState.getData)
  api.updateGame(data)
    .done(ui.updateGameSuccess)
    .fail(ui.updateGameFailure);
};
console.log("this is gamestate data" + gameState.getdata);

const onFinishedGames = () => {
  event.preventDefault();
  api.getGames()
    .done(ui.getGameSuccess)
    .fail(ui.getGameFailure);
};


const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('.sign-out-form').on('submit', onSignOut);
  $('.new-game').on('click', onCreateGame);
  //$('#reset').on('click', onUpdateGame);
  $('.box').on('click', onUpdateGame);
  $('#past').on('click', onFinishedGames);

};

module.exports = {
  addHandlers,
};
