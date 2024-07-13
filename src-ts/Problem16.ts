import {helper} from "./HelperFunctions.js";

// Power Digit Sum

const base = 2;
const exp = 1000;
let val = BigInt(Math.pow(base, exp));

console.log("Solution:", helper.math.sumOfDigits(val));