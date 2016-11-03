'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

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

const onCreateGame = () => {
  event.preventDefault();
  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.createGameFailure);
};

const onUpdateGame = () => {
  event.preventDefault();
  api.updateGame()
    .done(ui.updateGameSuccess)
    .fail(ui.updateGameFailure);
};

const onFinishedGames = () => {
  event.preventDefault();
  api.getGames()
    .done(ui.getGameSuccess)
    .fail(ui.getGameFailure);
};


//const onEndGameSuccess = (data) => {
  //api.updateGame(data);
  //ui.endGame();
//};


const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('.sign-out-form').on('submit', onSignOut);
  $('.new-game').on('click', onCreateGame);
  $('.box').on('click', onUpdateGame);
  $('#past').on('click', onFinishedGames);

};

module.exports = {
  addHandlers,
};
