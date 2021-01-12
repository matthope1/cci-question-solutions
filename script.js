// use this file to run solutions

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


