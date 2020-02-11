// Declaring variables
let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const body = document.querySelector('body');
const button = document.querySelector('#button');
const hexCodeOutput = document.querySelector('#hexCodeOutput');

// Function that creates a random hex code and returns the value
function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Fucntion to figure out if font colour should be white or black
function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    let r = parseInt(hexcolor.substr(0,2),16);
    let g = parseInt(hexcolor.substr(2,2),16);
    let b = parseInt(hexcolor.substr(4,2),16);
    let yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 150) ? 'black' : 'white';
}

// Listening for button press
button.addEventListener('click', () => {
    let generatedColor = getRandomColor();
    body.style.backgroundColor = generatedColor;
    body.style.color = getContrastYIQ(generatedColor)
    hexCodeOutput.innerHTML = generatedColor;
    console.log('Color has been changed!')
})