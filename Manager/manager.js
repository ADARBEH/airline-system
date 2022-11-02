'use strict';

const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const io = require("socket.io-client")
const host = process.env.HOST ;

const socket = io.connect(host);


setInterval(() => {
    let Flight = {
        event: 'new-flight',
        time: new Date,
        airLine: 'Royal Jordan',
        flightID: uuidv4(),
        pilot: faker.name.fullName(),
        destination: faker.address.country(),
    }
    console.log(`Manager: new flight with ID ‘${Flight.flightID}’ have been scheduled`)

    socket.emit('new-flight', Flight);    
},10000)

socket.on("arrived", (payload) => {
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.pilot}`)
})





