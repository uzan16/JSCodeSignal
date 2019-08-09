/**
 * Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
 * 
 * Example:
 *      - For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
 *        sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]
 * 
 *  */ 

function sortByHeight(a) {
    let treeIdx = a.map((x, idx) => x === -1 ? idx : -1).filter(x => x >= 0);
    if (treeIdx.length === a.length) {
        return a;
    }
    a = a.filter(x => x >= 0).sort((a, b) => a - b);
    treeIdx.forEach(x => {
        a.splice(x, 0, -1);
    });
    return a;
}

