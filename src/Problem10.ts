import {helper} from "./HelperFunctions.ts";

const upperBound = 2_000_000;
const primes = helper.generate.primeList(upperBound);
//console.log(primes);

console.log("Solution:", helper.array.sum(primes));