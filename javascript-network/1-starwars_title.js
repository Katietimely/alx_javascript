#!/usr/bin/node
const req = requre('request');

const id = process.argv[2];

const url = 'http://swapi-api.alx-tools.com/api/films/${id}';

req.get(url, (error, response, body) => {
    if (!error && response.statusCode) {
        console.log(`code: ${response.statusCode}`);
    } else {
        console.error(`Error: ${error}`);
    }
});

