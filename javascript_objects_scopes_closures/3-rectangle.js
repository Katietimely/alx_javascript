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

print() {
    if (this.width === 0 || this.height === 0) {
        console.log("This is an empty object");
    } else {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }
}

    
module.exports = Rectangle;