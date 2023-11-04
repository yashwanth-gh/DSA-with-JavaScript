function validatePassword(str) {
    const arr = str.split('');
    const uppercaseCheck = arr.some(char=>/[A-Z]/.test(char));
    const lowercaseCheck = arr.some(char=>/[a-z]/.test(char));
    const digitCheck = arr.some(char=>/\d/.test(char));
    // console.log(uppercaseCheck,lowercaseCheck,digitCheck,str.length)
    if(uppercaseCheck && lowercaseCheck && digitCheck && str.length >=8)return true;
    return false;
}

module.exports = validatePassword;
