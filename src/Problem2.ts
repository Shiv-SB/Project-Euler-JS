
import {helper} from "./HelperFunctions.ts";

const upperLimit = 4_000_000;
const fibSeq: bigint[] = helper.math.fibonacci.generateToMax(upperLimit);
console.log(fibSeq);
function solution(seq: bigint[]) { 
    let result: bigint = BigInt(0);
    for (let i = 2; i < seq.length; i+=3) {
        result += seq[i];
    }
    return result;
}

console.log(solution(fibSeq).toString());
