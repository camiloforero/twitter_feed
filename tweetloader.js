var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

var fs = require('fs')
var tweets = JSON.parse(fs.readFileSync('tweets.json', 'utf-8'))

// Connection URL
var url = 'mongodb://localhost:27017/tweets';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  // Insert a single document
  db.collection('inserts').insertMany(tweets, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);


      db.close();
    });
  });
