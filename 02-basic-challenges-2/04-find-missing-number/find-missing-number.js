function findMissingNumber(arr = undefined) {
const len = arr.length;
if(arr === undefined)return undefined;
if(len === 0)return 1;
const totalSum = ((len+1)*(len+2))/2;
// let runningSum=0;
// arr.forEach(e => {
//     runningSum+=e;
// });
const runningSum = arr.reduce((sum,num)=>sum+num,0)
return (totalSum-runningSum);
}

module.exports = findMissingNumber;
