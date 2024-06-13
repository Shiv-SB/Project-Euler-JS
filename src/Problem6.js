import {helper} from "./HelperFunctions.js";

let n = 100;
let a = helper.math.sumOfSquares(n);
let b = helper.math.squareOfSums(n);

output(b-a);
