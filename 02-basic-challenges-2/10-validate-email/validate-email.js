function validateEmail(str) {
    return (/^[a-zA-Z0-9._%+-]+@+[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(str));
}

module.exports = validateEmail;
