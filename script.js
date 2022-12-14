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

// Function: media query for drawing board
// const mobileScreenSize = window.matchMedia("(max-width: 570px)");
// adjustScreen(mobileScreenSize);
// function adjustScreen(mobileScreenSize) {
//     if (mobileScreenSize.matches) {
//         gridContainer.style.height = "100%";
//         gridContainer.style.width = "100%";
//     }
// }

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
        newDiv.style.backgroundColor = `white`;
        newDiv.dataset.color = "255";                            // rgb value for gradient
        gridContainer.appendChild(newDiv).className = "gridBox";
    }
    setHoverEffect();
    
}

// Buttons DOM
const resetBoard = document.getElementById('resetBoard');
resetBoard.addEventListener('click', resetGrid);
const customBoard = document.getElementById('customBoard');
customBoard.addEventListener('click', resetBoardSize);
const eraseBoard = document.getElementById('eraser');
eraseBoard.addEventListener('click', eraser);
const blackMode = document.getElementById('blackColor');
blackMode.addEventListener('click', setHoverEffect);
const unicornMode = document.getElementById('randomColor');
unicornMode.addEventListener('click', colorMode);
const blackGradient = document.getElementById('blackGradient');
blackGradient.addEventListener('click',gradientMode);

// Function: Reset grid / Clear board
function resetGrid() {
    const boxes = document.querySelectorAll('.gridBox');
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
        box.dataset.color = "255";
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

// Function: Prompt user to customize grid size
function resetBoardSize() {
    let userInput = parseInt(prompt("Please enter desired board size (1-100 only):"));
    if (userInput > 0 && userInput <= 100){
        resetGrid();
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild);    // remove and re-add boxes
        }
        createGrid(userInput,userInput);
    } else {
        alert('Invalid input: 1-100 only');
    }
}

// Function: Generate random color
function colorMode() {
    const boxes = document.querySelectorAll('.gridBox');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16); // generate random hex color code
            box.style.backgroundColor = '#' + randomColor;
        });
    });
}

// Function: Erase/Paint White
function eraser() {
    const boxes = document.querySelectorAll('.gridBox');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.dataset.color = "255";
            let rgbValue = box.dataset.color;
            console.log('clear');
            box.style.backgroundColor = "rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")";
        });
    });
}

// Function: Black gradient color
function gradientMode() {
    const boxes = document.querySelectorAll('.gridBox');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            if (box.dataset.color > 0) {
                console.log('passed by here');
                console.log('before: ',box.dataset.color);
                box.dataset.color -= 17;
                console.log('after:',box.dataset.color);
            }                                    // make it darker
            let rgbValue = box.dataset.color;
            box.style.backgroundColor = "rgb(" + rgbValue + "," + rgbValue + "," + rgbValue + ")";
        });
    });
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
