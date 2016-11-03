'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js');

// styles
require('./assets/styles/index.scss');

// attach jQuery
require('expose?$!jquery');
require('expose?jQuery!jquery');

// attach getFormFields

require('expose?getFormFields!./lib/get-form-fields.js');

//attach game logic
require('./assets/scripts/auth/game.js');

//attach login and game api
//$(()=>{
//  authEvents.addHandlers();
//  gameAPIEvents.addGameAPIHandlers();
//});
