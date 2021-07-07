var express = require('express');
var app = express.createServer();

app.get('/', function(req, res) {
    var input = req.query['input'];

    if(input) {
        res.redirect('/destination?=' + input);
    } else {
        res.send('please provide input parameter');
    }
});

app.get('/target', function(req, res) {
    var input = req.query['input'];

    if(input) {
        res.send(input);
    } else {
        res.send('input parameter is empty');
    }
});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
