import {helper} from "./HelperFunctions.js";

const upperBound = 2_000_000;
const primes = helper.generate.primeList(upperBound);
console.log(primes);

console.log(helper.array.sum(primes));