const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    password: String
});

userSchema.method('transform', () => {
    let obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;
});

userSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
    virtuals: true
});


const User = mongoose.model('User', userSchema,);

module.exports = User;