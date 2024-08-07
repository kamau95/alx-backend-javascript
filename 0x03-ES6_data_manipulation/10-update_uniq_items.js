export default function updateUniqueItems(myMap) {
  for (const [key, value] of myMap) {
    if (value === 1) {
      myMap.set(key, 100);
      if (myMap.get(key) !== 100) {
        throw new Error('Cannot process');
      }
    }
  }
}
