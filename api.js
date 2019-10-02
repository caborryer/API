const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

// Db and other configurations
require("./config/config");
require('./models/db')
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }))

//Routes
app.use(require('./routes/index'));




app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)

})