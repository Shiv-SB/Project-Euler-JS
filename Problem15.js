import {helper} from "./HelperFunctions.js";

// Lattice Paths

const arraySize = 2; 
const destination = Math.pow(arraySize, 2) - 1;
const vertStep = 1;
const horizStep = arraySize;

function createSquareGrid(size) {
    size++;
    let grid = [];
    let h = 0;
    for (let i = 0; i < size; i++) {
        grid[i] = [];
        for (let j = 0; j < size; j++) {
            grid[i][j] = h++;            
        }  
    }
    return grid;
}

let squareGrid = createSquareGrid(arraySize);

squareGrid.forEach((row, i)=> {
//
})

console.log(squareGrid);
console.log(destination);

/*
Grid mapping:
Grid      Routes
1           2
2           6
3           
*/

//https://www.interactive-maths.com/blog/restricted-taxicab-geometry