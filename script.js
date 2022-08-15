// Create Grid with CSS grid 
// Create drawing area/container for the boxes:
const gridContainer = document.getElementById("gridContainer");
gridContainer.style.display = "grid";
gridContainer.style.height = "560px";
gridContainer.style.width = "560px";
gridContainer.style.border = "5px solid red"
gridContainer.style.gridTemplateRows = "repeat(var(--gridRows), 1fr)";
gridContainer.style.gridTemplateColumns = "repeat(var(--gridColumns), 1fr)";
gridContainer.style.gap = "0";
gridContainer.style.box = "border-box";

// Function: Build the grid with CSS Grid
function createGrid(rows, columns) {
    const boxWidth = 560/rows;
    const boxHeight = 560/columns;
    gridContainer.style.setProperty('--gridRows', rows);
    gridContainer.style.setProperty('--gridColumns', columns);
    for (i = 0; i < rows*columns; i++) {
        // scale the box size based on number of boxes
        const newDiv = document.createElement("div");
        newDiv.style.width = `${boxWidth}px`;
        newDiv.style.height = `${boxHeight}px`;;
        newDiv.style.box = "border-box";
        newDiv.style.backgroundColor = "white";
        gridContainer.appendChild(newDiv).className = "gridBox";
    }
    setHoverEffect();
    
}

// Function: Reset Grid
const resetBoard = document.getElementById('resetBoard');
resetBoard.addEventListener('click', resetGrid);

function resetGrid() {
    const boxes = document.querySelectorAll('.gridBox');
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
    });
}

// Function: Hover to color
function setHoverEffect() {
    const boxes = document.querySelectorAll('.gridBox');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "black";
        });
    });
}

// Function: Prompt user to input custom grid size
const customBoard = document.getElementById('customBoard');
customBoard.addEventListener('click', resetBoardSize);

function resetBoardSize() {
    let userInput = parseInt(prompt("Please enter desired board size (1-100 only):"));
    if (userInput > 0 || userInput <= 100){
        resetGrid();
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild);    // remove and readd boxes
        }
        createGrid(userInput,userInput);
        setHoverEffect();
    }
}


// Initializing: Default grid size
createGrid(16,16);



//// Create Grid with Inline-block & float
// const sketchContainer = document.getElementById("sketchContainer");
// sketchContainer.style.height = "560px";
// sketchContainer.style.width = "560px";
// sketchContainer.style.border = "1px solid red"
// sketchContainer.style.display = "inline-block";
// for (i = 0; i < 16*16; i++) {
//     const newDiv = document.createElement("div");
//     newDiv.className = "gridBox";
//     newDiv.style.width = "35px";
//     newDiv.style.height = "35px";
//     newDiv.style.float = "left";
//     newDiv.style.backgroundColor = "lightyellow"
//     newDiv.style.box = "border-box";
//     newDiv.style.display = "inline-block";
//     sketchContainer.appendChild(newDiv);
// }
