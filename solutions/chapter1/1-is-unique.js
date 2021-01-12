// is Unique: implement an algorithm to determine if a string has all unique characters
// what if you cannot use  additional data structures


function isUnique(string) {
    let newString = '';

    for (let i = 0; i < string.length; i ++ ) {
        // have we seen this letter before?
        if(newString.includes(string[i])) {
            return false;
        }
        else {
            newString = newString + string[i];
        }
    }
    return true;
}

let myString = 'ggggggggggg';
let res = isUnique(myString);

console.log(res);

//  runtime analysis O(n)
