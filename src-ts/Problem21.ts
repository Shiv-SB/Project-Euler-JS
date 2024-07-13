import { helper } from "./HelperFunctions.ts";

function d(n: number): number {
    return helper.array.sum(helper.math.getProperDivisors(n));
}

function generateDMap(start: number, end: number): Map<number, number> {
    const dMap: Map<number, number> = new Map();
    for (let i = start; i <= end; i++) {
        dMap.set(i, d(i));
    }
    return dMap;
}

const map = generateDMap(1, 10_000);

const resultSet: Set<number> = new Set();

for (let [key, value] of map) {
    if (key !== value && value <= 10_000 && map.get(value) === key) {
        resultSet.add(key);
        resultSet.add(value);
    }
}

const amicableNumbers: number[] = Array.from(resultSet);

console.log(amicableNumbers);
console.log("Solution:", helper.array.sum(amicableNumbers)); 
