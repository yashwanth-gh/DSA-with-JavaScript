function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    //  let newArr = arr.map((e)=>e.charAt(0).toUpperCase());
    let nArr = arr.map(e => {
        e = e[0].toUpperCase() + e.slice(1);
        return e 
    });
    return nArr.join(" ");
}
module.exports = titleCase;
