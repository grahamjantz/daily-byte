
// Today's Byte

// This question is asked by Facebook. Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true

//convert input to lowercase
//remove punctuation and white space
//reverse copy of string
//if input == reverse string return True else return False


const palindrome = (input) => {
    const str = input.toLowerCase().replace(/[^\w]|_/g, '')
    let str2 = str.split('').reverse().join("").toLowerCase()

    if (str === str2) {
        return true
    } else {
        return false
    }
}


console.log(palindrome("level"), "true")
console.log(palindrome("algorithm"), "false")
console.log(palindrome("A man, a plan, a canal: Panama."), "true")