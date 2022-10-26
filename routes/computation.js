var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.floor(Math.random()*10);
    var y = Math.floor(Math.random()*10);
    var z = Math.floor(Math.random()*10);
    var k = Math.floor(Math.random()*10);
    var l = Math.floor(Math.random()*10);
    var pow = Math.log(x,y);
    var sign = Math.cosh(z);
    var tanh = Math.tanh(k);
    var trunc = Math.trunc(k);
    res.render('computation', { title: 'Lakshmi Mupparaju Computing functions',
    x: x,
    y: y,
    z: z,
    k: k,
    l: l,
    pow: pow,
    sign: sign,
    tanh: tanh,
    trunc: trunc
 });
});

module.exports = router;