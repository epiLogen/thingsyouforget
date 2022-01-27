const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');
const quoteRouter = require('./routes/quotes');
const adminRouter = require('./routes/admin');
const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/quotes', quoteRouter);
app.use('/login', adminRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});