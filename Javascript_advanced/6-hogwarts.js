#!/usr/bin/node
// creating a module and passing out two variables
const studentHogwarts = (function() {
    let privateScore = 0;
    let name = null;

    // defiing a function with an argument 
    // this function has access to the module
    function changeScoreBy(points) {
        privateScore += points;
    };

    // returning a function that has access to the module being a public method
    return {
        setName: function(newName) {
            name = newName;
        },
        rewardStudent: function() {
            changeScoreBy(1);
        },
        penalizeStudent: function() {
            changeScoreBy(-1);
        },
        getScore: function() {
            return `${name}: ${privateScore}`;
        }
    };
})();

// declaring a variable with an instance object to pass out an argument
const harry = Object.create(studentHogwarts);
harry.setName('Harry');

harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// logging to the console
console.log(harry.getScore());


// declaring a constant with an instance Object to pass out an argument
const draco = Object.create(studentHogwarts);
draco.setName('Draco');


draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

//logging into the console
console.log(draco.getScore());

