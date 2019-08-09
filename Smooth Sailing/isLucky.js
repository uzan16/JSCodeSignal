/**
 * icket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
 * Example:
 *      - For n = 1230, the output should be
 *          isLucky(n) = true
 *      - For n = 239017, the output should be
 *          isLucky(n) = false
 * 
 *  */ 

function isLucky(n) {
    let str = '' + n;
    let med = Math.floor(str.length / 2);
    let num1 = str.substring(0, med).split("").map(x => +x).reduce((a, b) => a + b, 0);
    let num2 = str.substring(med).split("").map(x => +x).reduce((a, b) => a + b, 0);
    return num1 === num2;
}