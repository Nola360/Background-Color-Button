//target the button and target the body to change the background
const colorButton = document.querySelector('.color-btn');
// const bodyBackground
const bodyBackground = document.querySelector('body');

//Create an Arry to hold background colors to use
const colors = ['yellow', 'red', 'green', 'blue'];

//Button event lister
colorButton.addEventListener('click', changeColor);

function changeColor() {
  console.log('clicked');
  // bodyBackground.style.backgroundColor = colors.random[];

  //create random number for array
  let random = Math.floor(Math.random() * colors.length);
  bodyBackground.style.backgroundColor = colors[random];
}


//Hex Project

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const hexButton = document.querySelector('.hexButton');
const hex = document.querySelector('.hex');

hexButton.addEventListener('click', getHex);

function getHex() {
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    console.log(random);
    hexColor += hexNumbers[random];
    console.log(hexColor);
  }

  bodyBackground.style.backgroundColor = hexColor;
  hex.innerHTML = hexColor;
}
