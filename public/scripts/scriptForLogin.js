const baseUrl = 'http://localhost:3000/api'; 

// Function to login user
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = new FormData(loginForm);
            const userData = {};

            // Convert FormData to an object
            formData.forEach((value, key) => {
                userData[key] = value;
            });

            console.log("Form Data:", userData); // Log the form data

            // Send form data to API using Fetch
            try {
                const response = await fetch(baseUrl + "/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                });

                if (response.ok) {

                    const data = await response.json();
                    const token = data.token;
                  
                
                    // Store the token in localStorage
                    localStorage.setItem('token', token);
                   

                    // Login successful, redirect or show a success message
                    alert("Login successful!");
                    window.location.href = "orders.html"; // Redirect to dashboard or wherever
                } else {
                    // Handle login error
                    alert("Login failed. Please check your credentials and try again.");
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        });
    }
});
