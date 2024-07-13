import { helper } from "./HelperFunctions.ts";

function solution(x: number): number {
    const factorial = helper.math.factorialBigInt(x);
    return helper.math.sumOfDigits(factorial);
}

console.log("Solution:", solution(100));