function merge(arr1, arr2) {
  let i = 0,
    j = 0;
  let results = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) results.push(arr1[i++]);
  while (j < arr2.length) results.push(arr2[j++]);
  return results;
}

function sort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  let leftArray = sort(arr.slice(0, middle));
  let righrArray = sort(arr.slice(middle));
  return merge(leftArray, righrArray);
}

console.log(sort([1, 34, 12, 67, 34, 2, 3]));
console.log(sort([0, 1, 2, 3, 4, 5, 6]));
console.log(sort([6, 5, 4, 3, 2, 1, 0]));
