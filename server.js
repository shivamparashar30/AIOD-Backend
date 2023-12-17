const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
const PORT = process.env.PORT || 5002;

const server = app.listen(PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    server.close(() => process.exit(1));
})
