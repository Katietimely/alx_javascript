// creating a  constant for each id in the html page for esy refrence
const errorEl = document.getElementById('error');
const passwordFormEl = document.getElementById('passwordForm');
const passwordEl = document.getElementById('password');

// defining a new function validatePassword with an agrument password
function validatePassword(password) {
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseReg = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialcharRegex = /[!@#$%^&*]/;

    // testing the validation password
    const isLengthValid = lengthRegex.test(password);
    const isUppercaseValid = uppercaseRegex.test(password);
    const isLowercaseValid = lowercaseReg.test(password);
    const isNumDigitValid = digitRegex.test(password);
    const isSpecialCharValid = specialcharRegex.test(password);

    // conditions regarding the password
    if (isLengthValid && isNumDigitValid && isSpecialCharValid && isLowercaseValid && isUppercaseValid) {
        return true;
    } else {
        return false;
    }
}

// removes all defaults on the form and it can't submit
passwordEl.addEventListener('submit', function (e) {
    e.preventDefault();
});

const password = passwordEl.value;

if (validatePassword(password)) {
    errorEl.textContent = "";
    passwordFormEl.submit();
}else {
    errorEl.textContent = "password does not meet the criteria.";
}




