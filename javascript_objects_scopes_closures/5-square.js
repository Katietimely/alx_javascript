#!/usr/bin/node
// importing a class of rectangle
const { Rectangle } = require("./4-rectangle");

// inheriting a class of rectangle to become a class of square with a property of size
class Square extends Rectangle {
    constructor(size) {
        super (size, size);
        this.size = size;
    }

}

module.exports.Square = Square;