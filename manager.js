'use strict';

const evente = require('./events');
const pilot = require('./pilot');
const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

evente.on('new_flight', newFilght);

function newFilght() {
    let Flight = {
        event: 'new-flight',
        time: new Date,
        airLine: 'Royal Jordan',
        flightID: uuidv4(),
        pilot: faker.name.fullName(),
        destination: faker.address.country(),
    }

   
    console.log(`Manager : new flight with ID ${Flight.flightID} have been scheduled`);
    console.log('Flight', Flight);

    setTimeout(() => {
        console.log(`Pilot: flight with ID ${Flight.flightID} took-off`);
        pilot.emit('took_off')
    }, 4000);
    setTimeout(() => {
        console.log(`Pilot: flight with ID ${Flight.flightID} arrived`);
        pilot.emit('arrived');
    },7000)

}

module.exports = evente;