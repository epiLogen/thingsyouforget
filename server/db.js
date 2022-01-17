const mongoose = require('mongoose');
require('dotenv').config();

const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT
} = process.env;

const dbURL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

mongoose.connect(dbURL, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log('Database connected.');
});

db.on('error', (err) => {
    console.error('Connection error:', err);
});

module.exports = db;