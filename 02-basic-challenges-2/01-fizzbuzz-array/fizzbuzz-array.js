function fizzBuzzArray(num) {
    let arr =[];
    for (let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i  % 5 === 0){
            arr.push("FizzBuzz");
            continue;
        }
        if(i % 3 === 0){
            arr.push("Fizz");        
            continue;
        }
        if(i % 5 === 0){
            arr.push("Buzz");        
            continue;
        }
        else{
            arr.push(i)
        }
    }
    return arr;
}

module.exports = fizzBuzzArray;
