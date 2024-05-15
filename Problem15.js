import {helper} from "./HelperFunctions.js";

// Lattice Paths

function numberOfRoutes(gridSize) {
    // For an n x n grid, the number of routes is equal to the binomial coefficient (2n choose n)
    return helper.math.binomialCoefficient(2 * gridSize, gridSize);
}

function runCalculation(gridSize) {
    const routes = numberOfRoutes(gridSize);
    console.log("Number of routes through a", gridSize, "x", gridSize, "grid:", routes);
}

// Example usage for a 20x20 grid (Project Euler Problem 15)
const gridSize = 20;
runCalculation(gridSize);

//https://www.interactive-maths.com/blog/restricted-taxicab-geometry