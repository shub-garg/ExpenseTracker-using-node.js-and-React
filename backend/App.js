const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const cookieParser = require('cookie-parser');
const app = express()
require('dotenv').config()

const PORT = process.env.PORT;



app.use(cors({
    origin: 'http://localhost:3000',  // Allow all origins
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
}));

app.use(express.json())

app.use(cookieParser());


readdirSync('./routes').map((route) => app.use('', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(PORT);
    })
}

server()