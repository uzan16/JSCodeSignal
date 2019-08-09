/**
 * Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
 * A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.
 * Example:
 *      - For n = 2, the output should be
 *          shapeArea(n) = 5
 *      - For n = 3, the output should be
 *          shapeArea(n) = 13
 * 
 *  */ 

function shapeArea(n) {
    let max = (n * 2) - 1;
    let plus = 1;
    let counter = 0;
    for (let i = 1; i <= max; i++) {
        counter += plus;
        console.log(plus);
        if (i < n) {
            plus += 2;
        } else {
            plus -= 2;
        }
    }
    
    return counter;
}
