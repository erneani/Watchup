var mongoose = require('mongoose');
var db;

module.exports = () => {
  if(!db){
    db = mongoose.connect("mongodb://localhost/awesome_watchup");
  }
}