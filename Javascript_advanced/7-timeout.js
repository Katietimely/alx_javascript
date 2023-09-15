#!/usr/bin/node
// log-in to the console
console.log("Start of the execution queue");

// setting a function with a module available in another function
setTimeout(function() {
    console.log("Final code block to be executed using setTimeout (with delay of 0)");
}, 0);

// intirating using a for loop
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// logging some texts into the console
console.log("End of the loop printing");                                                                                                                                                                                                                            ")

