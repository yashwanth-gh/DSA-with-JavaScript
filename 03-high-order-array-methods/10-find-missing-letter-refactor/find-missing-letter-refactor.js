function findMissingLetter(arr) {
    // const arr = a.join('').toLowerCase().split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const start = alphabet.split('').indexOf(arr[0]);
    const end = alphabet.split('').indexOf(arr[arr.length-1]);
    const ObtainedTotal = arr.reduce((sum,char)=>sum+char.charCodeAt(0),0);
    const actualTotal = alphabet.substring(start,end+1).split('').reduce((sum,char)=>sum+char.charCodeAt(0),0);
    return (String.fromCharCode(actualTotal-ObtainedTotal))
}

module.exports = findMissingLetter;
