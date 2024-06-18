import {helper} from "./HelperFunctions.ts";

const primeNo = 600851475143;

let uniqueFactors = helper.math.getPrimeFactors(primeNo);

console.log("Solution:", uniqueFactors.pop());
