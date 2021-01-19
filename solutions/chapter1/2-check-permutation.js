// given two strings, write a method to decide if one is a permutation of the other

function checkPerm(str1, str2) {
    let str1Arr = str1.split("").sort();
    let str2Arr = str2.split("").sort();

    if (str1Arr.length !== str2Arr.length) {
        return false;
    }

    for (let i = 0; i < str1Arr.length; i++) {
        if (str1Arr[i] !== str2Arr[i]) {
            return false;
        }
    }

    return true;

}

let ans = checkPerm("who twhe","the wwho");

console.log(ans);

