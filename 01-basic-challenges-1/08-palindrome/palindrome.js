function isPalindrome(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversedStr = formattedStr.split('').reverse().join('');
    if(reversedStr === formattedStr)return true;
    return false;
}

module.exports = isPalindrome;
