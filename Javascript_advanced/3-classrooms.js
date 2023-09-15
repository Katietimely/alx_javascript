#!/usr/bin/node
// creating a function nesting another function into another function
function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
        return seat;
    }
}
// declaring a variable array
let students = [];
// intirating using the for loop
for (let i = 0; i < numbersOfStudents; i++) {
   let seatNumber = i + 1;
   let SeatGetter = studentSeat(seatNumber);
   students.push(SeatGetter());
}
//  returning the value of students
return students;
}
// declaring a variable but calling back using the callback function and passing out a number to the argument
let classRoom = createClassRoom(10);
