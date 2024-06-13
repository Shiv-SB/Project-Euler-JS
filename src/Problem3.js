import {helper} from "./HelperFunctions.js";

const primeNo = 600851475143;

let uniqueFactors = new Set(helper.math.getFactors(primeNo));

console.log(helper.array.max(uniqueFactors));
