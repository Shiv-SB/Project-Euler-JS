import {helper} from "./HelperFunctions.js";
import converter from "number-to-words";

const limit = 1000;
let wordCount = 0;

for (let i = 1; i < limit + 1; i++) {
    let word = converter.toWords(i);
    word = word.replace("-", "")
            .replace(/ /g,'')
    let length = word.length;
    wordCount += length;
    console.log(
        `${i.toString().padStart(4, "0")}` +
        ` | ${wordCount} | ${word}`
    );
}

console.log(`Total: ${wordCount}`);


 