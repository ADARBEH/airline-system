'use strict';

require('dotenv').config();

const io = require("socket.io")(process.env.PORT); 


io.on('connection', (socket) => {


    socket.on("new-flight", (payload) => {
        console.log(payload)

        io.emit("new", payload)

    })

    socket.on("take-off", (payload) => {
        console.log(payload)
    }
    )

    socket.on("arrived", (payload) => {
        console.log(payload)
        io.emit("arrived", payload)
    }
    )

})
