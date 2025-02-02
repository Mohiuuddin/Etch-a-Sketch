let dimension = 16;
const grid = document.querySelector("#grid");
const btn = document.querySelector("#btn");
const eraseBtn = document.querySelector("#eraseBtn");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red value (0-255)
    const g = Math.floor(Math.random() * 256); // Random green value (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Return RGB color string
}

function createGrid (dimension){
    grid.innerHTML="";
    
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div");
        row.classList.add("row"); // Add row class

        for (let j = 0; j < dimension; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell"); // Add cell class

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = getRandomColor(); // Change background color randomly
            });

            // cell.style.backgroundColor = getRandomColor();
            row.appendChild(cell); // Append each cell to the row
        }

        grid.appendChild(row); // Append each row to the grid
    }
    
}

createGrid(dimension);


btn.addEventListener("click", ()=>{
        const input = parseInt(prompt("Enter a number between 1 and 100"));
        if (input > 0 && input <= 100) {
            dimension = input;
            createGrid(dimension); // Recreate the grid with the new size
        } else {
            alert("Please enter a number between 1 and 100.");
        }
})

eraseBtn.addEventListener('click', () => {
    
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white"; 
    });
});


