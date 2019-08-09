/**
 * Given a string, find out if its characters can be rearranged to form a palindrome.
 * 
 * Example:
 *      - For inputString = "aabb", the output should be
 *          palindromeRearranging(inputString) = true
 *          We can rearrange "aabb" to make "abba", which is a palindrome
 * 
 *  */ 

function palindromeRearranging(inputString) {
    let isEven = inputString.length % 2 === 0;
    
    let letters = inputString.split("").filter((x, i, arr) => arr.indexOf(x) === i);
    
    let oddCount = 0;
    for (let i = 0; i < letters.length; i++) {
        if ((inputString.split(letters[i]).length - 1) % 2 === 1) {
            oddCount += 1;
        }
    }
    
    return isEven ? oddCount <= 0 : oddCount === 1;
}
