'use strict';

const config = require('../config');
const store = require('../store');
const game = require('./game');


const signUp = (data) =>
    $.ajax({
      url: config.host + '/sign-up',
      method: 'POST',
      data,
});

const signIn = (data) =>
    $.ajax({
      url: config.host + '/sign-in',
      method: 'POST',
      data,
});

const changePassword = (data) =>
    $.ajax({
      url: config.host + '/change-password/' + store.user.id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
    },
});

const signOut = () =>
    $.ajax({
      url: config.host + '/sign-out/' + store.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
});

const createGame = () => {
  return $.ajax({
    url: config.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
};

const endGame = () => {
  return $.ajax({
    url: config.host + '/games/' + game.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + config.user.token,
    },
    data: {
      game: {
        over: true,
      },
    },
  });
};

module.exports = {

  signUp,
  signIn,
  changePassword,
  signOut,
  createGame,
  endGame,
};
