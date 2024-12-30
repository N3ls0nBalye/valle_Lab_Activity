console.log("JavaScript here!")
const modeButton = document.getElementById('modeButton');
const body = document.body;

modeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Thank you for contacting us! Your message has been sent.');
    // You can add functionality to send form data to the server here

    // Reset the form after submission
    document.getElementById('contact-form').reset();
});