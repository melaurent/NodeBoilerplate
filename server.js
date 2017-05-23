var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var mongo = require('mongodb').MongoClient
var co = require('co');
var crypto = require('crypto');
var db = null


//TOFILL
var mongo_url = ""

app.use(express.static(dirname + '/public'));

//Heroku config
if (typeof process.env.PORT == 'undefined') {
    server.listen(8830);
} else {
    server.listen(process.env.POST);
}

mongo.connect(mongo_url, function(err, mdb) {
   assert.equal(null, err);
   console.log("connected to db");
   db = mdb;
   startListening();
});
