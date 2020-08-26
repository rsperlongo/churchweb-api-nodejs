const express = require('express');
const router = express.Router();
const app = express();
var server = require('http').createServer(app);
const Members = require('../models/Members');

router.get('/', function(req, res) {
    Members.find(function (err, members) {
        if (err) return next(err);
        res.json(members);
    });
});

// get data by id
router.get('/:id', function(req, res, next) {
    Members.findById(req.params.id, function (err, members) {
        if (err) return next(err);
        res.json(members);
    });
});

// post data
router.post('/', function(req, res, next) {
    Members.create(req.body, function (err, members) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(members);
    });
});

// put data
router.put('/:id', function(req, res, next) {
    Members.findByIdAndUpdate(req.params.id, req.body, function (err, members) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(members);
    });
});
  
// delete data by id
router.delete('/:id', function(req, res, next) {
    Members.findByIdAndRemove(req.params.id, req.body, function (err, members) {
        if (err) return next(err);
        res.json(members);
    });
});

module.exports = router;