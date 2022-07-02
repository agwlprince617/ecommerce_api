const express = require('express');
const Customer = require('../model/customer');
const Purchase=require('../model/purchase')
const Shipping=require('../model/shipping')
const router = express.Router()
const bodyParser = require('body-parser').json();


//Adding customer details using post route
router.post('/customer', bodyParser,async (req, res) => {
    const newCustomer = new Customer({
        cname: req.body.cname,
        email: req.body.email,
        number: req.body.number,
        city: req.body.city
    })
    // console.log(newCustomer)
    try {
        const customerdataToSave = await newCustomer.save();
        res.status(200).json(customerdataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Adding purchase details using post route for a particular user
router.post('/purchase', bodyParser,async (req, res) => {
    const newPurchase = new Purchase({
        pname: req.body.pname,
        qty: req.body.qty,
        price: req.body.price,
        mrp: req.body.mrp,
        cid: req.body.cid
    })
    // console.log(newPurchase)
    try {
        const purchasedataToSave = await newPurchase.save();
        res.status(200).json(purchasedataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Post the Shipment details for  a particular user
router.post('/shipment', bodyParser,async (req, res) => {
    const newShipment = new Shipping({
        address: req.body.address,
        city: req.body.city,
        pincode: req.body.pincode,
        cid: req.body.cid,
        pid: req.body.pid
    })
    // console.log(newPurchase)
    try {
        const shippingdataToSave = await newShipment.save();
        res.status(200).json(shippingdataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;