// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../Middlewares/authMiddleware');

// Define routes for user registration, login, and order management here

// Redirect to registration page when accessing root URL
router.get('/', (req, res) => {
    res.redirect('/index.html');
});

router.get('/register', (req, res) => {
    res.redirect('/registration.html');
});
router.get('/login', (req, res) => {
    res.redirect('/login.html');
});


// User Registration
router.post('/register', userController.registerUser);

// User Login
router.post('/login', userController.loginUser);

// Protected route to add an order (requires authentication)
router.post('/add-order', authMiddleware, orderController.addOrder);

// Protected route to get order details for a user (requires authentication)
router.get('/get-all-order', authMiddleware, orderController.getOrderDetails );

module.exports = router;


