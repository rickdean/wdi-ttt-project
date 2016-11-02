'use strict';

const store = require('../store');

const hideAndClear = (modal) => {
  setTimeout(function() {
    $(modal).modal('hide'); }, 500);
    $(modal).on('hidden.bs.modal', function () {
      $(this).find("input,textarea,select").val('').end();
      $('.modal-success').text('');
    });
};

const success = (data) => {
$('#messages').text('Domo arigato...You Must Sign In.');
  console.log(data);
  hideAndClear('#signUp');
  hideAndClear('#changePass');
};

const signOutSuccess = (data) => {
$('#messages').text('Be well and walk long...');
  console.log(data);
  hideAndClear('#signOut');
};

const signInSuccess = data => {
  $('#messages').text('Domo arigato...You May Play.');
  store.user = data.user;
  success(data);
  console.log(data);
  hideAndClear('#signIn');
};

const failure = (error) => {
$('#messages').text('So sorry...you failed authentication.');
  console.error(error);
};




module.exports = {
  signInSuccess,
  signOutSuccess,
  failure,
  success,
};
