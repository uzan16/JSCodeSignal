/**
 * Write a function that reverses characters in (possibly nested) parentheses in the input string.
 * Input strings will always be well-formed with matching ()s.
 * Example:
 *      - For inputString = "(bar)", the output should be
 *          reverseInParentheses(inputString) = "rab"
 *      - For inputString = "foo(bar)baz", the output should be
 *          reverseInParentheses(inputString) = "foorabbaz"
 *      - For inputString = "foo(bar(baz))blim", the output should be
 *          reverseInParentheses(inputString) = "foobazrabblim"
 *          Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim"
 * 
 *  */ 

const myRegexp = /\((.*?)\)/;
function reverseInParentheses(inputString) {
    return doProcess(inputString);
}

function doProcess(str) {
    let match = myRegexp.exec(str);
    let toReverse = "";
    if (match === null) {
        return str;
    }
    while (match != null) {
        toReverse = match[0].substring(1);
        match = myRegexp.exec(toReverse);
    }
    toReverse = toReverse.replace("(", "").replace(")", "");
    str = str.replace(`(${toReverse})`, reverse(toReverse));
    return doProcess(str);
}

function reverse(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}