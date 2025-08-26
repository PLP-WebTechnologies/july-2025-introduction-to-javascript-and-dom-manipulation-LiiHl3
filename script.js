


const validColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];


const colorInput = document.getElementById('colorInput');
const checkColorBtn = document.getElementById('checkColorBtn');
const colorMessage = document.getElementById('colorMessage');

checkColorBtn.addEventListener('click', () => {
  const userColor = colorInput.value.toLowerCase().trim();


  if (!userColor) {
    colorMessage.textContent = 'Please enter a color name.';
    colorMessage.style.color = 'red';
    return;
  }


  if (validColors.includes(userColor)) {
    colorMessage.textContent = `${userColor} is a great color!`;
    colorMessage.style.color = userColor;
  } else {
    colorMessage.textContent = `Sorry, we don't recognize "${userColor}". Try another color!`;
    colorMessage.style.color = 'black';
  }
});



function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * validColors.length);
  return validColors[randomIndex];
}


function showRandomColor() {
  const randomColor = getRandomColor();
  const randomColorDisplay = document.getElementById('randomColorDisplay');
  randomColorDisplay.textContent = `Random Color: ${randomColor}`;
  randomColorDisplay.style.color = randomColor;
}

document.getElementById('randomColorBtn').addEventListener('click', showRandomColor);



const colorList = document.getElementById('colorList');

for (let i = 0; i < validColors.length; i++) {
  const li = document.createElement('li');
  li.textContent = validColors[i];
  colorList.appendChild(li);
}


const colorButtons = document.querySelectorAll('.color-btn');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const chosenColor = button.getAttribute('data-color');
    document.body.style.backgroundColor = chosenColor;
  });
});