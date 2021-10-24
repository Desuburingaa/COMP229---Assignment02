let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactMePage);

/* GET Route for displaying the Login Page */
router.get('/login', indexController.displayLoginPage)

/* Post route for processing the Login Page*/
router.post('/login', indexController.processLoginPage)

/* GET Route for displaying the Register Page */
router.get('/register', indexController.displayRegisterPage)

/* Post route for processing the Register Page*/
router.post('/register', indexController.processRegisterPage)

/* Perform userLogout*/
router.get('/logout', indexController.performLogout)


module.exports = router;
