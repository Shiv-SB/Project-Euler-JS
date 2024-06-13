import {helper} from "./HelperFunctions.js";

const arrayLength = 1000;
const allN = new Array(arrayLength);
let filteredArr = [];

for (let i = 1; i < allN.length; i++) {
    allN[i] = i;
}

for (let i = 1; i < allN.length; i++) {
    if(helper.math.isDivisibleBy(allN[i], 3) || helper.math.isDivisibleBy(allN[i], 5)) {
        filteredArr.push(allN[i]);
    }
}
console.log(filteredArr);
filteredArr = filteredArr.reduce((a, b)=> a + b, 0);


console.log("Solution: ", filteredArr);
