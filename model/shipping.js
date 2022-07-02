const mongoose = require('mongoose');
// const Customer=require('./customer');
const Schema=mongoose.Schema;
const ShippingSchema = new Schema({
    address: String,
    city: String,
    pincode: Number,
    cid: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Customer'
        }
    ],
    pid: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Purchase'
        }
    ]
})

module.exports = mongoose.model('Shipping', ShippingSchema);