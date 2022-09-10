function sort(arr) {
    let noSwap;
    for (let i = 0; i < arr.length; i++) {
        noSwap= true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap= false;
            }
        }
        if(noSwap) return arr;
    }
    return arr;
}

console.log(sort([1, 34, 12, 67, 34, 2, 3]))
console.log(sort([0, 1, 2, 3, 4, 5, 6]))
console.log(sort([6, 5, 4, 3, 2, 1, 0]))