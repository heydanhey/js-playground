// Write a simple function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome.

function palindrome(str){
    for (var i=0; i<Math.round(str.length/2); i++){
        if (str[i]!=str[str.length-(i+1)]){
            console.log(str[i]);
            console.log(str[str.length-(i+1)]);
            return false;
        }
    }
    return true;
}

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(palindrome("goog"));