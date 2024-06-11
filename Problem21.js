import { helper } from "./HelperFunctions.js";

function d(n) {
    return helper.array.sum(helper.math.getProperDivisors(n));
}

function generateDMap(start, end) {
    const dMap = new Map();
    for (let i = start; i <= end; i++) {
        dMap.set(i, d(i));
    }
    return dMap;
}

const map = generateDMap(1, 10_000);

const resultSet = new Set();

for (let [key, value] of map) {
    if (key !== value && value <= 10_000 && map.get(value) === key) {
        resultSet.add(key);
        resultSet.add(value);
    }
}

const amicableNumbers = Array.from(resultSet);

console.log(amicableNumbers);
console.log(helper.array.sum(amicableNumbers)); 
