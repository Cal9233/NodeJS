const dotenv = require('dotenv');
const express = require('express');
const errorHandler = require('./middleware/error');

//load env variables
dotenv.config({path: './config/config.env'});

const app = express();

app.use(express.json());
app.use(errorHandler);

const PORT = process.env.port || 5000;

app.listen(
    PORT,
    console.log(`Listening on port: ${PORT}`)
);