const isValidIPv4 = (str) => {
    const formatted = str.split('.');
    if(formatted.length !== 4)return false;
    return formatted.every(num=>{
        const numInt = parseInt(num);
        return (num<=255 && num >=0 && num === numInt.toString())
    })
};

module.exports = isValidIPv4;
