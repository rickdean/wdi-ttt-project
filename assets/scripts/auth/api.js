'use strict';

const config = require('../config');
const store = require('../store');
const game = require('./game');
const app = require('../app');

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



//Game API//



const gameReset = () => {
  game.currentCellId = null;
  game.currentGame = null;
  game.xTurn = true;
  game.currentGameMoves = 0;
};

const createGame = () => {
  gameReset();
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const takeTurn = (id) => {
  game.currentCellId = id;
  let turn = game.xTurn ? 'x' : 'o';
  return $.ajax({
    url: app.host + '/games/' + game.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      game: {
        cell: {
          index: id,
          value: turn,
        },
      },
    },
  });
};

const endGame = () => {
  return $.ajax({
    url: app.host + '/games/' + game.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      game: {
        over: true,
      },
    },
  });
};

const getFinishedGames = () => {
  let request = $.ajax({
    url: app.host + '/games/?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  return request;
};

module.exports = {
  createGame,
  takeTurn,
  endGame,
  getFinishedGames,
  signUp,
  signIn,
  changePassword,
  signOut
};
