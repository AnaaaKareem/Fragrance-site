// Get all the learn more buttons
const learnMoreButtons = document.querySelectorAll(".learn-more");

// Add a click event listener to each learn more button
learnMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the description and hide button for this perfume
        const description = button.parentNode.querySelector(".description");
        const hideButton = button.parentNode.querySelector(".hide-description");

        // Show the description and hide button, and hide the learn more button
        description.classList.remove("d-none");
        button.classList.add("d-none");

        // Typewriter effect for the description
        const text = description.innerHTML;
        description.innerHTML = "";
        let i = 0;
        const typingInterval = setInterval(() => {
            description.innerHTML += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typingInterval);
                hideButton.classList.remove("d-none");
                // Store the typed text in a data attribute for future use
                description.setAttribute("data-typed-text", text);
            }
        }, 40);
    });
});

// Get all the hide buttons
const hideButtons = document.querySelectorAll(".hide-description");

// Add a click event listener to each hide button
hideButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the description and learn more button for this perfume
        const description = button.parentNode.querySelector(".description");
        const learnMoreButton = button.parentNode.querySelector(".learn-more");

        // Untype the text
        const typedText = description.getAttribute("data-typed-text");
        description.innerHTML = "";
        let i = typedText.length - 1;
        const untypingInterval = setInterval(() => {
            description.innerHTML = typedText.substring(0, i);
            i--;
            if (i < 0) {
                clearInterval(untypingInterval);
                // Hide the description and hide button, and show the learn more button
                description.classList.add("d-none");
                button.classList.add("d-none");
                learnMoreButton.classList.remove("d-none");
            }
        }, 0);
    });
});

// Get all the dropdown menus
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// Loop through each dropdown menu and add a click event listener to its items
dropdownMenus.forEach((menu) => {
    menu.addEventListener('click', (event) => {
        event.preventDefault();

        // Get the clicked item's data attributes
        const currency = event.target.getAttribute('data-currency');
        const price = event.target.getAttribute('data-price');
        const symbol = event.target.getAttribute('data-symbol');

        // Get the price and currency symbol elements for this menu
        const priceElement = menu.closest('.col-md-6').querySelector('#price-' + menu.getAttribute('aria-labelledby').slice(-1));
        const currencyLogoElement = menu.closest('.col-md-6').querySelector('#currency-logo-' + menu.getAttribute('aria-labelledby').slice(-1));

        // Update the price and currency symbol elements with the new data
        priceElement.textContent = price;
        currencyLogoElement.textContent = symbol;
    });
});

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