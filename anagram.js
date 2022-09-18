function anagram(str1, str2) {
  if (str1.length != str2.length) return false;

  const strArr1 = str1.split("");
  const strArr2 = str1.split("");

  const output = {};

  for (let val of strArr1) output[val] = ++output[val] || 1;

  for (let val of strArr2) output[val] && --output[val];

  for (let val of strArr2) {
    if (output[val] == null || output[val] > 0) return false;
  }
  return true;
}

console.log(anagram("xxz", "zxx"));
console.log(anagram("abcde", "abc"));
console.log(anagram("vds", "sdv"));
