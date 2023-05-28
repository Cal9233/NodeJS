const dotenv = require('dotenv');
const express = require('express');
const errorHandler = require('./middleware/error');
const logger = require('./middleware/logger');
const bootcamp = require('./routes/bootcampRoute');

//load env variables
dotenv.config({path: './config/config.env'});

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(logger);

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.port || 5000;

app.listen(
    PORT,
    console.log(`Listening on port: ${PORT}`)
);