#!/usr/bin/node
// using a module request to make common requests
const req = require("request");

const url = `${process.argv[2]}`;


// passing the json string into a object for easy access
// becomes easy to request for the header
req(url, (error, response, body) => {
    if (error) {
        return console.error(error);
    }
    const data = JSON.parse(body);
    const films = data.results;
    let count = 0;
    const characterId = "18";
    const character =`https://swapi-api.alx-tools.com/api/people/${characterId}/`;

    for (const film of films) {
        if (film.characters.includes(character)) {
            count += 1;
        }
    }
     console.log(count);
});


