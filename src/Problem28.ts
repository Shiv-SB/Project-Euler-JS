import {helper} from "./HelperFunctions.js";

// Number Spiral Diagonals

/*type Matrix = number[][];

function generateSpiralMatrix(n: number): Matrix | undefined {
    if(helper.math.isEven(n)) {
        console.error(`n (${n}) must be odd!`);
        return;
    }
    let matrix: Matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let value: number = 1;
    let x: number = Math.floor(n / 2);
    let y: number = Math.floor(n / 2);
    let dx: number[] = [0, 1, 0, -1];
    let dy: number[] = [1, 0, -1, 0];
    let dir: number = 0;

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

function sumDiagonals(matrix: Matrix): number {
    const len = matrix.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += matrix[i][i];
        if (i !== len - i - 1) {
            sum += matrix[i][len - i - 1];
        }
    }
    return sum;
}


function printMatrix(matrix: Matrix): void {
    // Determine the maximum length of the elements in the matrix
    let maxLength: number = matrix.reduce((max, row) => {
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

const matrix = generateSpiralMatrix(3);

printMatrix(matrix!);

console.log("\nsolution:", sumDiagonals(matrix!));*/

/*

consider the matrix:

Consider n x n matrix where n = 3:

7 8 9
6 1 2
5 4 3

Lets label each element:

a b c
d e f
g h i

Therefore a = 7, b = 8, etc

Consider the corners a, c, g, i
There exists a general formula for these corners:
a = n^2 - n + 1
c = n^2
g = n^2 - 2n + 2
i = n^2 - 3n + 3

For n = 3, this covers both diagonals. If expanded to n = 4, computing the diagonals for n = 3 and n = 4 will give the sum for n = 4.


*/


const limit = 1001;
let t = 1;
for (let n = 3; n <= limit; n+=2) {
    t+= 4 * Math.pow(n, 2) - (6 * n) + 6;
}

console.log("Solution:", t);