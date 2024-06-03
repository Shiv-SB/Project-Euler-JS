import { helper } from "./HelperFunctions.js";

function sumDigitsOfBigInt(bigNumber) {
    try {
        return bigNumber.toString().split("").reduce((a, b) => Number(a) + Number(b), 0);
    } catch (error) {
        console.error("Error summing digits:", error);
        return null;
    }
}

function calcResult(x) {
    const factorialBigInt = helper.math.factorialBigInt(x);
    if (factorialBigInt !== null) {
        console.log(`Factorial of ${x}: ${factorialBigInt}`);

        const sumOfDigits = sumDigitsOfBigInt(factorialBigInt);
        if (sumOfDigits !== null) {
            console.log(`Sum of digits: ${sumOfDigits}`);
            return sumOfDigits;
        }
    }
    return null;
}

calcResult(100);