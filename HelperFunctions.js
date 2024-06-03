// import {helper} from "./HelperFunctions.js";
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
        new: function(length) {
            return [...Array(length + 1).keys()].splice(1);
        },
        sum: function(arr) {
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
        squareOfSums: function(n) {
            if (n <=0) return;
            let numbers = helper.array.new(n);
            return helper.array.sum(numbers) ** 2
        },
        isPrime: function(n) {
            if(n === 2) return true;
            if (n < 2) return false;
        
            for(i = 2; i < n; i++) {
                if(n % i == 0) return false;
                return true;
            }
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
            for (i = 2; i <= n; ++i) {
                if(!sieve[i]) {
                    primes.push(i);
                    for (j = i << 1; j <= n; j += i) {
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
    }
}


function output(o, id="output") {
    document.getElementById(id).innerHTML = o;
}