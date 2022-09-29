/*
'---------------------------------------------------------------'
'   Filename: routes.index.js                                   '
'   Created by: Emander D. Dangla                               '
'   Student ID: 301245113                                       '
'   Date Created: 29/09/2022                                    '
'   Description: Router for the index page.                     '
'---------------------------------------------------------------'
'   Modification History                                        '
'---------------------------------------------------------------'
'   Date            Developer           Modification            '
'   29/09/2022      Emander Dangla      Initial Creation        '
'---------------------------------------------------------------'*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;
