#!/usr/bin/node
// using a module request to make common requests
const req = require("request");

const url = process.argv[2];

const characterId = 18;

// passing the json string into a object for easy access
// becomes easy to request for the header
req(url, (error, response, body) => {
    if (error) {
        console.error('Error');
    }
    const filmsData = JSON.parse(body);
    const filmsWithWedgeAntilles = filmsData.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));
    
    console.log(filmsWithWedgeAntilles.length);
});


