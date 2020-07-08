const express = require('express');
const app = express();
const doteenv = require('dotenv');
const mongoose = require('mongoose');
//Import routes
const authRoute = require('./routes/auth');
const postRout = require('./routes/post');

doteenv.config();

//Connect to DB
mongoose.connect(
process.env.DB_CONNECT, 
{ useUnifiedTopology: true }, 
() => console.log('connect to db!')); 

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('./api/post', postRout);


app.listen(3000, () => console.log('Server Up and Running'));