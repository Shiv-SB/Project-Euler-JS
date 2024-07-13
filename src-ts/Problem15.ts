import {helper} from "./HelperFunctions.js";

// Lattice Paths

function numberOfRoutes(gridSize: number): number {
    // For an n x n grid, the number of routes is equal to the binomial coefficient (2n choose n)
    return helper.math.binomialCoefficient(2 * gridSize, gridSize);
}

const gridSize = 20;
console.log("Number of routes through a", gridSize, "x", gridSize, "grid:", numberOfRoutes(gridSize));

//https://www.interactive-maths.com/blog/restricted-taxicab-geometry