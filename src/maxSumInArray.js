// SLIDING WINDOW PATTERN

function maxSumInArray(arr, limit) {
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < limit; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for (let i = limit; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - limit];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}

console.log(maxSumInArray([1, 2, 2, 3, 2, 1, 1, 23, 1, 34, 3, 1, 2], 3));
