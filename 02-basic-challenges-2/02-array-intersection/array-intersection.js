// function arrayIntersection(arr1,arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         const element = arr1[i];
//         if(arr2.includes(element) && !result.includes(element))result.push(element);
//     }
//     return result;
// }

function arrayIntersection(a1,a2){
    const s1 = new Set(a1);
    const s2 = new Set(a2);
    let intersection =[];
    for(num of s2){
        if(s1.has(num))intersection.push(num);
    }
    return intersection;
}
module.exports = arrayIntersection;
