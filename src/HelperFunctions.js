// import {helper} from "./HelperFunctions.js";

import readline from "readline";
import fs from "fs";

export let helper = {
    array: {
        trim: function(arr, lowerBound, upperBound) {
            const greaterThan = (x, lim) => x > lim;
            const lessThan = (x, lim) => x < lim;
            
            let newArr = arr.filter(function(entry) {
                if (typeof lowerBound === "number" && typeof upperBound === "number") {
                    return lessThan(entry, upperBound) && greaterThan(entry, lowerBound);
                }
                if(lowerBound && !upperBound) {
                    return greaterThan(entry, lowerBound);
                }
        
                if(!lowerBound && upperBound) {
                    return lessThan(entry, upperBound);
                }
            });
            return newArr;
        },
        new: function(length, zeroIndex = false) {
            return [...Array(length + 1).keys()].splice(zeroIndex ? 0 : 1);
        },
        sum: function(arr) {
            if (!Array.isArray(arr)) {
                throw new TypeError("Input should be an array");
            }
        
            arr.forEach(element => {
                if (typeof element !== 'number') {
                    throw new TypeError("All elements in the array should be numbers");
                }
            });
        
            return arr.reduce((a, b) => a + b, 0);
        },
        multiply: function(arr) {
            return arr.reduce((a, b)=> a * b, 1);
        },
        max: function(list) {
            return Math.max.apply(this, [...list]);
        },
        min: function(list) {
            return Math.min.apply(this, [...list]);

        },
        intersect(array1, array2) {
            const setA = new Set(a);
            const setB = new Set(b);
            return [...setA].filter(x => setB.has(x));
        },
        elementsToNumber(arr) {
            return arr.map(x => {
                return Number(x);
            });
        },
        equality: function(arr1, arr2) {
            return (
                arr1.length === arr2.length &&  
                arr1.every((val, i) => val === arr2[i])
            );
        },
        indexesOf: function(array, val) {
            return array.reduce((r, n, i)=> {
                n == val && r.push(i);
                return r;
            }, []);
        },
        neighbours: function(array, location, width) {
            return array.slice(location - width, location + width + 1);
        },
        permutator(inputArr) { // Lexicographic sort
            let result = [];

            const permute = (arr, m = []) => {
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
        
            permute(inputArr);
        
            return result.map((x) => {
                return x.join("")
            }).sort();
        },
        equalElements(arr) {
            return new Set(arr).size === 1;
        },
    },
    matrix: {
        clockwiseSpiral(n) { // generate a clockwise spiraled square matrix
            if(helper.math.isEven(n)) {
                console.error(`n (${n}) must be odd!`);
                return;
            }
            let matrix = Array.from({ length: n }, () => Array(n).fill(0));
            let value = 1;
            let x = Math.floor(n / 2);
            let y = Math.floor(n / 2);
            let dx = [0, 1, 0, -1];
            let dy = [1, 0, -1, 0];
            let dir = 0;
        
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
        
            // Move to the right once more to finish the last row
            for (let i = 0; i < n - 1; i++) {
                x += dx[dir];
                y += dy[dir];
                matrix[x][y] = value++;
            }
        
            return matrix;    
        },
        print(matrix) { // console.logs a 2d matrix (number[][]) of any size
            let maxLength = matrix.reduce((max, row) => {
                return Math.max(max, ...row.map(num => String(num).length));
            }, 0);
            for (let row of matrix) {
                let rowStr = '';
                for (let num of row) {
                    rowStr += String(num).padStart(maxLength + 1);
                }
                console.log(rowStr);
            }   
        },
        sumOfDiagonals(matrix) { // Sums the main diags of a 2d matrix (number[][])
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

    },
    math: {
        isDivisibleBy: function(input, divisor) {
            if(divisor === 0) return;
            if (input % divisor === 0) return true;
            return false;
        },
        isDivisibleByNumbers: function(input, numbers) {
            if (!Array.isArray(numbers) || input <= 0) return;
            let output = new Set;
            for (let i = 0; i < numbers.length; i++) {
                //console.log(isDivisibleBy(input, i));
                output.add(helper.math.isDivisibleBy(input, i));       
            }
            return !output.has(false) && output.has(true);
        },
        isEven: function(input) {
            return !Boolean(input % 2);
        },
        getFactors: function(number) {
            let factors = [];
            let possibleFactor = 1;
            let sqrt = Math.sqrt(number);
            while(possibleFactor <= sqrt){
                if(number % possibleFactor == 0){
                    factors[factors.length] = possibleFactor;  
                let otherPossibleFactor = number / possibleFactor;
                    if(otherPossibleFactor > possibleFactor){
                        factors[factors.length] = otherPossibleFactor;
                    } 
                }
                possibleFactor++;
            }
            return factors;
        },
        getProperDivisors(n) {
            const result = [];
            for (let i = 1; i <= Math.floor(n / 2); i++) {
                if (helper.math.isDivisibleBy(n, i)) {
                    result.push(i);
                }
            }
            return result;
        },
        getProperDivisorsSum(n) {
            let result = 0;
            for (let i = 1; i <= Math.floor(n / 2); i++) {
                if (helper.math.isDivisibleBy(n, i)) {
                    result += i;
                }
            }
            return result;
        },
        isPalindrome(input) {
            input = input.toString();
            inputReversed = input.split("").reverse().join("");
            return input === inputReversed;
        },
        sumOfSquares: function(n) { // This can be optimised
            if (n <=0) return;
            let numbers = helper.array.new(n);
            return numbers.reduce((a, b)=> a + (b*b));
        },
        sumOfDigits: function(n) { 
            n = n.toString();
            return (
                n.split("").map((x) => {
                    return parseInt(x, 10);
                }).reduce((a, b) => a + b, 0)
            );
        },

        factorial(n) {
            let f = [];
            if (n == 0 || n == 1)
                return 1;
              if (f[n] > 0)
                return f[n];
              return f[n] = this.factorial(n-1) * n;
        },
        factorialBigInt(n) {
            let result = BigInt(1);
            for (let i = 1; i <= n; i++) {
                result *= BigInt(i);
            }
            return result;
        },
        squareOfSums: function(n) {
            if (n <=0) return;
            let numbers = helper.array.new(n);
            return helper.array.sum(numbers) ** 2
        },
        isPrime: function(n) {
            if(n === 2) return true;
            if (n < 2) return false;
            if (n % 2 === 0 || n % 3 === 0) return false;

            for (let i = 5; i * i <= n; i += 6) {
                if (n % i === 0 || n % (i + 2) === 0) return false;
            }
            return true;
        },
        findLongestReciprocal(limit) {
            let maxCycleLength = 0;
            let numberWithMaxCycle = 0;
            let primesList = helper.generate.primeList(limit);
            for (let i in primesList) {
                let d = primesList[i];
                let remainders = new Array(limit).fill(-1);
                let val = 1;
                let position = 1;
        
                while (remainders[val] === -1 && val !== 0) {
                    remainders[val] = position;
                    val *= 10;
                    val %= d;
                    position++;
                }
        
                if (val !== 0) {
                    const cycleLength = position - remainders[val];
                    if (cycleLength > maxCycleLength) {
                        maxCycleLength = cycleLength;
                        numberWithMaxCycle = d;
                    }
                }
            }
            return numberWithMaxCycle;
        },
        fibonacci: {
            generateToMax(max) {
                let a = BigInt(1), b = BigInt(1);
                const fibSeq = [a, b];
                while (true) {
                    let next = a + b;
                    fibSeq.push(next);
                    a = b;
                    b = next;
                    if (next >= max) {
                        break;
                    }
                }
                return fibSeq;
            },
            generateToDigit(digit) {
                let a = BigInt(1), b = BigInt(1);
                const fibSeq = [a, b];
                while (true) {
                    let next = a + b;
                    fibSeq.push(next);
                    a = b;
                    b = next;
                    if (next.toString().length >= digit) {
                        break;
                    }
                }
                return fibSeq;
            },
            generateFirstNDigit(digit) {
                const fibSeq = this.generateToDigit(digit);
                for (let i = 0; i < fibSeq.length; i++) {
                    const entryLength = fibSeq[i].toString().length;
                    if (entryLength >= digit) {
                        console.log(`Fibonacci number with ${digit} digits:`, fibSeq[i].toString());
                        return i + 1;
                    }
                }
                console.log(`No numbers with ${digit} digits found`);
                return -1;
            },
        },
        pythTriplet: {
            isValid: function(a, b, c) {
                if(!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
                    return false;
                }
                let newTrip = [helper.math.pythTriplet.newFromA(a).sort()].flat(); // a < b < c so can sort
                if(newTrip[0] === b && newTrip[1] === c) return true;
                return false;
            },
            newFromA: function(a) {
                let b = (1000 * a - 500_000)/(a - 1000);
                let c = (-1 * a**2 + 1000*a - 500_000)/(a - 1000);
                return [b, c];
            },
        },
        binomialCoefficient: function(n, k) {
            let result = 1;
            for (let i = 0; i < k; i++) {
                result *= (n - i) / (i + 1);
            }
            return result;
        },
        isAbundant(n) {
            return this.math.getProperDivisorsSum(n) > n;
        },
        isDeficient(n) {
            return this.math.getProperDivisorsSum(n) < n;
        },
        isPerfect(n) {
            return this.math.getProperDivisorsSum(n) === n;
        },
    },
    string: {
        alphabetPos(text, offset = 1) {
            return [...text].map(a => parseInt(a, 36) - (10 - offset)).filter(a => a >= 0);
        },
    },
    generate: {
        fibSeq: function(length, startingNumber = 1) {
            let fib = [startingNumber, startingNumber + 1];
            for (let i = 2; i < length; i++) {
                fib[i] = fib[i - 2] + fib[i - 1];
            }
            return fib;
        },
        primeList: function(n) { // gets array of primes up to max value n
            let sieve = [];
            let primes = [];
            for (let i = 2; i <= n; ++i) {
                if(!sieve[i]) {
                    primes.push(i);
                    for (let j = i << 1; j <= n; j += i) {
                        sieve[j] = true;
                    }
                }
            }
            return primes;
        },
        nthPrime: function(n, maxSize = 1000005) { // Thanks Balindam for this
            let primes = [];
            let IsPrime = Array(maxSize).fill(true);
            let p,i;
            for (p = 2; p * p < maxSize;p++) {
                if (IsPrime[p] == true) {
                    for(i = p * p; i < maxSize; i += p)
                        IsPrime[i] = false;
                }
            }
            for (p = 2; p < maxSize; p++) {
                if (IsPrime[p]) {
                    primes.push(p);
                }
            }
            return primes[n -1];
        },
        pythTriplet: function(max) {
            let validTriplets = [];
            for (let i = 1; i < max; i++) {
                let attempt = [i, ...helper.math.pythTriplet.newFromA(i)];
                if(helper.math.pythTriplet.isValid(attempt[0], attempt[1], attempt[2])) {
                    validTriplets.push(attempt);
                }        
            }
            return validTriplets;
        },
        triangleNo: function(n) {
            return n * (n + 1) / 2
        },
        triangleNoWithMoreThanNFactors: function(n) {
            let counter = 1;
            let triangleNumber = counter++;
            while(helper.math.getFactors(triangleNumber).length < n){
                triangleNumber += counter++;
            }
            return triangleNumber;
        },
        triangleFromString(inputString) {
            const rows = inputString.trim().split("\n");
            const triangle = rows.map(row => row.split(" ").map(Number));
            return triangle;
        },
        collatzSeq: function(n) {
            const arr = [];
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
        deficientAbundantPerfect(type, limit) { // Function to generate an array of numbers which are either deficient, abundant or perfect
            const types = ["deficient", "abundant", "perfect"];
            if(!types.includes(type)) {
                console.error(`Type must be one of the following: ${types.join(", ")}`);
                return;
            }
            const results = [];
            for (let i = 1; i <= limit; i++) {
                const sumOfDivs = helper.math.getProperDivisorsSum(i);
                if(type === "deficient" && sumOfDivs < i) results.push(i);
                if(type === "abundant" && sumOfDivs > i) results.push(i);
                if(type === "perfect" && sumOfDivs === i) results.push(i);
            };
            return results;
        },
    },
    date: {
        zellerCongruence(year, month, dayOfMonth) {
            if (month < 1 || month > 12 || dayOfMonth < 1 || dayOfMonth > 31) {
                throw new Error("Invalid date");
            }
            
            if (month < 3) {
                month += 12;
                year -= 1;
            }
        
            const zeroBasedCentury = Math.floor(year / 100);
            const yearOfCentury = year % 100;
        
            const dayOfWeek = (
                dayOfMonth + Math.floor(13 * (month + 1) / 5) +
                yearOfCentury +
                Math.floor(yearOfCentury / 4) +
                Math.floor(zeroBasedCentury / 4) +
                5 * zeroBasedCentury
            ) % 7;

            return dayOfWeek;
        }
    },
    fetch: {
        csv: async filePath => {
            const rows = await new Promise((resolve, reject) => {
                const rl = readline.createInterface({
                  input: fs.createReadStream(filePath),
                  output: process.stdout,
                  terminal: false
                });
            
                let rows = [];
                rl.on('line', function(line) {
                  rows.push(line.split(',').map(item => item.trim()));
                });
            
                rl.on('close', function() {
                  resolve(rows.flat());
                });
            
                rl.on('error', function(error) {
                  reject(error);
                });
              });
            
              return rows;
        },
    }
}


function output(o) {
    //document.getElementById(id).innerHTML = o;
    console.log(o);
}