const mongoose = require('mongoose');
// const Customer=require('./customer');
const Schema=mongoose.Schema;
const PurchaseSchema = new Schema({
    pname: String,
    qty: Number,
    price: Number,
    mrp: Number,
    cid: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Customer'
        }
    ]
})

module.exports = mongoose.model('Purchase', PurchaseSchema);