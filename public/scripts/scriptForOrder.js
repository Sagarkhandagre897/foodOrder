const baseUrl = 'https://foodorder-hd9r.onrender.com/api'; 

// Function to add a new order
document.addEventListener("DOMContentLoaded", function () {
    const addOrderForm = document.querySelector(".add-order-form");

    if (addOrderForm) {
        addOrderForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            // Check if user is authenticated
            if (!localStorage.getItem('token')) {
                // Redirect to login page
                alert("You Are Not Authorized , Login First !");
                window.location.href = 'api/login'; // You might need to adjust the URL here
                return;
            }

            const formData = new FormData(addOrderForm);
            const orderData = {};

            // Convert FormData to an object
            formData.forEach((value, key) => {
                orderData[key] = value;
            });

            console.log("Form Data:", orderData); // Log the form data

            // Send form data to API using Fetch
            try {
                const response = await fetch(baseUrl + "/add-order", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(orderData),
                });

                if (response.ok) {
                    // Order added successfully
                    alert("Order added successfully!");
                } else {
                    // Handle order submission error
                    alert("Failed to add order. Please try again.");
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        });
    }
});

