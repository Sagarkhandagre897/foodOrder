// controllers/orderController.js
const Order = require('../models/order');
const User = require('../models/User');

// Implement order creation and retrieval logic here

// Add a new order
exports.addOrder = async (req, res) => {
    try {
        const {sub_total, phone_number } = req.body;
        console.log(sub_total);
        console.log(phone_number);
        const user_id = req.user._id;

        // Check if the user exists
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new order
        const newOrder = new Order({
             user: user_id,      
            subTotal: sub_total, 
            phoneNumber: phone_number 
        });

        await newOrder.save();

        res.status(201).json({ message: 'Order added successfully' });
    } catch (error) {
        console.error('Error adding order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get order details for a user
exports.getOrderDetails = async (req, res) => {
    try {
        const user_id = req.user._id;

        // Check if the user exists
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Retrieve orders for the user
        const orders = await Order.find({ user : user_id});
       
        res.json( orders );
    } catch (error) {
        console.error('Error getting order details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


