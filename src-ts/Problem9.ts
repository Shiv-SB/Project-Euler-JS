import {helper} from "./HelperFunctions.ts";

let a, b, c;

// Example:
{let a = 3, b = 4, c = 5;
    //console.log(a**2 + b**2 === c**2);
}

// with some arithmetic on paper I got the solutions for a,b,c:
a - 1000 !== 0;
a = 200;
b = (1000 * a - 500_000)/(a - 1000);
c = (-1 * a**2 + 1000*a - 500_000)/(a - 1000);

console.log("Solution:", a * b * c);
