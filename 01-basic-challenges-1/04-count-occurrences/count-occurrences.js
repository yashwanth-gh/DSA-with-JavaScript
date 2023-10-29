// function countOccurrences(str,char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if(element === char)count++;
//     }
//     return count;
// }

function countOccurrences(str,char){
let arr = str.split(char);
return (arr.length -1);
}
module.exports = countOccurrences;
