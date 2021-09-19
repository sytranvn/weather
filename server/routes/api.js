var express = require('express');
var request = require('request')
var router = express.Router();

/* Pass through all request to metaweather */
router.get('/*', function(req, res, next) {
  console.log(req.path)
  request({
    uri: `https://www.metaweather.com/api/${req.path}`,
    qs: req.query
  }).pipe(res);
});

module.exports = router;
