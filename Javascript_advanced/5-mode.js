#!/usr/bin/node
// declaring a function with five arguments
// returning a function imputing the values of the css styles in it
function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

// declaring a function main with no argument
function main() {
    // this particular function can be access the changeMode function and declaring different variables
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // declaring a variable paragraph but accessing the body of the css file through the accessed functions
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // declaring a variable paragraph but accessing the body of the css file through the accessed functions
    // adding eventlistener and a click button to the body of the page
    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    // declaring a variable paragraph but accessing the body of the css file through the accessed functions
    // adding eventlistener and a click button to the body of the page
    let darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);

    // declaring a variable paragraph but accessing the body of the css file through the accessed functions
    // adding eventlistener and a click button to the body of the page
    let screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.addEventListener('click', screamMode);
    document.body.appendChild(screamModeButton);
}
// calling back the function 
main(); 