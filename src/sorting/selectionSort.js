function sort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log(sort([1, 34, 12, 67, 34, 2, 3]));
console.log(sort([0, 1, 2, 3, 4, 5, 6]));
console.log(sort([6, 5, 4, 3, 2, 1, 0]));
