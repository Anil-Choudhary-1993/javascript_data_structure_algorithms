// Extra Pointer Pattern
function sumZero(arr) {
  if (arr.length < 2) return undefined;
  let sum;
  for (let left = 0, right = arr.length - 1; left < right; ) {
    sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    }
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-3, -2, -1]));
console.log(sumZero([-3, -2, -1, 0, 4, 5, 6]));
console.log(sumZero([-4, -2, -1, 0, 4, 5, 6]));
