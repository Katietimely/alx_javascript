#!/usr/bin/node
const req = require("request");
const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}`;

req(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const film = JSON.parse(body);
        const characterurls = film.characters;

        characterurls.forEach(characterurl => {
            req(characterurl, (error, response, body) =>{
                if (!error && response.statusCode === 200) {
                    const character = JSON.parse(body);
                    console.log(character.name);
                } else {
                    console.error(`Error fetching character data: ${error}`);
                }
            });
        });
    } else {
        console.error(`Error fetching data: ${error}`);
    }
})

