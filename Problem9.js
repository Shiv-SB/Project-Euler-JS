import {helper} from "./HelperFunctions.js";

let a, b, c;

// Example:
{let a = 3, b = 4, c = 5;
//console.log(a**2 + b**2 === c**2);
}

// with some arithmetic on paper I got the solutions for a,b,c:
a - 1000 !== 0; // lets make this the iterable
a = 200;
b = (1000 * a - 500_000)/(a - 1000);
c = (-1 * a**2 + 1000*a - 500_000)/(a - 1000);

const upperBound = 1000;
let validTriplets = helper.generate.pythTriplet(upperBound);


// test:
for (let i = 0; i < validTriplets.length; i++) {
    let triplet = validTriplets[i];
    let sum = helper.array.sum(triplet);
    //console.log(sum);    
}

console.log(helper.array.multiply(validTriplets[0])) // got 0th index by inspection

