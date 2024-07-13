import {helper} from "./HelperFunctions.ts";

let products: number[] = [];
for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
        products.push(i * j);
    }
}

const palindromes = products.filter((x)=>{
    return helper.math.isPalindrome(x);
}).sort((a, b) => a - b);

console.log("Solution:", palindromes.pop());