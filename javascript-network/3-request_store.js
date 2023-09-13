#!/usr/bin/node
// using a module request to make common requests
const req = require("request");
const fs = require("fs");

const url = process.argv[2];
const filepath = process.argv[3];

req(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        fs.writeFile(filepath, body, { encoding: 'utf-8' }, (err) => {
            if (err) throw err;
            console.log(`File saved to ${filepath}`);
        });
    } else {
        console.error(`Error fetching URL: ${error}`);
    }
});