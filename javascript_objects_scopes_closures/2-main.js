#!/usr/bin/node
const Rectangle = require('./2-rectangle');

const r1 = Rectangle(2, 3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);

const r2 = Rectangle(2, -3);
console.log(r2);
console.log(r2.width);
console.log(r2.height);

const r3 = Rectangle(2);
console.log(r3);
console.log(r3.width);
console.log(r3.height);

const r4 = Rectangle(2, 0);
console.log(r4);
console.log(r4.width);
console.log(r4.height);