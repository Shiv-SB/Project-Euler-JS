//import { helper } from "./HelperFunctions.ts";

import readline from "readline";
import fs from "fs";

type Matrix = number[][];
type Spaceship = -1 | 0 | 1;

export let helper = {
    array: {
        trim(arr: number[], lowerBound: number, upperBound: number): number[]  { 
            const greaterThan = (x: number, lim: number) => x > lim;
            const lessThan = (x: number, lim: number) => x < lim;
            const newArr = arr.filter((x) => {
                if(lowerBound && upperBound) {
                    return lessThan(x, upperBound) && greaterThan(x, lowerBound);
                }
                if(lowerBound && !upperBound) {
                    return greaterThan(x, lowerBound);
                }
                if(!lowerBound && upperBound) {
                    return lessThan(x, upperBound);
                }
            });
            return newArr;
        }, 
        new(length: number, zeroIndex: boolean = false): number[] {
            return [...Array(length + 1).keys()].splice(zeroIndex ? 0 : 1);
        },
        sum(arr: number[]): number {
            return arr.reduce((a, b) => a + b, 0);
        },
        multiply(arr: number[]): number {
            return arr.reduce((a, b) => a * b, 1);
        },
        max(arr: number[]): number {
            return Math.max.apply(this, [...arr]);
        },
        min(arr: number[]): number {
            return Math.min.apply(this, [...arr]);
        },
        intersect<ArrT>(arr1: ArrT[], arr2: ArrT[]): ArrT[] {
            const set1 = new Set(arr1);
            const set2 = new Set(arr2);
            return [...set1].filter(x => set2.has(x));
        },
        elementsToNumber(arr: any[]): number[] {
            return arr.map(x => {
                return Number(x);
            });
        },
        equality(arr1: any[], arr2: any[]): boolean {
            return (arr1.length === arr2.length && arr1.every((x, i) => x === arr2[i]));
        },
        indexesOf(arr: any[], val: any): number[] {
            return arr.reduce((r, n, i) => {
                n === val && r.push(i);
                return r;
            }, []);
        },
        neighbours<T>(arr: T[], location: number, width: number): T[] {
            return arr.slice(location - width, location + width + 1);
        },
        permutator<T>(arr: string[] | number[]): T[] {
            let result: any[] = [];
            const permute = (arr: any[], m: any[] = []) => {
                if (arr.length === 0) {
                    result.push(m);
                } else {
                    for (let i = 0; i < arr.length; i++) {
                        let curr = arr.slice(); 
                        let next = curr.splice(i, 1);
                        permute(curr.slice(), m.concat(next));
                    }
                }
            };
            permute(arr);
            return result.map((x) => {
                return x.join("")
            }).sort();
        },
        equalElements(arr: any[]): boolean {
            return new Set(arr).size === 1;
        },
    },
    matrix: {
        clockwiseSpiral(n: number): number[][] | undefined {
            if(helper.math.isEven(n)) {
                console.error(`n (${n}) must be odd`);
                return;
            }
            let matrix: Matrix = Array.from({ length: n }, () => Array(n).fill(0));
            let value = 1;
            let x = Math.floor(n / 2);
            let y = Math.floor(n / 2);
            let dx: number[] = [0, 1, 0, -1];
            let dy: number[] = [1, 0, -1, 0];
            let dir: Spaceship = 0;

            matrix[x][y] = value++;

            for (let step = 1; step < n; step++) {
                for (let i = 0; i < 2; i++) {
                    for (let j = 0; j < step; j++) {
                        x += dx[dir];
                        y += dy[dir];
                        matrix[x][y] = value++;
                    }
                    dir = (dir + 1) % 4;
                }
            }

            for (let i = 0; i < n - 1; i++) {
                x += dx[dir];
                y += dy[dir];
                matrix[x][y] = value++;
            }
            return matrix;
        },
        print(matrix: Matrix): void {
            let maxLength = matrix.reduce((max, row) => {
                return Math.max(max, ...row.map(num => String(num).length));
            }, 0);
            for (let row of matrix) {
                let rowStr = "";
                for (let num of row) {
                    rowStr += String(num).padStart(maxLength + 1);
                }
                console.log(rowStr);
            }
        },
        sumOfDiagonals(matrix: Matrix): number {
            const len = matrix.length;
            let sum = 0;

            for (let i = 0; i < len; i++) {
                sum += matrix[i][i];
                if (i !== len - i - 1) {
                    sum += matrix[i][len - i - 1];
                }
            }
            return sum;
        },
        sumOfDiagonalsFromLength(matrixLength: number): number { // computes sum of diagonals without the need of the full array  
            if (helper.math.isEven(matrixLength)) {
                throw new Error(`Matrix Length ${matrixLength} must be odd!`);
            }
            let t = 1;
            for (let n = 3; n <= matrixLength; n+=2) {
                t+= 4 * Math.pow(n, 2) - (6 * n) + 6;
            }
            return t;
        }
    },
    math: {
        isDivisibleBy(x: number, divisor: number): boolean {
            if (divisor === 0) return false;
            if (x % divisor === 0) return true;
            return false;
        },
        isDivisibleByNumbers(x: number, numbers: number[]): boolean {
            if (!Array.isArray(numbers) || x <= 0) return false;
            let output = new Set;
            for (let i = 0; i < numbers.length; i++) {
                output.add(helper.math.isDivisibleBy(x, i));
            }
            return !output.has(false) && output.has(true);
        },
        isEven(x: number | bigint): boolean {
            if(typeof x === "number") return !(x % 2);
            if(typeof x === "bigint") return !(x % BigInt(2));
            return false;
        },
        getFactors(x: number): number[] {
            let factors: number[] = [];
            let possibleFactor = 1;
            let sqrt = Math.sqrt(x);
            while(possibleFactor <= sqrt) {
                if (x % possibleFactor === 0) {
                    factors.push(possibleFactor);
                    const otherPossibleFactor = x / possibleFactor;
                    if (otherPossibleFactor > possibleFactor) {
                        factors.push(otherPossibleFactor);
                    }
                }
                possibleFactor++;
            }
            return factors;
        },
        getPrimeFactors(n: number): number[] {
            const factors: number[] = [];
            let divisor = 2;
            while (n >= 2) {
              if (n % divisor == 0) {
                factors.push(divisor);
                n = n / divisor;
              } else {
                divisor++;
              }
            }
            return factors;
        },
        getProperDivisors(x: number): number[] {
            const result: number[] = [];
            for (let i = 1; i <= Math.floor(x / 2); i++) {
                if (helper.math.isDivisibleBy(x, i)) {
                    result.push(i);
                }
            }
            return result;
        },
        getProperDivisorsSum(x: number): number {
            let result = 0;
            for (let i = 1; i <= Math.floor(x / 2); i++) {
                if (helper.math.isDivisibleBy(x, i)) {
                    result += i;
                }
            }
            return result;
        },
        isPalindrome(x: number | string): boolean {
            const inputReversed = x.toString().split("").reverse().join("");
            return x.toString() === inputReversed;
        },
        sumOfSquares(n: number): number{
            if (n <= 0) throw new Error("Must be greater than 0");
            const numbers = helper.array.new(n);
            return numbers.reduce((a, b) => a + (b * b));
        },
        sumOfDigits(n: number): number {
            return (
                n.toString().split("").map((x) => {
                    return parseInt(x, 10);
                }).reduce((a, b) => a + b, 0)
            );
        },
        factorial(x: number): number {
            let f: number[] = [];
            if (x === 0 || x === 1) return 1;
            if (f[x] > 0) return f[x];
            return f[x] = helper.math.factorial(x-1) * x;
        },
        factorialBigInt(x: number): bigint {
            let result = BigInt(1);
            for (let i = 1; i <= x; i++) {
                result *= BigInt(i);
            }
            return result;
        },
        squareOfSums(n: number): number {
            if (n <= 0) throw new Error("Must be greater than 0");
            const numbers: number[] = helper.array.new(n);
            return helper.array.sum(numbers) ** 2;
        },
        isPrime(n: number): boolean {
            if (n === 2) return true;
            if (n < 2) return false;
            if (n % 2 === 0 || n % 3 === 0) return false;
            for (let i = 5; i * i <= n; i += 6) {
                if ( n % i === 0 || n % (i + 2) === 0) return false;
            }
            return true;
        },
        findLongestReciprocal(limit: number): number { // Returns the number with the longest non-infinite reciprocal
            let maxCycleLength = 0;
            let numberWithMaxCycle = 0;
            const primesList: number[] = helper.generate.primeList(limit);
            for (let i in primesList) {
                const p = primesList[i];
                let remainders = new Array(limit).fill(-1);
                let val = 1;
                let position = 1;
            
                while (remainders[val] === -1 && val !== 0) {
                    remainders[val] = position;
                    val *= 10;
                    val %= p;
                    position++;
                }
                if (val !== 0) {
                    const cycleLength = position - remainders[val];
                    if (cycleLength > maxCycleLength) {
                        maxCycleLength = cycleLength;
                        numberWithMaxCycle = p;
                    }
                }
            }
            return numberWithMaxCycle;
        },
        fibonacci: {
            generateToMax: function(limit: number): bigint[] {
                function* fibonacciGenerator(limit: bigint): Generator<bigint, void, unknown> {
                    let a: bigint = BigInt(1);
                    let b: bigint = BigInt(1);
                    yield a;
                    if (limit > a) yield b;
                    while (true) {
                        let next: bigint = a + b;
                        if (next >= limit) break;
                        yield next;
                        a = b;
                        b = next;
                    }
                }
            
                const result: bigint[] = [];
                for (const num of fibonacciGenerator(BigInt(limit))) {
                    result.push(num);
                }
                return result;
            },
            generateToDigit(n: number): bigint[] { // returns list of fibs up till the first n digit number
                let a = BigInt(1), b = BigInt(1);
                const fibSeq = [a, b];
                while (true) {
                    let next = a + b;
                    fibSeq.push(next);
                    a = b;
                    b = next;
                    if (next.toString().length >= n) {
                        break;
                    }
                }
                return fibSeq;
            },
            generateFirstNDigit(digit: number): number { // same as above but returns the number instead of array
                const fibSeq: bigint[] = helper.math.fibonacci.generateToDigit(digit);
                for (let i = 0; i < fibSeq.length; i++) {
                    const entryLength = fibSeq[i].toString().length;
                    if (entryLength >= digit) {
                        return i + 1;    
                    }
                }
                console.log(`No numbers with ${digit} digits found`);
                return -1;
            },
        },
        pythTriplet: {
            isValid(a: number, b: number, c: number): boolean {
                const newTrip: number[] = helper.math.pythTriplet.newFromA(a).sort().flat();
                if (newTrip[0] === b && newTrip[1] === c) return true;
                return false;
            },
            newFromA(a: number): [number, number] {
                const b = (1000 * a - 500_000) / (a - 1_000);
                const c = (-1 * a**2 + 1000 * a - 500_000) / (a - 1000);
                return [b, c]; 
            },
            generate(max: number): Matrix {
                return helper.generate.pythTriplet(max);
            },
        },
        binomialCoefficient(n: number, k: number): number {
            let result = 1;
            for (let i = 0; i < k; i++) {
                result *= (n - 1) / (i + 1);
            }
            return result;
        },
        isAbundant(n: number): boolean {
            return helper.math.getProperDivisorsSum(n) > n;
        },
        isDeficient(n: number): boolean {
            return helper.math.getProperDivisorsSum(n) < n;
        },
        isPerfect(n: number): boolean {
            return helper.math.getProperDivisorsSum(n) === n;
        },
    },
    string: {
        alphabetPos(text: string, offset: number = 1): number[] {
            return [...text].map(a => parseInt(a, 36) - (10 - offset)).filter(a => a >= 0);
        },
    },
    generate: {
        seq(start: number, end: number): number[] { // end non-inclusive
            return Array(end - 1).fill(0).map((element, index) => index + start);
        },
        fibSeq(length: number, startingNumber: number = 1): number[] {
            let fib = [startingNumber, startingNumber + 1];
            for (let i = 2; i < length; i++) { 
                fib[i] = fib[i - 2] + fib[i - 1];
            }
            return fib;
        },
        primeList(n: number): number[] { // returns array of primes up to max value n
            let sieve: boolean[] = new Array(n + 1).fill(true);
            let primes: number[] = [];
            for (let i = 2; i <= n; ++i) {
                if (sieve[i]) {
                    primes.push(i);
                    for (let j = i * i; j <= n; j += i) {
                        sieve[j] = false;
                    }
                }
            }
            return primes;
        },
        nthPrime(n: number): number {
            let primes = [2];
            for(let i = 3; primes.length < n; i += 2) {
                let i_isPrime = true;
                for(let j = 0; j < primes.length && primes[j] * primes[j] <= i; j++) {
                    if(i % primes[j] === 0){
                        i_isPrime = false;
                        break;
                    }
                }
                if(i_isPrime){
                    primes.push(i);
                }
            }
            return primes.pop() as number;
        },
        pythTriplet(max: number): Matrix {
            let validTrips: Matrix = [];
            for (let i = 1; i < max; i++) {
                let attempt = [i, ...helper.math.pythTriplet.newFromA(i)];
                if(helper.math.pythTriplet.isValid(attempt[0], attempt[1], attempt[2])) {
                    validTrips.push(attempt);
                }
            }
            return validTrips;
        },
        triangleNo(n: number): number { // generate nth traingle number
            return n * (n + 1) / 2;
        },
        triangleNoWithMoreThanNFactors(n: number) {
            let counter = 1;
            let triNumber = counter++;
            while (helper.math.getFactors(triNumber).length < n) {
                triNumber += counter++;
            }
            return triNumber;
        },
        triangleFromString(inputStr: string, delim: string = "\n") {
            const rows = inputStr.trim().split(delim);
            return rows.map(row => row.split(" ").map(Number));
        },
        collatzSeq(n: number): number[] {
            const arr: number[] = [];
            while (n !== 1) {
                arr.push(n);
                if (n % 2 === 0) {
                    n /= 2;
                } else {
                    n = 3 * n + 1;
                }
            }
            arr.push(1);
            return arr;
        },
        deficientAbundantPerfect(type: "deficient" | "abundant" | "perfect", limit: number) { // Generates array of def, abund or perf numbers
            const results: number[] = [];
            for (let i = 1; i < limit; i++) {
                const sumOfDivs: number = helper.math.getProperDivisorsSum(i);
                if (type === "deficient" && sumOfDivs < i) results.push(i);
                if (type === "abundant" && sumOfDivs > i) results .push(i);
                if (type === "perfect" && sumOfDivs === i) results.push(i);
            };
            return results;
        },
    },
    date: {
        zellerCongruence(year: number, month: number, dayOfMonth: number) { // returns day of the week
            if (month < 1 || month > 12 || dayOfMonth < 1 || dayOfMonth > 31) {
                throw new Error("Invalid date");
            }
            if (month < 3) {
                month += 12;
                year -= 1;
            }
            const zeroBasedCentury = Math.floor(year / 100);
            const yearOfCentury = year % 100;

            const dayOfWeek: number = (
                dayOfMonth + Math.floor(13 * (month + 1) / 5) +
                yearOfCentury + 
                Math.floor(yearOfCentury / 4) + 
                Math.floor(zeroBasedCentury / 4) +
                5 * zeroBasedCentury
            ) % 7;
            return dayOfWeek;
        },
    },
    fetch: {
        csv: async (filePath: string, delim: string = ","): Promise<string[]> => {
            const rows: string[] = await new Promise((resolve, reject) => {
                const rl = readline.createInterface({
                    input: fs.createReadStream(filePath),
                    output: process.stdout,
                    terminal: false,
                });
                let rows: string[][] = [];
                rl.on("line", (line) => {
                    rows.push(line.split(delim).map(item => item.trim()));
                });
                rl.on("close", () => {
                    resolve(rows.flat());
                });
                rl.on("error", (error) => {
                    reject(error);
                });
            });
            return rows;
        },
    },
}

