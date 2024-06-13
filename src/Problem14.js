import {helper} from "./HelperFunctions.js";

const limit = 1_000_000;
let maxLength = 0;
let maxLengthStartNo = 1;

console.log("Calculating longest Collatz sequence...");

for (let i = 1; i < limit; i++) {
    //console.log(`Calculating sequence for starting number ${i}...`);
    let n = i;
    let length = 1; // Start with length 1 since the number itself is included in the sequence
    let currentProgress = "";
    while (n !== 1) {
        //console.log(`Current number: ${n}`);
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = 3 * n + 1;
        }
        length++;
    }
    currentProgress = ((i / limit) * 100).toPrecision(3).toString().padStart(5, "0");
    console.log(`Curr No: ${i.toString().padStart(9, "0")} | Progress:  ${currentProgress} % | Length: ${length.toString().padStart(9, 0)} | Max Length: ${maxLength}`)
    //console.log(`Sequence calculation complete. Length for starting number ${i}: ${length}`);
    if (length > maxLength) {
        maxLength = length;
        maxLengthStartNo = i;
        console.log(`New longest sequence found: Starting number ${i}, Length ${maxLength}`);
    }
}

console.log("Calculation completed.");
console.log(`Largest Length: ${maxLength} for ${maxLengthStartNo}`);

