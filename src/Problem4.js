import {helper} from "./HelperFunctions.js";

let potentials = []
let upperBound = 998001; //(999 * 999)
let lowerBound = 10000 //(100 * 100)
// check each number up to the above to see if palindrome?

for (let i = lowerBound; i < upperBound; i++) {
    potentials.push(i);
} 

//array of 3 digit products
let products = [];
for (let i = 100; i < 999; i++) {
    for (let j = 100; j < 999; j++) {
        products.push(i * j);
    }
}
products = trimArray(products, lowerBound, upperBound);

let palindromes = potentials.filter((number, i)=>{
    return helper.math.isPalindrome(number) && products.includes(number);
}) // Gets largest palindrome but doesnt check if there a product of 3 digits.
// Can either compare agaisnt an array of 3 digit products or get factors and compare.

console.log(palindromes.pop());