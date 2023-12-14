// Function to create a 16x16 grid
function createGrid(rows, cols) {
  const container = document.getElementById("container");

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      container.appendChild(cell);
    }

    // Add a line break after each row
    const lineBreak = document.createElement("br");
    container.appendChild(lineBreak);
  }
}

// Call the function to create a 16x16 grid
createGrid(16, 16);
