const express = require('express');
const cors = require('cors');
const path = require('path');
//import routes
const donorRoute = require('./src/routes/donorRoute');


//To be changed in production
const port = 5000;

//Load environment variables
require('dotenv').config()

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/donor', donorRoute);

// start the server
app.listen(port, () => {
    console.log('listening on port', port);
})

module.exports = app;