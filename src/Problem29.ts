import { helper } from "./HelperFunctions.ts";

// Distinct Powers

const upperLimitStart = 5;
const upperLimitEnd = 100;

const a: number[] = helper.generate.seq(2, upperLimitStart);
const b: number[] = helper.generate.seq(2, upperLimitStart);

function compute(arr1: number[], arr2: number[]): bigint[] {
    let results: Set<bigint> = new Set();
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            const base = arr1[i];
            const power = arr2[j];
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
    console.log(`${i} ${compute(arr1, arr2).length}`);   
}