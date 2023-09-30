// define a constant to all the id elements in the html web layout
const emailForm = document.getElementById('emailForm');
const emailEl = document.getElementById('email');
const error = document.getElementById('errror');


// testing the email to avoid errors
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// prevent the form from submission
emailForm.addEventListener('submit', function (e) {
    e.preventDefault();

const email = emailEl.value;

// conditions to be met on error and success
if (validateEmail(email)) {
    error.textContent = "";
    emailForm.submit();
} else {
    error.textContent = "Please enter a valid email address."
}
});