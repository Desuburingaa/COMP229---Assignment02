let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact Model
let Contact = require('../models/contact');

/* GET route for the Contact List* - Read Operation */
router.get('/', (req, res, next) => {
    Contact.find((err, ContactList) => {
        if(err){
            return console.error(err);
        }else{
            //console.log(ContactList);
            res.render('contacts', {title: 'Contacts', ContactList: ContactList})
        }
    });
});

/* GET Route for displaying the Add page  - Create Operation*/

/* Post Route for the Add page - Create Operation*/

/* GET Route for displaying the Edit page  - Update Operation*/

/* Post Route for the Add page - Update Operation*/

/* GET request to perform Deletion  - DELETE Operation*/

//exports properties of every router in one package
module.exports = router;