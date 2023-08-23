// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subTotal: Number,
    phoneNumber: String,
    createdAt: {
        type: Date,
        default: Date.now // Set the default value to the current date and time
    }
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
