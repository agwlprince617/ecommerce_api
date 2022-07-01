require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

//Connecting to the database
database.once('connected', () => {
    console.log('Database Connected');
})

//Setting up the express Server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true,}));    
app.use('/api', routes)

//Listening to the server on port 3000
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})