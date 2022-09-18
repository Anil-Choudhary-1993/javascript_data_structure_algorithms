// FREQUENCY COUNTER PATTERN
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const output = {};
  for (let val of arr1) {
    output[val * val] = ++output[val * val] || 1;
  }
  for (let val of arr2) {
    output[val] && --output[val];
  }
  // return Object.values(output).every(val => val == 0);
  for (let val of arr2) {
    if (output[val] == null || output[val] > 0) return false;
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([3, 2, 4], [9, 16, 4]));
console.log(same([1, 2, 5], [4, 3, 9]));
