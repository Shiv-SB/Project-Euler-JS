function output(o, id="output") {
    document.getElementById(id).innerHTML = o;
}

function isDivisibleBy(input, divisor) {
    if(divisor === 0) return;
    if (input % divisor === 0) return true;
    return false;
}

function generateFibSeq(length, startingNumber = 1) {
    let fib = [startingNumber, startingNumber + 1];
    for (let i = 2; i < length; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

function trimArray(arr, lowerBound, upperBound) {
    
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
}

function isEven(input) {
    return !Boolean(input % 2);
}

function sumArray(arr) {
    return arr.reduce((a, b)=> a + b, 0);
}

function getFactors(input) {
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
}

function getMaxVal(list) {
    return Math.max.apply(this, [...list]);
}

function getMinVal(list) {
    return Math.min.apply(this, [...list]);
}

function arrayEquality(arr1, arr2) {
    return (
        arr1.length === arr2.length &&  
        arr1.every((val, i) => val === arr2[i])
    );
}

function isPalindrome(input) {
    input = input.toString();
    inputReversed = input.split("").reverse().join("");
    return input === inputReversed;
}

function newArray(length) {
    return [...Array(length + 1).keys()].splice(1);
    
}