import {helper} from "./HelperFunctions.js";

// cant brute force this one lol
const lowerBound = 1_000_000;
const limit = lowerBound * 100;
const target = 500;

/*for (let i = lowerBound; i < limit; i++) {
    const triNumber = helper.generate.triangleNo(i);
    let factors = helper.math.getFactors(triNumber);
    let factorsLength = factors.length;
    console.log(`Triangle Number ${triNumber} | Factor Length: ${factorsLength} | Factors: ${factors}`);
    if(factorsLength >= target) {
        console.log("Target reached reached!!!");
        console.log(`TriNo: ${triNumber} | Factor Length: ${factorsLength} | Factors: ${factors}`);   
        break;
    }
}*/

console.log(helper.generate.triangleNoWithMoreThanNFactors(500));