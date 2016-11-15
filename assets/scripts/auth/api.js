'use strict';


const config = require('../config.js');
const store = require('../store.js');
const app = require('./app.js');


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


const updateGame = (data) =>
 $.ajax({
  url: config.host + '/games/' + app.game.id,
  method: 'PATCH',
  data,
  headers: {
    Authorization: 'Token token=' + store.user.token,
  },
});
//const updateGame = () =>
// $.ajax({
//  //url: config.host + '/games/' + store.game.id,
//  url: config.host + '/games/' + app.game.id,
//  method: 'PATCH',
//  headers: {
//      Authorization: 'Token token=' + store.user.token,
//    },
//    data: {
//      game: {
//        cell: {
//          index:'',
//          value: '',
//        over: false,
//        },
//      },
//    },
//  });

const getGames = () => {
  let request = $.ajax({
    url: config.host + '/games/?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });
  return request;
};

module.exports = {

  signUp,
  signIn,
  changePassword,
  signOut,
  createGame,
  updateGame,
  getGames,
};
