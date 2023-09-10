#!/usr/bin /node

const newSquare = require('./5-square');

class Square extends newSquare{
    constructor(size) {
        super(size, size);
    }
}

function print() {
    for (let i = 0;i < this.height;i++) {
        let row ="";
    for (let j = 0;j < this.width;j++) {
        row += "X";
    }
    console.log(row);
    }
}
    
function charPrint(c) {
   if (c === undefined) {
      c = "X";
        }
        for (let i = 0;i < this.height;i++) {
            let row ="";
        for (let j = 0;j < this.width;j++) {
            row += `${c}`;
        }
        console.log(row);
        }
    
}

module.exports = Square;
