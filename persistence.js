//Write a function, persistence,
//that takes in a positive parameter 'num'
//and returns its multiplicative persistence,
//which is the number of times you must multiply
//the digits in num until you reach a single digit.

function persistence(num){
    var array = num.toString().split('');
    var count = 0;
    
    function multiply(a){
        var sum=1;
        for (var i=0;i<a.length;i++){
            sum = sum * a[i];
        }
        return sum.toString().split('');
    }
    
    while (array.length > 1) {
        array = multiply(array);
        count = count + 1;
    }
    
    return count
}

console.log(persistence(4));