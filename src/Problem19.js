import {helper} from "./HelperFunctions.js";

// Counting Sundays

/*
1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

function countSundaysOnFirstMonth(startYear, endYear) {
    let sundayCount = 0;

    for (let year = startYear; year <= endYear; year++) {
        for (let month = 1; month <= 12; month ++) {
            if(helper.date.zellerCongruence(year, month, 1) === 1) {
                sundayCount++
            }
        }
    }
    return sundayCount;
}

const startYear = 1901;
const endYear = 2000;
console.log(countSundaysOnFirstMonth(startYear, endYear));