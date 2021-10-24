let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact');

//helper function for guarding
function requireAuth(req, res, next){

    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

/* GET route for the Contact List* - Read Operation */
router.get('/', contactController.displayContactList);


/* GET Route for displaying the Add page  - Create Operation*/
router.get('/add', requireAuth, contactController.displayAddPage);

/* Post Route for the Add page - Create Operation*/
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying the Edit page  - Update Operation*/

router.get('/edit/:id', requireAuth, contactController.displayEditPage)
/* Post Route for the Edit page - Update Operation*/

router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET request to perform Deletion - DELETE Operation*/

router.get('/delete/:id', requireAuth, contactController.processDelete);

//exports properties of every router in one package
module.exports = router;