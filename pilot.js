'use strict';

const evente = require('./events');
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

evente.on('took_off', took_Off);
evente.on('arrived', arrived);

function took_Off() {
    let Flight = {
        evente: 'took_off',
        time: new Date,
        Details: {
            airLine: 'Royal Jordan',
            flightID: uuidv4(),
            pilot: faker.name.fullName(),
            destination: faker.address.country(),
        }
    }
    console.log('Flight', Flight);
}



function arrived() {
    let Flight = {
        event: 'arrived',
        time: new Date,
        Details: {
            airLine: 'Royal Jordan',
            flightID: uuidv4(),
            pilot: faker.name.fullName(),
            destination: faker.address.country(),
        }
    }
    console.log('Flight', Flight);
    console.log(`Manager: we are greatly thankful for the amazing flight , ${Flight.Details.pilot}`);
}

module.exports = evente;