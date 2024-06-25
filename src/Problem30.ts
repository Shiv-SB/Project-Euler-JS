import { helper } from "./HelperFunctions.ts";

// Digit Fifth Powers

const power: number = 5;

function findPowerOfDigits(num: number, pow: number) {
    const numbers: number[] = num.toString().split("").map((x) => { return parseInt(x)});
    //console.log(numbers);
    const powers = numbers.map((x) => {
            return x ** pow;
    });
    return helper.array.sum(powers);
}

function isSymmetric(num: number, pow: number): boolean {
    return num === findPowerOfDigits(num, pow);
}

function solution(upperLimit: number, power: number) {
    let results: number[] = [];
    for (let i = 2; i <= upperLimit; i++) {
        if(isSymmetric(i, power)) {
            console.log(i);
            results.push(i);
        }
    }
    return results;
}

const list = solution(1_000_000, power);
console.log(list, "\nSolution:",  helper.array.sum(list));