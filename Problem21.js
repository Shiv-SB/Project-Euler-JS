import {helper} from "./HelperFunctions.js";

// Amicable Numbers


function getProperDivisors(n) {
    let result = [];
    for (let i = n - 1; i > 0; i--) {
        if(helper.math.isDivisibleBy(n, i)) {
            //console.log(i);
            result.push(i);
        }
    }
    return result;
}

function d(n) {
    console.log(getProperDivisors(n));
    return helper.array.sum(getProperDivisors(n));

}

