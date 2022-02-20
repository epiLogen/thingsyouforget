const express = require('express');
const Quote = require('../models/Quote');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('quotes requested');
    try {
        const quotes = await Quote.find();
        res.header('Content-Range', 'posts 0-10/100');
        res.header('Access-Control-Expose-Headers', 'Content-Range');
        res.status(200).send(quotes);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const quote = new Quote({
            text: req.body.text,
            book: req.body.book,
            author: req.body.author,
            voice: req.body.voice
        });

        await quote.save();
        res.status(200).send(quote);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const quote = await Quote.findOne({_id: req.params.id});
        res.status(200).send(quote);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const quote = await Quote.findOne({_id: req.params.id});

        quote.text = req.body.text;
        quote.book = req.body.book;
        quote.author = req.body.author;
        quote.voice = req.body.voice;

        await quote.save();
        res.status(200).send(quote);
    } catch (error) {
        res.status(404).send(error);
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        await Quote.deleteOne({_id: req.params.id });
        res.status(204).send();
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;