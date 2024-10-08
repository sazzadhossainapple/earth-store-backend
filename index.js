const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require('./app');

// database connection
const connectDB = async () => {
    try {
        await mongoose
            .connect(process.env.DATABASE_LOCAL)
            .then(() => {
                console.log(`Database connection is successful`.red.bold);
            })
            .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
};

// server run port
const port = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App is running on port ${port}`.yellow.bold);
    });
});

module.exports = { connectDB };
