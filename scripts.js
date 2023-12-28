// Function to create a grid with a specified size
function createGrid(size) {
  const container = document.getElementById("container");
  const cellSize = 752 / size;

  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";
      container.appendChild(cell);

      // Add event listener for mouse enter and mouse leave
      cell.addEventListener("mouseenter", paintCell);
      cell.addEventListener("mouseleave", paintCell);
    }
  }
}

//Fuction to paint cell with user choice
function userColorChoice(event) {
  const hex = colorPicker.value;
  event.target.style.background = hex;
}

// Function to paint cell with random color
function paintCell() {
  this.style.background = randomRGB();
}

// Function to paint cell with white color
function paintWhite() {
  this.style.background = "white";
}

// Get random painting color
function randomRGB() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// OUPS button
const buttonOups = document.getElementById("eraseColor");
buttonOups.onclick = erase;

function erase() {
  const cells = document.querySelectorAll(".grid-cell");

  cells.forEach((cell) => {
    // Add new event listeners for mouse enter and mouse leave
    cell.addEventListener("mouseenter", paintWhite);
    cell.addEventListener("mouseleave", paintWhite);

    // Remove previous event listeners
    cell.removeEventListener("mouseenter", paintCell);
    cell.removeEventListener("mouseleave", paintCell);
  });
}

// Call the function to create a default 16x16 grid
createGrid(16);

// Size me button
const buttonSizeMe = document.getElementById("numberOfGrids");
buttonSizeMe.onclick = chooseSize;

function chooseSize() {
  let size = prompt("What size do you wish for your game? (Max 100)");
  size = parseInt(size);

  if (!isNaN(size) && size > 0 && size <= 100) {
    createGrid(size);
  }
}

// Time to Gumble button
const buttonTimeToGumble = document.getElementById("randomColor");
buttonTimeToGumble.onclick = paintAgain;

function paintAgain() {
  const cells = document.querySelectorAll(".grid-cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", paintCell);
    cell.addEventListener("mouseleave", paintCell);
  });
}

// Color Picked
const colorPicker = document.getElementById("colorPicker");

colorPicker.onclick = pickColor;

function pickColor() {
  const cells = document.querySelectorAll(".grid-cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", userColorChoice);
    cell.addEventListener("mouseleave", userColorChoice);
  });
}
