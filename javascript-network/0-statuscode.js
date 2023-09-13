#!/usr/bin/node
const req = require('request');

const url = process.argv[2];

req.get(url, (error, response, body) => {
    if (!error && response.statusCode) {
        console.log(`code: ${response.statusCode}`);
    } else {
        console.error(`Error: ${error}`);
    }
});