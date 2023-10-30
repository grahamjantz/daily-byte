
//  Today's Byte

//  This question is asked by Google. Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

//  Ex: Given the following strings...

//  "USA", return true
//  "Calvin", return true
//  "compUter", return false
//  "coding", return true

//check if all letters capital: input[0-end] between 65-90
//check if all letters lowercase: input[0-end] between 97-122
// if input[0] between 65-90 THEN check if input[1-end] is between 97-122
//check if input[0] is between 65-90 OR between 97-122


const check_cap =(input) => {
    let arr = []

    for (let i=0;i<input.length;i++) {
        if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }

    let newSet = new Set(arr)
    const setArr = [...newSet]
    
    if (setArr.length === 1) {
        return true
    } 

    if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {

        let arr2 = []

        for (let i=1;i<input.length;i++) {
            if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) < 122) {
                arr2.push(true)
            } else {
                arr2.push(false)
            }
        }

        let set2 = new Set(arr2)
        const setArr2 = [...set2]

        if (setArr2.length === 1) {
            return true
        } else {
            return false
        }
    }
    return false
}

// console.log(check_cap('Calvin'))

// console.log(check_cap('USA'), 'all caps')
// console.log(check_cap('coding'), 'all lower')
// console.log(check_cap('Calvin'), 'starts with caps, rest lower')
// console.log(check_cap('compUter'), 'failed everything')
// console.log(check_cap('COmpUteR'), 'failed everything')


const check_cap2 = (input) => {
    const arr = Array.from(input, (letter, index) => (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) ? true : false)

    const newArr = [...(new Set(arr))]
    
    if (newArr.length === 1) {
        //all letters either caps or lowercase
        return true
    } else {
        //not all letters are caps or lowercase
        if (arr[0] === true) {
            //first letter caps, check rest of letters
            const arr2 = arr.splice(1)
            const newArr2 = [...(new Set(arr2))]

            if (newArr2.length === 1) {
                //rest of letter lowercase
                return true
            } else {
                //rest of letters are combination of caps/lower
                return false
            }
        } else {
            //first letter lower case, rest are combination of caps/lower
            return false
        }
    }
}
console.log(check_cap2('USA'), 'all caps')
console.log(check_cap2('coding'), 'all lower')
console.log(check_cap2('Calvin'), 'starts with caps, rest lower')
console.log(check_cap2('cALVIN'), 'starts with lower, rest caps')
console.log(check_cap2('calVin'), 'fails all')
console.log(check_cap2('compUter'), 'failed everything')
console.log(check_cap2('COmpUteR'), 'failed everything')