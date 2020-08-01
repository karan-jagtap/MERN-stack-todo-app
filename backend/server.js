const keys = require('./config/keys');

const express = require('express');
const mongoose = require('mongoose');
const todos = require('./routes/api/TodoRoutes');


// initialize express
const app = express();
//tell express what middleware will be used for parsing data, 
//in our case body-parser defines that it is 'application/json'
// --> app.use(bodyParser.json());
//no need for body-parser now as express provides middleware
app.use(express.json());

//connecting to db using .connect() function
// @params
//1. mongoURI
//2. options
// @promise - It returns promise 
//1. then() with no params Promise<void>
//2. catch() with 1 err param Promise<reason>
mongoose
    .connect(keys.mongoURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    //this is when connection is established successfully, async
    .then(() => {
        console.log('Connection successful... ');
    })
    //error async function
    .catch(err => console.log(`Error connecting mongoDB --> ${err}`));

//using routes
app.use('/api/todos', todos);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));