// Extra Pointer Pattern
function countUniqueValues(arr) {
  let left = 0;
  let right = 1;
  while (left < right && right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
    right++;
  }
  return arr.slice(0, left + 1);
}

console.log(countUniqueValues([1, 1, 1, 2]));
console.log(countUniqueValues([1, 1, 1, 2, 4, 5, 6]));
console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 4]));
