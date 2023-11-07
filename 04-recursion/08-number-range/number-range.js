function numberRange(start,end) {
    if(start === end)return [start];
    const numArr = numberRange(start,end-1);
    numArr.push(end);
    return numArr;
}

module.exports = numberRange;
