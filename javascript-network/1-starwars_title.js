#!/usr/bin/node
// using a module request to make common requests
const req = require('request');

const id = process.argv[2];

const url = `http://swapi-api.alx-tools.com/api/films/${id}`;
// passing the json string into a object for easy access
// becomes easy to request for the header
req(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const info = JSON.parse(body);
        const header = info.title;
        console.log(header);
    } else {
        console.error('Error fetching movie title');
    }
});

