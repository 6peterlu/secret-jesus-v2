var express = require('express');
var p = require('path');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(p.join(__dirname + '/index.html'));
});

app.get("/bundle.js", function (request, response) {
  response.sendFile(p.join(__dirname + '/dist/bundle.js'));
});

const port = process.env.PORT || 5000
app.listen(port);

console.log("listening on port " + port);
