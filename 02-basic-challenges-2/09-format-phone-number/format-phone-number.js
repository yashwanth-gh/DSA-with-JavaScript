function formatPhoneNumber(arr) {
    const first =arr.slice(0,3)
    const second =arr.slice(3,6)
    const third =arr.slice(6,arr.length)
    return `(${first.join('')}) ${second.join('')}-${third.join('')}`
    // console.log()
}

module.exports = formatPhoneNumber;
