// Select all elements with the class "box" and assign them to the "boxes" constant
const boxes = document.querySelectorAll('.box');

// For each element in the "boxes" collection:
boxes.forEach(box => {
    // Retrieve the value of the "data-link" attribute and assign it to the "link" constant
    const link = box.getAttribute('data-link');

    // Add a click event listener to the current element
    box.addEventListener('click', () => {
        // Set the href property of the window.location object to the value of "link",
        // causing the browser to navigate to the specified URL
        window.location.href = link;
    });
});