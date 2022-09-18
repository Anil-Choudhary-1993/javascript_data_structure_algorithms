function pivot(arr, left = 0, right = arr.length - 1) {
  let pivot = arr[left];
  let swapIndex = left;

  for (let i = left + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }
  [arr[left], arr[swapIndex]] = [arr[swapIndex], arr[left]];
  return swapIndex;
}

function sort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    sort(arr, left, pivotIdx - 1);
    sort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(sort([1, 34, 12, 67, 34, 2, 3], 0, 6));
// console.log(sort([0, 1, 2, 3, 4, 5, 6], 0, 6))
// console.log(sort([6, 5, 4, 3, 2, 1, 0], 0, 6))
