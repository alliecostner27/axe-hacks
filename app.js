const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { MongoClient } = require('mongodb');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');
const { getCollection } = require('./models/todoModel');

// Create app
const app = express();

// Configure app
let port = 3000;
let host = 'localhost';
let url = 'mongodb://localhost:27017';
app.set('view engine', 'ejs');

// Mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

// Handle favicon.ico requests
app.get('/favicon.ico', (req, res) => res.status(204));

// Connect to MongoDB
MongoClient.connect(url)
    .then(client => {
        const db = client.db('todos');
        getCollection(db);

        // Start the server
        app.listen(port, host, () => {
            console.log('Server is running on port', port);
        });
    })
    .catch(err => console.log(err.message));

// Set up routes
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/todos', todoRoutes);

app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    if (!err.status) {
        err.status = 500;
        err.message = "Internal Server Error";
    }

    res.status(err.status);
    res.render('error', { error: err });
});
