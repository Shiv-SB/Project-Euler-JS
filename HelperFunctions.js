let helper = {
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
            })
            return newArr;
        },
        new: function(length) {
            return [...Array(length + 1).keys()].splice(1);
        },
        sum: function(arr) {
            return arr.reduce((a, b)=> a + b, 0);
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
        }
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
        getFactors: function(input) {
            let output = [];
            let i = 2;
            while(i <= input) {
                if(input % i == 0) {
                    input = input / i;
                    output.push(i);
                } else {
                    i++;
                }
            }
            return output;
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
        }
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
        }
    },
}

function output(o, id="output") {
    document.getElementById(id).innerHTML = o;
}