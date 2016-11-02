'use strict';

const store = require('../store');


const success = (data) => {
$('#messages').text('Domo arigato...You Must Sign In.');
  console.log(data);
};

const signInSuccess = data => {
  $('#messages').text('Domo arigato...You May Play.');
  store.user = data.user;
  success(data);
  console.log(data);
};

const failure = (error) => {
$('#messages').text('So sorry...you failed authentication.');
  console.error(error);
};



module.exports = {
  signInSuccess,
  failure,
  success,
};
