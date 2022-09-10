function sort(arr) {
    let currentValue;
    let j;
    for(let i=1; i< arr.length; i++) {
        currentValue = arr[i];
        j= i-1;
        while (j >=0 && arr[j]> currentValue) {
           arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]= currentValue;
    }
    return arr;
}


console.log(sort([1, 34, 12, 67, 34, 2, 3]))
console.log(sort([0, 1, 2, 3, 4, 5, 6]))
console.log(sort([6, 5, 4, 3, 2, 1, 0]))