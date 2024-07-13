// Coin Sums

import { helper, Coins } from "./HelperFunctions.ts";

const coins: Coins[] = [
    1, 2, 5, 10, 20, 50, 100, 200
];

const goal: number = 200;

console.log("Solution:", helper.math.coins.totalCombos(coins, goal));