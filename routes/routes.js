const express = require('express');
const Customer = require('../model/customer');
const router = express.Router()
const bodyParser = require('body-parser').json();


//Adding customer details using post route
router.post('/post', bodyParser,async (req, res) => {
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



module.exports = router;