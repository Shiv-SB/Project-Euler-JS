import {helper} from "./HelperFunctions.js";

// Number Spiral Diagonals

function generateSpiralMatrix(n) {
    if(helper.math.isEven(n)) {
        console.error(`n (${n}) must be odd!`);
        return;
    }
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let value = 1;
    let x = Math.floor(n / 2);
    let y = Math.floor(n / 2);
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    let dir = 0;

    matrix[x][y] = value++;

    for (let step = 1; step < n; step++) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < step; j++) {
                x += dx[dir];
                y += dy[dir];
                matrix[x][y] = value++;
            }
            dir = (dir + 1) % 4;
        }
    }

    // Move to the right once more to finish the last row
    for (let i = 0; i < n - 1; i++) {
        x += dx[dir];
        y += dy[dir];
        matrix[x][y] = value++;
    }

    return matrix;
}


function printMatrix(matrix) {
    // Determine the maximum length of the elements in the matrix
    let maxLength = matrix.reduce((max, row) => {
        return Math.max(max, ...row.map(num => String(num).length));
    }, 0);

    // Print the matrix with evenly spaced elements
    for (let row of matrix) {
        let rowStr = '';
        for (let num of row) {
            rowStr += String(num).padStart(maxLength + 1);
        }
        console.log(rowStr);
    }
}


printMatrix(generateSpiralMatrix(5));