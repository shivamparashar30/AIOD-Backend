const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const user = require('./routes/auth');
const foodDonation = require('./routes/foodDonation');
const MoneyDonation = require('./routes/MoneyDonation');
const ClothesDonation = require('./routes/ClothesDonation');
const BooksDonation = require('./routes/BooksDonation')

const errorHandler = require('./middleware/error');

const app = express();

// to access axios 


app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); ``
}
//mount routers
app.use('/api/v1/auth', user);
app.use('/api/v1/food', foodDonation);
app.use('/api/v1/money', MoneyDonation);
app.use('/api/v1/clothes', ClothesDonation);
app.use('/api/v1/books', BooksDonation);




app.use(errorHandler);

const PORT = process.env.PORT || 5002;

const server = app.listen(PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    server.close(() => process.exit(1));
})
