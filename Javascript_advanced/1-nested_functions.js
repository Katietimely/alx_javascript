#!/usr/bin/node
// declare a global variable 
let globalVariable = "Welcome";
// create an outer function
function outer() {
    alert(globalVariable);
    let course = "Holberton";
    // creating a nesting functon and also concatenating into a string
    function inner() {
        alert(globalVariable + "" + course);
        let exclamation = "!";
        // creating a nested function within another function
        function inception() {
            alert(globalVariable + "" + course + exclamation);
        }
        //  interpreting the cxallback function outside the inti function "inception"
        inception();
    }
    // interpreting the callback function outside the function "inner"
   inner();
}
// interpreting the callback function "ouuter"
outer();