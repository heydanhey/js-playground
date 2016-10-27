function shuffle(arr){
    var i=arr.length-1;
    while (i>0){
        var j = Math.floor(Math.random() * (i+1));
        console.log(i);
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i--;
    }
    return arr;
}


var unshuffled_array=[1,2,3,4,5,6,7,8];

console.log(shuffle(unshuffled_array));
