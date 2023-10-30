
// Today's Byte

// This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

//create array: [0,0] where arr[0] equals y axis, arr[1] equals x axis
// add 1 for up and right movements, minus 1 for down and left moves

const vacuum = (input) => {
    let arr = [0,0]
    const inputArr = Array.from(input)

    inputArr.forEach(value => {
        switch(value) {
            case ("L"): 
                arr[1] -= 1
                break;
            case ("R"):
                arr[1] += 1
                break;
            case ("U"):
                arr[0] += 1
                break;
            case ("D"):
                arr[0] -= 1
                break;
            default: 
                break;
        }
    })
    if (arr[0] === 0 && arr[1] === 0) {
        return true
    } else {
        return false
    }
}

console.log(vacuum("LR"), 'true')
console.log(vacuum("URURD"), 'false')
console.log(vacuum("RUULLDRD"), 'true')