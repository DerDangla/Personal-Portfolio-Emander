/*
'---------------------------------------------------------------'
'   Filename: routes.contact.js                                 '
'   Created by: Emander D. Dangla                               '
'   Student ID: 301245113                                       '
'   Date Created: 29/09/2022                                    '
'   Description: Router for contact page, mainly for the form.  '
'---------------------------------------------------------------'
'   Modification History                                        '
'---------------------------------------------------------------'
'   Date            Developer           Modification            '
'   29/09/2022      Emander Dangla      Initial Creation        '
'---------------------------------------------------------------'*/

var express = require('express');
var router = express.Router();

/* GET contact request and render contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

/* POST form input to contact_details variable and then render to home. */
router.post('/', (req, res) => {
    var contact_details = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        contact: req.body.contact,
        email: req.body.email,
        message: req.body.message,
        filename: req.body.filename
    }
    console.log(contact_details);
    res.render('index', { title: 'Home' });
});

module.exports = router;
