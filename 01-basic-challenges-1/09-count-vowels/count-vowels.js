function countVowels(str) {
    const arr = str.toLowerCase().split('');
    let count=0;
    arr.forEach(e => {
        if(isVowel(e))count++;
    });
    return count;
}
function isVowel(char){
    const vowelCode = [97,101,105,111,117];
    let code = char.charCodeAt(0);
        if(code === 97 || code === 101 || code === 105 || code === 111 || code === 117){
            return 1;
        }
    return 0;

}

module.exports = countVowels;
