var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var dummyController = require('./controllers/dummyController');


var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

dummyController(app);

app.listen(port);

console.log("Amil Dummy running in PORT " + port);