// script.js
const baseUrl = 'https://foodorder-hd9r.onrender.com/api'; 


// Function to fetch and display all orders
document.addEventListener("DOMContentLoaded", async function () {
    // Check if user is authenticated
    if (!localStorage.getItem('token')) {
        alert("You Are Not Authorized, Login First !");
        window.location.href = 'api/login';
        return;
    }

    const ordersList = document.getElementById('orders-list');

    try {
        // Fetch orders from the server
        const response = await fetch(baseUrl+'/get-all-order', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.ok) {
            const orders = await response.json();
             // Clear existing content from the table
             ordersList.innerHTML = '';
             console.log(orders);
            // Populate the table with orders
    orders.forEach(order => {
        console.log("Processing order:", order); // Log the current order being processed
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order._id}</td>
            <td>${order.subTotal}</td>
            <td>${order.phoneNumber}</td>
            <td>${new Date(order.createdAt).toLocaleString()}</td>
        `;
        ordersList.appendChild(row);
    });
        } else {
            console.log('Error fetching orders');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});


// Update the order details on the frontend
function updateOrderDetails(details) {
    const orderDetailsElem = document.getElementById('orderDetails');
    orderDetailsElem.textContent = JSON.stringify(details, null, 2);
}
