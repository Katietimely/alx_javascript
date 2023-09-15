// creating a function with one argument
function divideBy(firstNumber) {
    return function(secondNumber){
        return (secondNumber / firstNumber);
    };
}
// creating a function with one argument but nested with a retturn fuction of another number
function addBy(firstNumber) {
    return function(secondNumber) {
        return (firstNumber + secondNumber);
    };
}
// declaring a variable by callback using global functions
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);