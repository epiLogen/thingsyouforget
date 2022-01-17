const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const quoteRouter = require('./routes/quotes');
const adminRouter = require('./routes/admin');

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/../client/build'));
app.use(express.static(__dirname + '/../admin/build'));
app.use('/quotes', quoteRouter);
app.use('/admin', adminRouter);

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});