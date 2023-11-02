function sumOfEvenSquares(arr) {
    const evenArr = arr.filter(num=>num%2===0);
    // console.log(evenArr)
    const evenSquaresArr = evenArr.map(num=>num*num);
    const solution = evenSquaresArr.reduce((sum,num)=>sum+num,0);
    return solution;
}

module.exports = sumOfEvenSquares;
