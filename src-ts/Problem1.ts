import {helper} from "./HelperFunctions";

let limit = 1000;
let solution = 0;

for (let i = 1; i <= limit; i++) {
    if(helper.math.isDivisibleBy(i, 3) || helper.math.isDivisibleBy(i, 5)) {
        solution += i;
    }
}

console.log("Solution: ", solution);
