const express = require('express');
const router = express.Router();
const app = express();
const Events = require('../models/Events');

router.get('/', function(req, res) {
    Events.find(function (err, events) {
        if (err) return next(err);
        res.json(events);
    });
});

// get data by id
router.get('/:id', function(req, res, next) {
    Events.findById(req.params.id, function (err, events) {
        if (err) return next(err);
        res.json(events);
    });
});

// post data
router.post('/', function(req, res, next) {
    Events.create(req.body, function (err, events) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(events);
    });
});

// put data
router.put('/:id', function(req, res, next) {
    Events.findByIdAndUpdate(req.params.id, req.body, function (err, events) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(events);
    });
});
  
// delete data by id
router.delete('/:id', function(req, res, next) {
    Events.findByIdAndRemove(req.params.id, req.body, function (err, events) {
        if (err) return next(err);
        res.json(events);
    });
});

module.exports = router;