function flattenArray(arr) {
    let result = [];
    arr.forEach(elem=>{
        if(Array.isArray(elem)){
            result = result.concat(flattenArray(elem));
        }else{
            result.push(elem);
        }
    })
    return result;
}

module.exports = flattenArray;
