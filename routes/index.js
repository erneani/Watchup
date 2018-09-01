var express = require('express');
var things = require('./../models/things')();
var router = express.Router();

/* GET home page. */
const retrieveThing = router.get('/', function(req, res, next) {
  things.find(null, (err, things) => {
    if(err) throw err;
    res.render('index', {things: things} );
  });
});

/* CRUD Methods. */
const createThing = router.post('/add', (req, res) => {
  req.body.status = false;  
  things.create(req.body, (err, thing) => {
    if(err) throw err;
    res.redirect('/');
  });
});

const updateThingStatus = router.get('/update/:id', (req, res) => {
  things.findById(req.params.id, (err, thing) => {
    if(err) throw err;
    thing.status = !thing.status;
    thing.save(() => {
      res.redirect('/');
    });
  });
});

const deleteThing = router.get('/delete/:id', (req, res) => {
  things.remove({_id:req.params.id}, (err) => {
    if(err) throw err;
    res.redirect('/');
  });
});

const retrieveUniqueThing = router.get('/:id', (req, res) => {
  things.findById(req.params.id, (err, thing) => {
    if(err) throw err;
    res.render('single-item', {things: thing})
  });
});
module.exports = router;
