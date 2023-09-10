#!/usr/bin/node
class Rectangle {

    constructor(w, h) {
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            this.width = 0;
            this.height = 0;
        } else {
        this.width = w;
        this.height = h;
        }
    
    }
}

// instance of the class RECTANGLE to print in the form of x
function print()  {
    for (let i = 0;i < this.height; i++) {
        let row = "";
        for (let j = 0; j < this.width; j++) {
            row += "X";
        }
        console.log(row);
    }
}

function rotate()  {
    [this.width, this.height] = [this.height, this.weight];
}

function double() ;{
    this.width *= 2;
    this.height *= 2;
}
    
module.exports = Rectangle;