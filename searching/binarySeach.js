function search(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (arr[middle] === value) return { index: middle, found: true };
        else if (arr[middle] > value) right = middle - 1;
        else if (arr[middle] < value) left = middle + 1
    }
    return { index: -1, found: false };
}
console.log(search([1, 2, 3, 4, 5, 6], 1));
console.log(search([1, 2, 3, 4, 5, 6], 2));
console.log(search([1, 2, 3, 4, 5, 6], 3));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 12));
