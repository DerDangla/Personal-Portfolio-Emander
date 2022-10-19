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

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var passport = require("passport");

// connect to our Contact Model
//let Contact = require("../models/contact");

let contactController = require("../controllers/contact");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Contact List page - READ Operation */
router.get("/", contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", requireAuth, contactController.addpage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", requireAuth, contactController.addprocesspage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/edit/:id", requireAuth, contactController.displayeditpage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/edit/:id", requireAuth, contactController.processingeditpage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", requireAuth, contactController.deletepage);

module.exports = router;
