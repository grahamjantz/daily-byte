// This question is asked by Apple. Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
// Note: neither binary string will contain leading 0s unless the string itself is 0

// Ex: Given the following binary strings...

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"


const addBinary = (x, y) => {

    x = parseInt(x, 2)
    y = parseInt(y, 2)

    let z = x+y
    return z.toString(2)
}

console.log(addBinary('100', '1'))
console.log(addBinary('11', '1'))
console.log(addBinary('1', '0'))