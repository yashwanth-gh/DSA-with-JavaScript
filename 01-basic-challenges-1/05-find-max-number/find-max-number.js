function findMaxNumber(arr) {
    let max=null;
    arr.forEach(element => {
        if(element>= max)max=element;
    });
    return max;
}

// function findMaxNumber(arr) {
// return Math.max(...arr)
// }
module.exports = findMaxNumber;
