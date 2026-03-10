function findSmallest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) return false;
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log(smallest)
  return smallest;
}
findSmallest([])

module.exports = { findSmallest };