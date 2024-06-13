import {helper} from "./HelperFunctions.js";

// Reciprocal Cycles

const limit: number = 10;

function areAllEqual(arr: any[]): boolean {
    return new Set(arr).size === 1;
}

for (let i = 3; i <= limit; i+= 2) {
    const fraction: string = (1 / i).toString();
    const d: string = fraction.split(".").pop() || "";
    console.log(`index: ${i} | fract: 1/${i} | denom: 0.${d} | is reciprocal: ${areAllEqual(d.split(""))}`);
}

const primesList = helper.generate.primeList(30);

console.log(primesList);

function primeList(n) { // gets array of primes up to max value n
    let sieve = new Array(n + 1).fill(false); // initialize sieve with false
    let primes: number[] = [];
    for (let i = 2; i <= n; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (let j = i * i; j <= n; j += i) { // declare j with let
                sieve[j] = true;
            }
        }
    }
    return primes;
}

// Example usage
//const primesUpTo100 = primeList(100);
//console.log(primesUpTo100);



