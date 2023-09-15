#!/usr/bin/node
// define a global function with two arguments firstname and lastname
// declaring a nested function displayfullname
function welcome(firstname, lastname) {
    // turning a firstname and lastname to a string
     let fullName = firstname + "" + lastname;
     function displayFullName() {
        alert("Welcome " + fullName + "!"); 
     };
     // calling back a local function
     displayFullName();
}