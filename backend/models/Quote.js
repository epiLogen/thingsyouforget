const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const quoteSchema = new Schema({
    text: String,
    book: String,
    author: String,
    voice: String
});

quoteSchema.method('transform', () => {
    let obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;
});

quoteSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
quoteSchema.set('toJSON', {
    virtuals: true
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;