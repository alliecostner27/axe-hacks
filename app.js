const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { MongoClient } = require('mongodb');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');
const todoModel = require('./models/todoModel');

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

// Connect to MongoDB and initialize the model
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        const db = client.db('todos');
        todoModel.connectDB(url);
        console.log('Connected to MongoDB');
    })
    .catch(err => console.log(err.message));

// Set up routes
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

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

// Start server
app.listen(port, host, () => {
    console.log('Server started on port', port);
});
