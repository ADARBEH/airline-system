'use strict';

const manager = require('./manager');

setInterval(function () { manager.emit('new_flight') }, 10000);
