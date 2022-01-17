const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const adminSchema = new Schema({
    name: String,
    password: String
});

adminSchema.method('transform', () => {
    let obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;
});

adminSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
adminSchema.set('toJSON', {
    virtuals: true
});


const Admin = mongoose.model('Admin', adminSchema, 'admin');

module.exports = Admin;