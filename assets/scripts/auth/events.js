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
  api.updateGame(gameState.getData())
    .done(ui.updateGameSuccess)
    .fail(ui.updateGameFailure);
};

const onGetGames = function (event) {
  event.preventDefault();
  api.getGames()
    .then(ui.getGameSuccess)
    .catch(ui.failure);
    ui.displayStats();
};



const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('.sign-out-form').on('submit', onSignOut);
  $('#reset').on('click', onCreateGame);
  $('.new-game').on('click', onCreateGame);
  $('.box').on('click', onUpdateGame);
  $('#past').on('click', onGetGames);

};

module.exports = {
  addHandlers,
};
