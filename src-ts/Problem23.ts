import { helper } from "./HelperFunctions.ts";

// Non-Abundant Sums

const limit = 28123;

function nonAbundantSums(limit: number): number {
    const abundantNumbers = helper.generate.deficientAbundantPerfect("abundant", limit);
    const canBeWrittenAsAbundantSum = new Array(limit + 1).fill(false);

    for (let i = 0; i < abundantNumbers.length; i++) {
        for (let j = i; j < abundantNumbers.length; j++) {
            const sum = abundantNumbers[i] + abundantNumbers[j];
            if (sum <= limit) {
                canBeWrittenAsAbundantSum[sum] = true;
            }
        }
    }

    let totalSum = 0;
    for (let i = 1; i <= limit; i++) {
        if (!canBeWrittenAsAbundantSum[i]) {
            totalSum += i;
        }
    }

    return totalSum;
}

console.log("Solution:", nonAbundantSums(limit));
