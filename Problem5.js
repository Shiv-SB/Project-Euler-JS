import {helper} from "./HelperFunctions.js";

let range = [2, 3, 5, 7, 11, 13, 17, 19];
let fullRange = helper.array.new(20);
const lowerBound = helper.array.multiply(range) + 10;

console.log(`Lower bound: ${lowerBound}`);

let i = lowerBound;
do {
    i+=20
} while (! helper.math.isDivisibleByNumbers(i, fullRange));

output(i);
