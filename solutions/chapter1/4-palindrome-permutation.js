// Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same backwards as it is forwards
// A permutation is a rearrangement of letters. The palindrome does not need to
// be limited to just dictionary words. You can ignore casing and non leter characters

function palindromePermutation(string) {
    string = string.toUpperCase();
    let letterMap = {};
    let pivotFound = false;
    let isPermutation = true;

    for (i = 0; i < string.length; i ++ ){
        if(string[i] != " ") {
            if (!letterMap[string[i]]) {
                letterMap[string[i]] = 1;
            }
            else {
                letterMap[string[i]]++;
            }
        }
    }

    for (letter in letterMap) {
        let lcount = letterMap[letter]
        if (lcount % 2 != 0 && !pivotFound) {
            pivotFound = true;
        }
        else if (lcount % 2 != 0 && pivotFound){
            isPermutation = false;
        }
        else {
            continue;
        }
    }

    return isPermutation;
}



const ans = palindromePermutation("Tact coa");

console.log(ans);