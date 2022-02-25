// common js syntax to import modules into node js
const express = require('express');
//const connectDB = require('./config/db');

const app = express();

// connect the database
//connectDB();

// Init middleware for accepting body data
//app.use(express.json({extended: false}));

// add a get request

// app.get('/', (request, response) => response.send('Hello World'));
//app.get('/', (request, response) => response.json({msg: "Welcome to the contact keeper"}));


// Define routes
//app.use('/api/users', require('./routes/users'));
//app.use('/api/auth', require('./routes/auth'));
//app.use('/api/contacts', require('./routes/contacts'));
app.use(express.static('client/build'));


//make way for some custom css, js and images
//app.use('/css', express.static(__dirname + '/public/css'));
//app.use('/js', express.static(__dirname + '/public/js'));
//app.use('/images', express.static(__dirname + '/public/images'));

// listening port
const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT);//, ()=> console.log(`Server started on port ${PORT}`));
