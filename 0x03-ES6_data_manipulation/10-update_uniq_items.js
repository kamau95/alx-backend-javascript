/*
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
*/
const updateUniqueItems = (map) => {
  if (map instanceof Map) {
    for (const [key, value] of map.entries()) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
    return map;
  }
  throw new Error('Cannot process');
};

export default updateUniqueItems;
