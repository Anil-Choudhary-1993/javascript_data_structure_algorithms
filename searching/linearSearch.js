function search(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return { index: i, found: true };
  }
  return { index: -1, found: false };
}

console.log(search([5, 2, 1, 3, 12, 43], 12));
console.log(search([5, 2, 1, 3, 12, 43], 122));
