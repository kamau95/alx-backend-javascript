export default function hasValuesFromArray(set1, arr1) {
  for (const item of arr1) {
    if (!set1.has(item)) {
      return false;
    }
  }
  return true;
}
