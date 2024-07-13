import {helper} from "./HelperFunctions.ts";

let n = 100;
let a = helper.math.sumOfSquares(n);
let b = helper.math.squareOfSums(n);

console.log("Solution", b - a);
