import {helper} from "./HelperFunctions.js";

// Lattice Paths

const arraySize = 2; 

function createSquareGrid(size) {
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

console.log(squareGrid);