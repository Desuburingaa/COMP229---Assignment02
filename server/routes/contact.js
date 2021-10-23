let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact Model
let Contact = require('../models/contact');
let contactController = require('../controllers/contact');

/* GET route for the Contact List* - Read Operation */
router.get('/', contactController.displayBookList);

/* GET Route for displaying the Add page  - Create Operation*/

router.get('/add', contactController.displayAddPage);

/* Post Route for the Add page - Create Operation*/
router.post('/add', contactController.processAddPage);

/* GET Route for displaying the Edit page  - Update Operation*/

router.get('/edit/:id', contactController.displayEditPage)
/* Post Route for the Edit page - Update Operation*/

router.post('/edit/:id', contactController.processEditPage);

/* GET request to perform Deletion - DELETE Operation*/

router.get('/delete/:id', contactController.processDelete);

//exports properties of every router in one package
module.exports = router;