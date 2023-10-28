function calculator(a,b,c) {
    switch (c) {
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
    
        default:
            console.log("invalid operator")
            break;
    }
}

module.exports = calculator;
