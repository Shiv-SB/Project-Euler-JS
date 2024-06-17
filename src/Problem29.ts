import { helper } from "./HelperFunctions.ts";

// Distinct Powers

const upperLimitStart = 5;
const upperLimitEnd = 15;

const a: number[] = helper.generate.seq(2, upperLimitStart);
const b: number[] = helper.generate.seq(2, upperLimitStart);

function compute(arr1: number[], arr2: number[]): bigint[] {
    let results: Set<bigint> = new Set();
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            const base = a[i];
            const power = b[j];
            const x = BigInt(Math.pow(base, power));
            //console.log(`${base} ^ ${power} = ${x}`); 
            results.add(x);  
        }
    }
    return Array.from(results);
}

// analysis:
for (let i = upperLimitStart; i <= upperLimitEnd; i++) {
    const arr1 = helper.generate.seq(2, i);
    const arr2 = helper.generate.seq(2, i);
    console.log(`Current Upper Limit: ${i}, Length: ${compute(arr1, arr2).length}`);   
}