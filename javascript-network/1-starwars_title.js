#!/usr/bin/node
// using a module request to make common requests
const req = require('request');

const id = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

// passing the json string into a object for easy access
// becomes easy to request for the header
req(url, (error, response, body) => {
    if (error) {
        return console.error(error);
    }
    const obj = JSON.parse(body);
    console.log(obj.title);

});
    
    

