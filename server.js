const http = require('http');
const express = require('express');
const errorHandler = require('./middleware/error');

const app = express();

app.use(express.json());
app.use(errorHandler);

const PORT = process.env.port || 5000;

const server = app.listen(
    PORT,
    console.log(`Listening on port: ${PORT}`)
);