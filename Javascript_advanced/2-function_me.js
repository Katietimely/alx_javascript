#!/usr/bin/node
// create a function accessible throughout the page when called on
function welcomeMessage(fullName) {
    alert("Welcome" + fullName);
}
// calling back the function with these arguments
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");