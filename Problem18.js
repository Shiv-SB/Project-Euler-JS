import {helper} from "./HelperFunctions.js";

const triangle = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
  ];
  
// Display the initial triangle
console.log("Initial Triangle:");
triangle.forEach((row, index) => {
  const padding = " ".repeat((triangle.length - index - 1) * 3);
  console.log(padding + row.join(" ".repeat(6)));
});

// Iterate from the second last row to the top
for (let i = triangle.length - 2; i >= 0; i--) {
  // Iterate through elements in the current row
  for (let j = 0; j < triangle[i].length; j++) {
    // Update the current element with the maximum sum of itself and its two neighbors below
    triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
  }
  // Display the current state of the triangle after each iteration
  console.log(`\nAfter Iteration ${triangle.length - 1 - i}:`);
  triangle.forEach((row, index) => {
    const padding = " ".repeat((triangle.length - index - 1) * 3);
    console.log(padding + row.join(" ".repeat(6)));
  });
}

// The maximum sum is stored in the top element of the triangle
const maxSum = triangle[0][0];
console.log(`\nMaximum sum path: ${maxSum}`);
