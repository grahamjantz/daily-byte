// This question is asked by Microsoft. Given an array of strings, return the longest common prefix that is shared amongst all strings.
// Note: you may assume all strings only contain lowercase alphabetical characters.

// Ex: Given the following arrays...

// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"
// ["cold", "hold", "gold"], return "old"


const commonPrefix = (inputArr) => {

    //iterate over array, take first letter in first string, check if other strings contain that letter, move to next letter do same
    
    inputArr.forEach((str, index) => {
        let finalStr = ''
        str.split('').forEach((letter, index) => {
            console.log(letter)
            
        })
    })

}

console.log(commonPrefix(["colorado", "color", "cold"]))
console.log(commonPrefix(["a", "b", "c"]))
console.log(commonPrefix(["spot", "spotty", "spotted"]))
console.log(commonPrefix(["cold", "hold", "gold"]))