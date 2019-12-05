//target the button and target the body to change the background
const colorButton = document.querySelector('.color-btn');
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

