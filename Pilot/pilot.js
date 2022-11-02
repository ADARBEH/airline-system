'use strict';

require('dotenv').config();

const io = require("socket.io-client")
const host = process.env.HOST;

const socket = io.connect(host);


socket.on("new", (payload) => {
    setTimeout(() => {
        console.log(`Pilot: flight with ID ‘${payload.flightID}’ took-off`)

        payload.event = 'take-off';
        payload.time = new Date;

        socket.emit('take-off', payload);

    }, 4000);

    setTimeout(() => {
        console.log(`Pilot: flight with ID ‘${payload.flightID}’ has arrived`)
        
        payload.event = 'arrived';
        payload.time = new Date;

        socket.emit('arrived', payload);
    
    }, 7000);
})






