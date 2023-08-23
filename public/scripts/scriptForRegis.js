// script.js
const baseUrl = 'https://foodorder-hd9r.onrender.com/api'; 


document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector(".reg-form");

    if (registrationForm) {
        registrationForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = new FormData(registrationForm);
            const userData = {};

            // Convert FormData to an object
            formData.forEach((value, key) => {
                userData[key] = value;
            });

            console.log("Form Data:", userData); // Add this line to log the form data


            // Send form data to API using Fetch
            try {
                const response = await fetch(baseUrl+"/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                });

                if (response.ok) {
                    // Registration successful, redirect or show a success message
                    alert("Registration successful!");
                    window.location.href = "api/login"; // Redirect to login page
                } else {
                    // Handle registration error
                    alert("Registration failed. Please try again.");
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        });
    }
});
