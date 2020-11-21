const express = require('express');
const bodyParser = require('body-parser');
​
const reviewRoutes = require('./review/review.routes');
​
const app = express();
​
// configure bodyParser library
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// standard web server response headers configuration
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});
​
app.use("/api/review", reviewRoutes);
​
// Custom error handler
app.use(function(err, req, res, next) {
    // Any request that has not already been handled or has thrown an unhandled error will get here
    console.log(err);
    res.status(500).json({ message: err.message });
});

module.exports = app;
