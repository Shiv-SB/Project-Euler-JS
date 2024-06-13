import {helper} from "./HelperFunctions.js";

// Quadratic Primes

function quad(a: number, b: number, n: number) {
    if (!(Math.abs(a) < 1000) || !(Math.abs(b) <= 1000)) {
        console.error(`a or b exceeds range. a: ${a}, b: ${b}`);
        return;
    }

    return Math.pow(n, 2) + (a * n) + b;
}

function countConsPrimes(a, b) { 
    let n = 0;
    while (true) {
        const result = quad(a, b, n);
        //console.log(result);
        if(!helper.math.isPrime(result)) break;
        n++;
    }
    return n;
}

function findQuad(limit: number) {
    let maxP = 0;
    let bestA = 0;
    let bestB = 0;

    let primes = helper.generate.primeList(limit);

    for (let a = -limit + 1; a < limit; a+=2) {
        for (let b of primes) {
            if (b > limit) break;

            let primeCount = countConsPrimes(a, b);

            if (primeCount > maxP) {
                maxP = primeCount;
                bestA = a;
                bestB = b;
            }

            primeCount = countConsPrimes(a, -b);

            if(primeCount > maxP) {
                maxP = primeCount;
                bestA = a;
                bestB = -b;
            }
        }
    }

    return { a: bestA, b: bestB, maxPrimes: maxP };
}

const result = findQuad(1000);
console.log(result);
console.log("Solution:", result.a * result.b);