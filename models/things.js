module.exports = ()=>  {
  let mongoose = require('mongoose');
  let db = require('./../libs/connection')();

  Thing = mongoose.Schema({
    title: String,
    type: String,
    description: String,
    status: Boolean,
    date: Date
  });

  return mongoose.model('things', Thing);
}