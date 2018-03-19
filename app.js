var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/weather-app/dist'));

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve("/weather-app/dist/index.html"));
})

app.listen(8000, () => {
    console.log("Server listening on port 8000")
});
