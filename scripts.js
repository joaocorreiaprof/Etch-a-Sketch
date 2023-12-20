// Function to create a 16x16 grid
function createGrid(rows, cols) {
  const container = document.getElementById("container");

  //makes the refresh after click "Size Me"
  container.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      container.appendChild(cell);

      // AddeventListener for mouse enter and mouse leave
      cell.addEventListener(
        "mouseenter",
        () => (cell.style.background = "blue")
      );
      cell.addEventListener(
        "mouseleave",
        () => (cell.style.background = "blue")
      );
    }

    // Add a line break after each row
    const lineBreak = document.createElement("br");
    container.appendChild(lineBreak);
  }
}

// Call the function to create a 16x16 grid- Standard
createGrid(16, 16);

//trying to prompt

const button = document.getElementById("numberOfGrids");
button.onclick = chooseSize;

function chooseSize() {
  let size = prompt("What size do you wish for your game? MAX 50");
  if (size != null && size <= 50) {
    createGrid(size, size);
  }
}
