/**
 * Given the string, check if it is a palindrome.
 * Example:
 *      - For inputString = "aabaa", the output should be
 *          checkPalindrome(inputString) = true;
 *      - For inputString = "abac", the output should be
 *          checkPalindrome(inputString) = false;
 *      - For inputString = "a", the output should be
 *          checkPalindrome(inputString) = true
 * 
 *  */ 

function checkPalindrome(inputString) {
    let res = true;
    let i = 0;
    let y = inputString.length - 1;
    while(i < y && res) {
        res = inputString[i] === inputString[y];
        i += 1;
        y -= 1;
    }
    return res;
}
