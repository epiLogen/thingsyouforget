const mongoose = require('mongoose');
require('dotenv').config();

const {
    MONGO_HOST,
    MONGO_DB,
    MONGO_PORT,
    MONGO_ADMIN,
    MONGO_ADMIN_PASS
} = process.env;

const URL = `mongodb+srv://${MONGO_ADMIN}:${MONGO_ADMIN_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`;
mongoose.connect(URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log('Database connected.');
});

db.on('error', (err) => {
    console.error('Connection error:', err);
});

module.exports = db;