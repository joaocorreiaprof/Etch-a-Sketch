// Function to create a grid with a specified size
function createGrid(size) {
  const container = document.getElementById("container");
  const cellSize = 800 / size; // Calculate cell size based on the container size. 800 becasue (50 rem×16 px/rem= 800 px)

  // Clear the container
  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.style.width = cellSize + "px";
      cell.style.height = cellSize + "px";
      container.appendChild(cell);

      // Add event listener for mouse enter and mouse leave
      cell.addEventListener(
        "mouseenter",
        () => (cell.style.background = randomRGB())
      );
      cell.addEventListener(
        "mouseleave",
        () => (cell.style.background = mouseenter)
      );
    }
  }
}
//Get random painting color
function randomRGB() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Call the function to create a default 16x16 grid
createGrid(16);

// Size me option
const button = document.getElementById("numberOfGrids");
button.onclick = chooseSize;

function chooseSize() {
  let size = prompt("What size do you wish for your game? (Max 100)");
  size = parseInt(size);

  if (!isNaN(size) && size > 0 && size <= 100) {
    createGrid(size);
  }
}
