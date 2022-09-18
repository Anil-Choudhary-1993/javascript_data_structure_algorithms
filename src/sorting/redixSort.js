function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function mostDigits(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) > max) {
            max = Math.abs(nums[i]);
        }
    }
    return max.toString().length;
}

function sort(arr) {
    const maxNum = mostDigits(arr);
    let digit;
    let results;
    for (let i = 0; i < maxNum; i++) {
        results = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            digit = getDigit(arr[j], i);
            if (arr[j] > 0) {
                results[digit].push(arr[j]);
            } else {
                results[0].unshift(arr[j]);
            }
        }
        arr = [].concat(...results);
    }
    return arr;
}

console.log(sort([41, 12, 67, 3, 58, -11, -15, -12]));
