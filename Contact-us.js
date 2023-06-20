// Select the form and all necessary form fields and elements
const form = document.querySelector('form');
const nameField = document.querySelector('#your-name');
const surnameField = document.querySelector('#your-surname');
const emailField = document.querySelector('#your-email');
const subjectField = document.querySelector('#your-subject');
const messageField = document.querySelector('#your-message');
const charCount = document.querySelector('#char-count');
const specialPattern = /^[A-Za-z' ]+$/;
const successMessage = document.querySelector('#success-message');
const counter = document.querySelector('#counter');

// Add an event listener to the form's submit button
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Initialize a flag variable to track whether the form is valid
    let isValid = true;

    // Check if the name field is empty, or contains special characters
    if (nameField.value.trim() === '') {
        nameField.classList.add('is-invalid');
        nameField.nextElementSibling.textContent = 'Please enter your name';
        isValid = false;
    } else if (!specialPattern.test(nameField.value)) {
        nameField.classList.add('is-invalid');
        nameField.nextElementSibling.textContent = 'Please enter a valid name (letters, spaces, and apostrophes only)';
        isValid = false;
    } else {
        nameField.classList.remove('is-invalid');
        nameField.nextElementSibling.textContent = '';
    }

    // Check if the surname field is empty, or contains special characters
    if (surnameField.value.trim() === '') {
        surnameField.classList.add('is-invalid');
        surnameField.nextElementSibling.textContent = 'Please enter your surname';
        isValid = false;
    } else if (!specialPattern.test(surnameField.value)) {
        surnameField.classList.add('is-invalid');
        surnameField.nextElementSibling.textContent = 'Please enter a valid surname (letters, spaces, and apostrophes only)';
        isValid = false;
    } else {
        surnameField.classList.remove('is-invalid');
        surnameField.nextElementSibling.textContent = '';
    }

    // Check if the email field is empty
    if (emailField.value.trim() === '') {
        emailField.classList.add('is-invalid');
        emailField.nextElementSibling.textContent = 'Please enter your email';
        isValid = false;
    } else {
        emailField.classList.remove('is-invalid');
        emailField.nextElementSibling.textContent = '';
    }

    // Check if the subject field is empty or too short
    if (subjectField.value.trim() === '') {
        subjectField.classList.add('is-invalid');
        subjectField.nextElementSibling.textContent = 'Please enter a subject';
        isValid = false;
    } else if (subjectField.length < 3) {
        // handle subject validation here if needed
    } else {
        subjectField.classList.remove('is-invalid');
        subjectField.nextElementSibling.textContent = '';
    }

    // Check if the message field is empty
    if (messageField.value.trim() === '') {
        messageField.classList.add('is-invalid');
        messageField.previousElementSibling.textContent = 'Please enter a message';
        isValid = false;
    } else {
        messageField.classList.remove('is-invalid');
        messageField.previousElementSibling.textContent = '';
    }

    // If the form is valid, send the email
    if (isValid) {
        sendEmail();
    } else {
        // Disable form submission if the form is invalid
        event.preventDefault();
    }
});

// Add an event listener to the message field to update character count
messageField.addEventListener('input', function () {
    var messageText = messageField.value.replace(/\s+/g, ' ').replace(/\n/g, '');
    var messageLength = messageText.length;
    charCount.innerHTML = messageLength + ' / 2000 characters';

    // Restrict the length of the message to 2000 characters
    if (messageLength > 2000) {
        messageField.setCustomValidity('Maximum 2000 characters allowed.');
    } else {
        messageField.setCustomValidity('');
    }
});

// Define a function to send the email and display a success message
function sendEmail() {
    var name = nameField.value.trim();
    var surname = surnameField.value.trim();
    var email = emailField.value.trim();
    var subject = subjectField.value.trim();
    var message = messageField.value.trim();

    // Construct a mailto: link that includes the input values
    var mailtoLink = "mailto:" + encodeURIComponent(email) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent("Name: " + name + " " + surname + "\n\n" + message);

    // Navigate to the mailto: link
    window.location.href = mailtoLink;

    // Show success message and redirect to homepage after 5 seconds
    successMessage.classList.remove('d-none');
    let count = 5;
    const intervalId = setInterval(() => {
        if (count === 0) {
            clearInterval(intervalId);
            window.location.href = 'Homepage.html'; // replace with your homepage URL
        } else {
            counter.textContent = count;
            count--;
        }
    }, 1000);
}

// Set the width of the form's submit button to 100% to make it fit the container properly
const button = document.querySelector('button');
button.style.width = '100%';