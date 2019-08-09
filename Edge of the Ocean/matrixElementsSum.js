/**
 * After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
 * Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
 * 
 * Example:
 *      - For matrix = [[0, 1, 1, 2], 
                        [0, 5, 0, 0], 
                        [2, 0, 3, 3]]
          the output should be
            matrixElementsSum(matrix) = 9
 * 
 *  */ 

function matrixElementsSum(matrix) {
    let res = 0;
    let prohibitIndexes = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let y = 0; y < matrix[i].length; y++) {
            if (matrix[i][y] === 0) {
                addProhibitIndex(prohibitIndexes, y);
            } else if (!isProhibit(prohibitIndexes, y)) {
                res += matrix[i][y];
            }
        }
    }
    return res;
}

function addProhibitIndex(prohibitIndexes, index) {
    if (prohibitIndexes.indexOf(index) < 0) {
        prohibitIndexes.push(index);
    }
}

function isProhibit(prohibitIndexes, index) {
    return prohibitIndexes.indexOf(index) >= 0;
}