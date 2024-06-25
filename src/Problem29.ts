import { helper } from "./HelperFunctions.ts";

// Distinct Powers

const upperLimitStart = 2;
const upperLimitEnd = 100;

const list = helper.generate.distinctPowerCombinations(upperLimitStart, upperLimitEnd, upperLimitStart, upperLimitEnd);
console.log("Solution:", list.length);