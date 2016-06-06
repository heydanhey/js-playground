function bubbleSort(unsortedArray){
    var swap = true;
    var temp = 0;
    var n = unsortedArray.length-1;
    while (swap) {
        swap = false;
        for (var i=0; i<n; i++){
            if (unsortedArray[i]>unsortedArray[i+1]) {
                temp = unsortedArray[i];
                unsortedArray[i] = unsortedArray[i+1];
                unsortedArray[i+1] = temp;
                swap = true;
            };
        };
        n = n - 1;
    };
    return unsortedArray;
};

var array = [5,4,6,2,8,9,1,0]

console.log(bubbleSort(array));