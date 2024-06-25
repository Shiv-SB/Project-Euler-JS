import { helper } from "./HelperFunctions.ts";

// Lexicographic Permutations

const list = helper.array.new(9, true);

console.log("Solution:", helper.array.permutator(list)[1_000_000 - 1]);