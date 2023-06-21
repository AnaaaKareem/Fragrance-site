// Define a function that is called when the user submits their email address to subscribe to a newsletter
function subscribe() {
    // Get the email input element, heading element, text element, and error element from the DOM
    let emailInput = document.getElementById("subscribe-email");
    let heading = document.getElementById("subscribe-heading");
    let text = document.getElementById("subscribe-text");
    let error = document.getElementById("subscribe-error");

    // Get the value of the email input and trim any whitespace from the beginning and end
    let email = emailInput.value.trim();
    // Define a regular expression pattern that matches valid email addresses
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // If the email address is not empty
    if (email !== "") {
        // If the email address matches the valid email address pattern
        if (emailPattern.test(email)) {
            // Update the heading and text elements to thank the user for subscribing
            heading.textContent = "Thank you for subscribing to our newsletter";
            text.textContent = "";
            error.textContent = "";
            // If the email address does not match the valid email address pattern
        } else {
            // Update the error element to ask the user to enter a valid email address
            error.textContent = "Please enter a valid email address";
        }
        // If the email address is empty
    } else {
        // Clear the error element
        error.textContent = "";
    }
}