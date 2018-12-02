'use strict';

require('dotenv').config();
require('babel-register');

require('./app.js').start(process.env.PORT);
