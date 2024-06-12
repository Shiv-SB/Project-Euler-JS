
import {helper} from "./HelperFunctions.js";

const upperLimit = 4_000_000;
let fibSeq = helper.generate.fibSeq(60)

fibSeq = helper.array.trim(fibSeq, null, upperLimit)

fibSeq = fibSeq.filter((val)=> {
    return helper.math.isEven(val);
});

console.log(helper.array.sum(fibSeq));
