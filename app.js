//require models 
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const {MongoClient} = require('mongodb');

//create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
let url = 'mongodb://localhost:27017';
app.set('view engine', 'ejs');

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//set up routes
app.get('/', (req, res)=>{
    res.render('index');
});

//start server
app.listen(port, host, () => {
    console.log('Server started on port', port);
});
