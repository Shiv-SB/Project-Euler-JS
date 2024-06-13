// Name Scores
const t0 = performance.now();
import { helper } from "./HelperFunctions.js";

const filePath = "./textfiles/0022_names.csv";

const namesSorted = (await helper.fetch.csv(filePath)).sort();
console.log(`Array fetched, length: ${namesSorted.length}`);

//console.log(namesSorted);

function sumOfChars(word) {
    return helper.array.sum(helper.string.alphabetPos(word));
}


const scoreList = [];
for (let i = 0; i < namesSorted.length; i++) {
    const name = namesSorted[i];
    const position = i + 1;
    scoreList.push(position * sumOfChars(name));
}

console.log(`Solution: ${helper.array.sum(scoreList)}. Computed in: ${performance.now() - t0} ms`)
 
