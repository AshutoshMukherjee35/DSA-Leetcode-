function findLargest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) {
      return false;
    } else
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest)
  return largest;
}
findLargest([0,2,3, 'a'])
module.exports = { findLargest };
