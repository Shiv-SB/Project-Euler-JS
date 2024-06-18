import {helper} from "./HelperFunctions.ts";

const factors = helper.generate.primeList(20);
const result = helper.array.multiply(factors) * 3 * 8;
console.log("Solution:", result);